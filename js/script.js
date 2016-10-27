var isMobileDevice = function() {
    return  ((
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/iPhone|iPad|iPod/i) ||
        navigator.userAgent.match(/Opera Mini/i) ||
        navigator.userAgent.match(/IEMobile/i)
    ) ? true : false);
}
$(function(){
    var l = $('.left_part');
    var r = $('.right_part');

    $(document).on('mousewheel','.zanaves',function(e){
        var delta = e.deltaY || e.detail || e.wheelDelta;

//        console.log(delta);
        l.width(function () {
            return $(this).width() + (delta*200);
        });
        r.width(function () {
            return $(this).width() + (delta*200);
        });
        e.preventDefault ? e.preventDefault() : (e.returnValue = false);
    });
//    if(isMobileDevice()){
//        $(document).on('touchstart', function(f){
//            var delta = f.deltaY || f.detail || f.wheelDelta;
//
//    //        console.log(delta);
//            l.width(function () {
//                return $(this).width() + (delta*200);
//            });
//            r.width(function () {
//                return $(this).width() + (delta*200);
//            });
//            f.preventDefault ? f.preventDefault() : (f.returnValue = false);
//        });
//    }
    
//    $('.main_page').unbind('mousewheel');
});

$(function (e) {
    $('.arrow_to_start').click(function () {
        $('.zanaves').fadeOut('1000');
        $('.main_page').fadeIn('1000');
    })
})
//$('.header_logo').mouseover(function() {
//    $('.logo_icon').attr('src','../images/feather_white.png');
//})
//$('.header_logo').mouseout(function() {
//    $('.logo_icon').attr('src','../images/feather.png');
//})