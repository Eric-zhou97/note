// 你需要访问 n 个房间，房间从 0 到 n - 1 编号。同时，每一天都有一个日期编号，从 0 开始，依天数递增。你每天都会访问一个房间。
// 最开始的第 0 天，你访问 0 号房间。给你一个长度为 n 且 下标从 0 开始 的数组 nextVisit 。在接下来的几天中，你访问房间的 次序 将根据下面的 规则 决定：
// 假设某一天，你访问 i 号房间。
// 如果算上本次访问，访问 i 号房间的次数为 奇数 ，那么 第二天 需要访问 nextVisit[i] 所指定的房间，其中 0 <= nextVisit[i] <= i 。
// 如果算上本次访问，访问 i 号房间的次数为 偶数 ，那么 第二天 需要访问 (i + 1) mod n 号房间。
// 请返回你访问完所有房间的第一天的日期编号。题目数据保证总是存在这样的一天。由于答案可能很大，返回对 109 + 7 取余后的结果。
// n == nextVisit.length
// 2 <= n <= 105
// 0 <= nextVisit[i] <= i


var firstDayBeenInAllRooms = function(nextVisit) {
  //因为0 <= nextVisit[i] <= i，所以这里进不了位
  const mod = Math.pow(10,9) + 7;
  let upgrade = [];
  let prefix = [];
  prefix[1] = 2;
  prefix[0] = 0;
  for (let i = 0; i < nextVisit.length-1; i++) {
      //第一次访问一个新节点必为偶数次
      if (nextVisit[i] == i) {
          upgrade[i+1] = 2;
      } else {
          let j = nextVisit[i];
          let tmp = (prefix[i] + mod - prefix[j])%mod ;
          upgrade[i+1] = 2 + tmp;
      }
      prefix[i+1] = (prefix[i] + upgrade[i+1]) % mod;

      //可简化为
      //prefix[i+1] = (mod + 2 * prefix[i] - prefix[nextVisit[i]] + 2) % mod;
  }
  return prefix[nextVisit.length-1];
};