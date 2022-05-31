var calPoints = function(ops) {
  let count=0;
  for(let i=0;i<ops.length;i++){
      if(ops[i]=='+'){
          ops[i]=ops[i-2]+ops[i-1];
          count=count+ops[i];
      }else if(ops[i]=='D'){
          ops[i]=ops[i-1]*2;
          count=count+ops[i];
      }else if(ops[i]=='C'){
          count=count-ops[i-1];
          ops.splice(i-1,2);
          i=i-2;
      }else{
          ops[i]=parseInt(ops[i]);
          count=count+ops[i];
      }
  }
  return count;
};
//空间换时间
var calPoints = function (ops) {
  let n = ops.length
  let arr = []
  for (let i = 0; i < n; i++) {
    let item = ops[i]
    switch (item) {
      case "C": {
        arr.pop()
        break
      }
      case "D": {
        arr.push(arr[arr.length - 1] * 2)//数值字符串进行数值操作会变成Number
        break
      }
      case "+": {
        arr.push(arr[arr.length - 1] + arr[arr.length - 2])
        break
      }
      default: {
        arr.push(item * 1)
      }
    }
  }
  return arr.reduce((l, i) => l + i, 0)
};