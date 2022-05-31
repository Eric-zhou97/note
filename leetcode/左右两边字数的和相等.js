var pivotIndex = function (nums) {
  // 算出nums的总和
  var total = 0;
  nums.forEach(v => total += v);
  // 算出左半部分总和
  var leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
      var v = nums[i];
      leftSum += v;
      // 左半部分总和 - 当前值 == nums总和 - 左半总和说明找到中心啦！
      if (leftSum - v === total - leftSum) {
          return i;
      }
  }
  return -1;
};