var pathSum = function(root, target) {
  var res=[];
  //未完成
  var dfs=function(count,point,temp){
      if(point==null) return;
      count+=point.val;
      temp.push(point.val);
      if(!point.left&&!point.right&&count==target){
          //满足条件时才另外取值
          res.push([...temp]);
      }else{
          //可能是负的
          dfs(count,point.left,temp);
          dfs(count,point.right,temp);
      }
      //有加有减
      temp.pop();  
  }
  dfs(0,root,[]);
  return res;
};