//存在输入""的情况
var decodeCiphertext = function(encodedText, rows) {
  let len=encodedText.length;
  let col=len/rows;
  let arr=[];
  let index=0;
  for(let i=0;i<rows;i++){
      arr.push([]);
      for(let j=0;j<col;j++){
          arr[i][j]=encodedText[index];
          index++;
      }
  }
  let s=[];
  let i=0;j=0,count=1;
  while(i!=0||j!=col){
      s.push(arr[i][j]);
      i++;
      j++;
      if(i==rows||j==col){
          i=0;
          j=count;
          count++;
      }       
  }
  //s.push(arr[i][j]);
  while(s[s.length-1]==' '){
      s.pop();
  }
  return s.join('');

};