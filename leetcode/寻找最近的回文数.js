//数学题
/*
  总结下特殊情况：

  小于等于10的数，返回n-1
  10的幂，返回n-1
  若干个9，返回n+2
  10的幂+1，返回n-2（或者11单独处理）
  接下来是普通情况怎么求解

  首先把n从中间分成a、b两部分，如果长度是奇数就给a多分点。

  然后用a、a+1、a-1为左边分别构建一个回文数，注意n长度为奇数的时候左边的最后一个字符不能复制过去。
  1234
  最后选取离n最近且不为n的结果即可
*/
var nearestPalindromic = function(n) {
  let num = Number(n);
  
  if (num <= 10 || isTen(num)) return num - 1 + '';
  if (n === '11') return '9';
  if (onlyNine(n)) return num + 2 + '';
  
  const len = n.length;
  const isOdd = len % 2 !== 0;
  const k = Math.ceil(len / 2);
  const half = n.slice(0, k);
  const la = (half * 1 - 1 + '').slice(0, isOdd ? k - 1 : k);
  const lb = (half * 1 + '').slice(0, isOdd ? k - 1 : k);
  const lc = (half * 1 + 1 + '').slice(0, isOdd ? k - 1 : k);
  const a = la + (half * 1 - 1 + '').split('').reverse().join('');
  const b = lb + (half * 1 + '').split('').reverse().join('');
  const c = lc + (half * 1 + 1 + '').split('').reverse().join('');
  
  const ans = [a, b, c].filter(x => x !== n);
  ans.sort((a, b) => {
    if (Math.abs(a - num) > Math.abs(b - num)) {
      return 1;
    } else if (Math.abs(a - num) < Math.abs(b - num)) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return -1;
    }
  });
  
  return ans[0] + '';
};

function onlyNine(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== '9') return false;
  }
  return true;
}
function isTen(n) {
  while (n >= 10) {
    n /= 10;
  }
  return n === 1;
}