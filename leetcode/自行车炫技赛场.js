//枚举+map去重
var bicycleYard = function(position, terrain, obstacle) {
  let ans=[];
  let direction=[[0,1],[0,-1],[1,0],[-1,0]];
  let map=new Map();
  let n=terrain.length,m=terrain[0].length;
  var move=function(speed,p){
      if(map.has(p+''+speed)){
          return;
      }else{
          map.set(p+''+speed,0);
      }
      if(speed<=0){
          return;
      }
      if(speed==1&&p!=position){
          ans.push(p);
      }
      for(let i=0;i<4;i++){
          let x=p[0]+direction[i][0];
          let y=p[1]+direction[i][1];
          if(x>=n||y>=m||x<0||y<0){
              continue;
          }
          move(speed+terrain[p[0]][p[1]]-terrain[x][y]-obstacle[x][y],[x,y])
      }
  }
  move(1,position);
  ans.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
  return ans;
};