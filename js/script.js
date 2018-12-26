let _scroll = 0,
    _class = '',
    _id = '',
    _title = '',
    _count = 0,
    _index = 0,
    num     = 1,
    video   = document.getElementById('play'),
    bgMusic = document.getElementById('bgMusic'),
    _text = ['富强', '民主', '文明', '和谐', '自由', '平等', '公正' ,'法治', '爱国', '敬业', '诚信', '友善'];
/*
loadProces(_count += 10);
$('img').one('load', function() {
    let len = document.getElementsByTagName('img').length;
    loadProces(_count += (60 / len));
});
function loadProces(_count) {
    $('.count').each(function() {
        $(this).stop().prop('Counter', $(this).text()).animate({
            Counter: _count
        }, {
            duration: 4000,
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
}*/

//加载时触发
$(window).load(function() {
    $('html,body').scrollTop(0).addClass('hidden');
    $('body').addClass('body-bk');
    // 模拟加载进度
    $({property: 0}).animate({property: 100}, {
        duration: 3000,
        step: function() {
            let percentage = Math.round(this.property);
            $('.count').html(percentage + '%');
            $('#progress').css('width',  percentage + "%");
            if(percentage == 100) {
                $("#progress").addClass("done");
                $('.count').fadeOut(function() {
                    $('#load').removeClass('active');
                    setTimeout(function() {
                        $('#load').hide();
                        $('html,body').removeClass('hidden');
                        $('.sectionwrap > .section').eq(0).addClass('active');
                        showTime();
                        bgMusic.play();
                    }, 1000);
                });
            }
        }
    });
    // 模拟加载进度2
    // let n = 0,
    //     timer,
    //     timer2;
    // timer = setInterval(() => {
    //     $('.count').html(n + '%');
    //     n < 100 ? n += 5 : [clearInterval(timer),
    //         $('.count').fadeOut(function() {
    //             $('#load').removeClass('active');
    //             setTimeout(function() {
    //                 $('#load').hide();
    //                 $('html,body').removeClass('hidden');
    //                 $('.sectionwrap > .section').eq(0).addClass('active');
    //                 showTime();
    //                 bgMusic.play();
    //                 clearInterval(timer2);
    //             }, 1000);
    //         })
    //     ];
    // }, 50);
    // timer2 = setInterval(() => {
    //     const length = 2000;
    //     let el = $('.lod');
    //     let coordinate = '';
    //     for (let i = 0; i < length; i++) {
    //         coordinate +=
    //             parseInt(Math.random() * 10000) / 100 + '% ' +
    //             parseInt(Math.random() * 10000) / 100 + '%, ';
    //     }
    //     coordinate = 'polygon(' + coordinate.slice(0, -2) + ')';
    //     el.css('clipPath', coordinate);
    //     el.css('backgroundColor', '#' + (~~(Math.random() * (1 << 24))).toString(16));
    // }, 500);
})

//窗口变化是触发
$(window).resize(function() {
    //getheight();
})
//滚动效果
$(window).scroll(function() {
    let scrolltop = $(this).scrollTop(),
        $height = $(window).height(),
        _titleNext = '',
        _classNext = '',
        _idNext = '',
        _cases;
    if ($('#backtotop').length > 0) {
        if (scrolltop > 800) {
            $('#backtotop').addClass('showme');
        } else {
            $('#backtotop').removeClass('showme');
        }
    }
    $('.section').each(function() {
        let _top = $(this).offset().top;
        let index = $(this).index();
        let $scroll = $(window).scrollTop();
        if (scrolltop > _top - $height / 2) {
            _titleNext = $(this).attr('zhu-title');
            _classNext = $(this).attr('zhu-bg');
            _idNext = $(this).attr('zhu-id');
        }
    })
    $('.work_item:visible').each(function() {
        var _top = $(this).offset().top;
        if (scrolltop > _top - $height / 2) {
            _cases = $(this);
        }
    });
    $('.work_item').removeClass('active');
    if (_cases) _cases.addClass('active');
    if (_id != _idNext) {
        _id = _idNext;
        if (_class != _classNext) {
            _class = _classNext;
            $('body').removeClass().addClass(_class);
        }
        if (_title != _titleNext) {
            _title = _titleNext;
            $('#tips').html(_title).removeClass().addClass('text-' + $('#tips').html().length);
        }
        if (_id == 'head') {
            $('header').addClass('header-full');
        } else {
            $('header').removeClass('header-full');
        }
        if (_id == 'contact') {
            $('footer').addClass('footer_active');
        } else {
            $('footer').removeClass('footer_active');
        }
        $('.section[zhu-id=' + _id + ']').addClass('active').siblings().removeClass('active');
        if (_id == 'skills') {
            $('.section .skill .circle-svg').each(function () {
                let val  = $(this).attr('zhu-value'),
                    r    = $(this).attr('r'),
                    percent = val / 100,
                    perimeter = Math.PI * 2 * r,
                    time =50,
                    n = 0,
                    timer = setInterval(() => {
                        $(this).siblings('text').html(Math.floor(n) + '%');
                        n < val-val/time ? [n += val/time] : [clearInterval(timer),$(this).siblings('text').html(val+'%')];
                    }, time)
                // $(this).siblings('text').text(val+'%');
                $(this).css('animation-name', 'p'+val);
                // $(this).attr('stroke-dasharray', perimeter * percent + " " + perimeter * (1- percent));
            });
        } else {
            $('.section .skill .circle-svg').css('animation-name', '');
        }
    }
})
$(function() {
    let sUserAgent = navigator.userAgent.toLowerCase();
        bIsIpad = sUserAgent.match(/ipad/i) == 'ipad',
        bIsIphoneOs = sUserAgent.match(/iphone os/i) == 'iphone os',
        bIsMidp = sUserAgent.match(/midp/i) == 'midp',
        bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == 'rv:1.2.3.4',
        bIsUc = sUserAgent.match(/ucweb/i) == 'ucweb',
        bIsAndroid = sUserAgent.match(/android/i) == 'android',
        bIsCE = sUserAgent.match(/windows ce/i) == 'windows ce',
        bIsWM = sUserAgent.match(/windows mobile/i) == 'windows mobile',
        div_str = '您的浏览设备为：';

    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        div_str += '移动端';
        $('html').addClass('move');
    } else {
        div_str += '电脑端';
        $('html').addClass('computer');
    }
    let backtotop = $('<div id="backtotop"><div class="btnbg"></div></div>');
    $("body").append(backtotop);
    $('#tips').html($('.sectionwrap > *').eq(0).attr('zhu-title'));
    // 主框架添加类名
    $('.section').each(function() {
        let num = $(this).index();
        $(this).addClass('section_' + num);
    });
    // 波纹
    $('.wave').each(function() {
        $(this).on('mousedown', (e) => {
            let ball = $('<span class="wavespan"></span>'),
                left = e.pageX - $(this).offset().left,
                top = e.pageY - $(this).offset().top;
            ball.css({
                'left': left,
                'top': top
            });
            $(this).append(ball);
            ball.on('animationend', function() {
                ball.remove();
            });
        })
    });
    // 弹出文字
    $(document).on('click', function(e) {
        let $i = $('<span></span>').text(_text[_index]),
            x = e.pageX,
            y = e.pageY;
        _index = (_index + 1) % _text.length;
        $i.css({
            'z-index': 99999,
            'top': y - 20,
            'left': x,
            'position': 'absolute',
            'font-size': '20',
            'font-weight': '500',
            'color': '#fe053c',
            '-webkit-user-select': 'none',
            '-moz-user-select': 'none',
            '-ms-user-select': 'none',
            '-o-user-select': 'none',
            'user-select': 'none'
        });
        $('body').append($i);
        $i.animate({'top': y-180,'opacity': 0},1500, () => {
            $i.remove();
        });
    });
    //表单
    $('.form_close').click(function(e) {
        stopBubble(e);
        $('#form,#form .section').removeClass('active');
        $('html').removeClass('hidden');
        if ($('#form').is('.section_2')) {
            $('#form').removeClass('section_2');
            $('.section_2').addClass('active');
        } else {
            $('#form').removeClass('section_5');
            $('.section_5').addClass('active');
        }
    });
    $(document).on('click', '.button', function(e) {
        stopBubble(e);
        if ($(this).parents('section').is('.section_2')) {
            $('#form').addClass('section_2');
        } else {
            $('#form').addClass('section_5');
        }
        $(this).parents('section').removeClass('active');
        $('#form,#form .section').addClass('active');
        $('html').addClass('hidden');
    });
    $('textarea,input,#play').click(function(e) {
        stopBubble(e);
    });

    $(document).on('click', '#backtotop', function(e) {
        stopBubble(e);
        scroll(0,0);
        // $("#backtotop").addClass("launch");
        // $('html,body').animate({
        //     scrollTop: 0
        // }, 500, function() {
        //     $("#backtotop").removeClass("launch")
        // });
    })
})

//滚动按钮
const scrollan = () => {
    _scroll != -850 ? _scroll -= 50 : _scroll = 0;
    $('#scroll').css('background-position','0 ' + _scroll);
}
window.setInterval(scrollan, 50);

const getQueryVariable = variable => {
    let query = window.location.search.substring(1);
    let vars = query.split('&');
    for (let i = 0; i < vars.length; i++) {
        let pair = vars[i].split('=');
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    // return false;
}
// 设置全屏高度
const getheight = () => {
    let $height = $(window).height();
    $('.sectionwrap > *').css('height', $height);
}
video.onclick = function () {
    if (bgMusic.paused) {
        bgMusic.play();
        this.classList.remove("pause");
        this.setAttribute('zhu-value','暂停');;
    } else {
        bgMusic.pause();
        this.classList.add("pause");
        this.setAttribute('zhu-value','播放');;
    }
}
bgMusic.addEventListener('ended', function() {
    $("#play").removeClass('pause');
}, false);
