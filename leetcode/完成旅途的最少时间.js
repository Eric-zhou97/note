var minimumTime = function(time, totalTrips) {
  let min = Math.min(...time)
  let l=0,r=min*totalTrips;
  let flag=true;
  // while (lo <= hi) {
  //     let mi = Math.floor((lo + hi) / 2)
  //     if (check(mi)) hi = mi - 1
  //     else lo = mi + 1
  // }
  while(l<r){
      let mid= l + Math.floor((r - l + 1) / 2);
      let count=0;
      for(let t of time){
          count=count+Math.floor(mid/t);
      }
      if(count<totalTrips){
          l=mid;
      }else{
          r=mid-1;
      }
  }
  return l+1;
};