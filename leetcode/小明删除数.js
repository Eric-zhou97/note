//京东笔试题
//删除最少的数，使得最长递增子序列的长度小于k，[1,k]为ai的数据范围
let T=readInt();
for(let i=0;i<T;i++){
    let n=readInt();
    let k=readInt();
    let arr=[];
    for(let j=0;j<n;j++){
        arr.push(readInt());
    }
    let index=1,count=0;
    let dp=new Array(k+1).fill(Infinity);
    dp[0]=0;
    // if(arr[0]==1){
    //     dp[0]=1;
    //     dp[1]=0;
    // }
    //dp[i]的含义,使得当前最长子序列的最大值为i的花费
    //很有趣
    for(let j=0;j<n;j++){
        dp[arr[j]]=Math.min(dp[arr[j]-1],dp[arr[j]]);
        if(dp[arr[j]-1]!=Infinity){
            dp[arr[j]-1]++;
        }
    }
    dp.length=k;
    print(Math.min(...dp));
    
}