// 棋盘

let str = '';
const sizes = 8;

for (let i = 0; i < sizes; i++) {
  if (i % 2 === 0) {
    str += '# # # # \n';
  } else {
    str += ' # # # #\n';
  }
}

console.log(str);