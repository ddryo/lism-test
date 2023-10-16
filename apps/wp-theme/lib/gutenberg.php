<?php
namespace Loos\Lism;

/**
 * ブロックの読み込み
 */
add_action( 'init', __NAMESPACE__ . '\register_blocks' );
function register_blocks() {
	// $deps = is_admin() ? 'lism-editor-style' : 'lism-style';
	foreach ( Data::BLOCKS as $block_name => $block_data ) {
		register_block_type( LISM_THEME_DIR . "/dist/gutenberg/blocks/{$block_name}" );

		// $block_data で 'style' があれば wp_register_style ...
		// ( memo: $depsを指定して共通CSSより後ろで読み込ませたいのでphp側で処理している )
		if ( in_array( 'style', $block_data, true ) ) {
		wp_register_style(
			"lism-blocks-{$block_name}-style",
			LISM_THEME_DIR . "/dist/gutenberg/blocks/{$block_name}/index.css",
			[ $deps ],
			Data::$file_ver
		);
		}
	}
}


/**
 * ブロックカテゴリー追加
 */
add_filter( 'block_categories_all', __NAMESPACE__ . '\add_block_categories', 5 );
function add_block_categories( $categories ) {
	$my_category = [
		'slug'  => 'lism-blocks',
		'title' => __( 'Lism Blocks', 'lism-blocks' ),
		'icon'  => null,
	];

	// ウィジェットの前にカテゴリーを追加する
	// foreach ( $categories as $index => $data ) {
	//  $slug = $data['slug'] ?? '';
	//  if ( 'widgets' === $slug ) {
	//      array_splice( $categories, $index, 0, [ $my_category ] );
	//      break;
	//  }
	// }

	array_unshift( $categories, $my_category );
	return $categories;
}
