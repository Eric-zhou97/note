//未掌握
var lowestCommonAncestor = function(root, p, q) {
  if(!root || root.val == p.val || root.val == q.val){
    return root;
  }
  var left = lowestCommonAncestor(root.left, p, q);
  var right = lowestCommonAncestor(root.right, p, q);
  if(left && !right){
    return left;
  }
  if(!left && right){
    return right;
  }
  if(!left && !right){
    return false;
  }
  return root;
};