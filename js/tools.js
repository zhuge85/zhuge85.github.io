// 阻止冒泡方法
const stopBubble = event => {
        e = event || window.event;
        if (e.stopPropagation) {
            e.stopPropagation(); //W3C阻止冒泡方法
        } else {
            e.cancelBubble = true; //IE阻止冒泡方法
        }
    },
    // 居中
    autocenter = el => {
        let pos_l = (document.body.clientWidth - el.get(0).offsetWidth) / 2,
            pos_t = (document.body.clientHeight - el.get(0).offsetHeight) / 2;
        el.css({
            'position': 'absolute',
            'top': pos_t + 'px',
            'left': pos_l + 'px'
        });
    },
    // 获取页面宽度
    getWidth = () => {
        return document.body.clientWidth;
    },
    // 获取页面高度
    getHeight = () => {
        return document.body.clientHeight;
    },
    // 小于10的数字前面加0
    checkTime = i => {
        if (i < 10) {
            i = '0' + i;
        }
        return i;
    },
     // 转化时间戳
    timestampToTime = timestamp => {
        let date;
        if(timestamp.toString().length < 13){
            date = new Date(timestamp * 1000);
        }else{
            date = new Date(timestamp);
        }
        let Y = date.getFullYear(),
            M = checkTime(date.getMonth() + 1),
            D = checkTime(date.getDate()),
            h = checkTime(date.getHours()),
            m = checkTime(date.getMinutes()),
            s = checkTime(date.getSeconds());
        // 获取时间格式 2018-12-01 10:20:30
        return Y + '-' + M + '-' + D + ' ' + h + ':' + m + ':' + s;
    },
     // 实时显示当时时间
    showTime = () => {
        let date = new Date(),
            year = date.getFullYear(),
            month = date.getMonth() + 1,
            day = date.getDate(),
            week = date.getDay(),
            h = date.getHours(),
            m = date.getMinutes(),
            s = date.getSeconds(),
            weeks = ['日', '一', '二', '三', '四', '五', '六'],
            getWeek = '星期' + weeks[week],
            nt, ot, simple;
        if (h >= 23 || h < 1) {
            nt = '子时';
            ot = '半夜';
        } else if (h >= 1 && h < 3) {
            nt = '丑时';
            ot = '凌晨';
        } else if (h >= 3 && h < 5) {
            nt = '寅时';
            ot = '黎明';
        } else if (h >= 5 && h < 7) {
            nt = '卯时';
            ot = '清晨';
        } else if (h >= 7 && h < 9) {
            nt = '辰时';
            ot = '早晨';
        } else if (h >= 9 && h < 11) {
            nt = '巳时';
            ot = '上午';
        } else if (h >= 11 && h < 13) {
            nt = '午时';
            ot = '中午';
        } else if (h >= 13 && h < 15) {
            nt = '未时';
            ot = '午后';
        } else if (h >= 15 && h < 17) {
            nt = '申时';
            ot = '下午';
        } else if (h >= 17 && h < 19) {
            nt = '酉时';
            ot = '傍晚';
        } else if (h >= 19 && h < 21) {
            nt = '戌时';
            ot = '晚上';
        } else if (h >= 21 && h < 23) {
            nt = '亥时';
            ot = '深夜';
        }
        if (h >= 3 && h < 6)
            simple = '凌晨';
        else if (h >= 6 && h < 8)
            simple = '早上';
        else if (h >= 8 && h < 11)
            simple = '上午';
        else if (h >= 11 && h < 13)
            simple = '中午';
        else if (h >= 13 && h < 17)
            simple = '下午';
        else if (h >= 17 && h < 19)
            simple = '傍晚';
        else if (h >= 18 && h < 23)
            simple = '晚上';
        else if (h >= 23 || h < 3)
            simple = '深夜';
        month = checkTime(month);
        day = checkTime(day);
        m = checkTime(m);
        s = checkTime(s);
        //ot  详细时间  nt 时辰  simple 大概时间
        let time = document.getElementById('time');
        time.innerHTML = year + '-' + month + '-' + day + ' ' + ' ' + getWeek + ' ' + '   ' + nt + '  ' + h + ':' + m + ':' + s;
        setTimeout('showTime()', 1000);
    },
    // 数字的阶乘
    factorial = x => {
        let num = 1;
        if (x == '') {
            throw new Error('请输入一个非负整数');
        } else if (isNaN(x)) {
            throw new Error('你输入的不是一个数字');
        } else if (x < 0) {
            throw new Error('不能输入负数');
        } else if(x % 1 != 0) {
            throw new Error('你输入的不是一个整数');
        } else {
            for (num; x > 1; x--) {
                num *= x;
            }
        }
        return num;
    },
    // 网页title
    htmlTitle = () => {
        let tx = ['欢迎来到我的主页~^*_*^~',
            '如果你喜欢就多看下呗！',
            '我就闪啊闪的看着你',
            '如果看到什么不对的地方',
            '记得给我留言哟'],
            txcount = tx.length,
            num = 1,
            row = 0,
            way = 1,
            timer_title;
        //定义num、row、way三者的初值
        const animatetitle = () => {
            window.document.title = tx[row].substr(0, num) + '_';
            if (way == 0) num--;
            if (way == 1) num++;
            if (num == -1) {
                way = 1;
                num = 0;
                row++;
                row = row % txcount;
            }
            if (num == tx[row].length + 10) {
                way = 0;
                num = tx[row].length;
            }

            parent.window.document.title = tx[row].substr(0, num) + '_';
            timer_title = setTimeout(animatetitle, 100);
        }
        animatetitle();
        document.addEventListener('visibilitychange', function() {
            document = document.hidden ? [clearTimeout(timer_title), document.title = '你离我而去！好伤心！'] : [timer_title = setTimeout(animatetitle, 3000), document.title = '欢迎回来！好开心！'];
        })
    },
    // 返回顶部
    backtotop = () => {
        let currentScroll = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
        if (currentScroll > 0) {
             window.requestAnimationFrame(backtotop);
             window.scrollTo (0,currentScroll - (currentScroll/5));
        }
    },
     // 复制
    CreateElementForExecCommand = textToClipboard => {
        let forExecElement = document.createElement("div");
        // place outside the visible area
        forExecElement.style.position = "absolute";
        forExecElement.style.left = "-10000px";
        forExecElement.style.top = "-10000px";
        // write the necessary text into the element and append to the document
        forExecElement.textContent = textToClipboard;
        document.body.appendChild(forExecElement);
        // the contentEditable mode is necessary for the  execCommand method in Firefox
        forExecElement.contentEditable = true;
        return forExecElement;
    },
    SelectContent = element => {
        // first create a range
        let rangeToSelect = document.createRange();
        rangeToSelect.selectNodeContents(element);
        // select the contents
        let selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(rangeToSelect)
    },
    CopyToClipboard = input => {
        let textToClipboard = input;
        let success = true;
        if (window.clipboardData) {
            // Internet Explorer
            window.clipboardData.setData("Text", textToClipboard);
        } else {
            // create a temporary element for the execCommand method
            let forExecElement = CreateElementForExecCommand(textToClipboard);

            SelectContent(forExecElement);

            let supported = true;
            // UniversalXPConnect privilege is required for clipboard access in Firefox
            try {
                if (window.netscape && netscape.security) {
                    netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
                }
                // Copy the selected content to the clipboard
                // Works in Firefox and in Safari before version 5
                success = document.execCommand("copy", false, null);
            } catch (e) {
                success = false;
            }
            // remove the temporary element
            document.body.removeChild(forExecElement);
        }
        if (success) {
            // s.log("The text is on the clipboard, try to paste it!");
        } else {
            alert("Your browser doesn't allow clipboard access!");
        }
    },
    //  浏览器
    myBrowser = () => {
        var Sys = {};
        var ua = navigator.userAgent.toLowerCase();
        var re =/(msie|firefox|chrome|opera|version).*?([\d.]+)/;
        var m = ua.match(re);
        Sys.browser = m[1].replace(/version/, "'safari");
        Sys.ver = m[2];
        return Sys;
    },
    // 设备
    equipment = () => {
        if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
            return 'ios';
        } else if (/(Android)/i.test(navigator.userAgent)) {
            return 'Android';
        } else if (/(Linux)/i.test(navigator.userAgent)) {
            return 'Linux';
        } else {
            return 'pc端';
        }
    },
    // 
    fadeIn = (el, display) => {
        if (el.classList.contains('is-hidden')){
            el.classList.remove('is-hidden');
        }
        el.style.opacity = 0;
        el.style.display = display || "block";

        (function fade() {
            var val = parseFloat(el.style.opacity);
            if (!((val += .1) > 1)) {
                el.style.opacity = val;
                requestAnimationFrame(fade);
            }
        })();
    },
    // 
    fadeOut = el => {
        el.style.opacity = 1;

        (function fade() {
            if ((el.style.opacity -= .1) == 0) {
                el.style.display = 'none';
                el.classList.add('is-hidden');
            } else {
                requestAnimationFrame(fade);
            }
        })();
    },
    // 禁止右键
    contextMenu = () => {
        document.body.oncontextmenu = function() {
            return false;
        }
    },
    // 禁止查看
    noSee = () => {
        document.body.onkeydown = function(e) {
            let event  = e || window.event;
            // console.log(event.keyCode);
            if (event && event.keyCode == 123) {// f12
                event.returnValue = false;
                alert('不许F12');
            }
            if (event.shiftKey && event.keyCode == 121) {// s + f10
                event.returnValue = false;
                alert('不许shift+F10');
            }
            if (event.ctrlKey && event.keyCode == 85) {// c + u
                event.returnValue = false;
                alert('不许ctrl+u');
            }
            if (event.shiftKey&& event.ctrlKey && event.keyCode == 73) {// c + s + i
                event.returnValue = false;
                alert('不许ctrl+shift+i');
            }
            if (event.shiftKey && event.ctrlKey && event.keyCode == 67) {// c + s + c
                event.returnValue = false;
                alert('不许ctrl+shift+c');
            }
        }
    },
    // 元素是否拥有某个class
    hasClass = (element, cls) => {
        return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
    };