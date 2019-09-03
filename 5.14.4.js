function every (arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (!func(arr[i])) {
      return false;
    }
  }
  return true;
}

function some (arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return true;
    }
  }
  return false;
}

console.log(every([1, 2, 3], (item) => item > 2))
console.log(some([1, 2, 3], (item) => item > 2))
