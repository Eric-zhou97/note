//未完成
//https://leetcode-cn.com/problems/QA2IGt/
var findOrder = function (numCourses, prerequisites) {
  var len = prerequisites.length
  var inDeg = {}
  var outDeg = {}
  for (var i = 0; i < len; i++) {
    if (!inDeg.hasOwnProperty(prerequisites[i][0])) {
      inDeg[prerequisites[i][0]] = []
    }
    if (!outDeg.hasOwnProperty(prerequisites[i][1])) {
      outDeg[prerequisites[i][1]] = []
    }
    inDeg[prerequisites[i][0]].push(prerequisites[i][1])
    outDeg[prerequisites[i][1]].push(prerequisites[i][0])
  }

  let ans = []
  var queue = new Array(numCourses).fill(0).map((v, i) => i)
  while (queue.length) {
    let c = queue.length
    for (var i = 0; i < c; i++) {
      if (!inDeg.hasOwnProperty([queue[i]]) || !inDeg[queue[i]].length) {
        ans.push(queue[i])
        if (outDeg.hasOwnProperty([queue[i]]) && outDeg[queue[i]].length) {
          for (let x of outDeg[queue[i]]) {
            inDeg[x].splice(inDeg[x].indexOf(queue[i]), 1)
          }
        }
        queue.splice(i, 1)
        break
      }
    }
    if (i === c) {
      return []
    }
  }
  return ans
};
