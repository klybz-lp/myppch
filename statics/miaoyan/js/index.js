$(function(){
  
    //过渡页效果
    setTimeout(function(){
        $("#my_transition").fadeOut(function(){
            //$(".miaoyan").fadeIn();
            $("html,body").css({
                height: 'auto',
                overflow : 'auto'
            });
        });
    },3000)

    //logo效果；
   /* $(window).scroll(function(){
        console.log($(window).scrollTop())
        //if($(window).scrollTop() <= 30){}
        $(".header .logo img").animate({
            width: 96,
            height: 86},
            600, function() {
        });
        
    })*/

    //回到顶部
    /*$("#top").click(function(){
        $("html,body").animate({scrollTop:"0px"},'slow');
    });*/

    //banner
    var bannerSwiper = new Swiper('#swiper-banner',{
            resizeReInit : true,
            pagination: '.pagination1',
            autoplay: 6000,
            autoplayDisableOnInteraction: false,
            grabCursor: true,
            paginationClickable: true,
            paginationElement: 'span',
            calculateHeight: true,
            loop: true,
    }); 
    swiperMouse(bannerSwiper, $('#swiper-banner .swiper-slide')); 
    $('.arrow-left').on('click', function(e){
        e.preventDefault()
        bannerSwiper.swipePrev()
    })
    $('.arrow-right').on('click', function(e){
        e.preventDefault()
        bannerSwiper.swipeNext()
    })


    setTimeout(function(){
        var width = $("body").width();
        //$(".swiper-slide img").width(width)
    },5000)

    //鼠标移入停止自动切换
    function swiperMouse(swiper, el) {
        el.mouseenter(function(event) {
            swiper.stopAutoplay();
        }).mouseleave(function(event) {
            swiper.startAutoplay();
        });
    }

    function _swiperNext(swiper, el) {
        el.click(function(event) {
            /* Act on the event */
            swiper.swipeNext();
        });
    }

    function _swiperPrev(swiper, el) {
        el.click(function(event) {
            /* Act on the event */
            swiper.swipePrev()
        });
    }

    function _swiperSilder(swiper, el) {
        _swipePrev(swiper, el);
        _swipeNext(swiper, el)
    }

    //行业资讯tab
    $(".my_news_tab ul li").click(function(event) {
        var index = $(this).index();
        $(this).addClass('active').siblings('li').removeClass('active');
        $(".my_news_main ul").eq(index).show().siblings('ul').hide();

    });


})