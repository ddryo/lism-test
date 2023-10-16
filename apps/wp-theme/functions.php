<?php
/**
 * @link https://lism-theme.com/
 *
 * @package lism
 * @author  ddryo
 * @license GPL-2.0+
 */


/**
 * 動作環境チェック
 */
// require_once __DIR__ . '/lib/check_environment.php';

/**
 * 各種パスを定数化
 */
define( 'LISM_THEME_DIR', get_template_directory() );
define( 'LISM_THEME_URI', get_template_directory_uri() );

// define( 'S_DIRE', get_stylesheet_directory() );
// define( 'S_DIRE_URI', get_stylesheet_directory_uri() );

// 子テーマから上書き読み込み可能にしたいファイルは get_theme_file_path() で読み込む
// get_theme_file_path()


/**
 * CLASSのオートロード
 */
require_once __DIR__ . '/lib/autoloader.php';


/**
 * php関数の polyfill
 */
require_once __DIR__ . '/lib/polyfill/php_functions.php';


/**
 * Start
 */
new LOOS\Lism\App();


require_once __DIR__ . '/lib/theme_support.php';
require_once __DIR__ . '/lib/enqueue.php';
require_once __DIR__ . '/lib/gutenberg.php';

// ハイブリッドテーマの時のセットアップ
// if ( ! wp_is_block_theme() ) {
//  include_once __DIR__ . '/lib/hybrid_setup.php';
// }
