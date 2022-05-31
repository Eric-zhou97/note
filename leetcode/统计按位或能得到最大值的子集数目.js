// 状态压缩
var countMaxOrSubsets = function(nums) {
  //或直接用0即可
  let max=0;
  for(let n of nums){
      max=max|n;
  }
  let count=0;
  let n=nums.length;
  let bits = (1 << n);
  //bits，只有0和1两种情况
  //重点
  while (bits--) {
      let temp=0;
      for (let i = 0; i < n; i++) {
          if (bits & (1 << i)){
              temp=temp|nums[i];
          }
      }
      if(temp==max){
          count++;
      }
  }
  return count;
};

//另解
var countMaxOrSubsets = function(nums) {
  let len = nums.length;
  // 组合
  let res=0,count=0;
  function backtracking(s,sum){
      if(sum>res){
          res = sum;
          count = 1;
      }else if(sum===res) count++;
      
      if(s===len) return;
      
      for(let i=s;i<len;++i){
          backtracking(i+1,sum|nums[i]);
      }
  }
  backtracking(0,0);
  return count;
};