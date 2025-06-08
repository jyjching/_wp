def find_max(numbers):
    if not numbers:
        return None  # 如果陣列為空，回傳 None
    max_value = numbers[0]
    for num in numbers[1:]:
        if num > max_value:
            max_value = num
    return max_value

print(find_max([3,10,-5,7,22])) # 輸出22
