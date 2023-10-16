<?php
namespace LOOS\Lism;

use LOOS\Lism;
// use LOOS\Lism\Check;

/**
 * add_theme_supports
 */
add_action( 'after_setup_theme', __NAMESPACE__ . '\setup_theme' );
function setup_theme() {

	// phpcs:ignore WPThemeReview.CoreFunctionality.PrefixAllGlobals.NonPrefixedVariableFound
	// $GLOBALS['content_width'] = apply_filters( 'lism_content_width', \lism::get_setting( 'container_width' ) );

	add_theme_support( 'title-tag' );
	add_theme_support( 'block-template-parts' );
	// add_theme_support( 'post-thumbnails' );

	// .is-dark-theme に対するCSSも入ってきてしまうので、いるものだけ手動で抽出し、調整して使う
	// add_theme_support( 'wp-block-styles' );

	// add_theme_support( 'editor-styles' );
	// add_editor_style( 'build/css/editor.css' );

	// 固定ページでも抜粋文を使用可能にする
	add_post_type_support( 'page', 'excerpt' );

	// html5サポート　'comment-list', 'comment-form' などはブロックで実装するため不要
	add_theme_support( 'html5', [ 'style', 'script' ] );

	// feed
	add_theme_support( 'automatic-feed-links' );

	// Gutenberg用
	// add_theme_support( 'align-wide' ); // 画像の全幅表示などを可能に
	// add_theme_support( 'custom-line-height' );
	// add_theme_support( 'custom-units', 'px', 'rem', 'em', '%', 'vw', 'vh' );
	// add_theme_support( 'custom-spacing' );
	// remove_theme_support( 'core-block-patterns' );

	// フォントサイズ
	// add_theme_support(
	// 	'editor-font-sizes',
	// 	[]
	// );

	// カラーパレット memo : 'slug'はクラス名で使用されるので変更NGなことに注意。
	// add_theme_support( 'editor-color-palette', [
	// ] );

}
