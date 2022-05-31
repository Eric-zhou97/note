var findTarget = function(root, k) {
  let arr=[]
  function dfs(node){
      if(!node){
          return;
      }
      dfs(node.left);
      arr.push(node.val);
      dfs(node.right);
  }
  dfs(root);
  let left=0,right=arr.length-1;
  while(left<right){
      if(arr[left]+arr[right]==k){
          return true;
      }else if(arr[left]+arr[right]<k){
          left++;
      }else{
          right--;
      }
  }
  return false;
};


//另解，遍历的时候用map存值，判断map中是否存在k-value