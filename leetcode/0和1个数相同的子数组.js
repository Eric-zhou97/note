//前缀和
var findMaxLength = function(nums) {
  let map=new Map();
  let sum=0;
  let max=0;
  map.set(0,-1);
  for(let i=0;i<nums.length;i++){
      if(nums[i]==0){
          sum++;
      }else{
          sum--;
      }
      //和相同的相减为0，中间即为平衡的
      if(map.has(sum)){
          max=Math.max(i-map.get(sum),max);
      }
      if(!map.has(sum)){
          map.set(sum,i);
      }
  }
  return max;
};