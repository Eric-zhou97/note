//暴力优化
var threeSum = function(nums) {
  if(nums.length<3){
      return [];
  }
  nums.sort((a,b)=>{
      return a-b;
  })
  let len=nums.length;
  let ans=[];
  for(let i=0;i<nums.length-2;i++){
      if(nums[i]>0){
          break;
      }
      if(i>0&&nums[i]==nums[i-1]){
          continue;
      }
      let l = i+1,r=len-1;
      //只有两个的时候双向
      while(l<r){
          let sum = nums[i] + nums[l] + nums[r];
          if(sum == 0){
              ans.push([nums[i],nums[l],nums[r]])
              //第一次成功后，后面的去重
              while(l<r && nums[l] == nums[++l]);
              while(l<r && nums[r] == nums[--r]);
          }else if(sum > 0){
              r--
          }else {
              l++
          }
      }
  }
  return ans;
};

//暴力
var threeSum = function(nums) {
  if(nums.length<3){
      return [];
  }
  nums.sort((a,b)=>{
      return a-b;
  })
  let ans=[];
  for(let i=0;i<nums.length;i++){
      if(nums[i]>0){
          break;
      }
      if(i>0&&nums[i]==nums[i-1]){
          continue;
      }
      for(let j=i+1;j<nums.length;j++){
          if(j>i+1&&nums[j]==nums[j-1]){
              continue;
          }
          for(let k=j+1;k<nums.length;k++){
              if(k>j+1&&nums[k]==nums[k-1]){
                  continue;
              }
              let sum=nums[i]+nums[j]+nums[k];
              if(sum==0){
                  ans.push([nums[i],nums[j],nums[k]])
              }else if(sum>0){
                  break;
              }

          }
      }
  }
  return ans;
};