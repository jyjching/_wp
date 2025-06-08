def classify_even_odd(numbers):
    result = {
        'even': [],  # 儲存偶數
        'odd': []    # 儲存奇數
    }
    for num in numbers:
        if num % 2 == 0:
            result['even'].append(num)
        else:
            result['odd'].append(num)
    return result

# 範例使用
print(classify_even_odd([1, 2, 3, 4, 5, 6]))
# 輸出：{'even': [2, 4, 6], 'odd': [1, 3, 5]}
