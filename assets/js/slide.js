$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    animateIn: 'fadeIn',
    autoplayTimeout: 10000,
    autoplaySpeed: 10000,
    navSpeed: 5000,
    rewind: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})