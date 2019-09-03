function flat (flatArr) {
  return flatArr.reduce((prev, curr) => prev = prev.concat(curr), [])
}

console.log(flat([[1, 2], [3, 4]]))