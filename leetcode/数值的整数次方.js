var myPow = function(x, n) {
  if(x===0) return 0;
  if(n === 0) return 1;
  if(n === 1) return x;
  if(n === -1) return 1/x;
  if(n%2===0){
      let a = myPow(x,n/2);
      return a **2
  }
  else{
      let b = myPow(x,(n-1)/2);
      return (b**2)*x
  }
};