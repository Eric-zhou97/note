//前缀树
var replaceWords = function(dictionary, sentence) {
  let root={};
  for(let word of dictionary){
      let cur=root;
      for(let s of word){
          if(!cur[s]){
              cur[s]={};
          }
          cur=cur[s];
      }
      cur.flag=true;
  }
  let resArr=sentence.split(' ');
  for(let i=0;i<resArr.length;i++){
      let word=resArr[i];
      let str='';
      let cur=root;
      for(let s of word){
          if(cur.flag){
              resArr[i]=str;
              break;
          }
          if(!cur[s]){
              break;
          }
          str+=s;
          cur=cur[s];
      }
  }
  return resArr.join(' ');
};



