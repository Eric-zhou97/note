var sumOfUnique = function(nums) {
  let map=new Map();
  let count=0;
  for(let n of nums){
      if(!map.has(n)){
          map.set(n,1);
          count=count+n;
      }else if(map.get(n)>0){
          count=count-n;
          map.set(n,0);
      }
  }
  return count;
};