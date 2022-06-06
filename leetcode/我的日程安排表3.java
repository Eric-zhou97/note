class MyCalendarThree {
    private TreeMap<Integer, Integer> cnt;
    public MyCalendarThree() {
        cnt = new TreeMap<Integer, Integer>();
    }
    //相比于数组，中间空着的值不会加入计算
    public int book(int start, int end) {
        int ans = 0;
        int maxBook = 0;
        cnt.put(start, cnt.getOrDefault(start, 0) + 1);
        cnt.put(end, cnt.getOrDefault(end, 0) - 1);
        for (Map.Entry<Integer, Integer> entry : cnt.entrySet()) {
            int freq = entry.getValue();
            maxBook += freq;
            ans = Math.max(maxBook, ans);
        }
        return ans;
    }
}