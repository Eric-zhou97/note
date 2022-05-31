//因为是递归，可以判别是否加括号
var tree2str = function(root) {
  if (!root) {
      return "";
  }
  if (!root.left && !root.right) {
      return '' + root.val;
  }
  if (!root.right) {
      return root.val + '(' + tree2str(root.left) + ')';
  }
  return root.val + '(' + tree2str(root.left) + ')(' + tree2str(root.right) + ')';
};