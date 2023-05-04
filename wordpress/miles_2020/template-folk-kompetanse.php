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
include_once "miles_limes.php";

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

$norwegian_offices = miles_limes\get_offices();

$parsedQuery = resolvedQueryParameters();
$selected_office = $parsedQuery['office'] ?? null;
$selected_role = $parsedQuery['area'] ?? null;

?>
	<main id="primary" class="site-main our_people">
		<h1><?php echo $title; ?></h1>
		<?php echo $content; ?>
		<div class="miles_offices_bar" aria-description="Våre kontor i Norge." aria-label="Kontor">
			<span>Kontor</span>
			<ul>
				<?php foreach ($norwegian_offices as $office): ?>
					<li <?php echo $selected_office == $office['officeId'] && count($parsedQuery['office']) == 1 ? "class='selected'" : '' ?>>
						<miles-button-anchor color="#3F1221" href="<?php echo ($selected_office == $office['officeId']) ? $current_url . "?office=" . $office['officeId']: $current_url ; ?>"><?php echo ucfirst($office['name']); ?></miles-button-anchor>
					</li>
				<?php endforeach; ?>
			</ul>
		</div>
		<div class="miles_areas_bar" aria-description="Hva vi er gode på." aria-label="Fagområder">
			<span>Fagområder</span>
			<ul>
				<?php foreach ($custom_tags as $key => $value): ?>
					<li <?php echo ($parsedQuery['area'] ?? null) == $value ? "class='selected'" : '' ?>>
						<miles-button-anchor color="#3F1221" href="<?php echo $current_url . "?area=" . $value; ?>"><?php echo ucfirst($key); ?></miles-button-anchor>
					</li>
				<?php endforeach; ?>
			</ul>
		</div>
		<section class="cv-filter">
			<?php echo do_shortcode('[show-consultant-group office="' . $selected_office . '" area="' . $selected_role . '" wc_name="miles-profile-card"]'); ?>
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