//多个地方进行变换的话，赋值和位移顺序要一致
var convert = function(s, numRows) {
  if (s.length < numRows || numRows === 1) {return s}
  let num = 0
  let flag = true
  let arr = new Array(numRows).fill('')
  for (let i = 0; i < s.length; i++) {
      arr[num] += s[i]
      if (flag) {
          num += 1
      } else {
          num -= 1
      }
      if (num === 0 ) {
          flag = true
      }
      if (num === numRows - 1) {
          flag = false
      }
  }
  return arr.join('')
};