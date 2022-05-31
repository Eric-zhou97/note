//几何图形
var DetectSquares = function() {
  this.cnt = new Map();
};

DetectSquares.prototype.add = function(point) {
  const x = point[0], y = point[1];
  if (!this.cnt.has(y)) {
      this.cnt.set(y, new Map());
  }
  const yCnt = this.cnt.get(y);
  yCnt.set(x, (yCnt.get(x) || 0) + 1);
};

DetectSquares.prototype.count = function(point) {
  let res = 0;
  let x = point[0], y = point[1];
  if (!this.cnt.has(y)) {
      return 0;
  }
  const yCnt = this.cnt.get(y);
  const entries = this.cnt.entries();
  for (const [col, colCnt] of entries) {
      if (col !== y) {
          // 根据对称性，这里可以不用取绝对值
          let d = col - y;
          res += (colCnt.get(x) || 0) * (yCnt.get(x + d) || 0) * (colCnt.get(x + d) || 0);
          res += (colCnt.get(x) || 0) * (yCnt.get(x - d) || 0) * (colCnt.get(x - d) || 0);
      }
  }
  return res;
};
