//栈的违规
//模拟
var validateStackSequences = function(pushed, popped) {
  let stack=[];
  let len=pushed.length;
  let p=0;
  for(let i=0;i<len;i++){
      stack.push(pushed[i]);
      while(stack.length&&stack[stack.length-1]===popped[p]){
          stack.pop();
          p++;
      }
  }
  return stack.length===0;
};

//找违规
var validateStackSequences = function(pushed, popped) {
  if(pushed.length==0){
      return true;
  }
  let map=new Map();
  for(let i=0;i<pushed.length;i++){
      map.set(pushed[i],i+1);
  }
  for(let i=0;i<popped.length;i++){
      popped[i]=map.get(popped[i]);
  }
  let tempmax=popped[0];
  for(let i=1;i<popped.length;i++){
      if(popped[i]>popped[i-1]&&popped[i]<tempmax){
          return false;
      }
      if(tempmax<popped[i]){
          tempmax=popped[i];
      }
  }
  return true;
};  