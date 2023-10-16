<?php
/**
 * Template Name: B: with Sidebar
 * Template Post Type: post
 */

use LOOS\Lism\HTML;
use LOOS\Lism\Data;

// サイドバーがある時、コンテンツ幅はメインコンテンツいっぱいまで広げるか？それてもコンテンツサイズ維持するか？
// →  'entry-content に is-layout-constrained つけるか、is-layout-flowにするか?

get_header();
while ( have_posts() ) :
	the_post();
?>
<div <?php HTML::content_attrs(); ?>>
	<div <?php HTML::content_inner_attrs(); ?>>
		<main id="main_content" class="l-mainContent" style="--wp--style--global--content-size: 100%">
			<article <?php HTML::article_attrs(); ?>>
				<header class="entry-header is-layout-flow">
					<?php block_template_part( 'single-header' ); ?>
				</header>

				<div class="entry-content is-layout-flow">
					<?php the_content(); ?>
					<?php HTML::render_wp_link_pages(); ?>
				</div>

				<?php block_template_part( 'single-footer' ); ?>
			</article>
		</main>
		<?php get_sidebar(); ?>
	</div>
</div>
<?php
endwhile;
get_footer();
