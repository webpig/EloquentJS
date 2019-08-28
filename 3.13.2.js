function isEven (n) {
  n = Math.abs(n);

  if (n === 0) {
    return true;
  }

  if (n === 1) {
    return false;
  }

  if (n > 1) {
    return isEven(n - 2);
  }
}

console.log(isEven(50)); // true
console.log(isEven(75)); // false
console.log(isEven(-1)); // false