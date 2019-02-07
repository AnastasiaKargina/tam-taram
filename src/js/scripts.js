$('.loadMore').on('click', function () {
    this.style.display = 'none';
    const parent = $(this).parent();
    const videos = parent.children()[1];
    videos.style.height = 'auto';
    videos.style.overflow = 'auto';
});
$(function () {
    $('.videos').slick({
        infinite: false,
        arrows: true,
        nextArrow: '<div class="section__slider__button-next"><img src="img/ico_dropdown.svg"width="25px"></div>',
        prevArrow: '<div class="section__slider__button-prev"><img src="img/ico_dropdown.svg"width="25px"></div>',
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        responsive:
            [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: 'unslick'
                }
            ]
    });
});
