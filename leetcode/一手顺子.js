var isNStraightHand = function(hand, groupSize) {
  let map=new Map();
  let q=[];
  hand.sort((a,b)=>{
      return a-b;
  })
  for(let num of hand){
      if(map.has(num)){
          map.set(num,map.get(num)+1);
      }else{
          q.push(num);
          map.set(num,1);
      }
  }
  while(q.length){
      let point=0;
      for(let i=0;i<groupSize-1;i++){
          if(q[i]!=q[i+1]-1){
              return false;
          }
      }
      for(let i=0;i<groupSize;i++){
          if(map.get(q[point])>0){
              map.set(q[point],map.get(q[point])-1);
              point++;
          }else{
              return false;
          }
      }
      while(q.length&&map.get(q[0])==0){
          q.shift();
      }
  }
  return true;
};

//另解
var isNStraightHand = function(hand, groupSize) {
  const lens = hand.length
  if (lens % groupSize !== 0) return false
  hand.sort((a, b) =>  a - b)
  let map = new Map()
  hand.forEach(v => map.set(v, map.has(v) ? map.get(v) + 1 : 1))
  let counter = lens / groupSize
  for (let i = 0; i < lens; i++) {
      const val = hand[i]
      //hand中能否找出counter个顺子
      if (map.has(val)) {
          const count = map.get(val)
          if (count === 1) map.delete(val)
          else map.set(val, count - 1)
          for (let j = 1; j < groupSize; j++) {
              //直接val+j，来确保顺序的
              const next = val + j
              if (map.has(next)) {
                  const n = map.get(next)
                  if (n === 1) map.delete(next)
                  else map.set(next, n - 1)
              } else {
                  return false
              }
          }
          counter--
      }
  }
  return counter <= 0
};