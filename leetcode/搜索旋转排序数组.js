var search = function(nums, target) {
  const n = nums.length;
  if (nums[n - 1] >= nums[0]) return find(0, n - 1);
  //二分法先找分界点  
  let l = 0, r = n - 1;
  while (l < r) {
      const mid = l + r >> 1;
      if (nums[mid] < nums[0]) r = mid;
      else l = mid + 1;
  }
  if (target >= nums[0]) return find(0, l - 1);
  else return find(l, n - 1);
  
  //在完全升序的数组中找具体的值
  function find(l, r) {
      while (l < r) {
          const mid = l + r >> 1;
          if (nums[mid] >= target) r = mid;
          else l = mid + 1;
      }
      if (nums[l] === target) return l;
      return -1;
  }
};