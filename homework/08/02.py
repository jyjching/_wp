def average(nums):
    if not nums:
        return None  # 空陣列就回傳 None
    avg = sum(nums) / len(nums)
    return round(avg, 1)  # 小數點第一位四捨五入

# 範例使用
print(average([10, 20, 30]))  # 輸出：20.0
print(average([1, 2, 3]))     # 輸出：2.0
print(average([]))            # 輸出：None
