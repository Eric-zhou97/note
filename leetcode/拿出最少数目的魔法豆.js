var minimumRemoval = function(beans) {
  //reduce求和
  const sum = beans.((cur, next) => cur + next, 0)
  let ans = sum
  beans.sort((a, b) => a - b)
  for (let i = 0; i < beans.length; i ++) {
    //我之前的不要了，最小的不会漏掉  
    ans = Math.min(ans, sum - beans[i] * (beans.length - i))
  }
  return ans
};

//另解，不大好
var minimumRemoval = function(beans) {
  let count=beans.reduce((cur, next) => cur + next, 0);
  beans.sort((a, b) => {
    return a-b;
  })
  let ans=count-beans.length*beans[0];
  for(let i=0;i<beans.length;i++){
      while(i+1<beans.length&&beans[i+1]==beans[i]){
          i++;
      }
      let temp=count-(beans.length-i-1)*beans[i+1];
      if(temp<ans){
          ans=temp;
      }
  }
  return ans;
};