//转成分钟计时，注意凌晨这个特殊点，即最大与最小的链接
var findMinDifference = function(timePoints) {
  let ans=[];
  let min=Infinity;
  for(let s of timePoints){
      let temp=s.split(":");
      ans.push(parseInt(temp[0])*60+parseInt(temp[1]));
  }
  ans.sort((a,b)=>a-b);
  for(let i=0;i<ans.length-1;i++){
      if(min>(ans[i+1]-ans[i])){
          min=ans[i+1]-ans[i];
      }
  }
  if(min>(24*60-ans[ans.length-1]+ans[0])){
      min=24*60-ans[ans.length-1]+ans[0];
  }
  return min;
};