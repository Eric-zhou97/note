// 第一题
let num=1;//输入
let ns=num.toString().split('');//转为字符串后拆分为数组
let i=0;x
while(true){
  i++;
  let temp=i*7;
  let s=temp.toString();
  if(s.length<ns.length){
    continue;
  }
  let j,k=0;
  for(j=0;j<ns.length;j++){
    while(k<s.length&&s[k]!=ns[j]){
      k++;
    }
  }
  if(j==ns.length&&k!=s.length){
    console.log(temp)//满足条件输出
    break;
  }
}

//第二题暴力，两种情况，比下大小，就是暴力，荣宇ac了


// 第三题
let n=5,len=3;//输入
let s='aabcd'
s=s.split('')//字符串变数组
let map=new Map();
let count=0,res=0,max=0;
let left=0,right=0;
while(right<n){
  if(map.has(s[right])){
    map.set(s[right],map.get(s[right])+1);
    res++;
  }else{
    map.set(s[right],1);
    count++;
    res++;
    while(count>len){
      if(map.get(s[left])==1){
        map.delete(s[left]);
        count--;
      }else{
        map.set(s[left],map.get(s[left])-1);
      }
      res--;
      left++;
    }
  }
  max=Math.max(max,res);
  right++;
}


// 第四题暴力，
// 新建二维数组，大写为1，小写为-1；
// 每次反转，一个双重for循环，arr[x][y]=-arr[x][y]
// 最后根据这个1/-1的数组与原数组结合成答案

// 矩形的左上两条边++，右下两条边加一层--。写对角线累加统合arr[i][j]=arr[i-1][j-1]。
// 循环数由q*x*y次变为(2*x+2*y)*q+m*n次



