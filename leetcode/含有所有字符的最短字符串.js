//滑动窗口+map
var minWindow = function(s, t) {
  let len=t.length;
  let map=new Map();
  for(let i=0;i<len;i++){
      if(map.has(t[i])){
          map.set(t[i],map.get(t[i])+1);
      }else{
          map.set(t[i],1);            
      }
  }
  let count=0;
  let l=0;
  let temp="";
  let max=1000000;
  for(let i=0;i<s.length;i++){
      if(map.has(s[i])){
          map.set(s[i],map.get(s[i])-1);
          if(map.get(s[i])>=0){
              count++;
          }
      }
      if(count==len){
          while(count==len){
              if(map.has(s[l])){
                  map.set(s[l],map.get(s[l])+1);
                  if(map.get(s[l])>0){
                      count--;
                  }
              }
              l++;
          }
          if(max>(i-l+2)){
              max=i-l+2;
              //截取字符串，从slice(a,b)，从a下标截取到b+1下标
              temp=s.slice(l-1,i+1);
          };
      }
  }
  return temp;
};