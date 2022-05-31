//异或
var singleNumbers = function(nums) {
  let a=0,b=0,temp=0,l=1;
  for(let n of nums){
      temp=temp^n;
  }
  //temp为要找的两个数的异或，找到一位为1，则代表
  while((temp&l)==0){
      l<<=1;
  }
  for(let n of nums){
      if((n&l)==0){
          a=a^n;
      }else{
          b=b^n;
      }
  }
  return [a,b];
};