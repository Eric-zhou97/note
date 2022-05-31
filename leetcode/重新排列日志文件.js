var reorderLogFiles = function (logs) {
  const map = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26 }
  let words = [];
  let numbers = []
  logs.forEach(item => {
    let idx = item.indexOf(' ')
    if (map[item[idx + 1]]) {
      words.push([item, item.slice(idx + 1)])
    } else {
      numbers.push(item)
    }
  })
  function so (a, b) {
    let max = Math.max(a.length, b.length)
    for (let i = 0; i < max; i++) {
      if (a[i] === undefined) {
        return -1
      } else if (b[i] === undefined) {
        return 1
      }
      if (a[i] !== b[i]) {
        if (a[i] === ' ') {
          return -1
        } else if (b[i] === ' ') {
          return 1
        } else if (map[a[i]] < map[b[i]]) {
          return -1
        } else {
          return 1
        }
      }
    }
  }
  function s (str1, str2) {
    let a = str1[1]
    let b = str2[1]
    return a === b ? so(str1[0], str2[0]) : so(a, b)
  }
  words.sort(s)
  return words.map(item => item[0]).concat(numbers)
};