var isStraight = function(nums) {
  //js的sort里面要写
  nums = nums.sort((a, b) => a - b)
  let i=0,count=0;
  while(nums[i]==0){
      count++;
      i++;
  }
  while(i<4){
      if(nums[i+1]-nums[i]==1){
          i++;
      }else if(count>0){
          nums[i]++;
          count--;
      }else{
          return false;
      }
  }
  return true;
};

var isStraight = function(nums) {
  /* 
     分治思想 五张牌构成顺子的充分条件需要满足
     1. 不重复 使用Set去重
     2. max - min < 5 最大牌值 减去 最小牌值 小于5 且跳过大小王
  */
  const set = new Set()
  let min = 14, max = 0 //  min和max的初始值是两个边界值[0, 13]
  for (const num of nums) {
      // 遇到大小王 跳过
      if (!num) continue
      // 遇到重复则直接 返回false
      if (set.has(num)) return false
      set.add(num)
      // 迭代更新 min和max 以及set
      min = Math.min(min, num)
      max = Math.max(max, num)
  }
  //因为去了重，且去除0的情况，5张牌堆叠在一起，最大值减去最小值必须小于5
  return max - min < 5
};