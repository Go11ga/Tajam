//= ../../../../node_modules/slick-carousel/slick/slick.js

/* Intro slider */
$('.intro-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 575,
        settings: {
            dots: false,
        }
    }]
});


/* Quote slider */
$('#quote-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 767,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
        },
        breakpoint: 575,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }]
});
