var mostCommonWord = function(p, forbid) {
  let obj = {};
  // (\W+)：匹配一个或多个非字母进行切割，匹配到的非字母全部缓存；
  // 在中间的','不会有影响，只有两边的会有
  let arr = p.toLowerCase().split(/\W+/).forEach(n=>{
      obj[n] = (obj[n] || 0) + 1;
  })
  // forbid.push('');//可以不用
  forbid.forEach(n=>obj[n] = 0);
  return Object.keys(obj).sort((a,b)=>obj[b] - obj[a])[0];
};