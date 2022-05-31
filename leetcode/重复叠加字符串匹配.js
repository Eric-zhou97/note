var repeatedStringMatch = function(A, B) {
  //最大限长度
  const endLen = B.length + A.length * 2;
  for (let count = 1, repeatA = A; repeatA.length <= endLen; count++, repeatA += A) {
    if (repeatA.includes(B)) return count;
  }
  return -1;
};

//另解
var repeatedStringMatch = function(a, b) {
  const aLen = a.length;
  const bLen = b.length;
  let maxLen = Math.ceil(bLen / aLen) + 1;
  let c = '';
  for(let i = 0; i < maxLen; i++) {
      c += a;
      if(i > maxLen - 3) {
          if(c.includes(b)) return i + 1;
      }
  }
  return -1;
};