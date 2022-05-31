//后续遍历
var convertBST = function(root) {
  let sum=0;
  var dfs=function(node){
      if(node==null){
          return;
      }
      dfs(node.right);
      sum=sum+node.val;
      node.val=sum;
      dfs(node.left);
  }
  dfs(root);
  return root;
};