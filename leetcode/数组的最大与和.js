//二进制记录哪些位置装了东西，从而实现穷举
var maximumANDSum = function (nums, numSlots) {
  const n = nums.length;
  //m个位置可以放东西
  const m = numSlots * 2;
  const memo = Array.from(nums, () => ({}));
  function dp(i, mask) {
      //放完了，i<n
      if (i === n) return 0;
      //mack记录的是当前哪些位置是空的
      if (memo[i][mask]) return memo[i][mask];
      let res = 0;
      //每个位置挨个放
      for (let j = 0; j < m; j++) {
          //该位置不为空
          if (mask & (1 << j)) continue;
          res = Math.max(res, dp(i + 1, mask | (1 << j)) + (((j >> 1) + 1) & nums[i]))//除2加1，转编号
      }
      return memo[i][mask] = res;
  }
  return dp(0, 0);
};

//另解，压缩dp
var maximumANDSum = function (nums, numSlots) {
  const n = nums.length;
  const m = numSlots * 2;
  const bits = 1 << m;
  const f = [];
  f[0] = 0;
  let res = 0;
  //i为篮子的状态，i中1的个数减1即为当前需要放入的数的下标
  //所有情况都包含在内了
  //比我小的都在我前面
  for (let i = 1; i < bits; i++) {
      f[i] = 0;
      const cnt = countBits(i);
      if (cnt > n) continue;
      for (let j = 0; j < m; j++) {
          //找非空的蓝子
          if ((i >> j) & 1) {
              //该非空位置为最后添加的数
              const k = i ^ (1 << j);//与1异或为翻转
              f[i] = Math.max(f[i], f[k] + (nums[cnt - 1] & ((j >> 1) + 1)));
          }
      }
      res = Math.max(res, f[i]);
  }
  return res;
}

function countBits(num) {
  let res = 0;
  while (num) {
      res += num & 1;
      num >>= 1;
  }
  return res;
}