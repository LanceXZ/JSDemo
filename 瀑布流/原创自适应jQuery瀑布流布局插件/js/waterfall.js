/**
 * Created by Lance on 2014/10/24.
 */
$(window).load(function(){
    var data = [{'src':'images/3.jpg'},{'src':'images/4.jpg'},{"src":"images/5.jpg"},{"src":"images/6.jpg"},{"src":"images/7.jpg"},{"src":"images/8.jpg"},{"src":"images/9.jpg"},{"src":"images/10.jpg"}];
    waterFall('#pubu','.box',1);

    var ajaxKey = true;/*是否动态加载*/
    $(window).scroll(function(){
        if(getDataCheck()&&ajaxKey){
            console.log('载入');
            var $wrap = $('#pubu');
            for(var i in data){
                var boxHtml = "<div class='box'><div class='pic'><img src='"+data[i].src+"'></div></div>";
                $wrap.append(boxHtml);
            }
            waterFall('#pubu','.box',2);
//            getData();/*ajax请求数据加载*/
        }
    })
})
/*瀑布流主函数*/
function waterFall(outer,boxs,style){
    var wrap = $(outer);
    var box = $(boxs);
    var num = Math.floor($(document.body).width()/box.outerWidth());
//    console.log(num)
    wrap.width(box.outerWidth()*num);

    var allHeight = [];
    for(var i=0;i < box.length;i++ ){
        if(i < num){
            allHeight[i] = box.eq(i).outerHeight();
        }else{
            var minHeight = Math.min.apply({},allHeight);
            var sy = getSy(minHeight,allHeight);
//            console.log(sy)
//            console.log(box.eq(i).outerWidth())
            getStyle(box.eq(i),minHeight,sy*box.eq(i).outerWidth(),i,style);
            allHeight[sy] = allHeight[sy] + box.eq(i).outerHeight();
        }
    }
}
/*瀑布流主函数 End*/
/*获得高度最小列的索引*/
function getSy(minH,allH){
    for(sy in allH){
        if(allH[sy] == minH) return sy;
    }
}
/*获得高度最小列的索引 End*/
/*请求数据加载样式*/
var getStarNum = 0;
function getStyle(boxs,top,left,index,style){
    if(index <= getStarNum){
        return;
    }
    boxs.css('position','absolute');
    switch(style){
        case 1:boxs.css({
                "top":top+$(window).height(),
                "left":left
            });
                boxs.stop().animate({
                    "top":top
                },1000);
                break;
        case 2:
            boxs.css({
                'left':left,
                'top':top,
                'opacity':0
            })
            boxs.stop().animate({'opacity':1},1000);
    }
    getStarNum = index//更新请求数据的条数位置
}
/*请求数据加载样式 End*/
/*判断请求数据的开关*/
function getDataCheck(){
    var $box = $('.box');
    var lastBoxHeight = $('.box').last().offset().top + $('.box').last().outerHeight()/2;
    var docHeight = $(window).height();
    var scrollTop = $(document).scrollTop();
    return docHeight + scrollTop > lastBoxHeight?true:false;
}
/*判断请求数据的开关 End*/
function getData(){
    var ajaxKey = false;
    $.ajax({
        type:'get',
        url:'data.php',
        data:'',
        dataType:'json',
        success:function(data){
            var $wrap = $('#pubu');
            for(var i in data){
                var boxHtml = "<div class='box'><div class='pic'><img src='"+data[i].src+"'></div></div>";
                $wrap.append(boxHtml);
            }
            waterFall('#pubu','.box',2);
        },
        complete:function(){
            ajaxKey = true;
        }
    })
}
/*ajax请求数据加载*/