var destCity = function(paths) {
  let set = new Set()
  for (let path of paths) {
    set.add(path[0])
  }
  for (let path of paths) {
    if (!set.has(path[1])) return path[1]
  }
};
//不需要计数的话，set比map要快，占用空间要少
var destCity = function(paths) {
  let set = new Set()
  for (let path of paths) {
    set.add(path[0])
  }
  for (let path of paths) {
    if (!set.has(path[1])) return path[1]
  }
};