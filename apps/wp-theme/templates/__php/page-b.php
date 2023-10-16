<?php
/**
 * Template Name: B: with Sidebar
 * Template Post Type: page
 */

use LOOS\Lism\HTML;
use LOOS\Lism\Data;

get_header();
while ( have_posts() ) :
	the_post();
?>
<div <?php HTML::content_attrs(); ?>>
	<div <?php HTML::content_inner_attrs(); ?>>
		<main id="main_content" class="l-mainContent">
			<article <?php HTML::article_attrs(); ?>>
				<header class="entry-header is-layout-flow">
					<?php block_template_part( Data::get_the_header_name() ); ?>
				</header>
				<div class="entry-content is-layout-flow">
					<?php the_content(); ?>
					<?php HTML::render_wp_link_pages(); ?>
				</div>
			</article>
		</main>
		<?php get_sidebar(); ?>
	</div>
</div>
<?php
endwhile;
get_footer();
