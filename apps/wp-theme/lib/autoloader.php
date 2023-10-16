<?php


spl_autoload_register(
	function( $classname ) {
		if ( strpos( $classname, '\\Lism\\' ) !== false ) {
			$classname = str_replace( 'LOOS\\Lism\\', '', $classname );
			$classname = str_replace( '\\', '/', $classname );
			$file      = get_theme_file_path( 'classes/' . $classname . '.php' );
			if ( file_exists( $file ) ) require $file;
		}
	}
);
