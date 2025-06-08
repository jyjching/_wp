def most_common(nums):
    if not nums:
        return None  # 如果是空的 list，就回傳 None

    count = {}  # 用來記錄每個數字的出現次數
    for num in nums:
        if num in count:
            count[num] += 1
        else:
            count[num] = 1

    # 找出出現最多次的數字
    max_count = max(count.values())
    for num, c in count.items():
        if c == max_count:
            return num  # 回傳第一個出現次數最多的數字

# 範例使用
print(most_common([1, 3, 1, 3, 2, 1]))  # 輸出：1
