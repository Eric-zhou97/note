//未解决
var groupStrings = function(words) {
  words = words.map(normalize)
  let counts = new Map()
  for (let word of words) {
      increase(counts, word, 1)
  }
  let set = new Set(words)
  let arr = [...set]
  let index = new Map()
  for (let i = 0; i < arr.length; i++) {
      index.set(arr[i], i)
  }
  let dsu = new DSU(arr.length)
  for (let i = 0; i < arr.length; i++) {
      let word = arr[i]
      for (let related of getRelated(word)) {
          if (!index.has(related)) continue
          let j = index.get(related)
          dsu.union(i, j)
      }
  }
  // console.log(arr, counts)
  let groups = new Map()
  for (let i = 0;i < arr.length; i++) {
      let word = arr[i]
      let count = counts.get(word)
      let key = dsu.find(i)
      increase(groups, key, count)
  }
  // console.log(groups)
  return [groups.size, Math.max(...groups.values())]
};
function* getRelated(word) {
  for (let i = 0; i < 26; i++) {
      let bi = 1 << i
      if (word & bi) {
          let removei = word & ~bi
          yield removei
          for (let j = 0; j < 26; j++) {
              if (j === i) continue
              let bj = 1 << j
              if (word & bj) continue
              yield removei | bj
          }
      } else {
          yield word | bi
      }
  }
}
function normalize(word) {
  let mask = 0
  for (let i = 0; i < word.length; i++) {
      mask |= 1 << (word.charCodeAt(i) - 97)
  }
  return mask
}
function increase(map, key, val) {
  let cur = map.get(key) || 0
  map.set(key, cur + val)
}
class DSU {
constructor(N) {
  this.parent = Array(N).fill(0).map((x, i) => i);
  this.rank = Array(N).fill(0);
}
find(x) {
  if (this.parent[x] === x)
    return x;
  this.parent[x] = this.find(this.parent[x]);
  return this.parent[x];
}
union(x, y) {
  x = this.find(x);
  y = this.find(y);
  if (x === y)
    return;
  if (this.rank[x] < this.rank[y]) {
    this.parent[x] = y;
  } else if (this.rank[x] > this.rank[y]) {
    this.parent[y] = x;
  } else {
    this.parent[x] = y;
    this.rank[y]++;
  }
}
}



//另解
var groupStrings = function(words) {
  const tw = words.map((item) => item.split('').map(l => l.charCodeAt(0) - 97).reduce((pre, cur) => pre + Math.pow(2, cur), 0));
  let gc = 0;
  let curGN = 0;
  let maxGN = 0;
  const wg = new Array(tw.length).fill(0);
  const mp = {};
  for (let i = 0; i < tw.length; i++) {
      if (mp[tw[i]]) {
          mp[tw[i]].push(i);
      } else {
          mp[tw[i]] = [i];
      }
  }
  const check = (v) => {
      if (!mp[v] || wg[mp[v][0]]) return;
      curGN += mp[v].length;
      for (const temp of mp[v]) {
          wg[temp] = gc;
      }
      const has = [];
      const not = [];
      for (let i = 0; i < 26; i++) {
          const temp = Math.pow(2, i);
          if (v & temp) {
              has.push(temp);
          } else {
              not.push(temp);
          }
      }
      for (const temp of has) {
          check(v ^ temp);
      }
      for (const temp of not) {
          check(v ^ temp);
      }
      for (const temp1 of has) {
          for (const temp2 of not) {
              check(v ^ temp1 ^ temp2);
          }
      }
  }
  for (let i = 0; i < tw.length; i++) {
      if (wg[i]) continue;
      gc++;
      curGN = 0;
      check(tw[i]);
      maxGN = Math.max(curGN, maxGN);
  }
  return [gc, maxGN];
};