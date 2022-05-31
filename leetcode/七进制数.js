var convertToBase7 = function(num) {
  let flag="";
  if(num<0){
      flag="-";
      num=-num;
  }
  let s=(num%7).toString();
  num=Math.floor(num/7);
  while(num>0){
      s=(num%7)+s;
      num=Math.floor(num/7);
  }
  return flag+s;
};