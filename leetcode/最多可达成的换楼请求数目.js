//状态压缩，二进制枚举
var maximumRequests = function(n, requests) {
  let len=requests.length;
  let ans=0;
  for(let i=1;i<(1<<len);i++){
        //统计1的个数，时间消耗很大
        // let cnt = i.toString(2).split('0').join('').length;
        // if (cnt <= ans) {
        //     continue;
        // }
      let temp=new Array(n).fill(0);
      let res=0;
      for(let j=0;j<len;j++){
          //注意括号，这里有且，要括号加以区分
         if((i&(1<<j))!=0){
             temp[requests[j][0]]--;
             temp[requests[j][1]]++;
             res++;
         } 
      }
      let flag=true;
      for(let count of temp){
          if(count!=0){
              flag=false;
              break;
          }
      }
      if(flag){
          ans=Math.max(ans,res);
      }
  }
  return ans;
};