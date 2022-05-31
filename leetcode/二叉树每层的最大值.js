//dfs
//层次遍历
var largestValues = function(root) {
  let ans=[];
  function dfs(node,n){
      if(!node)return;
      ans[n]=Math.max(ans[n]==undefined?node.val:ans[n],node.val);
      dfs(node.left,n+1);
      dfs(node.right,n+1);
  }
  dfs(root,0);
  return ans;
};