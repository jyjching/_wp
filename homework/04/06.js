function filterArray(arr, predicate) {
    const result = [];

    for (const item of arr) {
        if (predicate(item)) {
            result.push(item); // 只有符合條件的才加入結果陣列
        }
    }

    return result;
}
