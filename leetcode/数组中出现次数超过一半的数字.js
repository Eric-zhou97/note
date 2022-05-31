//Math.floor向下取整，Math.ceil向上取整
var majorityElement = function(nums) {
  nums.sort((a, b) => {
    return a-b;
  })
  return nums[Math.floor(nums.length/2)];
};

//因为多于一半
var majorityElement = function(nums) {
  let ans = 0,
  count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!count) {
      ans = nums[i];
      count++;
    } else count += nums[i] === ans ? 1 : -1;
  }
  return ans;
};
