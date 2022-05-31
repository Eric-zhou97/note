var lastRemaining = function(n) {
  let a1 = 1, an = n;
  let k = 0, cnt = n, step = 1;
  while (cnt > 1) {
      if (k % 2 === 0) { // 正向
          a1 = a1 + step;
          //an = (cnt % 2 === 0) ? an : an - step;
      } else { // 反向
          a1 = (cnt % 2 === 0) ? a1 : a1 + step;
          //an = an - step;
      }
      k++;
      cnt = cnt >> 1;
      step = step << 1;
  }
  return a1;
};