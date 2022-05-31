//暴力
var countQuadruplets = function(nums) {
  let ret = 0;
  for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          for (let m = j + 1; m < nums.length; m++) {
              for (let n = m + 1; n < nums.length; n++) {
                  if (nums[i] + nums[j] + nums[m] == nums[n] ) {
                      ret++;
                  }
              } 
          } 
      } 
  }
  return ret;
}

//优化剪枝
var countQuadruplets = function(nums) {
  let count = 0;
  let idx4 = nums.length;
  while(--idx4 >= 3) {
      let idx3 = idx4;
      while(--idx3 >= 2) {
          //先确定了最大值，idx4也就是target，然后不满足的直接剪枝
          if (nums[idx3] >= nums[idx4]) {
              continue;
          }
          let idx2 = idx3;
          while(--idx2 >= 1) {
              if (nums[idx2] >= nums[idx4]) {
                  continue;
              }
              let idx1 = idx2;
              while(--idx1 >= 0) {
                  if (nums[idx1] >= nums[idx4]) {
                      continue;
                  }
                  if (nums[idx1] + nums[idx2] + nums[idx3] === nums[idx4]) {
                      count++;
                  }
              }
          }
      }
  }
  return count;
};


//梦游
var countQuadruplets = function(nums) {
  let map=new Map();
  let count=0; 
  let arr=[];
  arr[0]=[nums[0],nums[1]];
  arr[1]=[nums[0],nums[2]];
  arr[2]=[nums[1],nums[2]];
  map.set(nums[0]+nums[1]+nums[2],1)
  let sum=0;
  for(let i=3;i<nums.length;i++){
      if(map.has(nums[i])){
          count+=map.get(nums[i]);
      }
      for(let j=0;j<arr.length;j++){
          sum=nums[i]+arr[j][0]+arr[j][1];
          if (map.has(sum)) {
              map.set(sum, map.get(sum) + 1);
          }else {
              map.set(sum, 1);
          }
      }
      let index=arr.length;
      for(let j=0;j<i;j++){
          arr[index+j]=[nums[j],nums[i]]
      }
  }
  return count
};