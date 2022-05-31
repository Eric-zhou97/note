//&&的作用，前一个是判断，后一个值反参
//||的作用，返回为true的，如都为true则返回第一个，都为false则返回第二个
var sumNums = function(n) {
  return n && n + sumNums(n - 1)
};