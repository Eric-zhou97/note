var hasAlternatingBits = function(n) {
  let prev = 2;
  while (n !== 0) {
      const cur = n % 2;
      if (cur === prev) {
          return false;
      }
      prev = cur;
      n = Math.floor(n / 2);
  }
  return true;
};
//另解
var hasAlternatingBits = function(n) {
  let point=0;
  let pre=-1;
  while(n>>point){//别往大了变，往小了变
      let temp=(n>>point)&1
      if(pre!=temp){
          pre=temp;
          point++;
      }else{
          return false;
      }
  }
  return true;
};