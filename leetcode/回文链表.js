var isPalindrome = function(head) {
  let slow = head, fast = head, prev = null
  //前半段翻转
  while(fast && fast.next) {
      fast = fast.next.next
      const tmp = slow.next
      slow.next = prev
      prev = slow
      slow = tmp
  }
  //奇数情况
  if(fast) slow = slow.next
  while(prev && slow) {
      if(slow.val !== prev.val) return false
      prev = prev.next
      slow = slow.next
  }
  return true
};