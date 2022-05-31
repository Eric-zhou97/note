//后缀表达式
//逆波兰表达法
var evalRPN = function(tokens) {
  let stack=[];
  for(let s of tokens){
      if(s=='+'){
          let A=parseInt(stack.pop());
          let B=parseInt(stack.pop());
          A=A+B;
          stack.push(A+"");
      }else if(s=="-"){
          let A=parseInt(stack.pop());
          let B=parseInt(stack.pop());
          A=B-A;
          stack.push(A+"");
      }else if(s=="*"){
          let A=parseInt(stack.pop());
          let B=parseInt(stack.pop());
          A=A*B;
          stack.push(A+"");
      }else if(s=="/"){
          let A=parseInt(stack.pop());
          let B=parseInt(stack.pop());
          A=B/A;
          stack.push(A+"");
      }else{
          stack.push(s);
      }
  }
  return parseInt(stack.pop());
};