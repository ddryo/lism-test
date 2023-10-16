<?php
/**
 * Template Name: C: with Sidebar, and title is Top Area
 * Template Post Type: post
 */

use LOOS\Lism\HTML;
use LOOS\Lism\Data;

get_header();
while ( have_posts() ) :
	the_post();
?>
<main <?php HTML::content_attrs(); ?>>
	<div class="entry-header is-layout-flow">
		<?php block_template_part( 'single-header-big' ); ?>
	</div>
	<div <?php HTML::content_inner_attrs(); ?>>
		<div id="main_content" class="l-mainContent" style="--wp--style--global--content-size: 100%">
			<article <?php HTML::article_attrs(); ?>>
				<div class="entry-content is-layout-flow">
					<?php the_content(); ?>
					<?php HTML::render_wp_link_pages(); ?>
				</div>
				<?php block_template_part( 'single-footer' ); ?>
			</article>
		</div>
		<?php get_sidebar(); ?>
	</div>
</main>
<?php
endwhile;
get_footer();
