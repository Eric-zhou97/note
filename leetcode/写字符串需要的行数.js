var numberOfLines = function(widths, s) {
  let count=1;
  let temp=0;
  for(let c of s){
      let width=widths[c.charCodeAt()-97];
      if(temp+width<=100){
          temp=temp+width;
      }else{
          count++;
          temp=width;
      }
  }
  return [count,temp];
};