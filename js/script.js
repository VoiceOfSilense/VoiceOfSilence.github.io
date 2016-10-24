$(function(){
    var l = $('.left_part');
    var r = $('.right_part');

    $(document).bind('mousewheel',function(e){
        var delta = e.deltaY || e.detail || e.wheelDelta;

        console.log(delta);
        l.width(function () {
            return $(this).width() + (delta*200);
        });
        r.width(function () {
            return $(this).width() + (delta*200);
        });
        e.preventDefault ? e.preventDefault() : (e.returnValue = false);
    });
    
    $('.main_page').unbind('mousewheel');
});
$(function (e) {
    $('.arrow_to_start').click(function () {
        $('.zanaves').fadeOut('1000');
        $('.main_page').fadeIn('1000');
    })
})