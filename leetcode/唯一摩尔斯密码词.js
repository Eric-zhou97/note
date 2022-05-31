var uniqueMorseRepresentations = function(words) {
  let morse=[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
  let set=new Set();
  for(let w of words){
      let s='';
      for(let c of w){
          s=s+morse[c.charCodeAt()-97];
      }
      set.add(s);
  }
  return set.size;
};