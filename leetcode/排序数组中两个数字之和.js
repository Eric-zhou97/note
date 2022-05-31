var twoSum = function(numbers, target) {
  let i=0;
  let j=numbers.length-1;
  while(i<j){
      let sum=numbers[i]+numbers[j];
      if(sum>target){
          j--;
      }else if(sum<target){
          i++;
      }else if(sum==target){
          return [i,j];
      }
  }
  return [];
};