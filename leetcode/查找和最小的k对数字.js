//优先权队列。
//优先权队列未解决
var kSmallestPairs = function (nums1, nums2, k) {
  const res = [];
  const pq = new MinPriorityQueue({ compare: (a, b) => nums1[a[0]] + nums2[a[1]] - (nums1[b[0]] + nums2[b[1]]) });

  for (let i = 0; i < nums1.length; i++) pq.enqueue([i, 0]);

  while (res.length < k && pq.size()) {
      let [i, j] = pq.dequeue();
      //也是一轮一轮的来的
      for (; res.length < k && j < nums2.length; j++) {
          // 队头的数对和更小
          const [i1, j1] = pq.front() || [];
          if (pq.size() && nums1[i1] + nums2[j1] < nums1[i] + nums2[j]) {
              pq.enqueue([i, j]);
              break;
          }

          // 队头的数对和相等或更大
          res.push([nums1[i], nums2[j]]);
      }
  }

  return res;
};

//另解
var kSmallestPairs = function(nums1, nums2, k) {
  let m = nums1.length, n = nums2.length;
  // 记录每个位置的指针，索引从0开始
  //dp为每个nums1的数在nums2上的指针
  let dp = new Array(Math.min(m, k)).fill(0);
  let result = [];

  while (result.length < k) {
  let minIndex = -1, minValue = Number.MAX_VALUE;
  for (let i = 0; i < dp.length; i++) {
      // 兼容一下数量不够的情况
      if (dp[dp.length - 1] === n) return result;
      
      // 走到尽头了，此路不通
      if (dp[i] === n) continue;

      let cur = nums1[i] + nums2[dp[i]];
      if (cur < minValue) {
          minIndex = i;
          minValue = cur;
      }

      // 判断为空的时候不往后走
      // 数对在单轮循环中也是有序的
      //只要比下一轮开头的小，也就比后面所有的都要小
      if (dp[i] === 0) {
          break;
      }
  }

      // 记录当前最小值，指针右移
      result.push([ nums1[minIndex], nums2[dp[minIndex]] ]);
      dp[minIndex]++;
  }

  return result;
};
