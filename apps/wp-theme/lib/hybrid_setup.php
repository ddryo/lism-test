<?php
namespace LOOS\Lism\Hybrid;

use LOOS\Lism;
// use LOOS\Lism\Check;

/**
 * add_theme_supports
 */
add_action( 'after_setup_theme', __NAMESPACE__ . '\setup_theme' );
function setup_theme() {

	add_theme_support( 'menus' );
	add_theme_support( 'widgets' );

	// html5サポート　'comment-list', 'comment-form' などはブロックで実装するため不要
	add_theme_support( 'html5', [ 'comment-list', 'comment-form', 'style', 'script' ] );
}


/**
 * デフォルトカラーパレットを使用可能にする。
 */
// function enable_default_color_palette( $editor_settings, $editor_context ) {
// 	if ( isset( $editor_settings['__experimentalFeatures']['color'] ) ) {
// 		$editor_settings['__experimentalFeatures']['color']['defaultPalette'] = true;
// 	}
// 	return $editor_settings;
// }
// add_filter( 'block_editor_settings_all', __NAMESPACE__ . '\enable_default_color_palette', 20, 2 );
