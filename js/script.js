/*var _count = 0;
loadProces(_count += 10);
$("img").one("load", function() {
    var len = document.getElementsByTagName('img').length;
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
    var n = 0,num = 0,txt1 = 'soon',txt2 = 'slow',con,
    timer = setInterval(()=>{
        $('.count').html(n+'%');
        n < 100 ? n += 1 : [clearInterval(timer),
        $('.count').fadeOut(function() {
            $('#load').removeClass('active'),
            setTimeout(function() {
                $('#load').hide();
                $('html,body').removeClass('hidden');
            },1000);
            setTimeout(function() {
                timer2  = setInterval(()=>{
                    num ? [num = 0,con = txt1] : [num = 1,con = txt2];
                    $('#cons').html(con);
                },1000);
            },5000);
        })
      ];
    },50);
    

    //getheight();
    /*$('.count').each(function() {
        $(this).stop().prop('Counter', $(this).text()).animate({
            Counter: 100
        }, {
            duration: 4000,
            step: function(now) {
                $(this).text(Math.ceil(now));
                if (now == 100) {
                    $(this).fadeOut(function() {
                        $('#load').removeClass('active');
                        setTimeout(function() {
                            $('#load').hide();
                            $("img.img_cases").each(function() {
                                var src = $(this).data('src');
                                $(this).attr('src', src);
                            });
                            $('html,body').removeClass('hidden');
                            if (render) {
                                if (window.location.hash) {
                                    $('html,body').animate({
                                        scrollTop: $(window.location.hash).offset().top
                                    })
                                }
                                time();
                                // resize();
                                //canvas.setAttribute('width', docWidth);
                            }
                        }, 1000)
                    });
                }
            }
        });
    });*/
})
//窗口变化是触发
$(window).resize(function() {
    //getheight();
})
//滚动效果
$(window).scroll(function() {
    var scrolltop = $(this).scrollTop(),
        $height = $(window).height();
    //回到顶部按钮存在时 且距顶部大于200 出现
    if ($('#backtotop').length > 0) {
        if (scrolltop > 200) {
            $('#backtotop').addClass('showme');
        } else {
            $('#backtotop').removeClass('showme');
        }
    }
    //浮动块存在时 距顶部的距离 减去 导航的局 小于等于 滚动距离 时 浮动
    if ($('.container .aside').length > 0) {
        if (scrolltop >= theTarget - theHeader + 100) {
            $('.container .aside').addClass('fixed');
            /*$('.container .aside').css({
                'position': 'fixed',
                'top': '1.6rem'
            });*/
        } else if (scrolltop < theTarget) {
            $('.container .aside').removeClass('fixed');
            /*$('.container .aside').css({
                'position': 'inherit',
                'top': ''
            });*/
        }
    }

})
$(function() {
    var backtotop = $('<div id="backtotop"><div class="btnbg"></div></div>');
    $("body").append(backtotop);
    $(document).on('click', '#backtotop', function() {
        $("#backtotop").addClass("launch");
        $('html,body').animate({
            scrollTop: 0
        }, 500, function() {
            $("#backtotop").removeClass("launch")
        });
    })
    
    $('.wave').each(function(){
        $(this).on('mousedown',function(e){
            var ball = $('<span class="wavespan"></span>'),
                left=e.pageX-$(this).offset().left,
                top=e.pageY-$(this).offset().top;
            ball.css({'left':left,'top':top});
            $(this).append( ball );
            ball.on('animationend',function(){
                ball.remove();
            });//每次在执行完动画把“水波”从文档中移出
        })
    })
})
$(document).scroll(function() {
    $('.section').each(function(){
        var $leavetop = $(this).offset().top-100;
        var index     = $(this).index();
        var $height   = $(this).outerHeight(true);
        var $scroll    = $(window).scrollTop()
        if($leavetop+$height>$scroll){
            if($height>$scroll-$leavetop){
               $('.section').removeClass('active').eq($(this).index()).addClass('active');
               return false;
            }
        }
    })
    /*var docHeight = $(window).height(),
        docScroll = $(window).scrollTop(),
        _classNext = '';
    $('.section').each(function() {
        var _top = $(this).offset().top;
        //console.log(_top,docScroll)
        if (docScroll > _top) {
            //$('.section').removeClass('active');
            //$(this).addClass('active')
            _classNext = $(this).attr('class');
            console.log(_classNext)
        }
        
    });*/
})
$(document).ready(function() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";

    var div_str = "您的浏览设备为：";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        div_str += "移动端";
        $('html').addClass('move');
    } else {
        div_str += "pc";
        $('html').addClass('computer');
    }
    $('.section').each(function() {
        var num =$(this).index();
        $(this).addClass('section_'+num);
    })
});

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return (false);
}

function timestampToTime(timestamp) {
    var date = new Date(timestamp * 1000),
        Y = date.getFullYear(),
        M = checkTime(date.getMonth() + 1),
        D = checkTime(date.getDate()),
        h = checkTime(date.getHours()),
        m = checkTime(date.getMinutes()),
        s = checkTime(date.getSeconds());
    return Y + '-' + M + '-' + D; //+' '+h+':'+m+':'+s;
}

function checkTime(i) {
    if (i < 10) {
        i = '0' + i
    };
    return i;
}
function getheight(){
    var $height = $(window).height();
    console.log($height);
    $('.section').css('height',$height);
}