var findRadius = function(houses, heaters) {
  houses.sort((a,b)=>{
      return a-b;
  })
  heaters.sort((a,b)=>{
      return a-b;
  })
  let ans=0;
  for (let i = 0, j = 0; i < houses.length; i++) {
      let curDistance = Math.abs(houses[i] - heaters[j]);
      //仅当不是最后一个节点的时候，才进行双节点判别
      while (j < heaters.length - 1 && curDistance >= Math.abs(houses[i] - heaters[j + 1])) {
          j++;
          curDistance = Math.min(curDistance, Math.abs(houses[i] - heaters[j]));
      }
      //i没变，每个节点被覆盖需要的最短距离都被统计到了
      ans = Math.max(ans, curDistance);
  }
  return ans;
};


//
var findRadius = function(houses, heaters) {
  let ans = 0;
  heaters.sort((a, b) => a - b);
  for (const house of houses) {
      const i = binarySearch(heaters, house);
      const j = i + 1;
      const leftDistance = i < 0 ? Number.MAX_VALUE : house - heaters[i];
      const rightDistance = j >= heaters.length ? Number.MAX_VALUE : heaters[j] - house;
      const curDistance = Math.min(leftDistance, rightDistance);
      ans = Math.max(ans, curDistance);
  }
  return ans;
};


//另解排序加二分，首位点做特殊处理
const binarySearch = (nums, target) => {
  let left = 0, right = nums.length - 1;
  if (nums[left] > target) {
      return -1;
  }
  while (left < right) {
      const mid = Math.floor((right - left + 1) / 2) + left;
      if (nums[mid] > target) {
          right = mid - 1;
      } else {
          left = mid;
      }
  }
  return left;
}
