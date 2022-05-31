var highestPeak = function(isWater) {
  let ans=Array.from(new Array(isWater.length),()=>new Array(isWater[0].length).fill(-1))
  let stack=[];
  for(let i=0;i<isWater.length;i++){
      for(let j=0;j<isWater[0].length;j++){
          if(isWater[i][j]==1){
              ans[i][j]=0;
              stack.push([i,j]);
          }
      }
  }
  let direction=[[0,1],[0,-1],[1,0],[-1,0]];
  //不能用shift，这个时间复杂度爆表
  while(stack.length){
      let temp=[];
      for(let s of stack){
          for(let i=0;i<4;i++){
              let next=[s[0]+direction[i][0],s[1]+direction[i][1]];
              if(next[0]<0||next[1]<0||next[0]>=isWater.length||next[1]>=isWater[0].length)
              {
                  continue;
              }
              if(ans[next[0]][next[1]]==-1){
                  ans[next[0]][next[1]]=ans[s[0]][s[1]]+1;
                  temp.push(next);
              }
          }
      }
      stack=temp;
  }
  return ans;
};