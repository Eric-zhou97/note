function findTargetGroups(arr, count) {
  let ans=[];
  let map=new Map();
  for(let i=0;i<arr.length;i++){
      if(!map.has(arr[i])){
          if(map.has(count-arr[i])){
              ans.push([count-arr[i],arr[i]]);
          }
          //map.set的顺序
          map.set(arr[i],1);
      }else{
          map.set(arr[i],2);
      }
  }
  if(map.has(count/2)&&map.get(count/2)==2){
    ans.push([count/2,count/2])
  }
  return ans;
}

