//二分查找
var searchInsert = function(nums, target) {
  let left=0;
  let right=nums.length-1;
  //对于二分查找而言，这两个边界最为耗时，因此在这里剪枝
  if(target<nums[left]) return 0;
  if(target>nums[right]) return right+1;
  let mid=0;
  //找不到值，就找插入位置，因此有等于号
  while(left<=right){
      mid=Math.floor((left+right)/2);
      if(nums[mid]==target){
          return mid;
      }else if(target<nums[mid]){
          right=mid-1;
      }else{
          left=mid+1;
      }
  }
  return left;
};