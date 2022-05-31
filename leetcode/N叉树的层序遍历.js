// 广度优先搜索
var levelOrder = function(root) {
  if (!root) {
      return [];
  }
  const ans = [];
  const queue = [root];

  while (queue.length) {
      const cnt = queue.length;
      const level = [];
      for (let i = 0; i < cnt; ++i) {
          const cur = queue.shift();
          level.push(cur.val);
          for (const child of cur.children) {
              queue.push(child);
          }
      }
      ans.push(level);
  }

  return ans;
};