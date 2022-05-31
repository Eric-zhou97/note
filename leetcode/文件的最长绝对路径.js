var lengthLongestPath = function(input) {
  let stack = []
  let result = 0
  // 1. 以\n拆分字符串m
  let newString = input.split("\n")
  for(let i = 0 ;i < newString.length ;i++ ){
      // 2. 计算当前字符串的层级
      // '/t'是一个字符
      let level = newString[i].lastIndexOf("\t") + 1 
      // 2.1 如果栈内的层级比目前已经计算的层级要大，则将栈内的数据清理干净再计算
      while(stack.length > level){
          stack.pop()
      } 
      // 2.2 获取当前所有字符串的长度
      let length = (stack[stack.length - 1]||0) + (newString[i].length - level + 1)
      // 3. 将当前最新长度存到栈中
      stack.push(length)
      // 5. 如果是一个文件，则说明该层级已经到底部
      if(newString[i].includes(".")) result = Math.max(result,length - 1)
  }
  return result
}; 