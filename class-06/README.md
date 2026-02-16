# The DOM, Domain Modeling, and Introduction to Objects

## Class Outline

- Reading 06
  - Discussion
- Code review of previous lab assignment, ABOUT ME: CSS Diner, Completing "About-me", Lab 5a- Branching
- Code demo
  - Objects & Object Literals
  - Tables in JS
  - Kitten Rescue 
- Lab 06 preview and prep
  - Lab 6:  Salmon Cookies 
- Assignments
  - Review #3
  - Learning Journal
- Career: Class 6 - Behavioral Interview Questions
  - Submit Reading 06

## Learning Objectives

### Students will be able to

#### Describe and Define

- An HTML document as an object that can be manipulated with JavaScript.
- Object Literals in JavaScript.
  - Access and reassign their properties and methods.
- Dot and Bracket Notation for JavaScript objects.

#### Execute

- Translate a real-world problem domain into a code model by using provided user stories and technical requirements.
- Dynamically add new HTML tags (lists) to the DOM using JavaScript, from an array.
- Create a JavaScript object using object literal notation.
- Manage a JavaScript object using dot and bracket notation.

## Reading 06
### JavaScript Object Basics

1. How would you describe an object to a non-technical friend you grew up with?

2. What are some advantages to creating object literals?

3. How do objects differ from arrays?

4. Give an example for when you would need to use bracket notation to access an object’s property instead of dot notation.

5. Evaluate the code below. What does the term this refer to and what is the advantage to using this?

```js
const dog = {
  name: 'Spot',
  age: 2,
  color: 'white with black spots',
  humanAge: function (){
    console.log(`${this.name} is ${this.age*7} in human years`);
  }
}
```

### Introduction To The DOM

1. What is the DOM?

2. Briefly describe the relationship between the DOM and JavaScript.


## End of Class Review

1. What is the DOM?

1. What is DOM manipulation?

1. What are JavaScript objects?

1. What are JavaScript methods?

### One-on-One Meetings

The instructor will have a 15-minute one-on-one meeting with each student during the coming week: this will be an opportunity to review your progress, answer any questions you have, and discuss any topics the instructor sees appropriate, such as your future plans in the program. We will start the process of scheduling those meetings very soon.

## 📊 Steps to Create a Table Using JavaScript and the DOM

------------------------------------------------------------------------

### 🟢 1️⃣ Get the Parent Element

**Purpose:** Decide where the table will appear on the page.

**Method Used:** - `document.getElementById()`

------------------------------------------------------------------------

### 🟢 2️⃣ Create the Table Element

**Purpose:** Create the main table container.

**Methods Used:** - `document.createElement('table')` - `appendChild()`

------------------------------------------------------------------------

### 🟢 3️⃣ Create the Table Header Row

**Purpose:** Create the top row for column titles.

**Methods Used:** - `document.createElement('tr')` - `appendChild()`

------------------------------------------------------------------------

### 🟢 4️⃣ Create Header Cells

**Purpose:** Add column titles to the header row.

**Methods Used:** - `document.createElement('th')` - `.textContent` -
`appendChild()`

------------------------------------------------------------------------

### 🟢 5️⃣ Create Data Rows

**Purpose:** Add rows to display object or array data.

**Methods Used:** - `document.createElement('tr')` - `appendChild()`

------------------------------------------------------------------------

### 🟢 6️⃣ Create Data Cells

**Purpose:** Add individual pieces of data inside each row.

**Methods Used:** - `document.createElement('td')` - `.textContent` -
`appendChild()`

------------------------------------------------------------------------

### 🟢 7️⃣ Loop Through Data

**Purpose:** Dynamically generate rows from an array or object data.

**Concepts / Methods Used:** - `for` loop - Array access - Object
property access - `appendChild()`

------------------------------------------------------------------------

### 🎯 Pattern

1.  Get parent\
2.  Create table\
3.  Create header row\
4.  Add header cells\
5.  Create data rows\
6.  Add data cells\
7.  Repeat using a loop

------------------------------------------------------------------------

## Table Elements

<table> → the container

<tr> → a row

<th> → header cell

<td> → data cell

<thead> → header section

<tbody> → body section

<tfoot> → footer section

### Example HTML Table

```html
<table>
  <thead>
    <tr>
      <th>Day</th>
      <th>Guests</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Monday</td>
      <td>75</td>
    </tr>
    <tr>
      <td>Tuesday</td>
      <td>120</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total</td>
      <td>195</td>
    </tr>
  </tfoot>
</table>
```
