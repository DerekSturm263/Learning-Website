var problem1Answers = [0, 0];
var problem2Answers = [0, 0];

document.addEventListener('DOMContentLoaded', function() {
    generateExample(3, 4, 'example', 'canvas1');
    problem1Answers = generateProblem1(1, 10, 1, 10, 'practice1', 'canvas2');
    problem2Answers = generateProblem2(1, 10, 1, 10, 'practice2', 'canvas3');
}, false);

function setText(id, text) {
    const element = document.getElementById(id);
    element.innerHTML = text;
}

function drawTriangle(id, pointA, pointB, pointC) {
    const canvas = document.getElementById(id);
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.beginPath();
        ctx.moveTo(pointA[0], pointA[1]);
        ctx.lineTo(pointB[0], pointB[1]);
        ctx.lineWidth = 5;
        ctx.strokeStyle = "#0000FF";
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(pointB[0], pointB[1]);
        ctx.lineTo(pointC[0], pointC[1]);
        ctx.lineWidth = 5;
        ctx.strokeStyle = "#FF00FF";
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(pointC[0], pointC[1]);
        ctx.lineTo(pointA[0], pointA[1]);
        ctx.lineWidth = 5;
        ctx.strokeStyle = "#FF0000";
        ctx.stroke();
    }
}

function generateExample(a, b, id, id2) {
    let c = getHypotenuse(a, b);

    setText(id, "<span style='color: red'>Leg a: " + a + "</span><br /><span style='color: blue'>Leg b: " + b + "</span><br /><span style='color: mediumpurple'>Hypotenuse: <b>" + c + "</span></b><br /><br />To get the length of the hypotenuse, we take the length of <span style='color: red'>Leg a(" + a + ")</span> and square it, then take the length of <span style='color: blue'>Leg b(" + b + ")</span> and square it, which gives us <span style='color: red'>" + a * a + "</span> and <span style='color: blue'>" + b * b + "</span>, respectively. If you add those together, you get <span style='color: mediumpurple'>" + c * c + "</span>, and then all that's left to do is square root that number to get <span style='color: mediumpurple'>" + c + "</span>.");
    drawTriangle(id2, [20 * a, 20 * b], [20 * a, 0], [0, 20 * b]);
}

function generateProblem1(minA, maxA, minB, maxB, id, id2) {
    let a = (Math.random() * maxA + minA).toFixed(3);
    let b = (Math.random() * maxB + minB).toFixed(3);

    setText(id, "<span style='color: red'>Leg a: " + a + "</span><br /><span style='color: blue'>Leg b: " + b + "</span><br /><span style='color: mediumpurple'>Hypotenuse: <b>?</span></b>");
    drawTriangle(id2, [maxA * a, maxB * b], [maxA * a, 0], [0, maxB * b]);

    return [a, b];
}

function setAnswer1(a, b, id) {
    let c = getHypotenuse(a, b).toFixed(3);
    setText(id, "<span style='color: red'>Leg a: " + a + "</span><br /><span style='color: blue'>Leg b: " + b + "</span><br /><span style='color: mediumpurple'>Hypotenuse: <b>" + c + "</span></b>");
}

function getHypotenuse(a, b) {
    let c = Math.sqrt(a * a + b * b);
    return c;
}

function generateProblem2(min1, max1, minC, maxC, id, id2) {
    if (Math.random() > 0.5) {
        return generateProblem2a(min1, max1, minC, maxC, id, id2);
    } else {
        return generateProblem2b(min1, max1, minC, maxC, id, id2);
    }
}

function setAnswer2a(ab, c, id) {
    let ba = getLeg(ab, c).toFixed(3);;
    setText(id, "<span style='color: red'>Leg a: " + ab + "<br />b: " + ba + ", c: " + c + ")");
}

function setAnswer2a(ab, c, id) {
    let ba = getLeg(ab, c).toFixed(3);;
    setText(id, "<span style='color: red'>Leg a: " + ab + "<br />b: " + ba + ", c: " + c + ")");
}

function generateProblem2a(minB, maxB, minC, maxC, id, id2) {
    let b = (Math.random() * maxB + minB).toFixed(3);
    let c = (Math.random() * maxC + minC).toFixed(3) + b;
    let a = getLeg(b, c);

    setText(id, "<span style='color: red'>Leg a: <b>?</b></span><br /><span style='color: blue'>Leg b: " + b + "</span><br /><span style='color: mediumpurple'>Hypotenuse: " + c + "</span>");
    drawTriangle(id2, [maxB * a, maxB * b], [maxB * a, 0], [0, maxB * b]);

    return [b, c];
}

function generateProblem2b(minA, maxA, minC, maxC, id, id2) {
    let a = (Math.random() * maxA + minA).toFixed(3);
    let c = (Math.random() * maxC + minC).toFixed(3) + a;
    let b = getLeg(a, c);

    setText(id, "<span style='color: red'>Leg a: " + a + "</span><br /><span style='color: blue'>Leg b: <b>?</b></span><br /><span style='color: mediumpurple'>Hypotenuse: " + c + "</span>");
    drawTriangle(id2, [maxA * a, maxA * b], [maxA * a, 0], [0, maxA * b]);

    return [a, c];
}

function getLeg(ab, c) {
    let ba = Math.sqrt(c * c - ab * ab);
    return ba;
}

function checkAnswer(expectedValue, id) {
    let isCorrect = isClose(parseFloat(document.getElementById(id).value), expectedValue, 0.001);
    if (isCorrect) {
        alert("Correct!");
    } else {
        alert("Incorrect!");
    }

    return isCorrect;
}

function isClose(value1, value2, closeness) {
    return Math.abs(value1 - value2) < closeness
}
