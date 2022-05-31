//未完成
//https://leetcode-cn.com/problems/gaM7Ch/
var coinChange = function(coins, amount) {
  // dp-完全背包 问题

  /* 
  用函数 f(i, j) 表示用前 i 种硬币凑成的总额为 j 需要的最少数目

  1. 当使用 0 枚标号为 i - 1 的硬币时，f(i, j) 等于 f(i - 1, j) ；
  2. 当使用 1 枚标号为 i - 1 的硬币时，f(i, j) 等于 f(i - 1, j - coins[i - 1])；
  3. 当使用 k 枚标号为 i - 1 的硬币时，f(i, j) 等于 f(i - 1, j - k * coins[i - 1])；

  转移方程：
  f(i,j) = min( f(i-1, j 一k x coins[i- 1]) +k), k x coins[i-1] ≤ j (多种可能取最小值)

  换一种形式，可以理解为对于同一种硬币，在当前选择的基础上再进行选择:
  f(i, j) = min (f(i -1,j), f(i, j - coins[i - 1])), coins[i-1] ≤j 
  */
  
  /* 
  画图我们可以知道： 这题的状态转移 dp[i][j] 取决于三种类型 :
   dp[i][j-k*num],
   dp[i-1][j],
   dp[i-1][j-k*num],
  由于 dp[i][j] 状态可能来自 dp[i][j-k*num]，所以这里我们必须 从小索引开始更新，不然获取不到对应的 dp[i][j-k*num]

  那么从小索引开始，我们是不是会获取不到 相应的 dp[i-1][j-k*num] 呢？
  其实这里我们需要取三种状态的最小值，
  而当我们计算 dp[i][j-k*num] 时，已经比较了这两者： min(dp[i][j-k*num],dp[i-1][j-k*num])
  所以我们只需要比较 min(dp[i-1][j],dp[i][j-k*num]+k) 即可
  当然 k 取决于我们在这个值为 num 的硬币上取多少次，我们依次计算，
  对应的一维状态方程 为： min(dp[j],dp[j-num]+1)
   */

  let dp = new Array(amount+1).fill(Infinity); 
  dp[0] = 0; // 凑出总额0 最低只需要 0 枚硬币
  for(let num of coins) {
      for(let j=num;j<=amount;j++) { 
          dp[j] = Math.min(dp[j],dp[j-num]+1);
      } 
  }
   return dp[amount] == Infinity? -1 : dp[amount];
};
