//快排变化
function partition(arr, startIndex, endIndex) {
  // 取第一个位置的元素作为基准元素（也可以选择随机位置）
  let pivot = arr[startIndex];
  // 设置一个mark指针指向数组起始位置 -- 最终  这个mark指针代表小于基准元素的区域边界
  let mark = startIndex;
  for (let i = startIndex + 1; i <= endIndex; i++) {
    if (arr[i] < pivot) {
      mark++;
      [arr[mark], arr[i]] = [arr[i], arr[mark]];
    }
  }
  arr[startIndex] = arr[mark];
  arr[mark] = pivot;
  return mark;
}
var findKthLargest = function (nums, k) {
  let targetIndex = nums.length - k;
  let start = 0,end = nums.length - 1;
  let index = partition(nums, start, end);
  while (index != targetIndex) {
    if (index > targetIndex) {
      end = index - 1;
    } else {
      start = index + 1;
    }
    index = partition(nums, start, end);
  }
  return nums[index];
};
