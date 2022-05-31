//未完成
//https://leetcode-cn.com/problems/H6lPxb/submissions/
var numSimilarGroups = function(strs) {
  const n=strs.length;
  const m=strs[0].length
  const f=new Array(strs.length).fill(0).map((item,index)=>index) //初始节点对应的父节点
  for(let i=0;i<n;i++){
      for(let j=i+1;j<n;j++){
          const fi=find(i),fj=find(j)
          if(fi==fj){ //执行同一个节点，跳过
              continue
          }
          if(check(m,strs[i],strs[j])){ //是否相似，是则进行合并
              f[fi]=fj
          }
      }
  }
  let ret=0
  for(let i=0;i<n;i++){
      if(f[i]==i){  //找到最身的父节点就是自己，则说明是顶点，找到一组答案，结果加一
          ret++
      }
  }
  return ret
  function find(x){  //找父节点
      return f[x]==x?x:(f[x]=find(f[x]))
}
function check(len,a,b){  //判断是否相似
  let num=0
  for(let i=0;i<len;i++){
      if(a[i]!=b[i]){
          num++
           if(num>2){
          return false
      }
      }
     
  }
  return true
}
};
