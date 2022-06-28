//快速选择
//用于解决topN(返回结果是无序的)
function quickSelect(nums,begin,end,n){
    let t = nums[end-1];
    let i = begin, j = begin;
    while(j<end){
        if(nums[j]<=t){
            let temp=nums[j];
            nums[j++]=nums[i];
            nums[i++]=temp;
        }else{
            j++;
        }
    }
    if(i-1>n){
        quickSelect(nums,begin,i-1,n);
    }else if(i-1<n){
        quickSelect(nums,i,end,n);
    }
}