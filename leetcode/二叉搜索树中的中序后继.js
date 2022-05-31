//下一个节点的值一定不会小于节点p的值，而是大于或等于节点p的值的所有节点中值最小的一个
var inorderSuccessor = function(root, p) {
  let node=root;
  let res=null;
  while (node){
      //最后一个大于p的节点
      if(node.val>p.val){
          res=node;
          node=node.left;
      }else{
          node=node.right;
      }
  }
  return res;
};