function uniqueSorted(arr) {
    const uniqueSet = new Set(arr); // 移除重複
    const uniqueArray = Array.from(uniqueSet); // 將 Set 轉回陣列
    uniqueArray.sort((a, b) => a - b); // 排序（從小到大）
    return uniqueArray;
}

console.log(uniqueSorted([5, 3, 8, 3, 1, 5, 8]));
