jQuery.fn.  extend({
	tabchange: function(options) {
		var $this = $(this);
		var j = 0;
		var i, t, length;
		var settings = {
			Ishover: true,  /* 是否支持鼠标悬停切换 */
			Isclick: true,   /* 是否支持鼠标点击切换 */
			showNum: 0, /*默认显示第几个选项卡，从0开始*/
			backLayout : "image",  /*切换背景是图片，值：image（图片）、color（颜色）*/
			hoverClass: "on",   /*针对选项卡的样式相同点击后的样式class*/
			objClass: [ "a1", "a2", "a3" ],  /*针对每个想选卡都有样式的对象样式*/
			hoverArray: [ "a1on", "a2on", "a3on" ],  /*针对每个想选卡都有样式的对象点击后的样式*/
			time: 800,  /*鼠标经过显示特效的延迟时间*/
			Iscshow: true, /*tab切换，true为显示此功能*/
			showObj: ".content ul" /*要显示的对象*/
		};
		$.extend(settings, options);		
		if(settings.Isclick) {
			$this.click(function() {
				j = $(this).index();
				tab(j);
			});
		}
		if(settings.Ishover) {
			$this.hover(
				function() {
					j = $(this).index();
					t = setTimeout(function() { tab(j); }, settings.time);
				 },
				 function() { 
					 clearTimeout(t); 
				 }
			);
		}		
		var tab = function(num) {
			length = settings.objClass.length;			
			var ff = function() {
				$($this[num]).removeClass(settings.objClass[num]).addClass(settings.hoverArray[num]); 
				if(settings.Iscshow) {
					$(settings.showObj).eq(num).show().siblings().hide();
				}
			}			
			var Img = function() {
				for(i = 0; i < length; i++){
					(i == num) ? ff() : $($this[i]).removeClass(settings.hoverArray[i]).addClass(settings.objClass[i]) ;
				}		
			}			
			var Colr = function () {
				$($this[num]).addClass(settings.hoverClass).siblings().removeClass(settings.hoverClass);
				if(settings.Iscshow) {
					$(settings.showObj).eq(num).show().siblings().hide();
				}
			}			
			switch(settings.backLayout) {
				case "image" :  Img();
					break;
				case "color" :  Colr();
					break;
			}
		}		
		tab(settings.showNum);
	}
});