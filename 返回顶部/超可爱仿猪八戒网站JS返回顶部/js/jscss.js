$(function() {
	$.fn.toTop = function(options) {
		var defaults = {			
			showHeight:150,
			speed : 1000
		};
		var options = $.extend(defaults,options);
		$("body").prepend("<div id='totop'><a title='返回顶部' href='http://www.97zzw.com' hidefocus='true'></a></div>");
		var $toTop = $(this);
		var $top = $("#totop");
		var $ta = $("#totop a");
		$toTop.scroll(function(){
			var scrolltop=$(this).scrollTop();		
			if(scrolltop>=options.showHeight){				
				$top.fadeIn();
			}
			else{
				$top.fadeOut();
			}
		});	
		$ta.hover(function(){ 		
			$(this).addClass("cur");	
		},function(){			
			$(this).removeClass("cur");		
		});	
		$top.click(function(){
			$("html,body").animate({scrollTop: 0},options.speed);
			return false;
		});
	}
});

/*
本代码由JS代码网收集并编辑整理;
尊重他人劳动成果;
转载请保留JS代码网链接 - www.js-css.cn
*/