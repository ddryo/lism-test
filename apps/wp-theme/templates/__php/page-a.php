<?php
/**
 * Template Name: A: One column
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
				<header class="entry-header has-global-padding is-layout-constrained">
					<?php block_template_part( Data::get_the_header_name() ); ?>
				</header>
				<div class="entry-content has-global-padding is-layout-constrained">
					<?php the_content(); ?>
					<?php HTML::render_wp_link_pages(); ?>
				</div>
			</article>
		</main>
	</div>
</div>
<?php
endwhile;
get_footer();
