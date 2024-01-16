<?php

function mentawai_register_style(){
	wp_enqueue_style('mentawai-style', get_template_directory_uri() . "/style.css", array(), '1.0', 'all');
	wp_enqueue_style('mentawai-bootstrap', get_template_directory_uri() . "/bootstrap.min.css", array(), '1.0', 'all');
	wp_enqueue_style('mentawai-fontawesome', get_template_directory_uri() . "/style.css", array(), '1.0', 'all');
}
add_action('wp_enqueue_script', 'mentawai_register_style');

// add dinamy title tags
function mentawai_theme_support(){
	add_theme_support('title-tag');
	add_theme_support('custom-logo');
	add_theme_support('post-thumbnails');
}
add_action('after_setup_theme', 'mentawai_theme_support');

//Settings Page
function mentawai_generalsettings_page(){
	include("includes/generalsettings.php");
}

// function mentawai_menu(){
// 	$location = array(
// 		'primary' => 'Desktop Primary Left Sidebar',
// 		'footer' => 'Footer Menu Items'

// 	);
// 	register_nav_menu($location);
// }
// add_action('init', 'mentawai_menu');


function mentawai_generalsettings(){
	add_menu_page('Pengaturan KS', 'Pengaturan KS', 'manage_options', 'mentawai-settings', 'mentawai_generalsettings_page', 'dashicons-admin-generic', 98);
}
add_action('admin_menu', 'mentawai_generalsettings');


// function mentawai_scripts(){
// 	wp_enqueue_style( 'wp-color-picker' );
// 	wp_enqueue_script( 'mentawai-script-handle', get_template_directory_uri().'/kampusorborne.js', array( 'wp-color-picker','jquery' ), false, true );
// }

// add_action('admin_enqueue_scripts', 'mentawai_scripts', 100);




function mentawai_defaultoptions() {
	if(!get_option("mentawai_tpt")){
		update_option("mentawai_tpt", "Tulisan Terbaru");
	}
	if(!get_option("mentawai_sbg")){
		update_option("mentawai_sbg", "#1d2769");
	}
	if(!get_option("mentawai_wh")){
		update_option("mentawai_wh", "black");
	}
	if(!get_option("mentawai_wf")){
		update_option("mentawai_wf", "#212121");
	}
	if(!get_option("mentawai_wftext")){
		update_option("mentawai_wftext", "white");
	}
	if(!get_option("mentawai_wgf")){
		update_option("mentawai_wgf", "#fafafa");
	}
	if(!get_option("mentawai_wgftext")){
		update_option("mentawai_wgftext", "black");
	}
	if(!get_option("mentawai_backtotop")){
		update_option("mentawai_backtotop", "#212121");
	}
	if(!get_option("mentawai_alamatkontak")){
		update_option("mentawai_alamatkontak", "Jl. Nama Jalan Nomor xxx");
	}
	
    
}
add_action('init', 'mentawai_defaultoptions');




//Mengaktifkan Fitur Custom logo
function mentawai_custom_logo_setup() {
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

add_action( 'after_setup_theme', 'mentawai_custom_logo_setup' );





//Mengaktifkan menu navigasi header
function mentawai_header_navigation(){
	register_nav_menu('mentawai-headernavigation',__('Header Navigation'));
}

add_action('init', 'mentawai_header_navigation');



//Mengaktifkan Sidebar widget area
function mentawai_rightsidebar_widgetarea(){
	register_sidebar(array(
		'name' 			=> 'Sidebar',
		'id'			=> 'mentawai_sidebar',
		'before_widget'	=> '<div class="widget-right-sidebar">',
		'after_widget'	=> '</div>',
		'before_title' 	=> '<h2>',
		'after_title'	=> '</h2>',
	));
}

add_action('widgets_init', 'mentawai_rightsidebar_widgetarea');



//Mengaktifkan Footer widget area
// function mentawai_footer_widgetarea(){
// 	register_sidebar(array(
// 		'name' 			=> 'Footer',
// 		'id'			=> 'mentawai_footer',
// 		'before_widget'	=> '<div class="widget-footer">',
// 		'after_widget'	=> '</div>',
// 		'before_title' 	=> '<h2>',
// 		'after_title'	=> '</h2>',
// 	));
// }

// add_action('widgets_init', 'mentawai_footer_widgetarea');

// function mentawai_widget_areas(){
// 	register_sidebar(
// 		array(
// 			'before_widget'	=> '',
// 			'after_widget'	=> '',
// 			'before_title' 	=> '<h2>',
// 			'after_title'	=> '</h2>',
// 		),
// 		array(
// 			'name' 			=> 'sidebar area',
// 			'id'			=> 'sidebar-1',
// 			'description'	=> 'sidebar widge area',

// 		)
// 	);
// }

// add_action('widgets_init', 'mentawai_widget_areas');

