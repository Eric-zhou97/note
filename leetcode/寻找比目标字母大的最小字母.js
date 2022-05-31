var nextGreatestLetter = function(letters, target) {
  //这是有序的
  for(let i=0; i<letters.length; i++){
      if(letters[i].charCodeAt() > target.charCodeAt()){
          return letters[i];
      }
  }
  return letters[0];
};