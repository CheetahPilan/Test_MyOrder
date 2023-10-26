def Linear_search(number, target):
    ans = 0
    for num in range(len(number)):
        if number[num] == target:
            ans = num  
    return ans  

def binary_search(data, target, low, high):
    ans = 0
    mid = (low + high)//2
    if target == data[mid]:
        ans = data[mid]
    elif target < data[mid]:
        ans = binary_search(data, target, low, mid - 1)
    else:
        ans = binary_search(data, target, mid + 1, high)
    return ans

data = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59]
target = 41
result_L = Linear_search(data, target)

result_B = binary_search(data, target, 0, len(data)-1)

print(data[result_L])
print(result_B)
