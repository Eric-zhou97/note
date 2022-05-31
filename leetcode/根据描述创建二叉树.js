//map可以存node
var createBinaryTree = function(descriptions) {
  let nodes = new Map(), isChild = new Set()
  for (let [parent, child, isLeft] of descriptions) {
      let pnode = getNode(parent)
      let cnode = getNode(child)
      pnode[isLeft ? 'left' : 'right'] = cnode
      isChild.add(child)
  }
  for (let [val, node] of nodes) {
      if (!isChild.has(val)) return node
  }
  function getNode(val) {
      if (!nodes.has(val)) 
          nodes.set(val, new TreeNode(val))
      return nodes.get(val);
  }
};

//另解
var createBinaryTree = function(descriptions) {
  let map=new Map();
  let set=new Set();
  for(let d of descriptions){
      set.add(d[1]);
      if(map.has(d[0])){
          if(d[2]==1){
              map.get(d[0])[0]=d[1];
          }else{
              map.get(d[0])[1]=d[1];
          }
          
      }else{
          if(d[2]==1){
              map.set(d[0],[d[1],0]);
          }else{
              map.set(d[0],[0,d[1]]);
          }
      }
  }
  let root=0;
  for(let d of descriptions){
      if(!set.has(d[0])){
          root=d[0];
          break;
      }
  }
  var build=function(nodeVal){
      let node=new TreeNode(nodeVal);
      if(map.has(nodeVal)){
          if(map.get(nodeVal)[0]!=0){
              node.left=build(map.get(nodeVal)[0]);
          }
          if(map.get(nodeVal)[1]!=0){
              node.right=build(map.get(nodeVal)[1]);
          }
      }
      return node;
  }
  return build(root); 
};