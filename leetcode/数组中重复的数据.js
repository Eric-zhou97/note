// 数组中重复的数据
// 数据范围有限制，因此可以用下标配合正负号来做标记
// var findDuplicates = function(nums) {
//   const n = nums.length;
//   const ans = [];
//   for (let i = 0; i < n; ++i) {
//       const x = Math.abs(nums[i]);
//       if (nums[x - 1] > 0) {
//           nums[x - 1] = -nums[x - 1];
//       } else {
//           ans.push(x);
//       }
//   }
//   return ans;
// }