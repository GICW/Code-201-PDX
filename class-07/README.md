# Object-Oriented Programming with Constructor Functions: HTML Tables

## Overview 

This class will introduce inheritance with constructor functions, plus adding another dimension to dynamic DOM rendering by creating a table instead of lists from stored array data.

## Class 7 Outline

- Reading 7
  - Discussion
- Code review of previous lab assignment- Salmon Cookies pt.1
- Demo
  - Constructor functions
  - Prototype methods
  - Dom Manipuation with HTML tables
- Lab 07 preview and prep
  - Lab 7:  Salmon Cookies pt.2
- Learning Journal 07
  - Motivation and goals 


## Learning Objectives

### Students will be able to

#### Describe and Define

- Constructor functions
- JavaScript "prototypal inheritance"
- HTML `<table>` tag structure and usage

#### Execute

- Translate an object literal into a constructor function.
- Use the ‘prototype’ property to extend the inheritable properties and methods of a constructor function.
- Dynamically build a semantic HTML table with with JavaScript and render it to the DOM.


## Reading 07
### Domain ModelingLinks to an external site.

1. Explain why we need domain modeling.

### HTML Table BasicsLinks to an external site.

1. Why should tables not be used for page layouts?
2. List and describe 3 different semantic HTML elements used in an HTML <table>.

### Introducing ConstructorsLinks to an external site.

1. What is a constructor and what are some advantages to using it?
2. How does the term this differ when used in an object literal versus when used in a constructor?

### Object Prototypes Using A ConstructorLinks to an external site.

1. Explain prototypes and inheritance via an analogy from your previous work experience.
#### NOTE: This is a very common front end developer interview question


## End of Class Review

1. What is a Constructor function?

2. How does the term `this` differ when reference an object literal versus a Constructor function?

3. What are some HTML elements that make up an HTML table?

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
1. Find a parent element (hopefully by "id")
2. Assign that to a variable like "parentElement" or "dogSection" or "container"
3. Create a new element with document.createElement() -- this creates (<p></p>)
4. Add text content to that new element (this adds <p>text!</p>)
5. Append the newly created element to that parent you defined in step 2