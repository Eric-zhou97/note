var topKFrequent = function(nums, k) {
  let map=new Map(),bucket_num=1;
  nums.forEach((el)=>{
      let freq=map.get(el)+1||1;
      map.set(el,freq);
      bucket_num=Math.max(bucket_num,freq);
  })
  //创建二维数组
  // let visited=Array.from(new Array(row),()=>new Array(col).fill(0));
  let bucket=Array.from(new Array(bucket_num+1),()=>[]),
  set=new Set(nums),res=[];
  for(const val of set){
      let freq=map.get(val);
      bucket[freq].push(val);
  }

  for(let i=bucket_num;i>=1;i--){
      res.push(...bucket[i]);
  }
  return res.slice(0,k);
};