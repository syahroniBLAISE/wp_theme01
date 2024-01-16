// $(function(){
//     $(window).scroll(function() {
//         var scroll = $(window).scrollTop(); // how many pixels you've scrolled
//         var os = $('#div1').offset().top; // pixels to the top of div1
//         var ht = $('#div1').height(); // height of div1 in pixels
//         // if you've scrolled further than the top of div1 plus it's height
//         // change the color. either by adding a class or setting a css property
//         if(scroll > os + ht){
//             $('#div2').addClass('blue');
//         }
//     });
// });

// $(function () {
//     $(document).scroll(function () {
//       var $nav = $("#header");
//       $nav.toggleClass('header--is-sticked', $(this).scrollTop() > $nav.height());
//     });
//   });

//   var $nav = $("#menu-item-208");
//       $nav.toggleClass('header--is-sticked', $(this).scrollTop() > $nav.height());

  var img = document.createElement("img");
  img.src = "https://thesurfingmentawai.com/wp-content/themes/mentawai01/fileTheme/Logo_surfcamsiberut.com-removebg-preview.png";
  var src = document.getElementById("menu-item-222").innerHTML =`<div id="logo-container"
              class="logo-container  hasHoverMe logosize--yes">
              <h1 class="site-logo logo " id="logo"><a
                  href="https://thesurfingmentawai.com/"
                  class="site-logo-anch">
                  <img
                    class="logo-img-sticky site-logo-img-sticky"
                    src="https://thesurfingmentawai.com/wp-content/themes/mentawai01/fileTheme/Logo_surfcamsiberut.com-floating.png"
                    alt="Cheapest Surf Trip Siberut"
                    title="Cheapest Surf Trip Siberut At Padang Sumatera Barat">
                  <img
                    class="logo-img site-logo-img"
                    src="https://thesurfingmentawai.com/wp-content/themes/mentawai01/fileTheme/Logo_surfcamsiberut.com-removebg-preview.png"
                    alt="Cheapest Surf Trip Siberut"
                    title="Cheapest Surf Trip Siberut At Padang Sumatera Barat"
                    data-mobile-logo="https://surfcampsiberut.com/wp-content/uploads/2023/07/Logo-utama.png"></a>
              </h1>
            </div>`;
            // $('#zn-res-trigger').html("testing");
            // var src = document.getElementById("zn-res-trigger").innerHTML = "testing";
  // var srca = src.getElementsByTagName("a");
  // src.removeChild(srca);
  // src.appendChild(img).className();

  // let slideIndex = 0;
  // showSlides();
  
  // function showSlides() {
  //   let i;
  //   let slides = document.getElementsByClassName("slick-slide");
  //   for (i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none";
  //   }
  //   slideIndex++;
  //   if (slideIndex > slides.length) {slideIndex = 1}
  //   slides[slideIndex-1].style.display = "block";
  //   setTimeout(showSlides, 2000); // Change image every 2 seconds
  // }




  let slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
  showSlides(slideIndex += n);
  }

  // Thumbnail image controls
  function currentSlide(n) {
  showSlides(slideIndex = n);
  }

  function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  }

  var counter = 1;
  setInterval(function(){
    console.log('test');
    currentSlide(counter);
    counter++;
    if(counter > 3){
      counter = 1;
    }
  },2500);