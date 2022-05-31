var longestWord = function(words) {
  words.sort((a,b)=>{
      if(a.length!=b.length){
          return a.length-b.length;
      }else{
          //字典序逆序排列，后出现的取代先出现的
          return b.localeCompare(a);
      }
  })
  longest="";
  let set=new Set();
  set.add(longest);
  for(let i=0;i<words.length;i++){
      let word=words[i];
      //从0开始的每一个子集，都要存在
      if(set.has(word.slice(0,word.length-1))){
          set.add(word);
          longest=word;
      }
  } 
  return longest;
};

//另解，字典树