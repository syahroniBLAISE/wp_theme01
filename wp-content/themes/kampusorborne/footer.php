	
		
		</div>
		
		<!-- footer -->
		<div id="gfooter">
			<div style="display: table; width: 100%;">
				<div style="display: table-cell; vertical-align: top; width: 256px;">
					<?php
					$custom_logo_id = get_theme_mod( 'custom_logo' );
					$logo = wp_get_attachment_image_src( $custom_logo_id , 'full' );
					if ( has_custom_logo() ) {
							echo '<a href="' .get_site_url(). '"><img src="' . $logo[0] . '" alt="' . get_bloginfo( 'name' ) . '" height="64px" style="margin-top: 10px;"></a>';
					} else {
							echo '<h1><a href="' .get_site_url(). '">'. get_bloginfo( 'name' ) .'</a></h1><h3>' . get_bloginfo( 'description' ) . '</h3>';
					}
					?>
				</div>
				<div style="display: table-cell; vertical-align: top;">
					<div style="border-bottom: 1px solid #eaeaea; padding-bottom: 20px; margin-bottom: 20px;">
						<?php if(is_active_sidebar('kampusorborne_footer')) : ?>
						<?php dynamic_sidebar('kampusorborne_footer'); ?>
						<?php endif; ?>
					</div>
					<div style="display: table; width: 100%;">
						<div style="display: table-cell; vertical-align: top; font-size: 12px;"><?php echo get_option("kampusorborne_alamatkontak") ?></div>
						<div style="display: table-cell; vertical-align: top; text-align: right;">Social Buttons</div>
					</div>
				</div>
			</div>
		</div>
		
		<!-- footer copyright -->
		<div id="footer">© <?php echo get_bloginfo("title"); ?> <?php echo date("Y"); ?>. All rights reserved.</div>
		
		
		<!-- form pencarian -->
		<div id="formpencarian">
			<div style="display: table; width: 100%; height: 100%; position: relative;">
				<div style="display: table-cell; vertical-align: middle; text-align: center;">
					<div style="border-bottom: 1px solid white; display: inline-block; width: 30%; min-width: 300px;">
						<input id="katapencarian" type="text" placeholder="Pencarian..." style="width: 75%; padding: 20px; font-size: 20px; background-color: inherit; border: none; outline: none; color: white;" onkeyup="autocari()">
						<i class="fa fa-search" style="color: white; font-size: 20px; cursor: pointer;" onclick="cari()"></i>
					</div>
				</div>
			</div>
			<div style="position: absolute; left: 0; right: 0; top: 0; text-align: center; color: white; cursor: pointer; padding: 20px; font-size: 14px;" onclick="tutupFormPencarian()">
				<div><i class="fa fa-chevron-up"></i></div>
				<div><span>TUTUP</span></div>
			</div>
		</div>
		
		
		<!-- scroll to top -->
		<div id="scrollToTop">
			<div><i class="fa fa-chevron-up"></i></div>
		</div>
		
		<script>
		
			function tampilkanFormPencarian(){
				$("#formpencarian").slideDown();
			}
			
			function cari(){
				var keyword = $("#katapencarian").val();
				location.href = "<?php echo site_url() ?>?s=" + keyword;
			}
			
			function tutupFormPencarian(){
				$("#formpencarian").slideUp();
			}
			
			var acTimeout;
			function autocari(){
				clearTimeout(acTimeout);
				acTimeout = setTimeout(function(){
					cari();
				}, 2000);
			}
			
			jQuery(document).ready(function($){
				$(window).scroll(function(){
					if ($(this).scrollTop() > 50) {
						$('#scrollToTop').fadeIn('slow');
					} else {
						$('#scrollToTop').fadeOut('slow');
					}
				});
				$('#scrollToTop').click(function(){
					$("html, body").animate({ scrollTop: 0 }, 500);
					return false;
				});
			});
			
		</script>
	</body>
</html>