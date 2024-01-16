<?php get_header(); ?>


<div style="display: table; width: 100%;">
	<div style="display: table-cell; vertical-align: top;">
		<h3><?php echo get_option("kampusorborne_tpt") ?></h3>

		<?php

		while( have_posts() ) : the_post();

			//judul postingan
			
			?><h2><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></h2><?php
			?>
			<img src="<?php echo get_the_post_thumbnail_url(); ?>" style="width: 320px;">
			<?php
			
			?><div><?php the_excerpt(); ?></div><?php
			
			?>
			<p>Link postingan: <a href="<?php the_permalink() ?>"><?php the_permalink() ?></a></p>
			<?php
			

		endwhile;

		?>
	</div>
	<div style="display: table-cell; vertical-align: top;">
		<?php get_sidebar(); ?>
	</div>
</div>





<?php get_footer(); ?>