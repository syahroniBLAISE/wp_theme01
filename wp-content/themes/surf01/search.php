<?php get_header(); ?>


<h3>Hasil Pencarian:</h3>

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

<?php get_footer(); ?>