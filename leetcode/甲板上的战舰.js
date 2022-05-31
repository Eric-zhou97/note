var countBattleships = function(board) {
  let row=board.length;
  let col=board[0].length;
  let visited=Array.from(new Array(row),()=>new Array(col).fill(0));
  let count=0;
  for(let i=0;i<row;i++){
      for(let j=0;j<col;j++){
          if(visited[i][j]==0&&board[i][j]=='X'){
              let temp=i+1;
              visited[i][j]=1;
              count++;
              while(temp<row&&board[temp][j]=='X'&&visited[temp][j]==0){
                  visited[temp][j]=1;
                  temp++;
              }
              temp=j+1;
              while(temp<col&&board[i][temp]=='X'&&visited[i][temp]==0){
                  visited[i][temp]=1;
                  temp++;
              }
          }
      }
  }
  return count;
};