$('#owl-1').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    animateOut: 'fadeOut',
    mouseDrag: false,
    touchDrag: false,
    autoplayTimeout: 10000,
    navSpeed: 1000,
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

$('#owl-2').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 10000,
    responsive: {
        0: {
            items: 1
        },
        740: {
            items: 2,
        },
        1024: {
            items: 4
        }
    }
})

$('#owl-3').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    dotsEach: 3,
    autoplay: true,
    autoplayTimeout: 10000,
    dotsSpeed: 1000,
    responsive: {
        0: {
            items: 1,
            dots: false,
        },
        768: {
            items: 2,
            dotsEach: 4,
        },
        1024: {
            items: 3,
        }
    }
})

$('#owl-4').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        740: {
            items: 2
        },
        1024: {
            items: 4
        }
    }
})