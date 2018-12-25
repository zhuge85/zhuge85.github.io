// run the script with 1 iteration.
// increase here and in sass mixin include for extending styles
goldenSpiral(1);


// the initialization script
function goldenSpiral(iterations) {
    var seq = [1, 1], // initial sequence
        seq_length = seq.length, // initial size of sequence
        prev = seq_length - 1, // previous item = zero-index of last item
        iteration_size = 8, // squares per iteration
        total_count = iterations * iteration_size; // number count to generate

    // generating our fibonacci sequence
    for (var i = 0; i < (total_count - seq_length); i++) {
        // new value is sum of two previous
        a = seq[prev - 1] + seq[prev];
        // update previous number
        prev++;
        // add new to sequence
        seq.push(a);
    }

    // setting some base vars
    var h = seq[seq.length - 1],
        w = h + seq[seq.length - 2],
        // gutter around svg
        gtr = 1,
        // scale factor to shrink to size
        scale = window.innerWidth / w;

    // creating base svg
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
        // svgNS for creating svg elements
        svgNS = svg.namespaceURI;

    // svg attributes
    svg.setAttribute("class", "goldenSpiral");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    svg.setAttribute("viewBox", "0 0 " + (w * scale + gtr) + " " + (h * scale + gtr));

    // initial position/size data
    var prev_x = (gtr / 2),
        prev_y = (gtr / 2),
        prev_di = 0;
    // svg element groups
    var rects = document.createElementNS(svgNS, "g"),
        paths = document.createElementNS(svgNS, "g"),
        circles = document.createElementNS(svgNS, "g"),
        texts = document.createElementNS(svgNS, "g");

    // for each item in sequence
    for (var i = (seq.length - 1); i >= 0; i--) {

        // initial svg elements
        var rect = document.createElementNS(svgNS, "rect"),
            path = document.createElementNS(svgNS, "path"),
            circle = document.createElementNS(svgNS, "circle"),
            text = document.createElementNS(svgNS, "text"),
            di = seq[i] * scale;

        // different cases for each set of four numbers
        switch (i % 4) {
            // 21, 3
            case 3:
                x = prev_x
                y = Math.max(prev_y - di, gtr / 2)
                // arc bottom left to top right
                d = describeArc(x + di, y + di, di, 270, 360)
                // circle center bottom right
                c = [x + di, y + di, di]
                break;
                // 13, 2
            case 2:
                x = prev_x + prev_di
                y = prev_y
                // arc top left to bottom right
                d = describeArc(x, y + di, di, 0, 90)
                // circle center bottom left
                c = [x, y + di, di]
                break;
                // 8, 1
            case 1:
                x = prev_x + prev_di - di
                y = prev_y + prev_di
                // arc top right to bottom left
                d = describeArc(x, y, di, 90, 180)
                // circle center top left
                c = [x, y, di]
                break;
                // 5, 1
            case 0:
                x = prev_x - di
                y = prev_y + prev_di - di
                // arc bottom right to top left
                d = describeArc(x + di, y, di, 180, 270)
                // circle center top right
                c = [x + di, y, di]
                break;
        }

        // sizing ratio
        var ratio = di / (w * scale + gtr);

        // building text element
        text.textContent = commafy(seq[i]);
        text.setAttribute("x", x + di / 2);
        text.setAttribute("y", y + di / 2);
        text.setAttribute("font-size", ratio * 300);
        // texts.appendChild(text);

        // building rect element
        rect.setAttribute("x", x);
        rect.setAttribute("y", y);
        rect.setAttribute("width", di);
        rect.setAttribute("height", di);
        rects.appendChild(rect);

        // building path element
        path.setAttribute("d", d);
        paths.appendChild(path);

        // building circle element
        circle.setAttribute("cx", c[0]);
        circle.setAttribute("cy", c[1]);
        circle.setAttribute("r", c[2]);
        circles.appendChild(circle);

        // set previous values
        prev_x = x;
        prev_y = y;
        prev_di = di;

    }

    // master group
    master = document.createElementNS(svgNS, "g"),
        master.setAttribute("class", "master");

    // appending our elements to the master group
    master.appendChild(rects);
    master.appendChild(circles);
    master.appendChild(paths);
    master.appendChild(texts);

    // appending our master group to the svg
    svg.appendChild(master);

    // adding our svg to the dom
    // document.body.appendChild(svg);
    var div = document.getElementsByClassName('section')
    div[2].appendChild(svg);
}

// making long numbers legible (if you amplify the iteration count)
function commafy(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// brilliance on creating quarter circle arcs
// http://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
        x: centerX + (radius * Math.cos(angleInRadians)),
        y: centerY + (radius * Math.sin(angleInRadians))
    };
}

function describeArc(x, y, radius, startAngle, endAngle) {
    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);
    var arcSweep = endAngle - startAngle <= 180 ? "0" : "1";
    var d = [
        "M", start.x, start.y,
        "A", radius, radius, 0, arcSweep, 0, end.x, end.y
    ].join(" ");
    return d;
}

// signature imported from signature pen
// jakealbaughSignature("light");