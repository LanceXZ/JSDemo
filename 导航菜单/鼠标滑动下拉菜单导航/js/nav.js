/**
 * Created by Administrator on 2014/10/29.
 */
$(function(){
    var $menu = $(".menu"),
        $menuLi = $menu.find("li"),
        $current = $menu.find('.current'),
        $li_3 = $menu.find('li.li_3'),
        $li_3_content = $li_3.find('.li_3_content');

    $menuLi.hover(function () {
        var $this = $(this),
            index = $menuLi.index($this),
            current = $menuLi.index($(".first")),
            len = current - index;
//        $menu.css("background-position", (101 * current) + "px" + " bottom");
        $menuLi.removeClass("first");
        $this.addClass("first");
        if (len < 0) { len = -len; };
        if (index != 4) {
            $menu.stop().animate({ backgroundPosition: (101 * index) + "px" + " bottom" }, 100 * len);
        }
        else {
            $menu.stop().animate({ backgroundPosition: (101 * index + 30) + "px" + " bottom" }, 100 * len);
        }
    })
    $menu.mouseleave(function () {
        var $this = $(this),
            index = $menuLi.index($this),
            current = $menuLi.index($current),
            len = current - index;
        $menuLi.removeClass("first");
        $current.addClass("first");
        if (len <= 0) { len = -len; };
        $menu.stop().animate({ backgroundPosition: (100 * current + 1) + "px" + " bottom" }, 100 * len);
    });

    $li_3.hover(function () {
        $li_3_content.stop(true, true).fadeIn(0);
    }, function () {
        $li_3_content.fadeOut(500);
    });
})