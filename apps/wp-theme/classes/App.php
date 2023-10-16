<?php
namespace LOOS\Lism;

/**
 * メインクラス
 */
class App {

	/**
	 * プレースホルダー画像
	 */
	public static $placeholder = 'data:image/gif;base64,R0lGODlhBgACAPAAAP///wAAACH5BAEAAAAALAAAAAAGAAIAAAIDhI9WADs=';

	/**
	 * JSの読み込みを制御する変数
	 */
	// public static $use = [];

	/**
	 * テキスト系HTMLを許可する時にwp_ksesに渡す配列
	 */
	public static $allowed_img_html = [
		'img' => [
			'alt'     => true,
			'src'     => true,
			'secset'  => true,
			'class'   => true,
			'seizes'  => true,
			'width'   => true,
			'height'  => true,
			'loading' => true,
		],
	];


	/**
	 * テキスト系HTMLを許可する時にwp_ksesに渡す配列
	 */
	public static $allowed_text_html = [
		'a'      => [
			'href'   => true,
			'rel'    => true,
			'target' => true,
			'class'  => true,
		],
		'b'      => [ 'class' => true ],
		'br'     => [ 'class' => true ],
		'i'      => [ 'class' => true ],
		'em'     => [ 'class' => true ],
		'code'   => [ 'class' => true ],
		'span'   => [ 'class' => true ],
		'strong' => [ 'class' => true ],
		'ul'     => [ 'class' => true ],
		'ol'     => [ 'class' => true ],
		'li'     => [ 'class' => true ],
		'p'      => [ 'class' => true ],
		'div'    => [ 'class' => true ],
		'img'    => [
			'alt'     => true,
			'src'     => true,
			'secset'  => true,
			'class'   => true,
			'seizes'  => true,
			'width'   => true,
			'height'  => true,
			'loading' => true,
		],
	];

	/**
	 * コンストラクタ
	 */
	public function __construct() {

		new \LOOS\Lism\Data();

		// セットアップ
		// add_action( 'after_setup_theme', [ __CLASS__, 'setup_theme' ], 1 );

		// 設定データのセット $GLOBALS['content_width'] のために after_setup_theme で取得。
		// add_action( 'after_setup_theme', array( '\Arkhe_Theme\Data', 'set_settings_data' ), 9 );

		// カスタマイザーでは、データが即時反映されるタイミング（ wp_loaded ）で再セット
		// if ( is_customize_preview() ) {
		//  add_action( 'wp_loaded', array( '\Arkhe_Theme\Data', 'set_settings_data' ) );
		// }

		// フックで書き換えれる情報
		// add_action( 'init', array( '\Arkhe_Theme\Data', 'setup__init20' ), 20 );
	}



	/**
	 * wp_enqueue_style
	 */
	public static function enqueue_style( $handle, $path, $deps = [] ) {
		wp_enqueue_style( $handle, LISM_THEME_URI . $path, $deps, Data::$file_ver );
	}
}
