<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 */

get_header();
?>

<div id="primary" class="content-area">
	<?php
	while ( have_posts() ) : the_post();

		get_template_part( 'template-parts/content', get_post_type() );

    custom_edit_link();

    the_post_navigation( array(
      'prev_text'          => 'prev chapter: %title',
      'next_text'          => 'next chapter: %title',
      'screen_reader_text' => 'Continue Reading'
    ) );

		// If comments are open and we have at least one comment, load up the comment template.
		if ( comments_open() && get_comments_number() ) :
			comments_template();
		endif;

	endwhile; // End of the loop.
	?>
</div><!-- #primary -->

<?php
get_sidebar();
get_footer();
