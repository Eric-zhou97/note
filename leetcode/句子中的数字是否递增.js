var areNumbersAscending = function(s) {
  let arr=s.trim().split(/\s+/);
  let pre=-1;
  for(let n of arr){
      //isNumber
      if(n[0]>='0'&&n[0]<='9'){
          let temp=parseInt(n);
          if(pre>=temp){
              return false;
          }
          pre=temp;
      }
  }
  return true;
};