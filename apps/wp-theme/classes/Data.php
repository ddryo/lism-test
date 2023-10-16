<?php
namespace LOOS\Lism;

/**
 * メインクラス
 */
class Data {

	/**
	 * DB名
	 */
	const DB_NAMES = [
		'customizer' => 'lism_cusomizer',
		// 'licence_key' => 'arkhe_licence_key',
	];

	/**
	 * ブロック一覧
	 */
	const BLOCKS = [
		'box' => [],
		// 'hoge' => [ 'style' ],
	];

	/**
	 * データ通信先
	 */
	// const CDN_URL = 'https://loos-cdn.com/arkhe';


	/**
	 * テーマバージョン
	 */
	public static $theme_ver = '';
	public static $file_ver  = '';


	/**
	 * カスタマイザーの設定データ
	 */
	protected static $settings         = '';
	protected static $default_settings = '';


	/**
	 * プラグインのデータ
	 */
	protected static $plugin_data = [];


	/**
	 * 現在表示されてるテンプレート名を格納
	 */
	protected static $template_name = '';


	/**
	 * コンストラクタ
	 */
	public function __construct() {
		// テーマバージョンを取得
		self::set_theme_version();

		// ライセンス情報をセット
		// self::set_licence_data();

		// 設定データのデフォルト値をセット
		add_action( 'after_setup_theme', [ __CLASS__, 'set_default_settings' ], 5 );

		// 設定データのセット.
		//   $GLOBALS['content_width'] のために after_setup_theme で取得。
		//   その他の after_setup_theme 処理の前にデータセットしたいので 優先度は 5 にしている
		add_action( 'after_setup_theme', [ __CLASS__, 'set_settings_data' ], 5 );

		// カスタマイザーでは、データが即時反映されるタイミング（ wp_loaded ）で再びセットする
		if ( is_customize_preview() ) {
			add_action( 'wp_loaded', [ __CLASS__, 'set_settings_data' ] );
		}
	}


	/**
	 * テーマバージョンをセット
	 */
	private static function set_theme_version() {
		$theme_data      = wp_get_theme( 'lism' );
		self::$theme_ver = $theme_data->get( 'Version' );

		// ファイルにクエリとして付与するバージョン番号
		self::$file_ver = ( defined( 'WP_DEBUG' ) && WP_DEBUG ) ? wp_date( 'mdGis' ) : self::$theme_ver;
	}


	/**
	 * 設定のデフォルト値をセット
	 */
	public static function set_default_settings() {
		self::$default_settings = [
			'default_single_template' => 'single-b', // 2column
			'default_page_template'   => 'page-a', // 1column

			// // Colors
			// 'color_main'                => '#111',
			// 'color_text'                => '#333',
			// 'color_link'                => '#0d77d9',
			// 'color_bg'                  => '#fff',
			// 'color_gray'                => '#f7f7f7',

			// // Content width
			// 'container_width'           => 1200,
			// 'slim_width'                => 960,

		];
	}


	/**
	 * カスタマイザーのデータを変数にセット
	 */
	public static function set_settings_data() {
		$db_data        = get_option( self::DB_NAMES['customizer'] ) ?: [];
		self::$settings = array_merge( self::$default_settings, $db_data );
	}


	/**
	 * 使用中のページテンプレート名を取得
	 */
	public static function get_the_template_slug() {

		if ( self::$template_name ) return self::$template_name;

		// 個別にページテンプレートが指定されているかどうか
		$page_template = get_page_template_slug() ?: '';
		if ( $page_template ) {
			$page_template = str_replace( '.php', '', basename( $page_template ) );
		} elseif ( is_page() && ! is_front_page() ) {
			$page_template = self::get_setting( 'default_page_template' ); // デフォルト設定から取得
		} elseif ( is_single() ) {
			$page_template = self::get_setting( 'default_single_template' ); // デフォルト設定から取得
		}

		// クラス変数にセットして返す
		self::$template_name = $page_template;
		return $page_template;
	}

	/**
	 * 記事ヘッダーテンプレート名を取得
	 */
	public static function get_the_header_name() {
		if ( is_single() ) {
			if ( str_contains( self::get_the_template_slug(), '-c' ) ) {

				$header_part = 'single-header-big';
			} else {
				$header_part = 'single-header';
			}
		} elseif ( str_contains( self::get_the_template_slug(), '-c' ) ) {
				$header_part = 'page-header-big';
			} else {
			$header_part = 'page-header';
		}
		return $header_part;
	}


	/**
	 * 設定値を取得
	 */
	public static function get_setting( $key = '' ) {
		if ( $key ) {
			if ( ! isset( self::$settings[ $key ] ) ) return '';
			return self::$settings[ $key ] ?: '';
		}
		return self::$settings;
	}


	/**
	 * 設定のデフォルト値を取得
	 */
	public static function get_default_setting( $key = '' ) {
		if ( $key ) {
			if ( ! isset( self::$default_settings[ $key ] ) ) return '';
			return self::$default_settings[ $key ] ?: '';
		}
		return self::$default_settings;
	}
}
