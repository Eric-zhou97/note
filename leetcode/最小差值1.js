// 最小差值 I
// 桶排序？
var smallestRangeI = function (nums, k) {
  if (nums.length <= 1) return 0;
  const max = Math.max(...nums)
  const min = Math.min(...nums)
  let maxer = max - k
  let miner = min + k
  return (maxer - miner < 0) ? 0 : maxer - miner
};