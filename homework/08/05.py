def grade(score):
    if score < 0 or score > 100:
        return "Invalid score"
    elif score >= 90:
        return "A"
    elif score >= 80:
        return "B"
    elif score >= 70:
        return "C"
    elif score >= 60:
        return "D"
    else:
        return "F"

# 範例使用
print(grade(95))  # 輸出: A
print(grade(82))  # 輸出: B
print(grade(73))  # 輸出: C
print(grade(65))  # 輸出: D
print(grade(50))  # 輸出: F
print(grade(110)) # 輸出: Invalid score
