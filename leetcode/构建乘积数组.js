var constructArr = function(a) {
  if(a==null||a.length==0){
      return a;
  }
  let len=a.length;
  let left=[];
  left[0]=1;
  for(let i=1;i<len;i++){
      left[i]=left[i-1]*a[i-1];
  }
  let right = 1;
  for(let i = len - 1; i>= 0; i--){
      left[i] *= right;
      right *= a[i];
  } 
  return left;
};