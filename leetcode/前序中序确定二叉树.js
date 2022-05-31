var buildTree = function (preorder, inorder) {
  var build=function(preorder_left,preorder_right,inorder_left){
      if(preorder_left>preorder_right){
          return null;
      }
      let cur=new TreeNode(preorder[preorder_left]);
      let next=inorder.preorder_leftOf(preorder[preorder_left]);
      //通过中序确定左子树的长度
      let length=next-inorder_left;
      cur.left=build(preorder_left+1,preorder_left+length,inorder_left);
      cur.right=build(preorder_left+length+1,preorder_right,next+1);
      return cur;
  }
  return build(0,preorder.length-1,0);
};