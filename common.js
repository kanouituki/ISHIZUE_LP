$(function(){
    $(window).on("orientationchange load resize", function() {
    $('html').css('font-size', $(window).width()/48);
});
$('.class_slider').slick({
    dots: true,
    arrows: false,
    appendDots: $('.dots-2')
});

$('.pc_class_slider').slick({
    dots: true,
    arrows: false,
    fade:true,
    autoplay:true,
    autoplaySpeed:8000,
    pauseOnDotsHover:true,
    appendDots: $('.dots-3')
});
$(window).scroll(function(){
    let window_width = $(window).width();
    let document_height = $(document).height() - $(window).height();
    $(".progress_bar").width(window_width / document_height * $(window).scrollTop());
});
});