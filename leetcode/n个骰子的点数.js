var dicesProbability = function(n) {
  if (n < 1) {
    return [];
  }
  const res = [0, 1, 1, 1, 1, 1, 1];
  for (let i = 1; i < n; i++) {
    //每次加一个骰子，一个数的次数，等于少一个骰子的情况下，这个数前六个数的次数相加
    for (let j = 6 * n; j > 0; j--) {
      res[j] = res
        //获取前六个数
        .slice(Math.max(0, j - 6), j)
        //累加
        .reduce((acc, cur) => acc + cur, 0);
    }
  }
  //.filter(Boolean)过滤掉false的选项
  return res.slice(1).map(num => num / Math.pow(6, n)).filter(Boolean);
};

//通过map从前往后
var dicesProbability = function(n) {
  if(n < 1) return [];
  // 值 -> 频数; num -> fre
  let [map, tmp] = [
      new Map([[1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1]]),
      new Map
  ];
  for(let k = 2; k <= n; ++k){
      // 第 k 个骰子
      tmp.clear();
      for(let [num, fre] of map){
          for(let d = 1; d <= 6; ++d){
              let new_num = num + d; // 新的 num
              tmp.set(new_num, tmp.has(new_num) ? fre + tmp.get(new_num) : fre);
          }        
      }
      //交换指针位置，map=tmp不是赋值，是指针指向
      [map, tmp] = [tmp, map];
  }
  // [[num1, fre1], [num2, fre2], ...] ; 按 num 升序排列
  //map转数组
  let arr = [...map.entries()].sort((x, y) => x[0] - y[0]);
  // 总数
  let sum = 0;
  for(let [_, fre] of arr){
      sum += fre;
  }
  // 计算 频率 = 频数 / 总数
  return arr.map(([_, fre])=> fre / sum);
};