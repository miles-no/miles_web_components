<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Miles_2020
 */

get_header();
?>

	<main id="primary" class="site-main">
		<?php
		if ( have_posts() ) :

			if ( is_home() && ! is_front_page() ) :
				?>
				<header id="main_content_header">
				    <!--screen-reader-text -->
					<h1 class="page-title"><?php single_post_title(); ?></h1>
					<p class="miles-blog-description">En tekst om hva bloggen inneholder og hvorfor vi har den ...........</p>
				</header>
				<section>
				<!-- <iframe style="border-radius:12px" src="https://open.spotify.com/embed/episode/6FfermvFrx6o2ZbrZr7eUZ?utm_source=generator" width="100%" height="152" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> --> 
				<!-- <iframe loading="lazy" src="https://embed.acast.com/63d28f41cd0f720011930608?feed=true" frameborder="0" width="100%" height="280px" nuan_newframe="true"></iframe> -->
					<miles-podcast-teaser></miles-podcast-teaser>
				</section>
				
			
				<?php
			endif;
			?> <section class="blog-grid"> <?php
			/* Start the Loop */
			while ( have_posts() ) :
				the_post();

				/*
				 * Include the Post-Type-specific template for the content.
				 * If you want to override this in a child theme, then include a file
				 * called content-___.php (where ___ is the Post Type name) and that will be used instead.
				 */
				get_template_part( 'template-parts/content-blog', get_post_type() );

			endwhile;

			

		else :
			get_template_part( 'template-parts/content-blog', 'none' );

		endif;
		?>
		</section>
	</main><!-- #main -->
	
	

<?php
the_posts_navigation();

get_footer();
