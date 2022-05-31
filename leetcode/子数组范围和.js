//未解决
//遍历
var subArrayRanges = function(nums) {
  const n = nums.length;
  let ret = 0;
  //滑动窗口，不一定滑动一次解决，可以将n次换为n-1次可能也是可以的
  for (let i = 0; i < n; i++) {
      let minVal = Number.MAX_VALUE, maxVal = -Number.MAX_VALUE;
      for (let j = i; j < n; j++) {
          minVal = Math.min(minVal, nums[j]);
          maxVal = Math.max(maxVal, nums[j]);
          ret += maxVal - minVal;
      }
  }
  return ret;
};
//单调栈
//单调栈，记录每个数作为最大值和最小值出现的个数
//n单位是用来处理大数的
var subArrayRanges = function(nums) {
  const n = nums.length
  let stack = new Array(), ans = 0n
  //单调减
  for(let i = 0; i <= n; i++) {
      //相等的情况下，同时是最大最小值，会出现在上下两个循环中，并不是特殊情况
      while(stack.length > 0 && (i == n || nums[stack[stack.length - 1]] < nums[i])) {
          //之前存的值出现的个数
          const j = BigInt(stack.pop())
          //下标从0开始，因此减去-1
          ans += BigInt(nums[j]) * (BigInt(i) - j) * (j - (stack.length > 0 ? BigInt(stack[stack.length - 1]) : -1n))
      }
      stack.push(i)
  }
  stack = new Array()
  for(let i = 0; i <= n; i++) {
      while(stack.length > 0 && (i == n || nums[stack[stack.length - 1]] > nums[i])) {
          const j = BigInt(stack.pop())
          ans -= BigInt(nums[j]) * (BigInt(i) - j) * (j - (stack.length > 0 ? BigInt(stack[stack.length - 1]) : -1n))
      }
      stack.push(i)
  }
  return ans
};