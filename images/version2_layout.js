
// JavaScript Document

$(function () {

    headernav();
    $(window).resize(function () {
        headernav();
    });

    //-------- banner --------
    if ($(".indexbannerscroll").length > 0) {
        var mySwiper = new Swiper('.indexbannerscroll', {
            loop: true,
            autoplay: 5000,
            speed: 1000,
            pagination: '.indexbannerbtn p',
            paginationClickable: true,
            preventClicks: false,
            autoplayDisableOnInteraction: false,
            grabCursor: false,
            parallax: true

        });

    };



})

function headernav() {

    $(".showsearch").unbind("click").bind("click", function () {
        if ($(".searchwrap").is(":hidden")) {
            $(".searchwrap").fadeIn();
            $(".searchfloat01").show();
            $(".showphonenav").removeClass("closenav");
        }
        else {
            $(".searchfloat01").hide();
            $(".searchwrap01").fadeOut();
        };

    });

    $(".searchfloat01").click(function () {
        $(this).hide();
        $(".searchwrap").fadeOut();
    });

    var overflowwid = $("body").css("overflow", "hidden").width();
    var windowwid = $("body").removeAttr("style").width();
    var scrollwid = overflowwid - windowwid;


    if (windowwid + scrollwid > 991) {
        
        //-------- 导航图标 --------
        $(".navlistcont li").bind("mouseenter", function () {
            if ($(this).find("a").hasClass("cur")) {
                return false;
            }
            else {
                var whilteimg = $(this).find("span img").attr("data-newimg");
                $(this).find("span img").attr("src", whilteimg);
            };
            
        });

        $(".navlistcont li").bind("mouseleave", function () {
            if ($(this).find("a").hasClass("cur")) {
                return false;
            }
            else {
                var blackimg = $(this).find("span img").attr("data-oldimg");
                $(this).find("span img").attr("src", blackimg);
            }

        });

        if ($(".navlistcont li a").hasClass("cur")) {
            var whilteimg = $(".navlistcont li a.cur span img").attr("data-newimg");
            $(".navlistcont li a.cur span img").attr("src", whilteimg);
        };


        //-------- 移动端导航 --------
        $(".navlistcont").css("height", "auto");
        $(".navlistcont").show();
        $(".showphonenav").unbind("click");

        
    }
    else {
        $(".navlistcont").css("height", $(window).height());
        $(".navlistcont").hide();
        $(".navlistcont li").unbind("mouseenter");
        $(".navlistcont li").unbind("mouseleave");
        $(".showphonenav").unbind("click").bind("click", function () {
            if ($(".navlistcont").is(":hidden")) {
                $(this).addClass("closenav");
                $(".searchfloat01").show();
                $(".navlistcont").show();
                $(".searchwrap").hide();
            }
            else {
                $(this).removeClass("closenav");
                $(".searchfloat01").hide();
                $(".navlistcont").hide();
                $(".searchwrap").hide();
            }

        });
        


    };

}

