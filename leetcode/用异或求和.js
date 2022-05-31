//加法
//异或
var add = function(a, b) {
  while (b) {//直到没有进位为止
      let c = (a & b) << 1 // 都是1的进位
      a ^= b               // 非进位和
      b = c                // 进位
  }
  return a
};