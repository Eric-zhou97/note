//树
//dfs
var findBottomLeftValue = function(root) {
  let ans,layer=-1;
  function dfs(node,n){
      if(!node) return;
      if(n>layer){
          layer=n;
          ans=node.val;
      }
      dfs(node.left,n+1);
      dfs(node.right,n+1);
  }
  dfs(root,0);
  return ans;
};