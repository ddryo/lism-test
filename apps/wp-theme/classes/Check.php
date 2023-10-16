<?php
namespace LOOS\Lism;

/**
 * メインクラス
 */
class Check {

	/**
	 * タームアーカイブページかどうか
	 */
	public static function is_term() {
		return is_category() || is_tag() || is_tax();
	}

	public static function show_sidebar() {

		$flag = false;

		// テンプレートに従う
		$template_slug = Data::get_the_template_slug();
		if ( $template_slug ) {
			return ! str_contains( $template_slug, '-a' );
		}

		// それ以外
		if ( is_search() ) {

			$flag = false;

		} elseif ( is_attachment() ) {

			$flag = false;

		} elseif ( is_front_page() ) {

			$flag = false; //\Arkhe::get_setting( 'show_sidebar_top' );

		} elseif ( is_home() ) {

			$flag = true; //\Arkhe::get_setting( 'show_sidebar_page' );

		} elseif ( is_archive() ) {

			$flag = false; //\Arkhe::get_setting( 'show_sidebar_archive' );

		} else {

			$flag = false;

		}

		return apply_filters( 'lism_show_sidebar', $flag );
	}

	public static function is_article_header_top() {
		return str_contains( Data::get_the_template_slug(), '-c' );
	}

	public static function is_overwrite_content_size() {
		return apply_filters(
			'lism_is_overwrite_content_size',
			is_single() && 'single-a' === Data::get_the_template_slug()
		);
	}
}
