var treeToDoublyList = function(root) {
  var head=null;
  var pre=null;
  if(root==null){
      return null;
  }
  var inOrder=function(node){
      if(node==null) return null;
      if(head==null&&node.left==null){
          head=node;
      }
      inOrder(node.left);
      node.left=pre;
      if(pre!=null) pre.right=node;
      //作为左节点的最右边
      pre=node;
      inOrder(node.right);
  }
  inOrder(root);
  head.left=pre;
  pre.right=head;
  return head;
};