"use strict";

function fib(n) {
  if (n <= 1) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

for (let i = 1; i <= 29; i++) {
  let x = "m" + i;
  document.getElementById(x).innerHTML = fib(i - 1);
}
