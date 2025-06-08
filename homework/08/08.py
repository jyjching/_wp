def is_prime(n):
    if n <= 1:
        return False  # 0 和 1 不是質數
    for i in range(2, int(n**0.5) + 1):  # 只需檢查到 √n
        if n % i == 0:
            return False
    return True

# 範例使用
print(is_prime(2))   # True
print(is_prime(17))  # True
print(is_prime(20))  # False
print(is_prime(1))   # False
