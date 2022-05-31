var subsets = function(nums) {
  let res=[],sub=[];
  var dfs=function(index){
      if(index==nums.length){
          res.push([...sub]);
      }else if(index<nums.length){
          dfs(index+1);
          sub.push(nums[index]);
          dfs(index+1);
          sub.pop();
      }
  };
  dfs(0);
  return res;
};