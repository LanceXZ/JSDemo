$(document).ready(function () {
    var deg = 0;
    /* 所有图片存储到一个变量 */
    var images = $('#stage img').removeClass('default').addClass('animationReady');
    var dim = { width: images.width(), height: images.height()};

    var cnt = images.length;

    /* 找到动画的中心容器位置 */
    var centerX = $('#stage').width() / 2;
    var centerY = $('#stage').height() / 2 - dim.height / 2;
//    console.log(centerX,centerY)

    // Running the animation once at load time (and moving the iPhone into view):
    rotate(10, 360 / cnt);

    function rotate(step, total) {
        // 这个函数遍历所有的手机图片,旋转　　
        // “一步”度在此实现(10),直到总已达到0

        /* Increment the degrees: */
        deg += step;

        var eSin, eCos, newWidth, newHeight, q;

        /* Loop through all the images: */
        for (var i = 0; i < cnt; i++) {

            /* 计算正弦和余弦的第i个图片*/

            q = ((360 / cnt) * i + deg) * Math.PI / 180;
            eSin = Math.sin(q);
            eCos = Math.cos(q);

            /*
             /	正弦值,我们可以计算垂直运动,和余弦　　将给我们的水平运动。
             */

            q = (0.6 + eSin * 0.4);
            newWidth = q * dim.width;
            newHeight = q * dim.height;

            /*
             /	我们使用计算正弦值的范围(1 - 1) 　　/计算透明度和z - index。前面的图像有一个正弦值　　/ 1,最后面的一个正弦值为1。
             */

            images.eq(i).css({
                top: centerY + 15 * eSin,
                left: centerX + 200 * eCos,
                opacity: 0.8 + eSin * 0.2,
                marginLeft: -newWidth / 2,
                zIndex: Math.round(80 + eSin * 20)
            }).width(newWidth).height(newHeight);
        }

        total -= Math.abs(step);
        if (total <= 0) return false;

        // Setting the function to be run again in 40 seconds (equals to 25 frames per second):
        setTimeout(function () {
            rotate(step, total)
        }, 40);

    }


    $('#phoneCarousel .previous').click(function () {
        // 360/cnt lets us distribute the phones evenly in a circle
        rotate(-10, 360 / cnt);
    });

    $('#phoneCarousel .next').click(function () {
        rotate(10, 360 / cnt);
    });
    $('#phoneCarousel .previous,#phoneCarousel .next').hover(function () {
        clearInterval(timer);
    }, function () {
        timer = setInterval(function () {
            rotate(10, 360 / cnt);
        }, 4000);
    });
    var timer = null;
	timer=setInterval(function(){rotate(10,360/cnt);},4000);
}); 