//二分法或者异或
var singleNonDuplicate = function(nums) {
  let len = nums.length;
  let mid = Math.floor(len / 2);

  // 当数组只有一个元素时, 该元素就是目标元素
  if(len === 1) {
      return nums[0];
  }
  //根据规则，要找的目标为偶数下标，通过相等的两个数的第一个数是奇数还是偶数判断在左边在右边
  // 判断 mid 为偶数还是奇数
  if(mid % 2 === 0) {
      // 判断 mid 与左右两侧的关系
      // 调整边界, 递归调用
      if(nums[mid] === nums[mid - 1]) return singleNonDuplicate(nums.slice(0, mid + 1));
      else if(nums[mid] === nums[mid + 1]) return singleNonDuplicate(nums.slice(mid));
      else return nums[mid];
  } else {
      if(nums[mid] === nums[mid + 1]) return singleNonDuplicate(nums.slice(0, mid));
      else if(nums[mid] === nums[mid - 1]) return singleNonDuplicate(nums.slice(mid + 1));
      else return nums[mid];
  }
};