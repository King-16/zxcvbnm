$(function(){
     new WOW().init();
     
     $('.bxslider').bxSlider({
       auto: true,
       speed: 600
     });
     
     $('a.btn').click(function () {
        $(".popup").fadeIn(500);
        $("body").append("<div id='overlay'></div>");
        $('#overlay').show().css('opacity','0.8');
        $('a.close, #overlay').click(function () {
            $('.popup').fadeOut(100);
            $('#overlay').remove();
            return false;
        });
        $('.popup').click(function(e){
            e.stopPropagation();    
        });
        return false;                
    });
});
 