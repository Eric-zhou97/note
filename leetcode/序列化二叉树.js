//未理解

var serialize = function(root) {
  if (root == null) {                  // 遍历到 null 节点
    return 'X';
  }
  const left = serialize(root.left);   // 左子树的序列化结果
  const right = serialize(root.right); // 右子树的序列化结果
  return root.val + ',' + left + ','+ right; // 按  根,左,右  拼接字符串
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  const list = data.split(',');   // split成数组
  const buildTree = (list) => {   // 基于list构建当前子树
    const rootVal = list.shift(); // 弹出首项，获取它的“数据”
    if (rootVal == "X") {         // 是X，返回null节点
      return null;
    }
    const root = new TreeNode(rootVal); // 不是X，则创建节点
    root.left = buildTree(list);        // 递归构建左子树
    root.right = buildTree(list);       // 递归构建右子树
    return root;                        // 返回当前构建好的root
  };

  return buildTree(list); // 构建的入口
};


//优秀解
var serialize = function(root) {
  if(!root){
      return '[]';
  }
  var result = '';
  result += '[';
  var queue = [root];
  while(queue.length > 0){
      var node = queue.shift();
      if(node){
          result += node.val + ',';
          queue.push(node.left);
          queue.push(node.right);
      } else {
          result += 'null,';
      }
  }
  result = result.slice(0, -1);
  result += ']';
  console.log(result)
  return result;
};

/**
* Decodes your encoded data to tree.
*
* @param {string} data
* @return {TreeNode}
*/
var deserialize = function(data) {
  if(data === '[]') return null;
  var treeArr = data.slice(1,-1).split(',');
  var root = new TreeNode(treeArr[0]);
  var queue = [root];
  var i = 1;
  while(queue.length > 0){
      var node = queue.shift();
      if(treeArr[i] !== 'null'){
          node.left = new TreeNode(treeArr[i]);
          queue.push(node.left);
      }
          i++;
      if(treeArr[i] !== 'null'){
          node.right = new TreeNode(treeArr[i]);
          queue.push(node.right);
      }
          i++;

  }
  return root;
};