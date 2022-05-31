var projectionArea = function(grid) {
  let m=grid.length,n=grid[0].length;
  let maxY=new Array(m).fill(0);
  let maxX=new Array(n).fill(0);
  let count=0;
  for(let i=0;i<m;i++){
      for(let j=0;j<n;j++){
          if(grid[i][j]>0){
              count++;
              maxY[i]=Math.max(maxY[i],grid[i][j]);
              maxX[j]=Math.max(maxX[j],grid[i][j]);
          }
      }
  }
  count=count+maxX.reduce((result,next)=>{return result+next},0);
  count=count+maxY.reduce((result,next)=>{return result+next},0);
  return count;
};