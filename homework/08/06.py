def count_chars(s):
    result = {}
    for char in s:
        if char in result:
            result[char] += 1
        else:
            result[char] = 1
    return result

# 範例使用
print(count_chars("hello"))
# 輸出: {'h': 1, 'e': 1, 'l': 2, 'o': 1}
