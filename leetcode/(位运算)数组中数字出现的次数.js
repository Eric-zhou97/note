// 从第 1 位开始
// 创建掩码（当前位为 1，其他为 0），count 设置为 0
// 将每个数字和掩码进行&运算，如果结果不为 0，count 加 1
// 如果 count 整除 3，说明出现一次的数字这一位不是 1；否则，说明出现一次的数字这一位是 1
// 继续检查第 2 位，一直到 32 位，结束

var singleNumber = function(nums) {
  let res = 0;
  for (let bit = 0; bit < 32; ++bit) {
      let mask = 1 << bit;
      let count = 0;
      for (let num of nums) {
          if (num & mask) ++count;
      }
      if (count % 3) {
          res = res | mask;
      }
  }
  return res;
};


//数学方式，和相减
var singleNumber = function(nums) {
  const set = new Set(nums);
  let sum1 = 0;
  for (let num of set.values()) {
      sum1 += num;
  }
  let sum2 = 0;
  for (let num of nums) {
      sum2 += num;
  }

  return Math.floor((3 * sum1 - sum2) / 2);
};

//hash
var singleNumber = function(nums) {
  const map = new Map();
  for (let num of nums) {
      if (map.has(num)) map.set(num, map.get(num) + 1);
      else map.set(num, 1);
  }

  for (let [num, times] of map.entries()) {
      if (times === 1) return num;
  }
};
