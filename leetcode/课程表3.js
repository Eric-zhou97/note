//未完成
//优先权队列
//https://leetcode-cn.com/problems/course-schedule-iii/
class PriorityQueue {
  constructor(
    compare = (a, b) => a > b 
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
      if(child + 1 < this.size 
        && this.compare(this.data[child + 1], this.data[child])) {
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
    while(this._parent(index) >= 0 
    && this.compare(this.data[index], this.data[this._parent(index)])) {
      this._swap(index, this._parent(index))
      index = this._parent(index)
    }
  }

  _swap(a, b) {
    [this.data[a], this.data[b]] = [this.data[b], this.data[a]]
  }
}

function scheduleCourse(courses) {
  // 先根据课程 deadline 排序 先学 deadline 小的课程
  courses.sort((a, b) => a[1] - b[1])
  let queue = new PriorityQueue()
  let startTime = 0 
  for(let i = 0, l = courses.length; i < l; i++) {
    // 判断该课程是否可选 (起始时间 + 课程时长 <= 课程结束时间)
    if(startTime + courses[i][0] <= courses[i][1]){
      // 将课程放入优先队列
      queue.offer(courses[i][0])
      // 设定下节课的合法起始时间
      startTime += courses[i][0]
    } else if(queue.size && queue.peek() > courses[i][0]) { // 如果该课程不可选就判断 优先队列头节点(课程时间最大) 课程时间 是否比 当前课程大
      // 重新计算下节课的起始时间
      startTime += courses[i][0] - queue.poll()
      // 将课程放入优先队列
      queue.offer(courses[i][0])
    }
  }
  // 在优先队列中的课程数量就是答案 其实就是优先队列中的课程加起来总时长最短 
  return queue.size
}