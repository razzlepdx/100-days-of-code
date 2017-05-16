def mix_fruit(arr):
    '''Returns the price of a cup of juice as the mean of price
     of chosen fruits. The output price should be an integer.'''
    regular = ['banana', 'orange', 'apple', 'lemon', 'grapes']
    special = ['avocado', 'strawberry', 'mango']
    total = 0
    for fruit in arr:
        if fruit.lower() in regular:
            total += 5
        elif fruit.lower() in special:
            total += 7
        else:
            total += 9
    return round(total/len(arr))