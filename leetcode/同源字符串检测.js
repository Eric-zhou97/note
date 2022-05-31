var possiblyEquals = function(s1, s2) {
  //长度差值，三维数组动态规划
  let n=s1.length,m=s2.length;
  var isdigit=function(c){
      return c>='0'&&c<='9';
  }
  let dp=new Array();
  for(let i=0;i<=n;i++){
      dp[i]=new Array();
      for(let j=0;j<=m;j++){
          dp[i][j]=new Set();
      }
  }
  dp[0][0]=new Set([0]);
  for(let i=0;i<=n;i++){
      for(let j=0;j<=m;j++){
          //dp这里的下标存在n,m的情况
          for(let delta of dp[i][j].values()){
              let num=0;
              for(let p=i;p<Math.min(i+3,n);p++){
                  if(isdigit(s1[p])){
                      num=num*10+parseInt(s1[p]);
                      dp[p+1][j].add(delta+num);
                  }else{
                      break;
                  }
              }

              num=0;
              for(let q=j;q<Math.min(j+3,m);q++){
                  if(isdigit(s2[q])){
                      num=num*10+parseInt(s2[q]);
                      dp[i][q+1].add(delta-num);
                  }else{
                      break;
                  }
              }

              if(i<n && delta<0 && !isdigit(s1[i])){
                  dp[i+1][j].add(delta+1);
              }
              if(j<m && delta>0 && !isdigit(s2[j])){
                  dp[i][j+1].add(delta-1);
              }
              if(i<n && j<m && delta==0 && s1[i]==s2[j]){
                  dp[i+1][j+1].add(0);
              }
          }    
      }
  }
  return dp[n][m].has(0);
};