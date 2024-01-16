<!-- kontent untuk 1 post dalam 1 halaman page 
    pengaturan tampilan dari halaman page.php-->
<div class="container container_page">
    <div class="entry-details post ">
        <div class="meta mb-1">
            <!-- <h3 class="entry-title">
            <a
                href="<?php the_permalink(); ?>"
                rel="bookmark"
                ><?php the_title()?></a
            >
            </h3> -->
        </div>
        <div class="entry-meta">
        <!-- <span class="author-photo"
            ><img
            alt="Christie Carter"
            src="<?php echo bloginfo("stylesheet_directory"); ?>/fileTheme/mentawai-islands.jpg"
        /></span> -->
        <div class="meta mb-1"><?php the_date()?></div>
        </div>
        <div class="entry-content excerpt">
        <p>
            <?php
            the_content();
            // the_content();
            ?>
            <!-- <a
            class="read-more"
            href="<?php the_permalink(); ?>"
            >Read More</a
            > -->
        </p>
        </div>
    </div>

</div>