var findNthDigit = function(n) {
  for (let bit = 1; bit < 32; ++bit) {
      const startNum = Math.pow(10, bit - 1);
      //由9*startNum个，再乘上位数
      const bitSum = 9 * startNum * bit;
      if (n > bitSum) {
          n -= bitSum;
      } else {
          let num = startNum + Math.ceil(n / bit) - 1;
          let pos = n - bit * (num - startNum) - 1;
          return num.toString(10)[pos];
      }
  }
};