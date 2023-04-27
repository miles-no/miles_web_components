<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Miles_2020
 */

?>

<miles-blog-card id="post-<?php the_ID(); ?>" url="<?php get_the_permalink(); ?>" author="<?php the_author(); ?>">
	<?php if ( has_post_thumbnail() ) { ?>
		<figure slot="image">
			<?php the_post_thumbnail('feature-image'); ?>
		</figure>
	<?php } ?>

	<?php  the_title( '<h2 slot="title">', '</h2>' ); ?>
	<div slot="meta">
		<?php miles_2020_posted_on();?>
	</div><!-- .entry-meta -->
</miles-blog-card><!-- #post-<?php the_ID(); ?> -->
<!-- <?php post_class(); ?>  -->
