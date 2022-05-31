//都是绝对路径
var simplifyPath = function(path) {
  let names=path.split('/');
  let stack=[];
  // for(let name of names){
  //     if(name=='..'){
  //         if(stack.length){
  //             stack.pop();
  //         }
  //     }else if(name.length&&name!='.'){
  //         stack.push(name);
  //     }
  // }

  //forEach好像快很多
  names.forEach((item) => {
      if(item=='..'){
          if(stack.length){
              stack.pop();
          }
      }else if(item.length&&item!='.'){
          stack.push(item);
      }
  })
  return '/'+stack.join('/');
};