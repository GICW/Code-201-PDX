# Notes

## Loops

- For Loop or forEach
  ```
  for(let i = 0; i < array.length; i++ ) {
    // i is: current index in the array
    // i is: the iterator 
    // Do something with array[i]
  }
  ```
  - "For every person, buy a present"
  - Predetermined Number of Times
  - Iteration
    - Over an array
    - A certain number of times
  

- While Loop and Do ... While
  ```
  while(playerHasNotFinished) {
    // do stuff related to someone's turn in a game
  }

  do {
    // do stuff related to someones' turn in a game
  } while( playerHasNotFinished )
  ```
  - "Buy presents until there are no more people"
  - Run for undetermined number of times
  - "Infinitely" until some condition turns up as false

## Function

- Executable block of code
- Callable
- Repeatable
- Testable
- Scalable
- Hey, Zach ... emptyTheDishwasher()
- Ensures that the code block runs the same every time
- Keeps code DRY

```
function add(a,b) { 
    return a + b + 3b;
}

// tests
// assert that add(1,3) return 4
// assert that add(1,"3") returns an error

## CSS
- `<p id="bar" class="foo"><span>John</span></p>`
  - .class
  - #bar
  - .class span or #bar span or p span
  - The space infers nesting
- `<p><p> <span><span>`
  - p + span


## DOM Selectors
- `let pTag = document.getElementById("bar")` // Gets only 1
- `let spanTag = document.querySelector("p + span"); // Gets only 1st one
- `let spanTags = document.querySelectorAll('span'); // Gets alll as a node list (array)
  
## Objects
- Constructor Function
  - Proper Cased Function: `function Car() {}`
  - "this" refers to an instance
  - Purpose: Create unique instances based on a formula or shape
  - Method vs Function?
    - Method is a property of an object, which is a function that operates on the instance
      ```
      let person = new Person();
      person.walk() // This is a method that we call on a person instance
      ```
    - a Function is standalone block of code that runs when called
      ```
      doSomething("thing");
      // this doesn't need an object or anything, it's totally on it's own
      ```