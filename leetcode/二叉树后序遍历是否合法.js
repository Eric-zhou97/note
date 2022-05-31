var verifyPostorder = function (postorder) {
  let len = postorder.length;
  // 若为叶子节点，则返回 true
  if (len < 2) return true
  // 后序遍历的最后一个元素为根节点
  let root = postorder[len - 1];
  let i = 0
  // 划分左/右子树
  for (; i < len - 1; i++) {
      if (postorder[i] > root) break
  }
  let tf=true
  // 判断右子树中的元素是否都大于 root，此处用到 every (数组 API，数组的每个元素都返回 true 则整体返回 true)
   for(let j=i;j<len-1;j++ ){
      if(postorder[j]<root)
          tf=false
  }
  if(tf){
  //slice(0,i),坐标i的不要，尾节点为根节点
      return verifyPostorder(postorder.slice(0,i))&&verifyPostorder(postorder.slice(i,len-1))
  }
  else{
      return false
  }
};