//规律
var validTicTacToe = function(board) {
  let countA=0,countB=0;
  for(let i=0;i<3;i++){
      for(let j=0;j<3;j++){
          if(board[i][j]=='X'){
              countA++;
          }else if(board[i][j]=='O'){
              countB++;
          }
      }
  }
  if(!(countA==countB||countA==countB+1)){
      return false;
  }
  const win = (board, p) => {
      for (let i = 0; i < 3; ++i) {
          if (p === board[0][i] && p === board[1][i] && p === board[2][i]) {
              return true;
          }
          if (p === board[i][0] && p === board[i][1] && p === board[i][2]) {
              return true;
          }
      }
      if (p === board[0][0] && p === board[1][1] && p === board[2][2]) {
          return true;
      }
      if (p === board[0][2] && p === board[1][1] && p === board[2][0]) {
          return true;
      }
      return false;
  }
  if(win(board,'X')&&countA!=countB+1){
      return false;
  }
  //两个都赢的情况这里筛选掉了
  if(win(board,'O')&&countB!=countA){
      return false;
  }
  
  return true;
};