var preorder = function(root) {
  let ans=[];
  function dfs(node){
      if(node == null){
          return;
      }
      ans.push(node.val);
      for(let n of node.children){
          dfs(n);
      }
  }
  dfs(root);
  return ans;
};