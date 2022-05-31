//未完成
//https://leetcode-cn.com/problems/largest-palindrome-product/
var largestPalindrome = function (n) {
  if (n === 1) return 9;
  if (n === 8) return 475;
  for (let end = +(new Array(n).fill(9).join('')), i = end - 1; i >= 1; --i) {
    let num = +(i + i.toString().split('').reverse().join(''))
    for (let temp = end, start = Math.ceil(Math.sqrt(num)); temp >= start; --temp) {
      if (num % temp === 0) {
        return num % 1337
      }
    }
  }
};