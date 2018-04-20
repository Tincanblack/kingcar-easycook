$(window).load(function() {

    //$('.scrollbars').ClassyScroll();

    //$('.aniview').AniView();


    //指定畫面滑動
    $('#nav_Btn1,.check_link-1').click(function() {
        $('html,body').animate({
            scrollTop: $('#row2').offset().top
        }, 800);
    });
    $('#nav_Btn2').click(function() {
        $('html,body').animate({
            scrollTop: $('#row1').offset().top
        }, 800);
    });
    $('.kv_btn').click(function() {
        $('html,body').animate({
            scrollTop: $('#row1').offset().top
        }, 800);
    });
    $('#nav_Btn3').click(function() {
        $('html,body').animate({
            scrollTop: $('#row3').offset().top
        }, 800);
    });
    $('#nav_Btn4,.check_link-2').click(function() {
        $('html,body').animate({
            scrollTop: $('#row4').offset().top
        }, 800);
    });


    // 取消連結虛線
    $("a").focus(function() {
        $(this).blur();
    });
    $("button").focus(function() {
        $(this).blur();
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 500);
        return false;
    });

    var $win = $(window),
        $ad = $('.sidebarBox').css('opacity', 0).show(), // 讓廣告區塊變透明且顯示出來
        _width = $ad.width(),
        _height = $ad.height(),
        _diffY = 100,
        _diffX = 60, // 距離右及上方邊距
        _moveSpeed = 800; // 移動的速度

    // 先把 .sidebarBox 移動到定點
    $ad.css({
        top: _diffY, // 往上
        left: $win.width() - _width - _diffX,
        opacity: 1
    });

    // 幫網頁加上 scroll 及 resize 事件
    $win.bind('scroll resize', function() {
        var $this = $(this);

        // 控制 .sidebarBox 的移動
        $ad.stop().animate({
            top: $this.scrollTop() + _diffY, // 往上
            left: $this.scrollLeft() + $this.width() - _width - _diffX
        }, _moveSpeed);
    }).scroll(); // 觸發一次 scroll()



    var x = 0;
    setInterval(function() {
        x += 1;
        $('.mainbody .row1').css('background-position', x + 'px 0');
    }, 40);

    var x = 0;
    setInterval(function() {
        x += 1;
        $('.mainbody .row2').css('background-position', -x + 'px 0');
    }, 40);
});
