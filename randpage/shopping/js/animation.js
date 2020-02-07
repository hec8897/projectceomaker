var PcMedia = window.matchMedia('( max-width: 1200px )');
var TabletMedia = window.matchMedia('( max-width: 1024px ) and (min-width: 768px)');
var MobileMedia = window.matchMedia('(max-width:767px)');

$(window).scroll(function () {

    var offsets = $(document).scrollTop();
    var con1 = $('.con1').offset()
    var con5 = $('.con5').offset()

    $(".figure_box").css({
        "animationName": "up_fadein"
    })
    // }
    if (offsets * 2 > con1.top) {
        console.log('1')
        $("#con1_fig img").css({
            "animationName": "up_fadein"
        })
    }
    if (offsets + 200 > con5.top) {

        $(".circle").css({
            "animationName": "fadein_ani"
        })

        $(".con5 .obj1").css({
            "animationName": "objAni"
        })

        $(".con5 .obj2").css({
            "animationName": "objAni"
        })
    }
})

function PopupON() {
    $('#popup').fadeIn(200)
    $('#popup').on('scroll touchmove mousewheel', function (event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    });
}
function PopupOut() {
    $('#popup').fadeOut(200)
    $('#popup').off('scroll touchmove mousewheel');
}
