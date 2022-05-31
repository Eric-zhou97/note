var lowestCommonAncestor = function(root, p, q) {
  if(root==null){
      return null;
  }
  if(p.val==q.val){
      return p;
  }
  while(root!=null){
      if(root.val<q.val&&root.val<p.val){
          root=root.right;
      }else if(root.val>q.val&&root.val>p.val){
          root=root.left;
      }else{
          return root;
      }
  }
};