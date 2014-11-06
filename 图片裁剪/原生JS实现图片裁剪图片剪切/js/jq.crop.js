/**
 * Created by Lance on 2014/11/4.
 */
$(function(){
    $('#cropImg').load(function(){

    })
    var $crop = $('#img_div'),
        $c_t = $('#img_b1'),
        $c_l = $('#img_b2'),
        $c_r = $('#img_b4'),
        $c_b = $('#img_b5');
    var self = {};

    $crop.mousedown(function(e){
        self.t = e.pageY - $(this).offset().top;
//        self.l = e.pageX - $(this).offset().left;
        $(document).mousemove(function(){
            var t = e.pageY - self.t;
//            var l = e.pageX - self.l;
            console.log(t);
        })
    })
    var move = function(t,l){
//        console.log(t,l)
//            $c_t.height(t);
//            $c_l.width(l)
//            $c_l.position().top = t;
    }
})
