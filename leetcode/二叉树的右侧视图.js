//层次遍历
var rightSideView = function(root) {
  let stack1 = [], stack2 = [], size = 1, res = [];
  stack1.push(root);
  while (stack1.length) {
      size = stack1.length;
      for (let i = 0; i < size; i ++) {
          let node = stack1.shift();
          if (!node) continue;
          //在pop的时候存避免左右子树的分类情况
          if (i==size-1) {
              res.push(node.val);
          }
          if (node.left) stack2.push(node.left);
          if (node.right) stack2.push(node.right);
      }
      stack1 = stack2;
      stack2 = [];
  }
  return res;
};