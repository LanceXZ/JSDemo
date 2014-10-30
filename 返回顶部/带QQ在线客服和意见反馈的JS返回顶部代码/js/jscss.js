//设置cookie
function setCookie(name, value, iday) {
    var oDate = new Date();
    oDate.setDate(oDate.getDate() + iday);
    document.cookie = name + '=' + value + ';expires=' + oDate;
}
//获取cookie
function getCookie(name) {
    var arr = document.cookie.split(";");
    for (var i = 0; i < arr.length; i++) {
        var arr2 = arr[i].split("=");
        if (arr2[0] == name) {
            return arr2[1];
        }
    }
}
//删除cookie
function reMoveCookie(name) {
    setCookie(name, 1, -1);
}
//获取cookie
$(function() {
    if(getCookie('openState') == 'true') {
       $(".QQ_S").css("display", "block");
	   $(".QQ_S1").css("display", "none");
    }
	else if(getCookie('openState') == 'false'){
		$('.QQ_S').css("display","none");
		$('.QQ_S1').css("display","block");
	}
});
//显示隐藏方法
function HideFoot(){
	setCookie("openState","false",7);
	var winHeight = $(window).height();
	var objHeight = $(".QQ_S").height();
	var objTop = winHeight - objHeight - 15;
	$(".QQ_S").animate({top:objTop},100,function(){
		$('.QQ_S').css("display","none");
		$('.QQ_S1').css("display","block");		
		console.log("\u767e\u5ea6\u641c\u7d22\u3010\u7d20\u6750\u5bb6\u56ed\u3011\u4e0b\u8f7d\u66f4\u591aJS\u4ee3\u7801");
	});
}
function ShowFoot(){
	setCookie("openState","true",7);
	$(".QQ_S").css("display", "block");
	$(".QQ_S1").css("display", "none");
	$(".QQ_S").animate({top:"40%"},100,function(){
		console.log("\u767e\u5ea6\u641c\u7d22\u3010\u7d20\u6750\u5bb6\u56ed\u3011\u4e0b\u8f7d\u66f4\u591aJS\u4ee3\u7801");
	});
}
//返回顶部
function backToTop(){
	$("html,body").animate({ scrollTop: 0 },100,function(){
	});
}
/*
本代码由JS代码网收集并编辑整理;
尊重他人劳动成果;
转载请保留素材家园链接 - www.js-css.cn
*/