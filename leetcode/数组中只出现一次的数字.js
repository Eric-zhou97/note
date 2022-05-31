//异或
//位运算
//逐位确认
var singleNumber = function(nums) {
  let res=0;
  for(let i=0;i<32;i++){
      let count=0;
      for(let n of nums){
          count+=((n>>i)&1)
      }
      if(count%3){
          res=res|(1<<i);
      }
  }
  return res;
};