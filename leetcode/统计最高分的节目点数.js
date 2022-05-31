//给你一个下标从0开始的整数数组parents表示这棵树，其中parents[i]是节点i的父节点
//先构造二叉树，然后后序遍历，大大减少时间复杂度，每次在大数组中找子节点复杂度过高
var countHighestScoreNodes = function(parents) {
  let map = new Map();
  parents.forEach((e,i) =>{
      if(map.has(e))map.get(e).push(i)
      else map.set(e,[i]);
  })
  let len = parents.length;
  let max = -Infinity;
  let count = 1;
  const digui1 = (val)=>{
      let fenshu;
      let l = 0;
      let r = 0;
      if(val == null){
          return 0
      }
      //作为叶子节点
      if(!map.has(val)){
          fenshu = len - 1
      }else{
          let arr = map.get(val);
          if(arr.length == 1){
              l = digui1(arr[0]);
              r = digui1(null)
          }else{
              l = digui1(arr[0]);
              r = digui1(arr[1]);
          }
          //确定了左右子树的，剩下的靠减
          fenshu = Math.max(1,l) * Math.max(1,r) * Math.max(1,len - l - r - 1);
      }
      if(max < fenshu){
          max = fenshu;
          count = 1;
      }else if(max == fenshu){
          count++
      }
      return l + r + 1
  }
  digui1(0)
  return count
};