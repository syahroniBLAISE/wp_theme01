<?php

//Settings Page
function kampusorborne_generalsettings_page(){
	include("includes/generalsettings.php");
}

function kampusorborne_generalsettings(){
	add_menu_page('Pengaturan KS', 'Pengaturan KS', 'manage_options', 'kampusorborne-settings', 'kampusorborne_generalsettings_page', 'dashicons-admin-generic', 98);
}
add_action('admin_menu', 'kampusorborne_generalsettings');


function kampusorborne_scripts(){
	wp_enqueue_style( 'wp-color-picker' );
	wp_enqueue_script( 'kampusorborne-script-handle', get_template_directory_uri().'/kampusorborne.js', array( 'wp-color-picker','jquery' ), false, true );
}

add_action('admin_enqueue_scripts', 'kampusorborne_scripts', 100);




function kampusorborne_defaultoptions() {
	if(!get_option("kampusorborne_tpt")){
		update_option("kampusorborne_tpt", "Tulisan Terbaru");
	}
	if(!get_option("kampusorborne_sbg")){
		update_option("kampusorborne_sbg", "#1d2769");
	}
	if(!get_option("kampusorborne_wh")){
		update_option("kampusorborne_wh", "black");
	}
	if(!get_option("kampusorborne_wf")){
		update_option("kampusorborne_wf", "#212121");
	}
	if(!get_option("kampusorborne_wftext")){
		update_option("kampusorborne_wftext", "white");
	}
	if(!get_option("kampusorborne_wgf")){
		update_option("kampusorborne_wgf", "#fafafa");
	}
	if(!get_option("kampusorborne_wgftext")){
		update_option("kampusorborne_wgftext", "black");
	}
	if(!get_option("kampusorborne_backtotop")){
		update_option("kampusorborne_backtotop", "#212121");
	}
	if(!get_option("kampusorborne_alamatkontak")){
		update_option("kampusorborne_alamatkontak", "Jl. Nama Jalan Nomor xxx");
	}
	
    
}
add_action('init', 'kampusorborne_defaultoptions');




//Mengaktifkan Fitur Custom logo
function kampusorborne_custom_logo_setup() {
 $defaults = array(
	'height'      => 100,
	'width'       => 400,
	'flex-height' => true,
	'flex-width'  => true,
	'header-text' => array( 'site-title', 'site-description' ),
	'unlink-homepage-logo' => true, 
	);
	add_theme_support( 'custom-logo', $defaults );
}

add_action( 'after_setup_theme', 'kampusorborne_custom_logo_setup' );





//Mengaktifkan menu navigasi header
function kampusorborne_header_navigation(){
	register_nav_menu('kampusorborne-headernavigation',__('Header Navigation'));
}

add_action('init', 'kampusorborne_header_navigation');



//Mengaktifkan Sidebar widget area
function kampusorborne_rightsidebar_widgetarea(){
	register_sidebar(array(
		'name' 			=> 'Sidebar',
		'id'			=> 'kampusorborne_sidebar',
		'before_widget'	=> '<div class="widget-right-sidebar">',
		'after_widget'	=> '</div>',
		'before_title' 	=> '<h2>',
		'after_title'	=> '</h2>',
	));
}

add_action('widgets_init', 'kampusorborne_rightsidebar_widgetarea');



//Mengaktifkan Footer widget area
function kampusorborne_footer_widgetarea(){
	register_sidebar(array(
		'name' 			=> 'Footer',
		'id'			=> 'kampusorborne_footer',
		'before_widget'	=> '<div class="widget-footer">',
		'after_widget'	=> '</div>',
		'before_title' 	=> '<h2>',
		'after_title'	=> '</h2>',
	));
}

add_action('widgets_init', 'kampusorborne_footer_widgetarea');