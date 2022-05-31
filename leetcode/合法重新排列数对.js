/**
 * @param {number[][]} pairs
 * @return {number[][]}
 */
//欧拉
var validArrangement = function(pairs) {
  let map=new Map();
  let len=pairs.length;
  let mapIn=new Map();
  let mapOut=new Map();
  for(let p of pairs){
      if(!map.has(p[0])){
          map.set(p[0],[]);
      }
      map.get(p[0]).push(p[1]);
      if(mapIn.has(p[1])){
          mapIn.set(p[1],mapIn.get(p[1])+1);
      }else{
          mapIn.set(p[1],1);
      }
      if(mapOut.has(p[0])){
          mapOut.set(p[0],mapOut.get(p[0])+1);
      }else{
          mapOut.set(p[0],1);
      }
  }
  let start=-1;
  for(let key of mapOut.keys()){
      if(!mapIn.has(key)){
          start=key;
          break;
      }else if(mapOut.get(key)-mapIn.get(key)==1){
          start=key;
          break;
      }
  }
  if(start==-1){
      start=pairs[0][0];
  }
  let res=[];
  dfs=function(start){
      if(map.has(start)){
          let list=map.get(start);
          while(list.length>0){
              let temp=list.pop();
              dfs(temp);
          }
      }
      res.push(start);
  }
  dfs(start);
  let ans=[];
  for(let i=len;i>0;i--){
      let temp=[res[i],res[i-1]];
      ans.push(temp);
  }
  return ans;
  
};