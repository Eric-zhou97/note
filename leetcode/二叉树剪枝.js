//dfs
var pruneTree = function(root) {
  var dfs=function(node){
      if(node==null){
          return false;
      }
      let left=dfs(node.left);
      if(!left){
          node.left=null;
      }
      let right=dfs(node.right);
      if(!right){
          node.right=null;
      }
      //当前值为1||左子树有1||右子树有1
      if(node.val==1||right||left){
          return true;
      }
      return false;
  }
  if(!dfs(root)){
      return null;
  }
  return root;
};



