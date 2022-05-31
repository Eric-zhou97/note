//差分
var corpFlightBookings = function(bookings, n) {
  let c=new Array(n).fill(0);
  let ans=new Array(n).fill(0);
  for(let arr of bookings){
      let l=arr[0]-1,r=arr[1]-1,v=arr[2];
      c[l]+=v;
      //最后一天也是在的
      c[r+1]-=v;
  }
  ans[0]=c[0];
  for(let i=1;i<n;i++){
      ans[i]=ans[i-1]+c[i];
  }
  return ans;
};