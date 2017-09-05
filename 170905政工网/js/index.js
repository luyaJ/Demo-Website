$(document).ready(function () {

    //右边tab部分
    $(".right-tabs li").hover(function () {
        $(this).addClass("on").siblings().removeClass("on");
    });

});
// $(document).ready(function(){
//     var windowWidth = $(window).width();
//     if(windowWidth <= 992){
//         $('.content-left').hide();
//         // $('.content-right').hide();
//     } else {
//         $('.content-left').show();
//         // $('.content-right').show();
//     }
//
// });