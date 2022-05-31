//把冲突的数累加，增加总长度，最后减去累加的和
var minimalKSum = function(nums, k) {
  nums.sort((a, b) => a - b);
  let pre = 0;
  let d = 0;
  for (const n of nums) {
      if (n === pre) {
          continue;
      }
      pre = n;
      if (n <= k) {
          d += n;
          k++;
      }
  }
  return (1 + k) * k / 2 - d;
};


//java解法
// class Solution {
//   public long minimalKSum(int[] nums, int k) {
//       Arrays.sort(nums);
//       long ans = 0, start = 1;
//       for (int i = 0; i < nums.length && k > 0; i++) {
//           // 存在未出现的数字
//           if (start < nums[i]) {
//               int cnt = (int) (nums[i] - start) > k ? k : (int) (nums[i] - start);
//               // 不存在的数据累计
//               ans += (2L * start + cnt - 1) * cnt / 2;
//               k -= cnt;
//           }
//           start = nums[i] + 1;
//       }
//       // 不存在的数据累计
//       if (k > 0) {
//           ans += (2L * start + k - 1) * k / 2;
//       }
//       return ans;
//   }
// }