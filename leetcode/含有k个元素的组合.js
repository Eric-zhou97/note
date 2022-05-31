//0,1全部枚举
var combine = function(n, k) {
  let res=[],sub=[];
  var dfs=function(index,count){
      if(count==k){
          res.push([...sub]);
          return;
      }else if(index==n){
          return;
      }else if(index<n){
          dfs(index+1,count);
          sub.push(index+1);
          dfs(index+1,count+1);
          sub.pop();
      }
  };
  dfs(0,0);
  return res;
};

//另解，k重循环
var combine = function(n, k) {
  var res=[];
  dfs(n,[],res,1,k);
  return res;
};
function dfs(n,child,res,start,k){
  if(child.length==k){
      res.push([...child]);
      return;
  }
  for(var i=start;i<=n;i++){
      child.push(i);
      dfs(n,child,res,i+1,k);
      child.pop();
  }
}
