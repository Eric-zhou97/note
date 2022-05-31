var reorderList = function(head) {
  if(!head) return head
  if(!head.next) return head
  let arr = []
  let cur = head
  head = head.next
  while(head){
      cur.next = null
      arr.push(cur)
      cur = head
      head = head.next
  }
  arr.push(cur)
  let left = 0
  let right = arr.length-1
  let res = arr[0]
  //shift()和pop()的耗时很大，会超时
  //奇偶情况，一次处理两个，即组后left可能等于right，代表处理好了
  while(left < right-1){
      arr[left].next = arr[right]
      left++
      arr[right].next = arr[left]
      right--
  }
  if(left === right-1) arr[left].next = arr[right]
  return res
};