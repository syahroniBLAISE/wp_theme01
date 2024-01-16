<?php get_header('new'); ?>
<div class="container_page">    
    <div class="container center">
    <article class="content px-3 py-5 p-md-5">
        <?php
            if(have_posts()){

                while( have_posts() ) { 
                    the_post();
                    get_template_part('template-parts/content', 'article');
                }
            }

        ?>
    </article>
    </div>
</div>

<?php get_footer('new'); ?>