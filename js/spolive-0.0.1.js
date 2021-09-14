$(document).ready(function() {
    /*헤더메뉴*/
    $('.mainmenu nav').mouseenter(function() {
        $('.mainmenu').addClass('on');
        $('.mainmenu nav li ul').eq($(this).index()).addClass('on').siblings().removeClass('on');
    });
    $('.mainmenu').mouseleave(function() {
        $('.mainmenu').removeClass('on');
    });
    $('.mainmenu nav li').hover(function() {
        $(this).addClass('on');
    }, function() {
        $(this).removeClass('on');
    });

    $('header li.login').click(function() {
        $('.dim').show();
        $('.layer-popup .login').show();
    });
    $('.layer-popup .login .xbtn').click(function() {
        $('.dim').hide();
        $('.layer-popup .login').hide();
    });

    $( '.live_noti button.live_bet_more' ).click( function() {
      $( 'main .live_noti' ).toggleClass( 'live_noti_on' );
    });

    $('.entry').click(function() {
        $('.dim').show();
        $('.layer-popup .event_pop').show();
    });
    $('.event_pop button.btn4').click(function() {
        $('.layer-popup .event_pop2').show();
    });
    $('.event_pop2 button.btn4').click(function() {
        $('.layer-popup .event_pop3').show();
    });
    $('.event_pop2 button.btn2').click(function() {
        $('.layer-popup .event_pop2').hide();
    });
    $('.event_pop .xbtn,.event_pop3 .btn4').click(function() {
        $('.dim').hide();
        $('.layer-popup .event_pop').hide();
        $('.layer-popup .event_pop2').hide();
        $('.layer-popup .event_pop3').hide();
    });

    $('table td a.betopen_btn,.final_wrap .bet_more_btn button').click(function() {
        $('.dim').show();
        $('.layer-popup .bet_mobox').show();
    });
    $('.bet_mobox .xbtn').click(function() {
        $('.dim').hide();
        $('.layer-popup .bet_mobox').hide();
    });

    $('.swiper1_1').hover(function() {
        $('.swiper1_1,.swiper1_1 .swiper-wrapper').addClass('on');
    }, function() {
        $('.swiper1_1,.swiper1_1 .swiper-wrapper').removeClass('on');
    });

});

$(document).ready(function() {
    var newsSwiper = new Swiper('.header_notice .swiper-container', {
        direction: 'vertical',
        loop: true,
        autoplay: {
            delay: 4500,
        },
        speed: 500
    });
    var swiper2 = new Swiper('.swiper2', {
        slidesPerView: 3,
        loop: false,
        freeMode: true,
        loopedSlides: 3,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var swiper1 = new Swiper('.swiper1', {
        loop: false,
        loopedSlides: 3,
        thumbs: {
            swiper: swiper2,
        },
    });
    var swiper1 = new Swiper('.swiper1_1', {
        loop: false,
        loopedSlides: 3,
        thumbs: {
            swiper: swiper2,
        },
        navigation : {
    		nextEl : '.swiper-button-next', // 다음 버튼 클래스명
    		prevEl : '.swiper-button-prev', // 이번 버튼 클래스명
    	},
    });
});
