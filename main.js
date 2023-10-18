function generateProblem1(minA, maxA, minB, maxB) {
  let a = Math.random() * maxA + minA;
  let b = Math.random() * maxB + minB;

  return (a, b);
}

function generateProblem2a(minB, maxB, minC, maxC) {
  let b = Math.random() * maxB + minB;
  let c = Math.random() * maxC + minC;

  return (b, c);
}

function generateProblem2b(minA, maxA, minC, maxC) {
  let a = Math.random() * maxA + minA;
  let c = Math.random() * maxC + minC;

  return (a, c);
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
