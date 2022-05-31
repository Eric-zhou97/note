var trailingZeroes = function(n) {
  let count=0;
  let i=1;
  while(i*5<=n){
      let temp=i;
      while(temp%5==0){
          temp=temp/5;
          count++;
      }
      count++;
      i++;
  }
  return count;
};

//另解，数学优化
var trailingZeroes = function(n) {
  let count=0;
  while(n>0){
      n=Math.floor(n/5);
      count=count+n;
  }
  return count;
};