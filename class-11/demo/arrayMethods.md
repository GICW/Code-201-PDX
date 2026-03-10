# JavaScript Array Methods (Beginner Guide)

Arrays are used to store multiple values in one variable. JavaScript has
many built-in **array methods** that help us work with lists of data.

Example array:

``` javascript
const numbers = [1, 2, 3, 4, 5];
```

------------------------------------------------------------------------

# 1. forEach()

## What it does

Runs a function **once for every item in the array**.

## Example

``` javascript
const numbers = [1, 2, 3];

numbers.forEach(function(num) {
  console.log(num);
});
```

## Output

    1
    2
    3

## Simple Explanation

`forEach()` is used when you want to **do something with every item**,
like printing them or updating them.

------------------------------------------------------------------------

# 2. map()

## What it does

Creates a **new array** by changing each item in the original array.

## Example

``` javascript
const numbers = [1, 2, 3];

const doubled = numbers.map(function(num) {
  return num * 2;
});

console.log(doubled);
```

## Output

    [2, 4, 6]

## Simple Explanation

`map()` takes each value, **changes it**, and returns a **new array**.

------------------------------------------------------------------------

# 3. filter()

## What it does

Creates a **new array with only items that match a condition**.

## Example

``` javascript
const numbers = [1, 2, 3, 4, 5];

const evens = numbers.filter(function(num) {
  return num % 2 === 0;
});

console.log(evens);
```

## Output

    [2, 4]

## Simple Explanation

`filter()` **removes items you don't want**.

------------------------------------------------------------------------

# 4. reduce()

## What it does

Combines all values into **one final value**.

## Example

``` javascript
const numbers = [1, 2, 3, 4];

const total = numbers.reduce(function(sum, num) {
  return sum + num;
}, 0);

console.log(total);
```

## Output

    10

## Simple Explanation

`reduce()` is often used for **totals, averages, or calculations**.

------------------------------------------------------------------------

# 5. includes()

## What it does

Checks if an array **contains a value**.

## Example

``` javascript
const fruits = ['apple', 'banana', 'orange'];

console.log(fruits.includes('banana'));
```

## Output

    true

## Simple Explanation

Returns **true or false** depending on whether the value exists.

------------------------------------------------------------------------

# 6. find()

## What it does

Returns the **first item that matches a condition**.

## Example

``` javascript
const numbers = [5, 10, 15];

const result = numbers.find(function(num) {
  return num > 8;
});

console.log(result);
```

## Output

    10

## Simple Explanation

`find()` returns **the 
. match only**.

------------------------------------------------------------------------

# 7. push()

## What it does

Adds a new item to the **end of the array**.

## Example

``` javascript
const fruits = ['apple', 'banana'];

fruits.push('orange');

console.log(fruits);
```

## Output

    ['apple', 'banana', 'orange']

## Simple Explanation

`push()` **adds something to the end**.

------------------------------------------------------------------------

# 8. pop()

## What it does

Removes the **last item** from the array.

## Example

``` javascript
const fruits = ['apple', 'banana', 'orange'];

fruits.pop();

console.log(fruits);
```

## Output

    ['apple', 'banana']

## Simple Explanation

`pop()` **removes the last item**.

------------------------------------------------------------------------

# 9. shift()

## What it does

Removes the **first item** from the array.

## Example

``` javascript
const fruits = ['apple', 'banana', 'orange'];

fruits.shift();

console.log(fruits);
```

## Output

    ['banana', 'orange']

## Simple Explanation

`shift()` removes **the first item**.

------------------------------------------------------------------------

# 10. unshift()

## What it does

Adds a new item to the **beginning of the array**.

## Example

``` javascript
const fruits = ['banana', 'orange'];

fruits.unshift('apple');

console.log(fruits);
```

## Output

    ['apple', 'banana', 'orange']

## Simple Explanation

`unshift()` **adds something to the front**.

------------------------------------------------------------------------

# Quick Summary

  Method       What it does
  ------------ -----------------------------------
  forEach()    Loop through each item
  map()        Create a new changed array
  filter()     Keep items that match a condition
  reduce()     Combine values into one
  includes()   Check if value exists
  find()       Get the first matching item
  push()       Add item to end
  pop()        Remove item from end
  shift()      Remove first item
  unshift()    Add item to beginning

------------------------------------------------------------------------

# Final Tip

A good rule of thumb:

-   **map()** → transform data\
-   **filter()** → remove unwanted data\
-   **reduce()** → calculate something\
-   **forEach()** → just loop through items
