numbers = [0, 0, 1]
n = int(input())
while len(numbers) < n:
    numbers.append(numbers[-1] + numbers[-2] + numbers[-3])
if n > 3:
    print(*numbers)
else:
    print(*numbers[:n])