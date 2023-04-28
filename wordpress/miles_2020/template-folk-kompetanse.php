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

use function miles_limes\get_consultants;
use function miles_limes\get_offices;

$MAX_RESULT_SIZE = 100;

function resolvedQueryParameters() {
	$query = $_SERVER['QUERY_STRING'];
	parse_str($query, $parsedQuery);
	return $parsedQuery;
}

/************************ END FUNCTIONS ********************************* */

get_header();

global $wp;
$current_url = home_url( $wp->request );

$area_of_expertise = Array('Utvikling', 'Arkituktur', 'UX/Design', 'Prosjektledelse', 'Smidig', 'Data Science');

$custom_tags = array(
	'Arkitektur' => 'ARCHITECTURE',
	'Backend' => 'BACKEND',
	'Data Science' => 'DATA_SCIENCE',
	'Design' => 'DESIGN',
	'Frontend' => 'FRONTEND',
	'Prosjektledelse' => 'PROJECT_MANAGEMENT',
	'Rådgivning' => 'ADVISORY',
	'Smidig' => 'AGILE',
	'Testledelse' => 'TEST_MANAGEMENT',
	'Tjenerteam' => 'SERVANT_TEAM',
	'Utvikling' => 'DEVELOPMENT'
);

$content = get_the_content();
$title = get_the_title();

$norwegian_offices = get_offices();

$parsedQuery = resolvedQueryParameters();
$selected_office = $parsedQuery['office'];
$selected_role = $parsedQuery['area'];

$miles_persons = get_consultants($selected_office, $selected_role, null);

?>
	<main id="primary" class="site-main our_people">
		<h2><?php echo $title; ?></h2>
		<?php echo $content; ?>
		<div class="miles_offices_bar" aria-description="Våre kontor i Norge." aria-label="Kontor">
			<span>Kontor</span>
			<ul>
				<?php foreach ($norwegian_offices as $office): ?>
					<li <?php echo $parsedQuery['office'][0] == $office['officeId'] && count($parsedQuery['office']) == 1 ? "class='selected'" : '' ?>>
						<miles-button-anchor href="<?php echo $current_url . "?office=" . $office['officeId']; ?>"><?php echo ucfirst($office['name']); ?></miles-button-anchor>
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
				if( isset($cv['imageUrlThumbnail']) ):
					?>
					<miles-profile-card name="<?php echo $cv['name'];  ?>" description="<?php echo $cv['office'] . "\n" . $cv['title']; ?>" image="<?php echo $cv['imageUrlThumbnail'];  ?>" title="<?php echo $cv['title'];  ?>"></miles-profile-card>
					<!--
					<ul>
						 <li>
							<figure>
								<img src="<?php echo $cv['imageUrlThumbnail'];  ?>" alt="<?php echo $cv['name'];  ?>">
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