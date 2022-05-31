/**
 * @param {string} str
 * @return {number}
 */
var strToInt = function(s) {
  let cursor = 0; // 扫描字符的光标
  let sign=1;
  const min = - (2 ** 31) , max = (2 ** 31) - 1
  while (s[cursor] === ' ') { // 跳过结尾的空格字符
      cursor++;
  }
  if (s[cursor] === '+'||s[cursor] === '-') { // 遇到+-，指针后移
      if(s[cursor] === '-'){
          sign=-1;
      }
      cursor++;
  }
  let total=0
  while (s[cursor] >= '0' && s[cursor] <= '9') { // 遇到0-9数字就指针后移
      total=total*10+(s[cursor]-'0');
      cursor++;       // 函数结束时，指针已扫完连续数字部分
  }
  num = sign * total
  return num <= min ? min : num >= max ? max : num
};




var strToInt = function (str) {
  // 开始位置    当前位置  是否为负    结果
  let start = 0, cur = 0, symbol, res = 0;
  let len = str.length;
  // 去空格
  while (str[start] === ' ') start++;
  // 定符号
  if (str[start] === '+') { symbol = false; start++; }
  else if (str[start] === '-') { symbol = true; start++; }
  cur = start;
  while (cur < len) {
      // 非数字
      if (str[cur] < '0' || str[cur] > '9') break;
      res = res * 10 + (symbol ? -str[cur].charCodeAt() + 48 : str[cur].charCodeAt() - 48);
      if (res > 2147483647) {
          res = 2147483647;
          break;
      }
      if (res < -2147483648) {
          res = -2147483648;
          break;
      }
      cur++;
  }
  return res;
};