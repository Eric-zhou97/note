// 被安排了 n 个任务。任务需要花费的时间用长度为 n 的整数数组 tasks 表示，第 i 个任务需要花费 tasks[i] 小时完成。一个 工作时间段 中，你可以 至多 连续工作 sessionTime 个小时，然后休息一会儿。
// 你需要按照如下条件完成给定任务：
// 如果你在某一个时间段开始一个任务，你需要在 同一个 时间段完成它。
// 完成一个任务后，你可以 立马 开始一个新的任务。
// 你可以按 任意顺序 完成任务。
// 给你 tasks 和 sessionTime ，请你按照上述要求，返回完成所有任务所需要的 最少 数目的 工作时间段 。
// 测试数据保证 sessionTime 大于等于 tasks[i] 中的 最大值 。
/**
 * @param {number[]} tasks
 * @param {number} sessionTime
 * @return {number}
 */


 
var minSessions = function(tasks, sessionTime) {
  let n = tasks.length, m = 1 << n;
  //有m种子集
  let INF = 20;
  let dp = new Array(m).fill(INF);
  // 预处理每个状态，合法状态预设为 1
  for (let i = 1; i < m; i++) {
      let state = i, idx = 0;
      let spend = 0;
      //算出子集i的耗时
      while (state > 0) {
          let bit = state & 1;
          //第idx位是否加入子集
          if (bit == 1) {
              spend += tasks[idx];
          }
          state >>= 1;
          idx++;
      }
      //判断i这个子集是否合法
      if (spend <= sessionTime) {
          dp[i] = 1;
      }
  }

  // 对每个状态枚举子集，跳过已经有最优解的状态
  for (let i = 1; i < m; i++) {
      //这本身就是一个原始子集，跳过
      if (dp[i] == 1) {
          continue;
      }
      //尝试由原始子集组成i这个子集，dp为最小花费，所有的原始子集都已经生成，所以不用比大小，一个原始子集就是一个时段
      for (let j = i; j > 0; j = (j - 1) & i) {
          // i 状态的最优解可能由当前子集 j 与子集 j 的补集得来
          dp[i] = Math.min(dp[i], dp[j] + dp[i ^ j]);
      }
  }
  //希望达成全1的状态
  return dp[m - 1];
};