var sortArrayByParity = function(nums) {
  let a=[],b=[];
  for(let n of nums){
      if(n %2!=1){
          a.push(n);
      }else{
          b.push(n);
      }
  }
  return a.concat(b);

};