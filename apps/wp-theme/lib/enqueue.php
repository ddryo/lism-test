<?php
namespace LOOS\Lism;

use LOOS\Lism\App;
use LOOS\Lism\Data;
// use LOOS\Lism\Check;

/**
 * フロントで読み込むファイル
 */
add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\enqueue_front_scripts', 10 );
function enqueue_front_scripts() {
	// テスト時にビルドするの面倒なCSSを書き殴る用
	App::enqueue_style( 'lism-style', '/style.css' );

	// front.css
	App::enqueue_style( 'lism-front-style', '/dist/css/front.css' );
	// wp_add_inline_style( 'lism-front-style', 'body.single{--wp--style--global--content-size:1200px}' );
}


/**
 * エディターで読み込むCSSファイル
 */
add_action( 'enqueue_block_assets', __NAMESPACE__ . '\enqueue_block_assets' );
function enqueue_block_assets() {
	// editor.css
	if ( is_admin() ) {
		App::enqueue_style( 'lism-editor', '/dist/css/editor.css' );
	}
}

/**
 * エディターで読み込むJSファイル
 */
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\enqueue_block_editor_assets' );
function enqueue_block_editor_assets() {
	App::enqueue_scripts( 'lism-editor', '/dist/gutenberg/index.js' );
	App::enqueue_scripts( 'lism-icon-ls', '/dist/icons/index.js', [ 'wp-element' ] );
	App::enqueue_scripts( 'lism-icon-ph', '/dist/icons/ph/index.js', [ 'wp-element' ] );
	App::enqueue_scripts( 'lism-icon-fi', '/dist/icons/fi/index.js', [ 'wp-element' ] );
	App::enqueue_scripts( 'lism-icon-io', '/dist/icons/io/index.js', [ 'wp-element' ] );
	App::enqueue_scripts( 'lism-icon-fa', '/dist/icons/fa/index.js', [ 'wp-element' ] );
}
