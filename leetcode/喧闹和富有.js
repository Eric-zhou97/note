var loudAndRich = function(richer, quiet) {
  const connect = new Map(), degree = new Array(quiet.length),ans = new Array(quiet.length)
  degree.fill(0)
  for(const r of richer){
      if(connect.has(r[0]))
          connect.get(r[0]).push(r[1])
      else
          connect.set(r[0],[r[1]])
      degree[r[1]]++
  }
  const queue = []
  for(let i=0;i<quiet.length;i++){
      ans[i] = i
      if(degree[i]==0)
          queue.push(i)
  }
  while(queue.length > 0){
      const u = queue.shift()
      if(connect.has(u))
          for(const v of connect.get(u)){
              if(quiet[ans[u]] < quiet[ans[v]])
                  ans[v] = ans[u]
              degree[v]--
              if(degree[v] == 0)
                  queue.push(v)
          }
  }
  return ans
};