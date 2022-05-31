//未完成
//https://leetcode-cn.com/problems/ur2n8P/
var sequenceReconstruction = function (org, seqs) {
  var len = org.length
  var level = new Map()
  for (var i = 0; i < len; i++) {
    level.set(org[i], i)
  }
  var len2 = seqs.length
  var map = new Map()
  var relative = new Map()
  for (var i = 0; i < len2; i++) {
    let x = seqs[i]
    for (var j = 0; j < x.length; j++) {
      map.set(x[j])
      if (x[j] > len) {
        return false
      }
      if (j > 0) {
        if (level.get(x[j - 1]) >= level.get(x[j])) {
          return false
        }
        relative.set(x[j - 1] * len + x[j])
      }
    }
  }

  if (map.size !== len) {
    return false
  }
  for (var i = 1; i < len; i++) {
    if (!relative.has(org[i - 1] * len + org[i])) {
      return false
    }
  }
  return true
};
