var findTarget = function(root, k) {
  let set = new Set();
  var diff = function (node) {
      if (node === null) {
          return false;
      }
      if (set.has(k - node.val)) {
          // 判断是否存在满足条件的值
          return true;
      }
      set.add(node.val); // 将节点值存入 set 中
      return diff(node.left) || diff(node.right); // 只要存在 true 即可
  };
  return diff(root);
};