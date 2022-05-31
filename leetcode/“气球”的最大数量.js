var maxNumberOfBalloons = function(text) {
  //++需要有初始值
  let arr=new Array(26).fill(0);
  for(let c of text){
      arr[c.codePointAt()-97]++;
  }
  return Math.min(arr[0],arr[1],arr[13],Math.floor(arr[11]/2),Math.floor(arr[14]/2));
};