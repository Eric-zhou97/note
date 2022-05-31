var isEscapePossible = function (blocked, source, target) {
  const N = 1000000;
  // 离散化
  function getDisList(index) {
      const list = [];
      //将大的路径缩小
      for (let i = 0; i < blocked.length; i++) {
          let v = blocked[i][index];
          if (v > 0) list.push(v - 1);
          list.push(v);
          if (v + 1 < N) list.push(v + 1);
      }
      list.push(source[index]);
      list.push(target[index]);
      list.push(0);
      list.push(N - 1);
      return [...new Set(list)].sort((a, b) => a - b);
  }

  let xList = getDisList(0),
      yList = getDisList(1);

  // console.log(xList);
  // console.log(yList);
  let xMap = {},
      yMap = {};

  for (let i = 0; i < xList.length; i++) {
      xMap[xList[i]] = i;
  }
  for (let i = 0; i < yList.length; i++) {
      yMap[yList[i]] = i;
  }

  let blockMap = {};

  for (let [x, y] of blocked) {
      x = xMap[x], y = yMap[y];
      if (!blockMap[x]) blockMap[x] = {};
      blockMap[x][y] = 1;
  }
  let n = xMap[xList[xList.length - 1]],
      m = yMap[yList[yList.length - 1]];

  source = [xMap[source[0]], yMap[source[1]]];
  target = [xMap[target[0]], yMap[target[1]]];
  // console.log(blockMap);


  // 离散化结束 常规BFS
  let q = [source];
  let dir = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0]
  ];
  let visited = {};
  visited[source.join()] = 1;

  while (q.length) {
      //第二轮重新创建
      let tmp = [];
      for (let [x, y] of q) {
          if (x == target[0] && y == target[1]) return true;

          for (let d of dir) {
              let nx = x + d[0];
              let ny = y + d[1];

              let str = nx + ',' + ny;
              if (nx >= 0 && nx <= n && ny >= 0 && ny <= m && !blockMap[nx]?.[ny] && !visited[str]) {
                  visited[str] = 1;
                  tmp.push([nx, ny]);
              }
          }
      }

      q = tmp;
  }
  return false;
};



//另解，逆向思维，有上下限制的广度优先搜索
var isEscapePossible = function (blocked, source, target) {
  const N = 1000000;

  if (blocked.length < 2) {
      return true;
  }

  let blockedMap = new Map();
  for (let b of blocked) blockedMap.set(b.join(), 1);
  // 最大覆盖范围
  let countdown = Math.floor(blocked.length * (blocked.length - 1) / 2);

  const isBlocked = (source, target) => {
      let visited = new Set();
      visited.add(source.join());

      let q = [source];
      let dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];
      let count = 1;
      while (q.length && count <= countdown) {
          let tmp = [];
          for (let [x, y] of q) {
              for (let d of dir) {
                  let nx = x + d[0];
                  let ny = y + d[1];
                  let str = nx + ',' + ny;
                  if (nx >= 0 && nx < N && ny >= 0 && ny < N
                      && !blockedMap.get(str) && !visited.has(str)) {
                      visited.add(str);
                      tmp.push([nx, ny]);
                      count++;

                      if (nx == target[0] && ny == target[1]) return false;
                  }
              }
          }
          q = tmp;
      }
      return count <= countdown;
  }
  return !isBlocked(source, target) && !isBlocked(target, source);
};
