//java代码
// class Solution {
//   public int eatenApples(int[] apples, int[] days) {
//       PriorityQueue<int[]> q = new PriorityQueue<>((a,b)->a[0]-b[0]);
//       int n = apples.length, time = 0, ans = 0;
//       while (time < n || !q.isEmpty()) {
//           if (time < n && apples[time] > 0) q.add(new int[]{time + days[time] - 1, apples[time]});
//           while (!q.isEmpty() && q.peek()[0] < time) q.poll();
//           if (!q.isEmpty()) {
//               int[] cur = q.poll();
//               if (--cur[1] > 0 && cur[0] > time) q.add(cur);
//               ans++;
//           }
//           time++;
//       }
//       return ans;
//   }
// }

// JS计数排序替代优先队列
// 给下标赋予意义
var eatenApples = function (apples, days) {
  let res = 0, minDay = days[0] - 1;
  const freshArr = new Array(days.length).fill(0);
  for (let i = 0; i < freshArr.length; i++) {
      if (i < days.length && days[i] > 0) {
          //freshArr的长度会变化
          freshArr[i + days[i] - 1] = (freshArr[i + days[i] - 1] || 0) + apples[i];
          minDay = Math.min(minDay, i + days[i] - 1);
      }
      minDay = Math.max(minDay, i);
      while (minDay < freshArr.length && !freshArr[minDay]) minDay++;
      if (freshArr[minDay]) res++, freshArr[minDay]--;
  }
  return res;
};





//小根堆，优先权队列
var eatenApples = function(apples, days) {
  const pq = new PriorityQueue(), n = apples.length
  let i = 0, ans = 0
  for(;i<n;i++){
    while(pq.size > 0 && pq.peek()[0] <= i)
      pq.poll()
    if(apples[i] > 0)
      pq.offer([i + days[i], apples[i]])
    if(pq.size > 0){
      ans++
    if(--pq.peek()[1]==0)
      pq.poll()
    }
  }
  while(pq.size > 0){
    const cur = pq.poll()
    const d = Math.min(cur[0] - i, cur[1])
    i += d
    ans += d
    while(pq.size > 0 && pq.peek()[0] <= i){
      pq.poll()
    }
  }
  return ans
};

//直接复制使用  
class PriorityQueue {
  constructor(
    //小的在前面
    compare = (a, b) => a[0] < b[0] 
  ){
    this.data = []
    this.size = 0
    this.compare = compare
  }

  peek() {
    return this.size === 0 ? null : this.data[0] 
  }

  offer(val) {
    this.data.push(val)
    this._shifUp(this.size++)
  }

  poll() {
    if(this.size === 0) { return null }
    this._swap(0, --this.size)
    this._shifDown(0)
    return this.data.pop()
  }

  _parent(index) {
    return index - 1 >> 1
  }

  _child(index) {
    return (index << 1) + 1
  }

  _shifDown(index) {
    while(this._child(index) < this.size) {
      let child = this._child(index)
      if(child + 1 < this.size && this.compare(this.data[child + 1], this.data[child])) {
        child = child + 1
      }
      if(this.compare(this.data[index], this.data[child])){
        break
      }
      this._swap(index, child)
      index = child
    }
  }

  _shifUp(index) {
    while(this._parent(index) >= 0 && this.compare(this.data[index], this.data[this._parent(index)])) {
      this._swap(index, this._parent(index))
      index = this._parent(index)
    }
  }

  _swap(a, b) {
    [this.data[a], this.data[b]] = [this.data[b], this.data[a]]
  }
}