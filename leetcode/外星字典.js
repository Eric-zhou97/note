//未完成
//https://leetcode-cn.com/problems/Jf1JuT/
var alienOrder = function (words) {
  var len = words.length
  var map = new Map()
  var outdeg = new Map()
  let root = {}
  for (var i = 0; i < len; i++) {
    let x = words[i]
    if (words[i - 1] && words[i - 1].length > x.length && words[i - 1].indexOf(x) === 0) {
      return ""
    }
    let parent = root
    for (var j = 0; j < x.length; j++) {
      let arr = Object.keys(parent)
      if (!parent.hasOwnProperty(x[j])) {
        parent[x[j]] = {}
      }
      for (var last of arr)
        if (last != x[j]) {
          if (!outdeg.has(last)) {
            outdeg.set(last, [])
          }
          if (outdeg.has(x[j]) && outdeg.get(x[j]).indexOf(last) !== -1) {
            return ""
          }
          if (outdeg.get(last).indexOf(x[j]) === -1) {
            outdeg.get(last).push(x[j])
          }
        }
      parent = parent[x[j]]
      map.set(x[j])
    }
  }
  var arr = [...map.keys()]
  var len = arr.length
  var indeg = {}
  for (var i = 0; i < len; i++) {
    indeg[arr[i]] = 0
  }
  for (let x of outdeg) {
    for (let i of x[1]) {
      indeg[i]++
    }
  }
  let queue = []
  for (var x in indeg) {
    if (indeg[x] === 0) {
      queue.push(x)
    }
  }
  let ans = ""
  while (queue.length) {
    let t = queue.shift(0)
    ans += t
    if (outdeg.has(t)) {
      let arr = outdeg.get(t)
      for (var q of arr) {
        indeg[q]--
        if (indeg[q] === 0) {
          queue.push(q)
        }
      }
    }
  }
  return ans.length === len ? ans : ''
};
