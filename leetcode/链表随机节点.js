var Solution = function(head) {
  this.list = [];
  while (head != null) {
      this.list.push(head.val);
      head = head.next;
  }
};

Solution.prototype.getRandom = function() {
  return this.list[Math.floor(Math.random() * this.list.length)];
};