<?php
namespace LOOS\Lism;

/**
 * メインクラス
 */
class HTML {

	/**
	 * html用の属性値用の配列→文字列に変換
	 */
	public static function convert_attrs_array_to_str( $attrs ) {
		$str = '';
		foreach ( $attrs as $name => $value ) {
			if ( false === $value ) continue;
			$str .= esc_attr( $name ) . '="' . esc_attr( $value ) . '" ';
		}

		return trim( $str );
	}


	/**
	 * #content の属性値出力
	 */
	public static function content_attrs() {

		$attrs = [
			'id'    => 'content',
			'class' => 'l-content',
		];

		// Check::show_sidebar()
		// if ( Check::show_sidebar() && ! Check::is_article_header_top() ) {
		// 	$attrs['class'] = ' has-global-padding is-layout-constrained';
		// }

		if ( is_front_page() || Check::is_article_header_top() ) {
			$attrs['class'] .= ' ls-stack';
			// $attrs['style']  = '--ls--gap: var(--ls--space--60)'; // ここをフックで上書きすれば余白量調整可能
		}

		$attrs = apply_filters( 'lism_content_attrs', $attrs );

		// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		echo self::convert_attrs_array_to_str( $attrs );
	}


	/**
	 * l-content__inner の属性値出力
	 */
	public static function content_inner_attrs() {

		$attrs = [
			// 'id'    => 'content',
			'class' => 'l-content__inner',
		];

		if ( Check::show_sidebar() ) {
			$attrs['class']       .= ' l--contentSize has-sidebar has-global-padding';
			$attrs['data-sidebar'] = 'right';
		}

		$attrs = apply_filters( 'lism_content_inner_attrs', $attrs );

		// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		echo self::convert_attrs_array_to_str( $attrs );
	}


	/**
	 * <article> の属性値
	 */
	public static function get_article_attrs() {
		$attrs = [
			'class' => 'l-article',
		];

		// if ( ! Check::show_sidebar() ) {
		// 	$attrs['class'] = ' has-global-padding is-layout-constrained';
		// } else {
		// 	$attrs['class'] = ' is-layout-flow';
		// }

		$attrs['class'] .= ' is-layout-flow';

		// single の時、コンテンツ幅を変更
		if ( Check::is_overwrite_content_size() ) {
			$attrs['style'] = '--wp--style--global--content-size:800px;--wp--style--global--wide-size:1120px;';
		}

		// 投稿・固定ページへの追加属性 (front・home 以外)
		if ( is_single() || ( ! is_front_page() && is_page() ) ) {
			$attrs['data-postid'] = get_the_ID();
		}

		if ( is_single() || is_page() ) {
			$attrs['data-clarity-region'] = 'article';
		}

		return apply_filters( 'lism_article_attrs', $attrs );
	}

	public static function article_attrs() {
		// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		echo self::convert_attrs_array_to_str( self::get_article_attrs() );
	}


	/**
	 * コンテンツエリアのクラス
	 */
	public static function get_entry_layout_class( $base_class ) {
		if ( Check::show_sidebar() ) {
			return $base_class . ' is-layout-flow';
		} else {
			return $base_class . ' is-layout-constrained has-global-padding';
		}
	}

	public static function entry_layout_class( $base_class ) {
		echo esc_attr( self::get_entry_layout_class( $base_class ) );
	}


	/**
	 * 改ページナビゲーション
	 */
	public static function render_wp_link_pages() {
		if ( has_block( 'core/nextpage' ) ) {
			$wp_link_pages_args = apply_filters( 'lism_wp_link_pages_args', [
				'before'         => '<div class="c-pagination -post">',
				'after'          => '</div>',
				'next_or_number' => 'number',
				// 'pagelink'      => '<span>%</span>',
			] );
			wp_link_pages( $wp_link_pages_args );
		}
	}

}
