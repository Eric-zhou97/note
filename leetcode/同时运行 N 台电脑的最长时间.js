var maxRunTime = function(n, batteries) {
  batteries.sort((a, b) => {
    return a-b;
  })
  let count=0;
  for(let i=0;i<batteries.length;i++){
      count=count+batteries[i];
  }
  for(let i=batteries.length-1;i>=0;i--){
      if(batteries[i]>Math.floor(count/n)){
          n=n-1;
          count=count-batteries[i];
      }else{;
          return Math.floor(count/n);
      }
  }
};