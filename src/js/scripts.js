function loading() {
    const  elem = document.getElementsByClassName('slider');
    console.log(elem);
    elem.style.overflow = 'auto';
    elem.style.height = 'auto';
    document.getElementsByClassName('loadMore').style.display = 'none';}
    $(function () {
        $('.slider').slick({
            infinite: false,
            arrows: true,
            nextArrow: '<div class="section__slider__button-next"><img src="img/ico_dropdown.svg"width="25px"></div>',
            prevArrow: '<div class="section__slider__button-prev"><img src="img/ico_dropdown.svg"width="25px"></div>',
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: false,
            responsive:
                [
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                        }
                        },
                    {
                        breakpoint: 768,
                        settings: 'unslick'
                    }        ]
        })});
