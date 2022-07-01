//为运算表达式设计优先级
//分治法，记忆
let memo = new Map();
var diffWaysToCompute = function (expression) {
  // 避免重复计算
  if (memo.has(expression)) {
    return memo.get(expression);
  }
  let res = [];
  for (let i = 0; i < expression.length; i++) {
    let c = expression.charAt(i);
    // 扫描算式 expression 中的运算符
    if (c == "*" || c == "+" || c == "-") {
      /****** 分 ******/
      let left = diffWaysToCompute(expression.substring(0, i));
      let right = diffWaysToCompute(expression.substring(i + 1));
      /****** 治 ******/
      // 通过子问题的结果，合成原问题的结果
      for (let a of left) {
        for (let b of right) {
          switch (c) {
            case "*":
              res.push(a * b);
              break;
            case "+":
              res.push(a + b);
              break;
            case "-":
              res.push(a - b);
              break;
          }
        }
      }
    }
  }
  // base case，递归函数必须有个 base case 用来结束递归，其实这段代码就是我们分治算法的 base case，代表着你「分」到什么时候可以开始「治」
  // 如果 res 为空，说明算式是一个数字，没有运算符（因为当算式中不存在运算符的时候，就不会触发 if 语句，也就不会给res中添加任何元素）
  if (!res.length) {
    res.push(parseInt(expression));
  }
  // 将结果添加进备忘录
  memo.set(expression, res);
  return res;
};