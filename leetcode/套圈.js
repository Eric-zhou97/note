//未解决
//圆
//三角
//对角线
var circleGame = function(toys, circles, r) {
  circles.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
  const cx = [];
  const cys = [];
  for (let i = 0; i < circles.length; i++) {
      if (cx.length === 0 || cx[cx.length - 1] !== circles[i][0]) {
          cx.push(circles[i][0]);
          cys.push([]);
      }
      cys[cx.length - 1].push(circles[i][1]);
  }
  let result = 0;
  const findX = (x) => {
      if (x > cx[cx.length - 1]) return -1;
      let l = 0;
      let r = cx.length - 1;
      while (l < r) {
          const m = Math.floor((l + r) / 2);
          if (cx[m] >= x) {
              r = m;
          } else {
              l = m + 1
          }
      }
      return l;
  }
  const findY = (xi, y) => {
      if (y > cys[xi][cys[xi].length - 1]) return -1;
      let l = 0;
      let r = cys[xi].length - 1;
      while (l < r) {
          const m = Math.floor((l + r) / 2);
          if (cys[xi][m] >= y) {
              r = m;
          } else {
              l = m + 1
          }
      }
      return l;
  }
  for (const [tx, ty, tr] of toys) {
      if (tr > r) continue;
      let xi = findX(tx - r + tr);
      if (xi < 0) continue;
      while (xi < cx.length && cx[xi] <= tx + r - tr) {
          const dr = Math.sqrt(Math.pow(r - tr, 2) - Math.pow(tx - cx[xi], 2));
          const yi = findY(xi, ty - dr);
          if (yi >= 0 && cys[xi][yi] <= ty + dr) {
              result++;
              break;
          }
          xi++;
      }
  }
  return result;
};