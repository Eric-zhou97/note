//丑数
//只含有质因子2，3，5。包括1
var nthUglyNumber = function(n) {
  let dp=new Array(n);
  dp[0]=1;
  let p2=0,p3=0,p5=0;
  for(let i=1;i<n;i++){
    //丑数都是之前丑数的倍数，没有别的质因子  
    let num2=dp[p2]*2,num3=dp[p3]*3,num5=dp[p5]*5;
    dp[i]=Math.min(num2,num3,num5);
    if(dp[i]==num2){
        p2++;
    }
    if(dp[i]==num3){
      p3++;
    }
    if(dp[i]==num5){
      p5++;
    }
  }
  return dp[n-1];
};