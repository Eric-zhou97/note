var winnerOfGame = function(colors) {
  let countA=0,countB=0;
  colors=colors.split('');
  for(let i=1;i<colors.length-1;i++){
      if(colors[i-1]=='A'&&colors[i]=='A'&&colors[i+1]=='A'){
          countA++;
      }else if(colors[i-1]=='B'&&colors[i]=='B'&&colors[i+1]=='B'){
          countB++;
      } 
  }
  if(countA<=countB){
      return false;
  }else{
      return true;
  }
};

//另解优化
var winnerOfGame = function(colors) {
  let ans = 0;
  let a = b = c = 0;
  b = colors.charCodeAt(0);
  c = colors.charCodeAt(1);
  for(let i=2;i<colors.length;i++){
      a=b;
      b=c;
      c=colors.charCodeAt(i);
      if(a==b && b==c){
          ans += (c==65)?1:-1;
      }
  }
  return ans>0;
};