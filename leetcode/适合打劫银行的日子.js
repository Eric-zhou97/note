//求极值，可通过创建数组来解决
var goodDaysToRobBank = function(security, time) {
  let n = security.length;
  let left = new Array(n).fill(0);
  let right = new Array(n).fill(0);
  for(let i =1;i<n;i++){
      if(security[i-1]>=security[i]){
          left[i] = left[i-1] + 1;
      }
      if(security[n-i-1] <= security[n-i]){
          right[n-i-1] = right[n-i] + 1;
      }
  }
  let result = [];
  for(let i=0;i<n;i++){
      if(left[i]>=time && right[i]>=time){
          result.push(i)
      }
  }

  return result;
};