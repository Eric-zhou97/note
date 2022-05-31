//看题目
var sumNumbers = function(root) {
  const deep = (root, num) => {
    if(!root) return 0;
    num = num * 10  + root.val;
    //为叶节点直接返回
    if(!root.left && !root.right) return num;
    //否则递归返回左右子树的和
    return deep(root.left, num) + deep(root.right, num);
  }
  return deep(root, 0)
};


var sumNumbers = function(root) {
  let ans=[];
  let result=0;
  var dfs=function(node,temp){
      temp=temp*10+node.val;
      if(!node.left&&!node.right){
          ans.push(temp);
      }
      if(node.left){
          dfs(node.left,temp);
      }
      if(node.right){
          dfs(node.right,temp);
      }
  }
  if(!root){
      return 0;
  }
  dfs(root,0)
  for(let n of ans){
      result+=n;
  }
  return result;
};
