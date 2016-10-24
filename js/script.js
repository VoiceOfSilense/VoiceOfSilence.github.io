$(function(){
    var l = $('.left_part');
    var r = $('.right_part');

    $(document).on('mousewheel',function(e){
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
});
$(function (e) {
    $('.arrow_to_start').click(function () {
        $('.zanaves').fadeOut('slow');
        $('.main_page').fadeIn('slow');
    })
})