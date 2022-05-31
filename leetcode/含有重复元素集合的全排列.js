//未完成
//https://leetcode-cn.com/problems/7p8L0Z/
var permuteUnique = function(nums) {
  // 回溯法
  let LEN = nums.length;
  let result = [];
  help(0,[],[]);
  return result;

  // 用一个数组记录某个元素( 下标 )是否被取过了
  function help(idx,cur,same) {
      if(idx == LEN) {
          result.push(cur);
          return;
      }
      
      // control 控制大的for循环分支过程中  不选择相同的数进行分支
      // same 判断求一次结果的过程中该索引是否重复使用

      let control = []; 
      for(let i=0; i<nums.length; i++) {
          if(control.indexOf(nums[i])!=-1 || same.indexOf(i)!=-1) continue;

          control.push(nums[i]);
          let newSame = [...same,i];

          let add = [...cur,nums[i]];
          help(idx+1,add,newSame);
      }
  }   
};
