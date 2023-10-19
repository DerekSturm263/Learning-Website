var problem1Answers = [0, 0];
var problem2Answers = [0, 0];

document.addEventListener('DOMContentLoaded', function() {
    problem1Answers = generateProblem1(1, 10, 1, 10, 'practice1', 'canvas1');
    problem2Answers = generateProblem2(1, 10, 1, 10, 'practice2', 'canvas2');
}, false);

function setText(id, text) {
    const element = document.getElementById(id);
    element.textContent = text;
}

function drawTriangle(id, pointA, pointB, pointC) {
    const canvas = document.getElementById(id);
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.beginPath();
        ctx.moveTo(pointA[0], pointA[1]);
        ctx.lineTo(pointB[0], pointB[1]);
        ctx.lineTo(pointC[0], pointC[1]);
        ctx.lineTo(pointA[0], pointA[1]);
        ctx.stroke();
    }
}

function generateProblem1(minA, maxA, minB, maxB, id, id2) {
    let a = (Math.random() * maxA + minA).toFixed(3);
    let b = (Math.random() * maxB + minB).toFixed(3);

    setText(id, "(a: " + a + ", b: " + b + ", c: ?)");
    drawTriangle(id2, [maxA * a, maxB * b], [maxA * a, 0], [0, maxB * b]);

    return [a, b];
}

function generateProblem2(min1, max1, minC, maxC, id, id2) {
    if (Math.random() > 0.5) {
        return generateProblem2a(min1, max1, minC, maxC, id, id2);
    } else {
        return generateProblem2b(min1, max1, minC, maxC, id, id2);
    }
}

function generateProblem2a(minB, maxB, minC, maxC, id, id2) {
    let b = (Math.random() * maxB + minB).toFixed(3);
    let c = (Math.random() * maxC + minC).toFixed(3);
    let a = getLeg(b, c);

    setText(id, "(a: ?, b: " + b + ", c: " + c + ")");
    drawTriangle(id2, [maxB * a, maxB * b], [maxB * a, 0], [0, maxB * b]);

    return [b, c];
}

function generateProblem2b(minA, maxA, minC, maxC, id, id2) {
    let a = (Math.random() * maxA + minA).toFixed(3);
    let c = (Math.random() * maxC + minC).toFixed(3);
    let b = getLeg(a, c);

    setText(id, "(a: " + a + ", b: ?, c: " + c + ")");
    drawTriangle(id2, [maxA * a, maxA * b], [maxA * a, 0], [0, maxA * b]);

    return [a, c];
}

function getHypotenuse(a, b) {
  let c = Math.sqrt(a * a + b * b);
  
  return c;
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