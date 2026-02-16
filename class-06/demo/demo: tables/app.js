/*
JavaScript → HTML Table
🏨 Hotel Guests Per Week

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

// const container = ______________________________;



/* =====================================
   STEP 2: CREATE THE <table>
====================================== */

// 2️⃣ Create a table element using document.createElement()

// const table = ______________________________;


// 3️⃣ Attach the table to the container using appendChild()

// container.______________________________;


// Remember:
// - Create it first
// - Attach it immediately
// - Now it exists in the DOM



/* =====================================
   STEP 3: CREATE A HEADER ROW
====================================== */

// 4️⃣ Create a <tr> element for the header row

// const headerRow = ______________________________;


// 5️⃣ Attach headerRow to the table

// table.______________________________;



/* =====================================
   STEP 4: ADD HEADER CELLS (<th>)
====================================== */

// 6️⃣ Create an array of headers
// Our table needs: Day and Number of Guests

// const headers = ______________________________;


// 7️⃣ Loop through the headers array

// for (let i = 0; i < ___________________; i++) {

//    Create a <th>

//    const th = ______________________________;

//    Fill it using textContent

//    th.______________________________ = headers[i];

//    Attach it to headerRow

//    headerRow.______________________________;

// }



/* =====================================
   STEP 5: CREATE HOTEL DATA OBJECT
====================================== */

// Create an object called hotel that stores:
// - name
// - minGuests
// - maxGuests
// - dailyGuests (empty array)
// - totalGuests (start at 0)

// const hotel = {
//   name: ______________________________,
//   minGuests: ______________________________,
//   maxGuests: ______________________________,
//   dailyGuests: ______________________________,
//   totalGuests: ______________________________
// };



/* =====================================
   STEP 6: RANDOM NUMBER FUNCTION
====================================== */

/*
Create a function called getRandomGuests
that returns a random number between min and max
(inclusive)
*/

// function getRandomGuests(min, max) {

//   return ________________________________________________;

// }



/* =====================================
   STEP 7: MULTIPLE ROWS (SCALING PATTERN)
====================================== */

// Create an array of days of the week

// const days = ______________________________;


// 1️⃣ Outer loop → controls rows

// for (let i = 0; i < ___________________; i++) {

//    Create a <tr>

//    const row = ______________________________;

//    Attach row to table

//    table.______________________________;


//    Generate random guests using the helper function

//    const guests = ______________________________;


//    Push guests into hotel.dailyGuests

//    hotel.dailyGuests.______________________________;


//    Add guests to totalGuests

//    hotel.totalGuests ______________________________ guests;


//    Create first cell for Day

//    const dayCell = ______________________________;

//    dayCell.textContent = ______________________________;
//    row.______________________________;


//    Create second cell for Guests

//    const guestCell = ______________________________;

//    guestCell.textContent = ______________________________;
//    row.______________________________;

// }



/* =====================================
   STEP 8: ADD TOTAL ROW
====================================== */

// Create a final <tr>

// const totalRow = ______________________________;

// table.______________________________;


// Create label cell

// const totalLabel = ______________________________;

// totalLabel.textContent = ______________________________;
// totalRow.______________________________;


// Create value cell

// const totalValue = ______________________________;

// totalValue.textContent = ______________________________;
// totalRow.______________________________;



/* =====================================
   🧠 MENTAL TEMPLATE
====================================== */

/*
Memorize this order:

1️⃣ Get parent
2️⃣ Create table
3️⃣ Add header row
4️⃣ Add <th> cells
5️⃣ Create object to store data
6️⃣ Create helper function (random number)
7️⃣ Loop → generate data → create rows
8️⃣ Add total row
*/



/* =====================================
SIMPLE RULE
====================================== */

/*
Tables are built row by row,
and rows are built cell by cell.

Generate data first.
Display it second.
*/
