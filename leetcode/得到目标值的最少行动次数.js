var minMoves = function(target, maxDoubles) {
  let count=target%2;
  let tar=Math.floor(target/2)*2;
  while(maxDoubles>0&&tar>1){
      if(tar%2==0){
          tar=tar/2;
          count++;
          maxDoubles--;
      }else{
          tar--;
          count++;
      }
  }
  count=count+tar-1;
  return count;
};