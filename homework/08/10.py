def summary(data):
    for student in data:
        name = student['name']
        scores = student['scores']
        total = sum(scores)
        average = round(total / len(scores), 1)
        print(f"{name}：總分 = {total}, 平均 = {average}")

students = [
    {'name': 'Alice', 'scores': [90, 85, 92]},
    {'name': 'Bob', 'scores': [78, 80, 74]},
    {'name': 'Charlie', 'scores': [88, 90, 85]}
]

summary(students)
