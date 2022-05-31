//回文子序列
var maxProduct = function(s) {
  const len=s.length;
  let used=new Array(s.length).fill(0);
  var check=function(){
      let dp = Array.from(Array(len), () => Array(len).fill(0));
      for(let i = 0; i < len; i++) {
          if(used[i]!=1){
              dp[i][i] = 1;
          }
          
      }
      for(let i = len - 1; i >= 0; i--) {
          for(let j = i + 1; j < len; j++) {
              if(s[i] === s[j]&&used[i]!=1&&used[j]!=1) {
                  dp[i][j] = dp[i+1][j-1] + 2;
              } else {
                  dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1]);
              }
          }
      }
      return dp[0][len - 1];   
  }
  var test=function(iindex,jindex,addlen){
      if(iindex>jindex){
          return;
      }
      if(iindex==jindex){
          used[iindex]=1;
          max=Math.max(check()*addlen,max);
          used[iindex]=0;
      }
      for(let i = jindex; i >= iindex; i--) {
          for(let j = i; j <= jindex; j++) {
              if(s[i] == s[j]&&i!=j) {
                  used[i]=1;
                  used[j]=1;
                  if(i+1==j){
                      max=Math.max(check()*(addlen+2),max)
                  }else{
                      max=Math.max(check()*(addlen+2),max)
                      test(i+1,j-1,addlen+2);    
                  }
                  used[i]=0;
                  used[j]=0;
              }else if(s[i] == s[j]&&i==j){
                  used[i]=1;
                  max=Math.max(check()*(addlen+1),max)
                  used[i]=0;
              }
          }
      }
  }
  let  max=check();   
  if (max==s.length){
      max=max-1;
  }
  test(0,s.length-1,0);
  return max
};



//二进制枚举,bitset
var maxProduct = function (s) {
  const subs = [], n = s.length;
  let bits = (1 << n);
  // 枚举所有子序列
  while (bits--) {
      let sub = '';
      for (let i = 0; i < n; i++) {
          if (bits & (1 << i)) sub += s[i];
      }
      // 收集所有回文和对应的二进制位
      if (check(sub)) subs.push([sub.length, bits]);
  }

  let ans = 0;
  // 通过&查找两个不想交子序列的最大乘积
  for (const sub1 of subs) {
      for (const sub2 of subs) {
          if ((sub1[1] & sub2[1]) === 0) {
              ans = Math.max(ans, sub1[0] * sub2[0]);
          }
      }
  }
  return ans;
};

// 检测是否为回文字符串
function check(s) {
  let l = 0, r = s.length - 1;
  while (l < r) if (s[l++] !== s[r--]) return false;
  return true;
}
