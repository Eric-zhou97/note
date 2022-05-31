var singleNonDuplicate = function(nums) {
  let i;
  for(i=0;i<nums.length;i=i+2){
      if(nums[i]!=nums[i+1]){
          return nums[i];
      }
  }
  return nums[i];
};

//另解
//奇数坐标与偶数坐标，偶数坐标x与x+1相等则右移
var singleNonDuplicate = function(nums) {
  let left = 0, right = Math.floor(nums.length / 2);
  while(left <= right) {
    let mid = left + ((right - left) >> 1);
    let i = mid * 2;
    if(i < nums.length - 1 && nums[i] != nums[i + 1]) {
      if(mid === 0 || nums[i - 2] === nums[i - 1]) {
        return nums[i];
      }
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return nums[nums.length - 1];
};

//另解，异或
var singleNonDuplicate = function(nums) {
  return nums.reduce((pre, cru) => {
      return pre ^ cru;
  })
};