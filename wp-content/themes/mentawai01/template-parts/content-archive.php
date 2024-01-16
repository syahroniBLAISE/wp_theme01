<!-- kontent untuk banyak post dalam 1 halaman page
    pengaturan tampilan dari archive.php -->
<div class="container ">
    <div class="entry-details post">
        <div class="meta mb-1">
            <h3 class="entry-title">
            <a
                href="<?php the_permalink(); ?>"
                rel="bookmark"
                ><?php the_title()?></a
            >
            </h3>
        </div>
        <div class="entry-meta">
        <!-- <span class="author-photo"
            ><img
            alt="Christie Carter"
            src="<?php echo bloginfo("stylesheet_directory"); ?>/fileTheme/pantai_mapadegat_kepulauan_mentawai-768x433.jpg"
        /></span> -->
        <div class="meta mb-1"><?php the_date()?></div>
        </div>
        <div class="entry-content excerpt">
        <p>
            <?php
            the_excerpt();
            // the_content();
            ?>
            <a
            class="read-more"
            href="<?php the_permalink(); ?>"
            >Read More</a
            >
        </p>
        </div>
    </div>

</div>