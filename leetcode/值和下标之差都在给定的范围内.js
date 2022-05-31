var containsNearbyAlmostDuplicate = function(nums, k, t) {
  let buckets = new Map();
  //相减小于等于t，桶大小为t+1
  let bucketSize = t + 1;
  const getBucketId = (num, bucketSize) => {
    //桶排序，获得桶的编号，考虑到正负数
    // return num >= 0
    //   ? Math.floor(num / bucketSize)
    //   : Math.floor((num + 1) / bucketSize) - 1;

    //此处好像不需要分类
    return Math.floor(num/ bucketSize);
  };
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let id = getBucketId(num, bucketSize);
    //通过桶排序减少滑动窗口内的比较次数，在同一个桶中直接满足要求
    if (
      buckets.has(id) ||
      (buckets.has(id - 1) && Math.abs(num - buckets.get(id - 1)) <= t) ||
      (buckets.has(id + 1) && Math.abs(num - buckets.get(id + 1)) <= t)
    ) {
      return true;
    }
    buckets.set(id, num);
    //滑动窗口，维持窗口大小
    if (i >= k) {
      buckets.delete(getBucketId(nums[i - k], bucketSize));
    }
  }
  return false;
};