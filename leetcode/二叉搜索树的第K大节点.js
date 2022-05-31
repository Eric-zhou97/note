var kthLargest = function(root, k) {
  let set=[]
  var dfs=function(node){
      if(node==null){
          return;
      }
      //这是一个搜索树
      dfs(node.right);
      set.push(node.val);
      dfs(node.left);
  }
  dfs(root);
  return set[k-1];
};