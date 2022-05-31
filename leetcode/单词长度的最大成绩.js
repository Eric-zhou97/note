//map去重，按哪些字符组成的
//字符相减（字符串相减）
//不能直接相减，但可以直接比大小
var maxProduct = function(words) {
  let map=new Map();
  for(let i=0;i<words.length;i++){
      let temp=0;
      for(let j=0;j<words[i].length;j++){
          temp=temp|(1<<(words[i][j].charCodeAt()-'a'.charCodeAt()))
      }
      if(map.has(temp)){
          map.set(temp,Math.max(words[i].length,map.get(temp)));
      }else{
          map.set(temp,words[i].length);    
      }
  }
  let max=0;
  for(let x of map.keys()){
      for(let y of map.keys()){
          if((x&y)==0){
              max=Math.max(max,map.get(x)*map.get(y));
          }
      }
  }
  return max;
};