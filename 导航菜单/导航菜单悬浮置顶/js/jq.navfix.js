/**
 * Created by Administrator on 2014/10/30.
 */
;(function($){
    $.fn.navFix = function(options){
        var defaults = {
            oTop:0,
            zIndex:999
        }
        var options = $.extend(defaults,options);
        var nav = $(this),
            navTop = nav.offset().top;
        var navHeightHtml = "<div id='navHeight' style='display:none;width:100%; height: "+nav.height()+"px'></div>";
        nav.after(navHeightHtml);
        $(window).scroll(function(){
            if($(this).scrollTop() > navTop){
                nav.css({
                    position: 'fixed',
                    top: options.oTop
                });
                $('#navHeight').show();
            }else{
                nav.css({
                    position: '',
                    top: ''
                })
                $('#navHeight').hide();
            }
        })

    }
})(jQuery)