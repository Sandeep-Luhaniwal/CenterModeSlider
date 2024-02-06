$(document).ready(function () {
    $(".testimonial_slider").slick({
        nextArrow: ".next_caro",
        prevArrow: ".previous_caro",
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        centerMode: true,
        centerPadding: "0.1%",
        infinite: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true,
                    infinite: true,
                },
            },
            // {
            //     breakpoint: 576,
            //     settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1,
            //         centerMode: true,
            //     },
            // },
        ],
    });
});