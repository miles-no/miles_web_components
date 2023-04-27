<?php
/**
 * Template Name: Folk Kompetanse Template 
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Miles_2020
 */

/**
 * FUNCTIONS
 */

$MAX_RESULT_SIZE = 100; 

function get_offices() {
	return  json_decode(wpgetapi_endpoint( 'cvpartner_miles_wordpress', 'offices', array('debug' => false) ), true);
}

/**
 * Get CVs by custom tag id
 */
function search_cv_partner($fields) {
	$CVs = wpgetapi_endpoint( 'cvpartner_miles_wordpress', 'cv_search', 
	array(
			'debug' => false,
			'body_variables' => $fields,
			'header_variables' => array( 
	    		'Authorization' => 'Token token=1871377d41d8dd1715b27e0652e64e7f',
				'Content-Type' => 'application/json; charset=utf-8'
	    	), 
		),
	);

	$cvObject = json_decode($CVs, true);

	if (isset($cvObject['cvs'])) {
		return cv_to_miles_persons_array($cvObject['cvs']);
	} else {
		return array();
	}

}

function map_offices($n) {
    if ($n['code'] == 'no') : 
		return $n['offices'];
	endif;
}

function map_offices_ids($n) {
	if (isset($n['id'])){
		return $n['id'];
	} 
}

function resolvedQueryParameters() {
	$query = $_SERVER['QUERY_STRING'];
	parse_str($query, $parsedQuery);
	return $parsedQuery;
}


function get_office_names($norwegian_offices) {
	$office_names = array();
	foreach ($norwegian_offices as $offices) {
		foreach ($offices as $office) {
			array_push($office_names, [
				'name' => $office['name'],
				'id' => $office['_id']
			]);
		}
	}
	return $office_names;
}

function cv_to_miles_persons_array($cvs) {
	$miles_person = [];
	foreach ($cvs as $tagCV) {

		$person = array(
			'id' => $tagCV['cv']['id'], 
			'url' => $tagCV['cv']['image']['thumb']['url'],
			'name' => $tagCV['cv']['name'],
		);

		array_push($miles_person, $person);
	}
	return $miles_person;
}

 /************************ END FUNCTIONS ********************************* */

get_header();

global $wp;
$current_url = home_url( $wp->request );

$area_of_expertise = Array('Utvikling', 'Arkituktur', 'UX/Design', 'Prosjektledelse', 'Smidig', 'Data Science');

$custom_tags = array(
	'Arkitektur' => '6425649e5d697e0f43838a16',
	'Backend' => '64256492480fb50f7b17c2a7',
	'Data Science' => '642565189b513710125e3deb',
	'Design' => '642564b29b513710125e3dd4',
	'Frontend' => '642564849b513710265e3c2c',
	'Prosjektledelse' => '642564c1d658eb0f9fd23aa0',
	'Rådgivning' => '642565049b51370fe35e3c82',
	'Smidig' => '642564e35604610f9f3b9ed9',
	'Testledelse' => '642564d15604610f9d3b9dbc',
	'Tjenerteam' => '642565235d697e0f34838b2e',
	'Utvikling' => '6425646e5604610f973b9d9d'
);

$content = get_the_content();
$title = get_the_title();

$norwegian_offices =  array_map('map_offices', get_offices());
$all_offices = get_office_names($norwegian_offices);

$parsedQuery = resolvedQueryParameters();

if (isset($parsedQuery['office'])) {
	$parsedQuery['office'] = array($parsedQuery['office']);
} else {
	$parsedQuery['office'] = array_map('map_offices_ids', $all_offices);
} 	

if (isset($parsedQuery['tag'])) {
	$fields = array(
		'office_ids' => $parsedQuery['office'], 
		'offset' => 0, 
		'size' => $MAX_RESULT_SIZE, 
		'must' => array( array( 
			'technology_skill' => array( 
				'tag' => ucfirst($parsedQuery['tag'])
				)
			) 
		)
	);
	
} else if (isset($parsedQuery['area'])) {
	$fields = array(
		'office_ids' => $parsedQuery['office'],
		'offset' => 0, 
		'size' => $MAX_RESULT_SIZE, 
		'must' => array( array( 
			'exact' => array( 
				'field' => 'custom_tag_id', 
				'value' => $parsedQuery['area']
				)
			) 
		)
	);

} else {
	$fields = array(
		'office_ids' => $parsedQuery['office'], 
		'offset' => 0, 
		'size' => $MAX_RESULT_SIZE, 
	);
}

$miles_persons = search_cv_partner($fields);


?>
	<main id="primary" class="site-main our_people">
		<h2><?php echo $title; ?></h2>
		<?php echo $content; ?>
		<div class="miles_offices_bar" aria-description="Våre kontor i Norge." aria-label="Kontor">
			<span>Kontor</span>
			<ul>
				<?php foreach ($all_offices as $office): ?>
					<li <?php echo $parsedQuery['office'][0] == $office['id'] && count($parsedQuery['office']) == 1 ? "class='selected'" : '' ?>>
						<miles-button-anchor href="<?php echo $current_url . "?office=" . $office['id']; ?>"><?php echo ucfirst($office['name']); ?></miles-button-anchor>
					</li>
				<?php endforeach; ?>
			</ul>
		</div>
		<div class="miles_areas_bar" aria-description="Hva vi er gode på." aria-label="Fagområder">
			<span>Fagområder</span>
			<ul>
				<?php foreach ($custom_tags as $key => $value): ?>
					<li <?php echo $parsedQuery['area'] ==  $value ? "class='selected'" : '' ?>>
						<miles-button-anchor href="<?php echo $current_url . "?area=" . $value; ?>"><?php echo ucfirst($key); ?></miles-button-anchor>
					</li>
				<?php endforeach; ?>
			</ul>
		</div>
		<section class="cv-filter">
		<?php
			foreach ($miles_persons as $cv):
				if( isset($cv['url']) ):
				?>
				 <miles-profile-card name="<?php echo $cv['name'];  ?>" description="Miles" image="<?php echo $cv['url'];  ?>"></miles-profile-card>
				<!--
					<ul>
						 <li>
							<figure>
								<img src="<?php echo $cv['url'];  ?>" alt="<?php echo $cv['name'];  ?>">
							</figure>
						</li>
						<?php if( $cv['name'] ): ?>	
							 <li><?php echo $cv['name'];  ?></li>
						<?php endif; ?>
						<?php if( $cv['email'] ): ?>	
						  <li><?php echo $cv['email'];  ?></li> 
						<?php endif; ?>
						<?php if( $cv['title'] ): ?>	
							<li><?php echo $cv['title'];  ?></li>
						<?php endif; ?>
					</ul>
						-->
				<?php 
				endif;
			endforeach; 
		?>
		</section>

	</main>
	<!-- #main -->
	<section class="prefooter">
			<miles-info>Vi finner den perfekte konsulenten for deg og ditt prosjekt!</miles-info>
			<div class="prefooter__fade"></div>
		</section>
<?php



get_footer();

?>

