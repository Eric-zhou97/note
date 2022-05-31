//后续遍历
var maxPathSum = function(root) {
  let res=-Infinity;
  var dfs=function(node){
      if(node==null){
          return 0;
      }
      //在二叉树中的路径问题，由于每个节点只能走一次，因此情况很少
      let left=Math.max(0,dfs(node.left));
      let right=Math.max(0,dfs(node.right));
      //当前节点为转折点
      res=Math.max(res,left+right+node.val);
      return node.val+Math.max(left,right);
  }
  dfs(root);
  return res;
};