var nextBeautifulNumber = function(n) {
  let i=n;
  let arr=new Array(10).fill(0);
  while(true){
      i++;
      let temp=i.toString();
      for(let c of temp){
         arr[parseInt(c)]++; 
      }
      let flag=1
      for(let j=0;j<10;j++){
          if(arr[j]!=0&&arr[j]!=j){
              flag=0;
          }
          arr[j]=0;
      }
      if(flag==1){
          return i;
      }
  }
};