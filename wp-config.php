<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'db_wp' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'gVx[pBY=3.{&G)Rn=1wMgvky>9U.#CvRsGLcL;hS7Azc.*5[?D.~# _WZ;lX^_$k' );
define( 'SECURE_AUTH_KEY',  'jmyoZq1J|T=[C]??hh{F B*N|3cUf0hXEg# 0:.N5}yxcgEsP;Eo=?(p0yv(x=$U' );
define( 'LOGGED_IN_KEY',    '?a3!mt7|jr<Uzu/)DwZ&HCs&)d:N2zt27@%^^f>EX)zuLA0 lF4-/ddJ*$3.GQ6r' );
define( 'NONCE_KEY',        '*6dtlrD5y+d-QY-5`8R+h=4h)-tdtJi<SNN9:F_S(3Ueb#Vu<rxt@L(/3||v37j$' );
define( 'AUTH_SALT',        '/Nw,x=;^7Aw6I=KQ^>vY;+*@K%%*qP@_!{L$TZxq`1+)mz9qg5aH2@{Kb4`;L984' );
define( 'SECURE_AUTH_SALT', ',aa1WKmnxDC){}q%&mu#{*&+fOrexp-j|u|T6[i&r{kKke9m*sEq@72Ff?sPL!l7' );
define( 'LOGGED_IN_SALT',   'rui3+?g$wRpa,;,P8Q+&}Eu6IA:>+p=~iBbrI),OE=OkbaB-W&P8M&,y.EbnZ?~2' );
define( 'NONCE_SALT',       '$#2[gyndZ{*|H-b]@)l.jiNZJ7YP6V{~/!3/dKk@H:r@N{]6ffghNM3q_6M7I:BN' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
