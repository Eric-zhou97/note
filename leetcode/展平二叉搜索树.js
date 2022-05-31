//注意头尾
//中序遍历
var increasingBST = function(root) {
  if(!root){
      return null;
  }
  let ans=[];
  var dfs=function(node){
      if(node.left){
          dfs(node.left);
      }
      ans.push(node);
      if(node.right){
          dfs(node.right);
      }
  }
  dfs(root);
  let head=ans[0];
  let pre=head;
  for(let i=1;i<ans.length;i++){
      pre.left=null;
      pre.right=ans[i];
      pre=ans[i];
  }
  pre.left=null
  pre.right=null
  return head;
};