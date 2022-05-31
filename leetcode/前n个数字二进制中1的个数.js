//动态规划
//二进制
var countBits = function(n) {
  let dp=new Array(n+1);
  dp[0]=0;
  for(let i=1;i<=n;i++){
      //能被2整除，则与之前一个能被2整除的1的个数一样，只是多一个0，位置不一样
      //不能被2 整除则在末尾多一个1
      dp[i]=i%2?dp[i-1]+1:dp[i>>1];
  }
  return dp;
};