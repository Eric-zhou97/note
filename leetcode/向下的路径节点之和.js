//回溯
var pathSum = function (root, targetSum) {
  var dfs=function(node, presum) {
      if (!node) {
          return 0;
      }
      //最开始的0需要存，有分差比较好
      map.set(presum, (map.get(presum) || 0) + 1);
      let target = presum + node.val;
      //targetSum=target-mapValue => mapValue=target-targetSum
      if(map.has(target-targetSum)){
          count=count+map.get(target-targetSum);
      }    
      dfs(node.left, target);
      dfs(node.right, target);
      //回溯
      map.set(presum, map.get(presum) - 1);
  }
  let map = new Map();
  let count = 0;
  dfs(root, 0);
  return count;
}