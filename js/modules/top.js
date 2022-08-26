$(function () {
    "use strict";
    console.log('( •ิཬ•ั ) Hello!!!');

    var obj = {
        init: function () {
            this.wow();
            this.visual();
        },


        wow: function () {
            var wow = new WOW(
                {
                    boxClass: 'wow',      // default
                    animateClass: 'animated', // default
                    offset: 0,          // default
                    mobile: false,
                    live: false,       // default
                }
            )
            wow.init();
        },

        visual: function () {
            $('.visuals-bg').slick({
                dots: false,
                infinite: true,
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
                // autoplay: true,
                // autoplaySpeed: 5000,
                // centerMode: true,
                pauseOnHover: false,
                fade: false,
                asNavFor: '.visuals-sm',
            });

            $('.visuals-sm').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                asNavFor: '.visuals-bg',
                dots: true,
                centerMode: true,
                focusOnSelect: true,
                infinite: true,
                vertical: true,
            });

            // $('.visuals-bg').on('beforeChange', function(event, slick, currentSlide, nextSlide){
            //     $('.slick-active').prev().addClass('aaaaaaaaaaaaaaaaaaa');
            // });

            // $('.visuals-bg').on('swiper', function(event, slick){
            //     $('.slick-active').prev().addClass('aaaaaaaaaaaaaaaaaaa');
            // });
        },
    }

    obj.init();
});