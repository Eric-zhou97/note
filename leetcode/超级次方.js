var superPow = function(a, b) {
  const MOD=1337;
  dfs=function(idx){
      if(idx==-1){
          return -1;
      }
      //b=x*10+y => a^b=a^x^10*a^y
      //这样变成了一位一位的来(y)
      return quickPow(dfs(idx-1),10)*quickPow(a,b[idx])%MOD;
  }
  quickPow=function(x,y){
      let ans=1;
      x=x%MOD;
      //二进制
      while(y!=0){
          if((y&1)!=0){
              ans=ans*x%MOD;
          }
          x=x*x%MOD;
          y=y>>1;
      }
      return ans;
  }
  a=a%MOD;
  return dfs(b.length-1);//最后一位的index
};
