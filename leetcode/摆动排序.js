//摆动排序，排序+双指针
var wiggleSort = function(nums) {
    let temp=[...nums];
    temp.sort();
    let left=Math.floor(nums.length/2),right=left;
    nums.length=0;
    while(left>0){
        nums.push(temp[left-1]);
        nums.push(temp[right]);
        left--;
        right++;
    }
    if(nums.length<temp.length){
        nums.push(temp[right]);
    }
};