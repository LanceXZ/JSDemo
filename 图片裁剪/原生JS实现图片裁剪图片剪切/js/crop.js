/**
 * Created by Administrator on 2014/11/3.
 */
function img_sf(simg) {
    var db = document.body;
    var img1 = document.getElementById('img_1');
    var img2 = document.getElementById('img_2');
    var img3 = document.getElementById('img_3');
    var bl = [1, 120 / 50, 120 / 24];
    var div = document.getElementById('img_b3');
    var d_t = document.getElementById('img_b1');
    var d_y = document.getElementById('img_b4');
    var d_x = document.getElementById('img_b5');
    var d_l = document.getElementById('img_b2');
    var self = {};
    var iwh = Math.min(simg.height, simg.width);
    var sf = document.getElementById('img_dsf');
    hw();
    yd(div.offsetTop, div.offsetLeft);
    div.onmousedown = function (e) {
        var e = e || event;

        self.x = e.clientX - this.offsetLeft;
        self.y = e.clientY + document.documentElement.scrollTop - this.offsetTop;
        try {
            e.preventDefault();
        } catch (o) {
            e.returnValue = false;
        }
        document.onmousemove = function (e) {
            var e = e || event;
            var t = e.clientY + document.documentElement.scrollTop - self.y;
            var l = e.clientX - self.x;
            t = Math.max(t, 0);
            l = Math.max(l, 0);
            t = Math.min(t, simg.height - div.offsetHeight);
            l = Math.min(l, simg.width - div.offsetWidth);
            yd(t, l);
        }
    }

    sf.onmousedown = div.onmouseup = function () {
        document.onmousemove = '';
    }

    sf.onmousedown = function (e) {
        var e = e || event;
        self.x = e.clientX - this.offsetLeft;
        self.y = e.clientY + document.documentElement.scrollTop - this.offsetTop;
        try {
            e.preventDefault();
        } catch (o) {
            e.returnValue = false;
        }
        try {
            e.stopPropagation();
        } catch (o) {
            e.cancelBubble = true;
        }
        document.onmousemove = function (e) {
            var e = e || event;
            var t = e.clientY + document.documentElement.scrollTop - self.y;
            var l = e.clientX - self.x;
            l = Math.max(t, l);
//            console.log(l)
            l = l > iwh ? iwh : l;
            sff(l, l);
        }
    }

    function sff(t, l) {
        sf.style.top = t + 'px';
        sf.style.left = l + 'px';
        div.style.width = (l + 10) + 'px';
        div.style.height = (t + 10) + 'px';
        yd(div.offsetTop, div.offsetLeft);
        var w = div.offsetWidth;
        bl = [w / 120, w / 50, w / 24];
        hw();
//        db.imgh = l + 10;
    }

    function yd(t, l) {
        d_t.style.height = t + 'px';
        d_x.style.height = 420 - t - div.offsetHeight + 'px';
        d_l.style.top = d_y.style.top = div.style.top = t + 'px';
        d_l.style.width = div.style.left = l + 'px';
        d_y.style.width = 420 - l - div.offsetWidth + 'px';
        d_l.style.height = d_y.style.height = div.offsetHeight + 'px';
        img1.style.top = -t / bl[0] + 'px';
        img1.style.left = -l / bl[0] + 'px';
        img2.style.top = -t / bl[1] + 'px';
        img2.style.left = -l / bl[1] + 'px';
        img3.style.top = -t / bl[2] + 'px';
        img3.style.left = -l / bl[2] + 'px';
        db.xy = [t, l];
    }

    function hw() {
        img1.height = simg.height / bl[0];
        img1.width = simg.width / bl[0];
        img2.height = simg.height / bl[1];
        img2.width = simg.width / bl[1];
        img3.height = simg.height / bl[2];
        img3.width = simg.width / bl[2];
    }
}