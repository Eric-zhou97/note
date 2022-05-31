//未完成
//https://leetcode-cn.com/problems/4sjJUc/submissions/
var combinationSum2 = function(candidates, target) {
  // 回溯法
  const LEN = candidates.length;
  let result = [];
  help(0,0,[],[]);
  return result;

  function help(idx,sum,cur,same) {
      // 中止条件
      if(sum>=target || idx==LEN) {
          if(sum==target) result.push(cur);
          return;
      }

      // 为了避免结果重复，如果跳过了一个数字，那么后面的路径中也不可添加该数字
      // 1.跳过
      let nSame = [...same,candidates[idx]];
      help(idx+1,sum,cur,nSame);

      // 不跳过: 判断same中是否有当前元素，没有才可以添加
      // 因为跳过的数即便我们添加了，它也仍然是某次没跳过dfs过程的子集，没有意义
      if(same.indexOf(candidates[idx])==-1) {
          sum += candidates[idx];
          help(idx+1,sum,[...cur,candidates[idx]],same);
      }
      
  }
};
