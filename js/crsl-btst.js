const multipleCardCarousel = document.querySelector("#carouselExampleControls");
var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false
})

var carouselWidth = $(".carousel-inner")[0].scrollWidth;
var cardWidth = $('.carousel-item').width();

var scrollPosition = 0;

$('.carousel-control-next').on('click',  () => {
    if (scrollPosition < (carouselWidth - (cardWidth * 4))) {
        console.log('next');
        scrollPosition = scrollPosition + cardWidth;
        $('.carousel-inner').animate({ scrollLeft: scrollPosition }, 600)
    }
});
$('.carousel-control-prev').on('click', () => {
    if (scrollPosition > 0) {
        console.log('prev');
        scrollPosition = scrollPosition - cardWidth;
        $('.carousel-inner').animate({ scrollLeft: scrollPosition }, 600)
    }
});
