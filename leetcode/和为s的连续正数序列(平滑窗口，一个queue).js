var findContinuousSequence = function(target) {
  let index=Math.ceil(target/2);
  let sum=0,queue=[];
  let result=[];
  for(let i=1;i<=index;i++){
      sum=sum+i;
      queue.push(i);
      while(sum>target){
          sum=sum-queue[0];
          queue.shift();
      }
      if(sum==target){
          result.push([...queue]);
      }
  }
  return result;
};