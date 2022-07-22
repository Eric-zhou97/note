// 设置交集的大小至少为2
var intersectionSizeTwo = function(intervals) {
    // end相同的话，长度小的边应该放在前面
    intervals.sort((a, b) => a[1] == b[1] ? a[1]-a[0]-(b[1]-b[0]) : a[1] - b[1])
    let count = 2    // 初始为2
    // 贪心法，初始的两个箭都放在最后
    // 遍历区间的过程中一直维护更新这两个变量的值
    let a = intervals[0][1] - 1
    let b = intervals[0][1]
    for(const i of intervals) {
      const start = i[0]
      const end = i[1]
      // 已经排过序了，只需要考虑start与a、b的关系
      // 两个箭都已经覆盖了本区间
      if(start <= a) {
        continue
      } else if(start <= b) {  // 有1个箭覆盖了区间，则需要更新a、b并且count+1
        a = b
        b = end
        count++
      } else {   // 没有箭覆盖了本区间，则需要更新a、b并且count+2
        a = end - 1
        b = end
        count += 2
      }
    }
    return count
  };