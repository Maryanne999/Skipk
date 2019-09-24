
$(document).ready (function(){
 $('.js-main-slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        draggable: false,


    });
});

$(".hamburger-menu").on("click", function() {
  $(this).toggleClass("active");
  $(".navbar").toggleClass("open");
})

/*        dots: true*/