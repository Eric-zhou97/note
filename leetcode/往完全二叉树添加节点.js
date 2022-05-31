var CBTInserter = function(root) {
  this.queue=[];
  this.root=root;
  this.queue.push(root);
  //左右子节点都满的节点出队列
  while(this.queue[0]&&this.queue[0].left&&this.queue[0].right){
      let node=this.queue.shift();
      this.queue.push(node.left);
      this.queue.push(node.right);
  }
};

/** 
* @param {number} v
* @return {number}
*/
CBTInserter.prototype.insert = function(v) {
  //只有在右子树填充的时候才需要出队列
  let parent=this.queue[0];
  let node=new TreeNode(v);
  if(parent.left==null){
      parent.left=node;
  }else{
      parent.right=node;
      this.queue.shift();
      this.queue.push(parent.left);
      this.queue.push(parent.right);
  }
  return parent.val;
};

/**
* @return {TreeNode}
*/
CBTInserter.prototype.get_root = function() {
  return this.root;
};