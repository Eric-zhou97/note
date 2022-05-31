//字符串拆分
//字符串翻转，反转
var reversePrefix = function(word, ch) {
  for(let i=0;i<word.length;i++){
      if(word[i]==ch){
          let first=word.slice(0, i+1)
          let last=word.slice(i+1);
          let array = first.split('');  //转换成字符串数组
          array = array.reverse();
          first = array.join('');
          return first+last;
      }
  }
  return word;
};