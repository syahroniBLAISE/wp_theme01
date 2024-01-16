<!DOCTYPE html>

<html lang="en-US" class=" video csspointerevents no-touchevents flexbox objectfit object-fit backgroundcliptext">

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

	

	<script src="<?php echo bloginfo("stylesheet_directory"); ?>/fileTheme/sdk.js" async="" crossorigin="anonymous"></script>
	<script id="facebook-jssdk" src="<?php echo bloginfo("stylesheet_directory"); ?>/fileTheme/sdk(1).js"></script>
	<link rel="stylesheet" id="zn_all_g_fonts-css" href="<?php echo bloginfo("stylesheet_directory"); ?>/fileTheme/css" type="text/css" media="all">
	<link rel="stylesheet" id="wp-block-library-css" href="<?php echo bloginfo("stylesheet_directory"); ?>/fileTheme/style.min.css" type="text/css" media="all">
	<link rel="stylesheet" id="kallyas-styles-css" href="<?php echo bloginfo("stylesheet_directory"); ?>/fileTheme/style.css" type="text/css" media="all">

	<link rel="stylesheet" id="kallyas-styles-css" href="<?php echo bloginfo("stylesheet_directory"); ?>/fileTheme/stylenav.css" type="text/css" media="all">
	<link rel="stylesheet" id="kallyas-styles-css" href="<?php echo bloginfo("stylesheet_directory"); ?>/fileTheme/stylefooter.css" type="text/css" media="all">

	<link rel="stylesheet" id="th-bootstrap-styles-css" href="<?php echo bloginfo("stylesheet_directory"); ?>/fileTheme/bootstrap.min.css" type="text/css" media="all">
	<link rel="stylesheet" id="th-theme-template-styles-css" href="<?php echo bloginfo("stylesheet_directory"); ?>/fileTheme/template.min.css" type="text/css" media="all">
	<link rel="stylesheet" id="zion-frontend-css" href="<?php echo bloginfo("stylesheet_directory"); ?>/fileTheme/znb_frontend.css" type="text/css" media="all">
	<link rel="stylesheet" id="673-layout.css-css" href="<?php echo bloginfo("stylesheet_directory"); ?>/fileTheme/673-layout.css" type="text/css" media="all">
	<link rel="stylesheet" id="th-theme-print-stylesheet-css" href="<?php echo bloginfo("stylesheet_directory"); ?>/fileTheme/print.css" type="text/css" media="print">
	<link rel="stylesheet" id="th-theme-options-styles-css" href="<?php echo bloginfo("stylesheet_directory"); ?>/fileTheme/zn_dynamic.css" type="text/css" media="all">

	<link rel="stylesheet" id="th-theme-options-styles-css" href="<?php echo bloginfo("stylesheet_directory"); ?>/fileTheme/themenew.css" type="text/css" media="all">
	<link rel="stylesheet" id="th-theme-options-styles-css" href="<?php echo bloginfo("stylesheet_directory"); ?>/fileTheme/slide-show.css" type="text/css" media="all">


<!-- <script type="text/javascript" src="<?php echo bloginfo("stylesheet_directory"); ?>/fileTheme/jquery-migrate.min.js"></script> -->
	<!-- <script type="text/javascript" src="<?php echo bloginfo("stylesheet_directory"); ?>/fileTheme/jquery.js"></script> -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

	<link rel="icon" href="<?php echo bloginfo("stylesheet_directory"); ?>/fileTheme/Logo_surfcamsiberut.com-removebg-preview.png" sizes="192x192">

	<meta name="theme-color" content="#ffcc00" />
  	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

</head>

<body class="home page-template-default page page-id-673 res1170 kl-sticky-header kl-skin--light" itemscope="itemscope">
	<div class="login_register_stuff"></div><!-- end login register stuff -->
	<div id="fb-root" class=" fb_reset">
		<div style="position: absolute; top: -10000px; width: 0px; height: 0px;">
			<div></div>
		</div>
	</div>
	<script>
		(function(d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) {
				return;
			}
			js = d.createElement(s);
			js.id = id;
			js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
	</script>


	<div id="page_wrapper" style="height: auto;">

		<header id="header" class="site-header  style13 header--sticky    headerstyle-xs--image_color  sticky-resize headerstyle--image_color site-header--absolute nav-th--light kl-center-menu sheader-sh--default header--not-sticked" data-original-sticky-textscheme="sh--default" role="banner" itemscope="itemscope" itemtype="https://schema.org/WPHeader">
			<div class="site-header-wrapper sticky-top-area">

				<div class="site-header-top-wrapper topbar-style--custom  sh--dark">

					<div class="siteheader-container topbar-full">



					</div>
				</div><!-- /.site-header-top-wrapper -->

				<div class="kl-top-header site-header-main-wrapper clearfix  header-no-top  header-no-bottom fxb-sm-wrap sh--default">

					<div class="container siteheader-container ">

						<div class="fxb-col fxb-basis-auto">



							<div class="fxb-row site-header-row site-header-main ">

								<div class="fxb-col fxb fxb-start-x fxb-center-y fxb-basis-auto fxb-grow-0  site-header-col-left site-header-main-left">
								</div>

								<div class="fxb-col fxb fxb-center-x fxb-center-y fxb-basis-auto site-header-col-center site-header-main-center">
									<div id="logo-container" class="logo-container  hasHoverMe logosize--yes zn-original-logo">
									</div>

									<div class="sh-component main-menu-wrapper" role="navigation" itemscope="itemscope" itemtype="https://schema.org/SiteNavigationElement">

										<div class="zn-res-menuwrapper">
											<a href="<?php echo get_bloginfo('url') ?>" class="zn-res-trigger zn-menuBurger zn-menuBurger--3--s zn-menuBurger--anim1" id="zn-res-trigger">
												<span></span>
												<span></span>
												<span></span>
											</a>
										</div>
										<!-- end responsive menu -->
										<div id="main-menu" class="main-nav mainnav--sidepanel mainnav--active-uline mainnav--pointer-dash nav-mm--light zn_mega_wrapper ">
											<?php
											//Showing Header Menu, for header block of your theme
											wp_nav_menu(array(
												'theme_location' => 'mentawai-headernavigation',
												'container_class' => 'menu',
											));
											?>
										</div>
									</div>
									<!-- end main_menu -->
								</div>

								<div class="fxb-col fxb fxb-end-x fxb-center-y fxb-basis-auto fxb-grow-0  site-header-col-right site-header-main-right">

									<div class="fxb-col fxb fxb-end-x fxb-center-y fxb-basis-auto fxb-grow-0  site-header-main-right-top">
									</div>


								</div>

							</div><!-- /.site-header-main -->


						</div>

					</div><!-- /.siteheader-container -->

				</div><!-- /.site-header-main-wrapper -->



			</div><!-- /.site-header-wrapper -->
		</header>