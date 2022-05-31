//去除flag可以参考一下，用set.size
var minimumOperations = function(nums, start, goal) {
  let ToSet=new Set();
  let set=new Set();
  ToSet.add(start);
  set.add(start);
  let flag=1;
  let index=0
  while(flag){
      index++;
      flag=0;
      let temp=new Set();
      for(let s of set.values()){
          for(let n of nums){
              //加
              let tempNum=s+n;
              if(tempNum==goal){
                  return index;
              }
              if(tempNum<=1000&&tempNum>=0){
                  if(!ToSet.has(tempNum)){
                      ToSet.add(tempNum);
                      temp.add(tempNum);
                      flag=1;
                  }
              }
              //减
              tempNum=s-n;
              if(tempNum==goal){
                  return index;
              }
              if(tempNum<=1000&&tempNum>=0){
                  if(!ToSet.has(tempNum)){
                      ToSet.add(tempNum);
                      temp.add(tempNum);
                      flag=1;
                  }
              }
              //异或
              tempNum=s^n;
              if(tempNum==goal){
                  return index;
              }
              if(tempNum<=1000&&tempNum>=0){
                  if(!ToSet.has(tempNum)){
                      ToSet.add(tempNum);
                      temp.add(tempNum);
                      flag=1;
                  }
              }
          }
          
      }
      set=temp;
  }
  return -1;

};
//高复杂度（高一点），简洁化
var minimumOperations = function(nums, start, goal) {
  var getNext=function(s){
      let res=[];
      for(let n of nums){
          res.push(s+n);
          res.push(s-n);
          res.push(s^n);
      }
      return res;
  }
  let ToSet=new Set();
  let set=new Set();
  ToSet.add(start);
  set.add(start);
  let index=0
  while(set.size){
      index++;
      let temp=new Set();
      for(let s of set.values()){
          let next=getNext(s);
          for(let tempNum of next){
              if(tempNum==goal){
                  return index;
              }
              if(tempNum<=1000&&tempNum>=0){
                  if(!ToSet.has(tempNum)){
                      ToSet.add(tempNum);
                      temp.add(tempNum);
                  }
              }
          }
      }
      set=temp;
  }
  return -1;
};