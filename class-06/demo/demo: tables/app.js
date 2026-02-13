/*
JavaScript → HTML Table

🧠 Big Picture Reminder:
We are NOT writing HTML in JavaScript.
We are creating elements one piece at a time and attaching them.

RULE:
👉 Create → Fill → Attach
*/


/* =====================================
   STEP 1: GET THE PARENT (ANCHOR POINT)
====================================== */

// 1️⃣ Use document.getElementById() to grab the div
//    with the id "tableContainer"

// const container = ____________________;





/* =====================================
   STEP 2: CREATE THE <table>
====================================== */

// 2️⃣ Create a table element using document.createElement()

// const table = ____________________;

// 3️⃣ Attach the table to the container using appendChild()

// container.____________________;

// Keep in mind...
// - Create it first
// - Attach it immediately
// - Now it exists in the DOM



/* =====================================
   STEP 3: CREATE A HEADER ROW
====================================== */

// 4️⃣ Create a <tr> element for the header row

// const headerRow = ____________________;

// 5️⃣ Attach headerRow to the table

// table.____________________;

// Explain:
// Tables are built row by row
// Headers are still rows — they just use <th> cells



/* =====================================
   STEP 4: ADD HEADER CELLS (<th>)
====================================== */

// 6️⃣ Create an array of headers
// Example: ['Name', 'Age', 'Favorite Food']

// const headers = ____________________;


// 7️⃣ Loop through the headers array

// for (let i = 0; i < ______; i++) {

//    Create a <th>

//    Fill it using textContent

//    Attach it to headerRow

// }


/* =====================================
   STEP 5: CREATE A DATA ROW
====================================== */

// 8️⃣ Create a new <tr> for data

// const dataRow = ____________________;

// 9️⃣ Attach dataRow to table



/* =====================================
   STEP 6: ADD DATA CELLS (<td>)
====================================== */

// 🔟 Create an array of data
// Example: ['Alex', 25, 'Pizza']

// const rowData = ____________________;


// 1️⃣1️⃣ Loop through rowData

// for (let i = 0; i < ______; i++) {

//    Create a <td>

//    Set textContent

//    Attach to dataRow

// }




/* =====================================
   STEP 7: MULTIPLE ROWS (SCALING PATTERN)
====================================== */

// 1️⃣2️⃣ Create an array of arrays
// Example:
// [
//   ['Alex', 25, 'Pizza'],
//   ['Jordan', 30, 'Sushi'],
//   ['Sam', 22, 'Tacos']
// ]

// const people = ____________________;


// 1️⃣3️⃣ Outer loop → controls rows

// for (let i = 0; i < ______; i++) {

//    Create a <tr>
//    Attach to table

//    1️⃣4️⃣ Inner loop → controls cells

//    for (let j = 0; j < ______; j++) {

//        Create a <td>
//        Fill it
//        Attach to the row

//    }

// }



/* =====================================
   🧠 MENTAL TEMPLATE
====================================== */

/*
Memorize this order:

1️⃣ Get parent
2️⃣ Create table
3️⃣ Add header row
4️⃣ Add <th> cells
5️⃣ Add data rows
6️⃣ Add <td> cells
7️⃣ Use loops to scale
*/


/* =====================================
SIMPLE RULE
====================================== */

/*
Tables are built row by row,
and rows are built cell by cell.
*/


/* =====================================
   ⚠️ COMMON MISTAKES
====================================== */

/*
❌ Forgetting to append elements
❌ Creating but never attaching
❌ Mixing <th> and <td>
❌ Hard-coding instead of looping
*/
