// function range (start, end) {
//   let arr = []
//   for (let i = start; i <= end; i++) {
//     arr.push(i)
//   }
//   return arr
// }
function range (start, end, step) {
  let arr = [], count = start

  if (step > 0) {
    while (count <= end) {
      arr.push(count)
      count += step
    }
  } else {
    while (count >= end) {
      arr.push(count)
      count += step
    }
  }

  return arr
}

function sum (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}

console.log(range(1, 10, 2))
console.log(range(5, 2, -1))

console.log(sum(range(1, 10)))