function deepMerge(obj1, obj2) {
    for (const key in obj2) {
        // 檢查 obj2 是否擁有這個 key（排除原型鏈上的屬性）
        if (
            obj2.hasOwnProperty(key) &&
            typeof obj2[key] === 'object' &&    // 確保值是物件
            obj2[key] !== null &&               // 避免 null 被當作物件處理
            !Array.isArray(obj2[key])           // 排除陣列（此範例不遞迴處理陣列）
        ) {
            // 如果 obj1 中沒有該 key，或該 key 不是物件，先設成空物件
            if (!obj1[key] || typeof obj1[key] !== 'object') {
                obj1[key] = {};
            }
            // 對該 key 對應的子物件做遞迴合併
            deepMerge(obj1[key], obj2[key]);
        } else {
            // 如果不是物件（基本型別或陣列），直接覆蓋到 obj1
            obj1[key] = obj2[key];
        }
    }
    return obj1; // 回傳合併後的 obj1
}
