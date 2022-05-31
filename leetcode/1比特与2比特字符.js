var isOneBitCharacter = function(bits) {
  let n=bits.length,index=0;
  while(index<n-1){
      if(bits[index]==1){
          index++;
      }
      index++;
  }
  return index==n-1;
};