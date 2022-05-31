var getLeastNumbers = function(arr, k) {
  arr.sort((a,b)=>{
      return a-b;
  })
  arr.length=k;
  return arr;

};