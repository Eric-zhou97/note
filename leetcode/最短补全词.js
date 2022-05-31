var shortestCompletingWord = function(licensePlate, words) {
  var count=function(word){
      let countArr=new Array(26).fill(0);
      for(let c of word){
          if((c>='a'&&c<='z')||(c>='A'&&c<='Z')){
              countArr[c.toLowerCase().charCodeAt()-'a'.charCodeAt()]++;
          }
      }
      return countArr;
  }
  let countL=count(licensePlate);
  let ans;
  for(let word of words){
      if(ans==undefined||ans.length>word.length){
          let temp=count(word);
          let flag=true;
          for(let i=0;i<26;i++){
              if(countL[i]>temp[i]){
                  flag=false;
                  break;
              }
          }
          if(flag){
              ans=word;
          }
      }
  }
  return ans;
};