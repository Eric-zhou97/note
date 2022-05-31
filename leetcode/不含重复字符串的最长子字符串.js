var lengthOfLongestSubstring = function(s) {
  let map=new Map();
  let l=0;
  let max=0;
  for(let i=0;i<s.length;i++){
      if(map.has(s[i])&&map.get(s[i])>-1){
          while(l<=map.get(s[i])){
              map.set(s[l],-1);
              l++;
          }
      }
      map.set(s[i],i);
      max=Math.max(max,i-l+1);
  }
  return max;
};