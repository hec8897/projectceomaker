
var PcMedia = window.matchMedia('( max-width: 1200px )');
var TabletMedia = window.matchMedia('( max-width: 1024px ) and (min-width: 768px)');
var MobileMedia = window.matchMedia('(max-width:767px)');

function PcScoll(){
    var offsets = $(document).scrollTop();
    console.log(offsets)
    if(offsets > 50){
        $(".figure_box").css({
            "animationName":"up_fadein"
        })
    }
    if(offsets > 350){
        $("#con1_fig img").css({
            "animationName":"up_fadein"
        })
    }
    if(offsets > 3000){
        $(".circle").css({
            "animationName":"fadein_ani"
        })

        $(".con5 .obj1").css({
            "animationName":"objAni"
        })

        $(".con5 .obj2").css({
            "animationName":"objAni"
        })
    }
}

$(window).scroll(function () {
        var windowWidth = $( window ).width();
        if(windowWidth > 1200) {
            PcScoll()
           //창 가로 크기가 500 미만일 경우 
        } else {
           //창 가로 크기가 500보다 클 경우
        }

})

