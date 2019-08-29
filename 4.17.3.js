function arrayToList (arr) {
  let list = {};

  for (var i = 0; i < arr.length; i++) {
    list.value = arr.splice(0, 1)[0];
    list.rest = (arr.length > 0) ? arrayToList(arr) : null;
  }

  return list
}

console.log(arrayToList([1, 2, 3]))

function listToArray (list) {
  let arr = [];

  arr.push(list.value)
  if (list.rest) {
    arr = arr.concat(listToArray(list.rest))
  }

  return arr
}

console.log(listToArray(arrayToList([1, 2, 3])))

function prepend (el, list) {
  list.rest = Object.assign({}, list);
  list.value = el.value;

  return list;
}

function nth (list, num) {
  let count = 1, obj = list

  while (num !== count) {
    if (obj.rest) {
      obj = obj.rest
      count++
    } else if (num > count || num <= 0) {
      return undefined
    }
  }

  return obj
}

let obj = {
    value: 1, 
    rest: {
        value: 2, 
        rest: null
    }
}
// console.log(prepend({value: 0, rest: null}, {value: 1, rest: {value: 2, rest: null}}))
console.log('obj', nth(obj, 0))