let s = window.console || {log: function(i) {console.log(i)}, info: function(i) {console.info(i)}},
    t,
    MBrowser = equipment() == 'ios' ? {browser:"Safair",ver:"未知"} : myBrowser(),
    cl = ['color:#95A5A6;', 'color:#3498DB;', 'color:#fd6a7f;', 'color:#89d04f;', 'color:#fff;'],
    fz = ['font-size:50px;','font-size:60px;'],
    ff = ['font-family: verdana;','font-family: arial;','font-family: helveltica;'],
    sc = ['#09b3cd', '#f15928', '#8cc540', '#92278f', '#f46523', '#3f51b5', '#fbC02d', '#09b3cd', '#8cc540'],
    tc = ['color:#09b3cd;', 'color:#f15928;', 'color:#8cc540;', 'color:#92278f;', 'color:#f46523;', 'color:#3f51b5;', 'color:#fbC02d;', 'color:#09b3cd;', 'color:#8cc540;'],
    sd = ['0px 1px 0px ', '0px 2px 0px ', '0px 3px 0px ', '0px 4px 0px ', '0px 5px 0px ', '0px 6px 0px ', '0px 7px 0px ', '0px 8px 7px '],
    zh = ['padding:15px 10px;margin:10px 5px;line-height:70px;font-size:14px;border-radius: 4px;','33423939500@qq.com'],
    m = '<aside><section class="musicbox aside-item"><dl><dt class="art"><img src="http://zhujianbo.cn/icon/c1.jpg"></dt><dd class="icon-song"><span></span>程序员版《成都》</dd><dd class="icon-artist"><span></span>演唱：戴秋平</dd><dd class="icon-change">切换男版</dd><dd><audio src="http://zhujianbo.cn/mp3/song.mp3" controls=""></audio></dd></dl></section></aside>';

function a() {
    s.info("%c你好，打开Console是想更加了解我吗？那就如你所愿 ^-^", cl[1] + "font-weight: bold;"),
    s.info("%c" + MBrowser.browser + "的版本是：" + MBrowser.ver, cl[2]),
    s.info("%c你正使用" + equipment(), cl[0]),
    setTimeout(function() {
        s.log("%cZ%cH%cU %cJ%cI%cA%cN %cB%cO",
            fz[0] + tc[0] + ff[0] + 'text-shadow:' + sd[0] + sc[0] + ',' + sd[1] + sc[0] + ',' + sd[2] + sc[0] + ',' + sd[3] + sc[0] + ',' + sd[4] + sc[0] + ',' + sd[5] + sc[0] + ',' + sd[6] + sc[0] + ',' + sd[7] + sc[0],
            fz[0] + tc[1] + ff[0] + 'text-shadow:' + sd[0] + sc[1] + ',' + sd[1] + sc[1] + ',' + sd[2] + sc[1] + ',' + sd[3] + sc[1] + ',' + sd[4] + sc[1] + ',' + sd[5] + sc[1] + ',' + sd[6] + sc[1] + ',' + sd[7] + sc[1],
            fz[1] + tc[2] + ff[1] + 'text-shadow:' + sd[0] + sc[2] + ',' + sd[1] + sc[2] + ',' + sd[2] + sc[2] + ',' + sd[3] + sc[2] + ',' + sd[4] + sc[2] + ',' + sd[5] + sc[2] + ',' + sd[6] + sc[2] + ',' + sd[7] + sc[2],
            fz[0] + tc[3] + ff[0] + 'text-shadow:' + sd[0] + sc[3] + ',' + sd[1] + sc[3] + ',' + sd[2] + sc[3] + ',' + sd[3] + sc[3] + ',' + sd[4] + sc[3] + ',' + sd[5] + sc[3] + ',' + sd[6] + sc[3] + ',' + sd[7] + sc[3],
            fz[0] + tc[4] + ff[0] + 'text-shadow:' + sd[0] + sc[4] + ',' + sd[1] + sc[4] + ',' + sd[2] + sc[4] + ',' + sd[3] + sc[4] + ',' + sd[4] + sc[4] + ',' + sd[5] + sc[4] + ',' + sd[6] + sc[4] + ',' + sd[7] + sc[4],
            fz[0] + tc[5] + ff[0] + 'text-shadow:' + sd[0] + sc[5] + ',' + sd[1] + sc[5] + ',' + sd[2] + sc[5] + ',' + sd[3] + sc[5] + ',' + sd[4] + sc[5] + ',' + sd[5] + sc[5] + ',' + sd[6] + sc[5] + ',' + sd[7] + sc[5],
            fz[0] + tc[6] + ff[0] + 'text-shadow:' + sd[0] + sc[6] + ',' + sd[1] + sc[6] + ',' + sd[2] + sc[6] + ',' + sd[3] + sc[6] + ',' + sd[4] + sc[6] + ',' + sd[5] + sc[6] + ',' + sd[6] + sc[6] + ',' + sd[7] + sc[6],
            fz[0] + tc[7] + ff[0] + 'text-shadow:' + sd[0] + sc[7] + ',' + sd[1] + sc[7] + ',' + sd[2] + sc[7] + ',' + sd[3] + sc[7] + ',' + sd[4] + sc[7] + ',' + sd[5] + sc[7] + ',' + sd[6] + sc[7] + ',' + sd[7] + sc[7],
            fz[0] + tc[8] + ff[2] + 'text-shadow:' + sd[0] + sc[8] + ',' + sd[1] + sc[8] + ',' + sd[2] + sc[8] + ',' + sd[3] + sc[8] + ',' + sd[4] + sc[8] + ',' + sd[5] + sc[8] + ',' + sd[6] + sc[8] + ',' + sd[7] + sc[8])
    }, 1e3),
    setTimeout(function() {
        s.log('\n我是小朱 致力于 - %cWeb前端', 'font-weight: bold;' + cl[2])
    }, 1500),
    setTimeout(function() {
        s.log('我的愿景是：%c成为地球卓越的Web前端人才', 'font-weight: bold;' + cl[2])
    }, 2e3),
    window._start
}

function b() {
    if (!bgMusic.paused) {
        bgMusic.pause();
        $('#bgMusic,#play').addClass('pause');
    }
    $('body').append(m), $(".musicbox audio")[0].play();
    $(".musicbox audio")[0].addEventListener('ended', function() {
        $(".musicbox").remove();
        $('.music audio.pause').length ? [$('.music audio').removeClass('pause'),bgMusic.play()] : '';
        s.log("一遍不过瘾再来一遍，%c(ok)", cl[2])
    }, false);
} //function b(){let m = new Audio;m.src = "mp3/song.mp3",m.play()}
function c() {
    let ot = ['赶紧拿起手机扫一扫！等你飞起！✈✈✈✈', '↓↓ 请输入关键词 ↓↓', '♥♥♥♥♥ 赶紧扫一扫 ♥♥♥♥♥', '↗↗↗↗↗↗', '♥♥♥♥♥']
    kw = [
            '%c我要福利%c我要收你%c我就看看%c我要听歌%c\n输入以上关键词即可查看',
            'background-' + cl[1] + cl[4] + zh[0],
            'background-' + cl[2] + cl[4] + zh[0],
            'background-' + cl[3] + cl[4] + zh[0],
            'background-' + tc[0] + cl[4] + zh[0],
            ''
        ],
        fl = [
            '%c\n%c',
            'padding:208px 150px;margin:20px 20px 20px 0;line-height:456px;background:#f5f5f5 url("http://zhujianbo.cn/icon/m1.jpg") no-repeat;background-size:100%;',
            'padding:208px 150px;margin:20px 0;line-height:456px;background:#f5f5f5 url("http://zhujianbo.cn/icon/m2.jpg") no-repeat;background-size:100%;',
            '\n一想到别人家的美女程序员，可以从白天到深夜，一直都可以都陪着撸%c代码%c㊣%c再次输入‘我要福利’ 嘘嘘~~',
            '\n%c\n',
            'padding:145px 250px;margin:20px 0;line-height:330px;background:#f5f5f5 url("http://zhujianbo.cn/icon/m3.jpg") no-repeat;background-size:100%;',
            '\n这是最后一张了，再也没有更多%c妹子了',
            '太贪心吧,不给你看了！想要看更多，就把我带走吧，我会扮妹子的，嘿嘿嘿~~~~\n招聘书砸向这里:342393950@qq.com/*(%c☑已复制到剪贴板)*/',
            '%c如果看不到呢，请升级到浏览器最新版本'
        ],
        zp = [
            '%c%c',
            'margin:20px 20px 20px 0;padding:96px;line-height:192px;background:url("http://zhujianbo.cn/icon/wechat.gif") no-repeat center center;background-size:100%;',
            'margin:20px 20px 20px 0;padding:96px;line-height:192px;background:url("http://zhujianbo.cn/icon/qq.gif") no-repeat center center;background-size:100%;',
            '       ↑↑↑微信号↑↑↑',
            '                        ↑↑↑QQ号↑↑↑',
            '赶紧拿起手机扫一扫！等你飞起！✈✈✈✈',
            '不废话，赶快联系我吧，我已经等很久的咯！\n快速卖身通道： %c' + zh[1] + '%c /*(☑已复制到剪贴板)*/',
        ],
        kk = [
            '%c技术文章，卖力的逗逼在等着你',
            '%c%c',
            '',
            'padding:80px;line-height:160px;background:url("http://zhujianbo.cn/icon/web.gif") no-repeat center center;background-size:100%;',
            '     ↑↑↑个人微博↑↑↑',
        ],
        tg = [
            '%c我在这里等候多时啦！快带上耳机或者打开你的音响，来享受音乐的魅力。',
            '%cAlloyTeam首张单曲，专为Coder打造。程序员版《成都》送给你，喜欢的朋友们点一波赞666',
            '%c↘↘手机扫一扫，音乐不会跑♬♬♫♫♩♪♫♪♬，好听的歌曲与朋友们一起分享吧',
            '%c独乐乐，不如众乐乐，带上你的伙伴一起来听歌吧',
            '%c程序员版《成都》再一次送给你，朋友们点一波赞666',
        ],
        as = [
            '…^-^…，哎呀真是太好啦！那么你进来想干什么呢!还有神曲哦~哦~哦~欧巴刚弄死代儿。。。',
            '还椰丝呢，快输入关键词吧',
            '嘴上说不，心里却想，这不对呀，记得要改！不管怎样，还是给你几个关键词，输入有惊喜哦✉，还有神曲哦!',
            '还no呢，快输入关键词吧',
            '那么，请以%c★代码的名义★%c告诉我，你愿意了解小朱吗%c(yes or no)%c?',
        ]
    t = 0, k = 0;
    p("yes", function() {
            return k < 1 ? [s.log(as[0]),
                s.log(kw[0], kw[1], kw[2], kw[3], kw[4], kw[5])
            ] : k < 2 ? [s.log(as[1]),
                s.log(kw[0], kw[1], kw[2], kw[3], kw[4], kw[5])
            ] : s.log('你怎么迷迷糊糊的呢，不是告诉过你啦，你都问了' + k + '次了，赶快快输入吧~~~~' + kw[0], kw[1], kw[2], kw[3], kw[4], kw[5]), k++, ot[1]
        }),
        p("no", function() {
            return k < 1 ? [s.log(as[2]),
                    s.log(kw[0], kw[1], kw[2], kw[3], kw[4], kw[5])
                ] : k < 2 ? [s.log(as[3]),
                    s.log(kw[0], kw[1], kw[2], kw[3], kw[4], kw[5])
                ] : s.log('你就是来抬杠的，' + k + '次了，呜哈哈哈哈哈哈哈~~~~'),
                k++, ot[1]
        }),
        p("我要福利", function() {
            return t < 1 ? [s.log(fl[0], fl[1], fl[2]), s.log(fl[3], cl[0], cl[1], cl[0])] : t < 2 ? [s.log(fl[4], fl[5]),
                    s.log(fl[6], cl[0])
                ] : [s.log(fl[7], cl[0]), CopyToClipboard(zh[1])],
                t < 2 ? s.log(fl[8], cl[0]) : '', t++, ot[4]
        }),
        p("我要收你", function() {
            return CopyToClipboard(zh[1]),
                s.log(zp[0], zp[1], zp[2]),
                s.log(zp[3], zp[4]),
                s.log(zp[5]),
                s.log(zp[6], cl[2], cl[0]), ot[3]
        }),
        p("我就看看", function() {
            return s.log(kk[0], cl[1]),
                s.log(kk[1], kk[2], kk[3]),
                s.log(kk[4]), ot[0]
        }),
        p("我要听歌", function() {
            return b(),
                s.log(tg[0], cl[1]),
                s.log(tg[1], cl[1]),
                s.log(tg[2], cl[2]),
                ot[2]
        }),
        p("ok", function() {
            return b(),
                s.log(tg[3], cl[1]),
                s.log(tg[4], cl[1]),
                s.log(tg[2], cl[2]),
                ot[2]
        }),
        p("_start", function() {
            return setTimeout(function() {
                s.log(as[4], cl[2] + "font-weight:bold;", "", cl[2], "")
            }, 2500), ""
        })
}

function p(t, o) {
    Object.defineProperty(window, t, {
        get: o
    })
}

(function() {
    let so = {};
    Object.defineProperty(so, "m", {
        get: function() {
            c(), a()
        }
    }),
    s.log("%c", so.m)
}());

$("body").on("click", ".musicbox .icon-change", function() {
    $(this).html() == "切换男版" ? [$(this).next().children("audio").attr("src", "https://zhuge85.github.io/mp3/song-man.mp3"), $(this).html("切换女版"), $(this).prev().html("演唱：黄放")] : [$(this).next().children("audio").attr("src", "https://zhuge85.github.io/mp3/song.mp3"), $(this).html("切换男版"), $(this).prev().html("演唱：戴秋平")];
    $(this).next().children("audio")[0].play();
})
