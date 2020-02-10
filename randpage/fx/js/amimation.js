$(window).scroll(function () {

    var offsets = $(document).scrollTop();
    var con1 = $('.con1').offset()
    var con2 = $('.con2').offset()
    var con6 = $('.con6').offset()
    var con7 = $('.con7').offset()
    var con8 = $('.con7').offset()

    if (offsets > 100) {
        $('.con1 img').css({
            "animationName": "fadein_up"
        })
    }
    if (offsets > con1.top) {
        $('div.panels > div').css({
            "animationName": "fadein_up"
        })
    }
    if (offsets > con6.top) {
        $('div.captions > div').css({
            "animationName": "fadein_up"
        })
        $('div.con8_ilu img').delay(200).css({
            "animationName": "fadein_up"
        })
    }


})
