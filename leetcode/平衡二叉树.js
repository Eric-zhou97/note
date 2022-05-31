//似乎可以用map优化，记录节点
var isBalanced = function(root) {
  if(root==null){
      return true;
  }
  return isBalanced(root.left)&&isBalanced(root.right)&&Math.abs(maxDepth(root.left)-maxDepth(root.right))<2;
};
var maxDepth = function(root) {
if (!root) {
    return 0;
}
return Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1)
};