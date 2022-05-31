//未解决
//https://leetcode-cn.com/problems/smallest-rotation-with-highest-score/
//差分
var bestRotation = function(nums) {
  const n = nums.length;
  const diffs = new Array(n).fill(0);
  //通过i找k，当k取值为某个范围时，该i计分
  //该范围为数学证明题
  for (let i = 0; i < n; i++) {
      const low = (i + 1) % n;
      const high = (i - nums[i] + n + 1) % n;
      diffs[low]++;
      diffs[high]--;
      //high才是确保加分的，因此当low>=high时需要特殊处理
      if (low >= high) {
          diffs[0]++;
      }
  }
  let bestIndex = 0;
  let maxScore = 0;
  let score = 0;
  //差分，找k的取值
  for (let i = 0; i < n; i++) {
      score += diffs[i];
      if (score > maxScore) {
          bestIndex = i;
          maxScore = score;
      }
  }
  return bestIndex;
};