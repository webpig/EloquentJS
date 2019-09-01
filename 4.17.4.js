function deepEqual (arg1, arg2) {
  let isValue = false;
  if (isObject(arg1, arg2)) {
    isValue = true;

    // Object.getOwnPropertyNames()也可以
    if (Object.keys(arg1).length === Object.keys(arg2).length) {
      for (key in arg1) {
        if (arg2[key]) {
          if (!isObject(arg1[key], arg2[key]) && arg1[key] !== arg2[key]) {
            return false
          } else if (Array.isArray(arg1[key]) && Array.isArray(arg2[key]) && arg1[key].toString() !== arg2[key].toString()) {
            return false;
          } else {
            deepEqual(arg1[key], arg2[key])
          }
        } else {
            return false;
        }
      }
      return true;
    }
    return false;
  }

  if (!isValue) {
    return arg1 === arg2;
  }
}

function isObject (arg1, arg2) {
  return arg1 && arg2 && typeof arg1 === 'object' && typeof arg2 === 'object';
}

console.log(deepEqual({a: 1, b: [1, {a: 1}, 3], c: 5}, {a: 1, b: [1, {a:1}, 3], c: 5}));
console.log(deepEqual(1, 1));
console.log(deepEqual([1, 2, 3], [1, 2, 3]));

