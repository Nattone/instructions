$(document).ready(function () {
    $('.single-item').slick({
    });

    $('.multiple-items').slick({
        infinite: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });

    $('.center-items').slick({
        centerMode: true,
        slidesToShow: 3
    });


});