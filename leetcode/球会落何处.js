//模拟
var findBall = function(grid) {
  let m=grid.length,n=grid[0].length;
  let ans=new Array(n).fill(-1);
  for(let i=0;i<n;i++){
      let y=i;
      let x=0;
      while(x<m){
          //y+1与y-1可以合并为y+grid[x][y]
          // let temp=y+grid[x][y];
          // if(temp>=n||temp<0){
          //   break;
          // }
          // if(grid[x][y]!=grid[x][temp]){
          //   break;
          // }
          // x++;
          // y=temp;
          if(grid[x][y]==1){
              if(y+1<n&&grid[x][y+1]==1){
                  x++;
                  y++;
              }else{
                  break;
              }
          }else{
              if(y-1>=0&&grid[x][y-1]==-1){
                  x++;
                  y--;
              }else{
                  break;
              }
          }
      }
      if(x==m){
          ans[i]=y;
      }
  }
  return ans;
};