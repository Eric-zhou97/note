var postorder = function(root) {
  let ans=[];
  function dfs(node){
      if(node==null){
          return;
      }
      for(let n of node.children){
          dfs(n);
      }
      ans.push(node.val);
  }
  dfs(root);
  return ans;
};