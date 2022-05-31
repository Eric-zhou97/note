var placeWordInCrossword = function(board, word) {
  let len=word.length;
  let m=board.length,n=board[0].length;
  var test=function(c){
      let flag=1;
      for(let i=0;i<len;i++){
          if(word[i]!=c[i]&&c[i]!=' '){
              flag=0;
              break;
          }
      }
      if(flag==1){
          return true;
      }
      flag=1;
      for(let i=0;i<len;i++){
          if(word[len-i-1]!=c[i]&&c[i]!=' '){
              flag=0;
              break;
          }
      }
      if(flag==1){
          return true;
      }
      return false;
  }
  for(let i=0;i<m;i++){
      let c='';
      for(let j=0;j<n;j++){
          if(board[i][j]=='#'){
              if(c.length==len){
                  if(test(c)){
                      return true;
                  }
              }
              c='';
          }else{
              //j=n-1时，加上去了
              c=c+board[i][j];
          }
      }
      if(c.length==len){
          if(test(c)){
              return true;
          }
      }
  }
  for(let j=0;j<n;j++){
      let c='';
      for(let i=0;i<m;i++){
          if(board[i][j]=='#'){
              if(c.length==len){
                  if(test(c)){
                      return true;
                  }
              }
              c='';
          }else{
              //j=n-1时，加上去了
              c=c+board[i][j];
          }
      }
      if(c.length==len){
          if(test(c)){
              return true;
          }
      }
  }
  return false;
};