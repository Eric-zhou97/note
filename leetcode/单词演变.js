//未完成
//https://leetcode-cn.com/problems/om3reC/
var ladderLength = function (beginWord, endWord, wordList) {
  if (wordList.indexOf(endWord) === -1) {
    return 0
  }
  var len3 = beginWord.length
  var silmar = function (str1, str2) {
    str1 = wordList[str1]
    str2 = wordList[str2]
    var count = 0
    for (var i = 0; i < len3; i++) {
      if (str1[i] !== str2[i]) {
        count++
      }
      if (count > 1) {
        return false
      }
    }
    return count === 1
  }

  var len = wordList.length
  wordList[len] = beginWord
  var visit = new Array(len + 1).fill(false)
  var count = 1
  var queue = [len]
  while (queue.length) {
    var len2 = queue.length
    for (var j = 0; j < len2; j++) {
      let xx = queue.shift()
      let s = wordList[xx]
      visit[xx] = true
      if (s === endWord) {
        return count
      }
      for (var i = 0; i < len; i++) {
        if (visit[i]) {
          continue
        }
        if (silmar(xx, i)) {
          visit[i] = true
          queue.push(i)
        }
      }
    }
    count++
  }
  return 0
};
