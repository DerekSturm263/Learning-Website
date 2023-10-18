document.addEventListener('DOMContentLoaded', function() {
  generateProblem1(1, 1, 10, 10, 'practice1');
  generateProblem2(1, 1, 10, 10, 'practice2');
}, false);

function generateProblem1(minA, maxA, minB, maxB, id) {
  let a = (Math.random() * maxA + minA).toFixed(3);
  let b = (Math.random() * maxB + minB).toFixed(3);

  const element = document.getElementById(id);
  element.textContent = "(a: " + a + ", b: " + b + ", c: ?)";
}

function generateProblem2(min1, max1, minC, maxC, id) {
  if (Math.random() > 0.5) {
    generateProblem2a(min1, max1, minC, maxC, id);
  } else {
    generateProblem2b(min1, max1, minC, maxC, id);
  }
}

function generateProblem2a(minB, maxB, minC, maxC, id) {
  let b = (Math.random() * maxB + minB).toFixed(3);
  let c = (Math.random() * maxC + minC).toFixed(3);

  const element = document.getElementById(id);
  element.textContent = "(a: ?, b: " + b + ", c: " + c + ")";
}

function generateProblem2b(minA, maxA, minC, maxC, id) {
  let a = (Math.random() * maxA + minA).toFixed(3);
  let c = (Math.random() * maxC + minC).toFixed(3);

  const element = document.getElementById(id);
  element.textContent = "(a: " + a + ", b: ?, c: " + c + ")";
}

function getHypotenuse(a, b) {
  let c = Math.sqrt(a * a + b * b);
  console.log(c);
  
  return c;
}

function getLegA(b, c) {
  let a = Math.sqrt(c * c - b * b);
  console.log(a);
  
  return a;
}

function getLegB(a, c) {
  let b = Math.sqrt(c * c - a * a);
  console.log(b);
  
  return b;
}
