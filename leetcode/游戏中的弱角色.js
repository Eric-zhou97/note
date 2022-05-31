/**
 * @param {number[][]} properties
 * @return {number}
 */
//降维，区间，构造函数，空间换时间，将一个维度作为下标
var numberOfWeakCharacters = function(properties) {
  let arr=new Array(100001).fill(-1);
  let len=0;
  //构建
  for(let i=0;i<properties.length;i++){
      if(arr[properties[i][0]]==-1){
          arr[properties[i][0]]=properties[i][1];
      }else if(arr[properties[i][0]]<properties[i][1]){
          arr[properties[i][0]]=properties[i][1];
      }
      if(len<properties[i][0]){
          len=properties[i][0]
      }
  }
  //区间修改
  for(let i=len-1;i>=1;i--){
      if(arr[i]<arr[i+1]){
          arr[i]=arr[i+1];
      }
  }
  let count=0;
  for(let i=0;i<properties.length;i++){
      //双严格小于
      if(properties[i][1]<arr[properties[i][0]+1]){
          count++;
      }
  }
  return count;
};


//双重排序，逻辑角度去解决问题
var numberOfWeakCharacters = function(properties) {
  properties.sort((a, b) => {
      if(a[0]==b[0]){
          return a[1]-b[1];
      }else{
          //两边都是严格小于
          return b[0]-a[0];
      }
  })
  let maxdef=0;
  let count=0;
  for(let i=0;i<properties.length;i++){
      if(properties[i][1]<maxdef){
          count++;
      }else{
          maxdef=properties[i][1];
      }
  }
  return count;
};