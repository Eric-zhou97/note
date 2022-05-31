//未完成
//https://leetcode-cn.com/problems/find-all-people-with-secret/
//应该是图
var findAllPeople = function(n, meetings, firstPerson) {
  let map=new Map();
  for(let i=0;i<meetings.length;i++){
      if(map.has(meetings[i][2])){
          map.get(meetings[i][2]).push([meetings[i][0],meetings[i][1]]);
      }else{
          map.set(meetings[i][2],[]);
          map.get(meetings[i][2]).push([meetings[i][0],meetings[i][1]]);  
      }
  }
  let index=[...map.keys()];
  index.sort((a,b)=>{
    return a-b;
  })
  const know = new Array(n).fill(false)
  know[0]=true;
  know[firstPerson]=true;
  for(let i=0;i<index.length;i++){
      let temp=map.get(index[i]);
      let flag=1;
      while(flag==1){
          flag=0;
          for(let j=0;j<temp.length;j++){
              if(know[temp[j][0]]==false&&know[temp[j][1]]==true){
                  know[temp[j][0]]=true;
                  flag=1;
              }
              if(know[temp[j][1]]==false&&know[temp[j][0]]==true){
                know[temp[j][1]]=true;
                flag=1;
            }
          }
      }
  }
  const ret = []
  for(let i = 0; i<n; i++){
    if(know[i]) ret.push(i)
  }
  return ret

};

//另解，带重置并查集
class UnionFind {
  constructor(n) {
      this.parent=new Array(n).fill(0).map((element, index) => index)
      // this.parent = [];
      // for (let i = 0; i < n; i++) {
      //     this.parent[i] = i;
      // }
  }
  union(x, y) {
      const rootX = this.find(x), rootY = this.find(y)
      if (rootX !== rootY) {
          this.parent[rootX] = rootY;
          return true;
      } else {
          return false;
      }
  }
  // 没有路径压缩的..
  // find (x) {
  //     while (x !== this.parent[x]) x = this.parent[x]
  //     return x
  // }
  // find(x) {
  //     if (x !== this.parent[x]) {
  //         return this.find(this.parent[x]);
  //     }
  //     return x;
  // }
  // 路径压缩了  解决那种a认了b  b又跑去认c  a不知道的情况
  find(x) {
      if (x !== this.parent[x]) {
          this.parent[x] = this.find(this.parent[x]);
      }
      return this.parent[x];
  }
}
var findAllPeople = function(n, meetings, firstPerson) {
  meetings = meetings.sort((a,b) => a[2] - b[2]);
  meetings.push([0,0, Infinity]);
  
  let ret = [];
  let union = new UnionFind(n);
  union.union(firstPerson, 0);

  let memo = [];
  let lastTime = 0;
  for (let i = 0; i < meetings.length; i++) {
      if (lastTime !== meetings[i][2]) {
        //将之前的处理掉  
        for (let i = 0; i < memo.length; i++) {
              // 上个时间里不知道秘密的  把各自的关系重置
              if (union.find(memo[i]) !== union.find(0)) {
                  union.parent[memo[i]] = memo[i];
              }
          }
          // 重置，新的开始
          memo = [];
          //新的时间，相当于下标移步
          lastTime = meetings[i][2];
      }

      memo.push(meetings[i][0]);
      memo.push(meetings[i][1]);
      union.union(meetings[i][0], meetings[i][1]);
  }
  for (let i = 0; i < n; i++) {
      if (union.find(i) == union.find(0)) {
          ret.push(i);
      }
  }
  return ret;
};
