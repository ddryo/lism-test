<?php
/**
 * Template Name: A: One column
 * Template Post Type: post
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
				<?php do_action( 'lism_start_article' ); ?>

				<header class="entry-header has-global-padding is-layout-constrained">
					<?php block_template_part( 'single-header' ); ?>
				</header>

				<div class="entry-content has-global-padding is-layout-constrained">
					<?php the_content(); ?>
					<?php HTML::render_wp_link_pages(); ?>
				</div>

				<?php block_template_part( 'single-footer' ); ?>
			</article>
		</main>
	</div>
</div>
<?php
endwhile;
get_footer();
