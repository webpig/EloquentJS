function reverseArray (arr) {
  let array = []

  for (let i = arr.length - 1; i >= 0; i--) {
    array.push(arr[i])
  }

  return array
}

function reverseArrayInPlace (arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    arr.push(arr[i])
  }

  arr.splice(0, arr.length / 2)

  return arr
}

let arr = [1, 2, 3]
console.log(reverseArray(arr), arr)
console.log(reverseArrayInPlace(arr), arr)
