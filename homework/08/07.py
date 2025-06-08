def dict_to_string(d):
    return ', '.join(f'{key}:{value}' for key, value in d.items())

# 範例使用
print(dict_to_string({'a': 1, 'b': 2}))
# 輸出: a:1, b:2
