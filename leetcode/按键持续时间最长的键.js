var slowestKey = function(releaseTimes, keysPressed) {
  let pre=0,max=0;
  let keys=keysPressed.split('');
  let ans='a';
  for(let i=0;i<releaseTimes.length;i++){
      //等长的情况下
      if(releaseTimes[i]-pre==max&&ans<keys[i]){
          ans=keys[i];
      }else if(releaseTimes[i]-pre>max){
          ans=keys[i];
          max=releaseTimes[i]-pre;
      }
      pre=releaseTimes[i];
  }
  return ans;
};