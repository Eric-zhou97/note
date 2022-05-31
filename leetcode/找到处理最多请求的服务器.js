var busiestServers = function(k, arrival, load) {
  const freeTime = new Array(k).fill(0), r = new Array(k).fill(0), n = arrival.length
  label: for (let i = 0; i < n; i++) { // 用 label 标记此循环
    const time = arrival[i], duration = load[i]
    let server = start = i % k
    while (time < freeTime[server]) {
      if (server < k) server++
      if (server === k) server = 0
      if (server === start) continue label // 直接继续标记为 label 的循环，跳两层
    }
    freeTime[server] = time + duration
    r[server]++
  }
  let ans = [], max = 0
  for (let i = 0; i < k; i++) {
    if (r[i] > max) {
      ans = [i]
      max = r[i]
    } else if (r[i] === max) ans.push(i)
  }
  return ans
};

// js的优先队列(leetcode可用)
// const minPriorityQueue = new MinPriorityQueue() // 构造
// minPriorityQueue.enqueue('值', 1) // 入队，两个参数 element, priority 后者用于排序
// minPriorityQueue.front() // {element: '值', priority: 1} 返回 priority 最小项
// minPriorityQueue.dequeue() // {element: '值', priority: 1} 弹出并返回 priority 最小项
// minPriorityQueue.isEmpty() // true 是否为空

var busiestServers = function(k, arrival, load) {
  const r = new Uint32Array(k), n = arrival.length
  const freeTime = new MinPriorityQueue(), freeNo = new MinPriorityQueue()
  for (let i = 0; i < k; i++) freeNo.enqueue(i, i) // 服务器都空闲，放序号 + 优先级
  for (let i = 0; i < n; i++) {
    const time = arrival[i], duration = load[i] // ↓ 当前有没有服务器 → 空闲
    while (!freeTime.isEmpty() && freeTime.front().priority <= time) {
      const server = freeTime.dequeue().element // 已经空闲的服务器序号（从小到大弹出）
      freeNo.enqueue( // 已经空闲的服务器序号放入序号优先队列
        server,
        // 编号小于 i \bmod kimodk 的空闲服务器能排到编号不小于 i \bmod kimodk 的空闲服务器后面。
        ((server - i) % k + k) % k + i // 排序值，确保从 i%k 开始，找一圈(数学公式，直接背吧)
      )
    }
    if (freeNo.isEmpty()) continue // 没有空闲的服务器
    const server = freeNo.dequeue().element % k // 排序值最小是一圈中最接近 i%k 的
    freeTime.enqueue(
      server,
      time + duration // 延长服务器的空闲时间，作为优先级
    )
    r[server]++
  }
  let ans = [], max = 0
  for (let i = 0; i < k; i++) {
    if (r[i] > max) ans = [i], max = r[i]
    else if (r[i] === max) ans.push(i)
  }
  return ans
};
