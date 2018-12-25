// drag(child,parent); 调用方式
// child ，parent是jQuery对象。 child 是子元素的jQuery对象， parent 是父元素的jQuery对象。
const drag = function (child,parent) {
    child.bind("mousedown", start);
    let w1 = child.width(), //child[0].offsetWidth
        h1= child.height(), //child[0].offsetHeight
        w2 = parent.width(), //parent[0].offsetWidth
        h2= parent.height(), //parent[0].offsetHeight
        x,y,gapX,gapY;
    function start(event) {
        // let event = event || window.event;
        if (event.button == 0) {//判断是否点击鼠标左键
            gapX = event.clientX - child.offset().left + parent.offset().left;//这是计算在减去鼠标相对于子元素的偏移量后，父元素相对于屏幕的横向距离。
            gapY = event.clientY - child.offset().top + parent.offset().top;//与gapX同理
            console.log(child.offset().left +'-'+ child.offset().top)
            //movemove事件必须绑定到$(document)上，鼠标移动是在整个屏幕上的
            $(document).bind("mousemove", move);
            //此处的$(document)可以改为obj
            $(document).bind("mouseup", stop);
        }
        return false;//阻止默认事件或冒泡
    }

    function move(event) {
        console.log(child.offset().left +'-'+ child.offset().top)
        x = event.clientX - gapX; //用鼠标相对于屏幕的横向距离减去父元素相对于屏幕的横向距离
        y = event.clientY - gapY;
        // 自定义边界  子元素在父元素内移动
        if (w1 > w2) {
            // console.log(w2 - w1)
            if(x < (w2 - w1)) {
                x = w2 - w1
            }else if(x > 0){
                x = 0;
                // console.log(x)
            }
        } else {
            if(x < 0) {//限制child移出parent左端
                x = 0;
            }else if(x > (w2 - w1)) {
                x = w2 - w1;
            }
        }
        if (h1 > h2) {
            if(y < h2 - h1) {
                y = h2 - h1
            }else if(y > 0){
                y = 0 ;
            }
        } else {
            if(y < 0) {//限制child移出parent的上边界
                y = 0;
            } else if(y > ( h2  - h1 )) {
                y = h2  - h1 ;
            }
        }
        child.css({
            "left": x + "px",
            "top": y + "px"
        });
        return false;//阻止默认事件或冒泡
    }
    function stop() {
        //解绑定，这一步很必要，前面有解释
        $(document).unbind("mousemove", move);
        $(document).unbind("mouseup", stop);
    }
};
