$(document).ready(function () {
    $(".image-slider").slick({
        slidesToShow: 1,
        // slidesToScroll : 2
        // infinity : true
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
    });
});

for (i = 0; i < 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);
}
