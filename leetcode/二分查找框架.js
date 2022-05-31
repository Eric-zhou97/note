//二分查找框架
var binary_search=function(nums,target) {
  let left = 0, right = nums.length - 1; 
  while(left <= right) {
      let mid = left + (right - left) / 2;
      if (nums[mid] < target) {
          left = mid + 1;
      } else if (nums[mid] > target) {
          right = mid - 1; 
      } else if(nums[mid] == target) {
          // 直接返回
          return mid;
      }
  }
  // 直接返回
  return -1;
}

var left_bound=function(nums,target) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
      let mid = left + (right - left) / 2;
      if (nums[mid] < target) {
          left = mid + 1;
      } else if (nums[mid] > target) {
          right = mid - 1;
      } else if (nums[mid] == target) {
          // 别返回，锁定左侧边界
          right = mid - 1;
      }
  }
  // 最后要检查 left 越界的情况
  if (left >= nums.length || nums[left] != target)
      return -1;
  return left;
}


//最右边的target或target的插入位置
var right_bound=function(nums,target) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
      let mid = left + (right - left) / 2;
      if (nums[mid] < target) {
          left = mid + 1;
      } else if (nums[mid] > target) {
          right = mid - 1;
      } else if (nums[mid] == target) {
          // 别返回，锁定右侧边界
          left = mid + 1;
      }
  }
  // 最后要检查 right 越界的情况
  if (right < 0 || nums[right] != target)
      return -1;
  return right;
}
