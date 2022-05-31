var networkBecomesIdle = function(edges, patience) {
  let map=new Map()
  for(let e of edges){
      if(!map.has(e[0])){
          map.set(e[0],[e[1]]);
      }else{
          map.get(e[0]).push(e[1]);
      }
      if(!map.has(e[1])){
          map.set(e[1],[e[0]])
      }else{
          map.get(e[1]).push(e[0]);
      }
  }
  let queue=[0];
  let arr=new Array(patience.length).fill(-1);
  let index=0;
  while(queue.length!=0){
      let temp=[];
      for(let q of queue){
          if(arr[q]==-1){
              temp.push(...map.get(q));
              arr[q]=index;
          }
      }
      index++;
      queue=temp;
  }
  let max=0;
  for(let i=0;i<patience.length;i++){
      let temp=0;
      if(patience[i]>=arr[i]*2){
          temp=arr[i]*2;
      }else{
          temp=arr[i]*4-1-(arr[i]*2-1)%patience[i];
      }
      if(max<temp){
          max=temp;
      }
  }
  return max+1;
};