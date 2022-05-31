var prefixCount = function(words, pref) {
  let a=0
  for(let x of words){
      if(x.indexOf(pref)===0) a++
      }
  return a
};