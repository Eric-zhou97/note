//通过栈来遍历可能性，递归
//回溯
var flipChess = function(chessboard) {
  let m=chessboard.length;
  let n=chessboard[0].length;
  let max=0;
  const ds = [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [-1, 1], [1, -1], [-1, -1]];  
  var check=function(i,j){
      if(chessboard[i][j]!="."){
          return 0;
      }
      let res=0;
      let count=0;
      let stack=[];
      let temp=copy(chessboard);
      stack.push([i,j]);
      temp[i][j]="X";
      while(stack.length){
          let [x,y]=stack.pop();
          for(let i=0;i<8;i++){
              count=0
              x=x+ds[i][0];
              y=y+ds[i][1];
              while(x<m&&y<n&&x>=0&&y>=0&&temp[x][y]=="O"){
                  stack.push([x,y]);
                  temp[x][y]="X";
                  x=x+ds[i][0];
                  y=y+ds[i][1];
                  count++;
                  res++;
              }
              //超界或有空隙，回退
              if(x>=m||y>=n||x<0||y<0||temp[x][y]=="."){
                  while(count>0){
                      count--;
                      res--;
                      x=x-ds[i][0];
                      y=y-ds[i][1];
                      temp[x][y]="O"
                      stack.pop();
                  }
                  x=x-ds[i][0];
                  y=y-ds[i][1];    
              }else{
                  x=x-ds[i][0]*(count+1);
                  y=y-ds[i][1]*(count+1);    
                  count=0;
              }
          }
      }
      return res;
  }
  var copy=function(arr){
      let res = []
      for (let i = 0; i < arr.length; i++) {
          res.push(arr[i].split(''))
      }
      return res
  }
  for(let i=0;i<m;i++){
      for(let j=0;j<n;j++){
          max=Math.max(max,check(i,j))
      }
  }
  return max;
};
//回溯
var flipChess = function(chessboard) {
  const m = chessboard.length;
  const n = chessboard[0].length;
  const temp = [];
  for (let i = 0; i < m; i++) {
      temp.push(new Array(n).fill(-1));
  }
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (chessboard[i][j] === 'X') temp[i][j] = 1;
          if (chessboard[i][j] === 'O') temp[i][j] = 0;
      }
  }
  let result = 0;
  let max = 0;
  const ds = [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [-1, 1], [1, -1], [-1, -1]];
  const check = (x, y) => {
      for (const [dx, dy] of ds) {
          let isOK = true;
          let cur = 0;
          while (true) {
              cur++;
              const nx = x + dx * cur;
              const ny = y + dy * cur;
              if (nx < 0 || nx === m || ny < 0 || ny === n) break;
              if (temp[nx][ny] === 0) continue;
              if (temp[nx][ny] === 1 && cur > 1) {
                  result += cur - 1;
                  for (let i = 1; i < cur; i++) {
                      temp[x + dx * i][y + dy * i] = 1;
                  }
                  for (let i = 1; i < cur; i++) {
                      check(x + dx * i,y + dy * i)
                  }
              }
              break;
          }
      }
  }
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (temp[i][j] < 0) {
              temp[i][j] = 1;
              check(i, j);
              max = Math.max(max, result);
              result = 0;
              temp[i][j] = -1;
              
              for (let ii = 0; ii < m; ii++) {
                  for (let jj = 0; jj < n; jj++) {
                      if (chessboard[ii][jj] === 'X') temp[ii][jj] = 1;
                      if (chessboard[ii][jj] === 'O') temp[ii][jj] = 0;
                  }
              }
          }
      }
  }
  return max;
};