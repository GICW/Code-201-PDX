let allStores = [];
let hours = ["7am", "8am", "9am", "10am"];
let totalsPerHour = [0, 0, 0, 0];
let totalSales = 0;

// Create a Constructor function for the store to model it
// let store = new Store("Seattle", 23, 65, 6.3);
function Store( location, minCustomers, maxCustomers, avgCookies) {
  this.location = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  this.totalSales = 0;
  // Fill this array so we can loop over it later
  this.hourlySales = []; // [1,2,3,4]

  this.generateSalesData();

  allStores.push(this);
}

// Generate the sales totals for a store...
// prototype methods are actual methods on the constructor/object
Store.prototype.generateSalesData = function() {
  // Create a random number of customers based min and max customers
  // and the average sales per hour
  // this.minCustomers, this.maxCustomers, this.avgCookies
  // for each hour of the hours array, generate that random number...

  for( let i=0; i<hours.length; i++) {
    // Actually, use the random thing for this. But I'm cheating for now.
    // the number of sales for this location for one of the hours:
    let pretendSales = 5;

    // and to the hourlySales array for this store
    this.hourlySales.push(pretendSales);

    // add it to the totalsPerHour array (the master list of totals)
    // i is our array index, and it's also an index in the totalsPerHour array
    totalsPerHour[i] += pretendSales;

    // update the totalSales for this store
    this.totalSales += pretendSales;

    // update the totalSales for all stores
    totalSales += pretendSales
  }
}

// Render a store as a row in this table
Store.prototype.render = function() {
  let body = document.getElementById("salesTableBody");

  let row = document.createElement("tr");
  body.appendChild(row);

  let location = document.createElement("td");
  location.textContent = this.location;
  row.appendChild(location);

  for(let i=0; i<this.hourlySales.length; i++) {
    let td = document.createElement("td");
    td.textContent = this.hourlySales[i];
    row.appendChild(td);
  }

  let total = document.createElement("td");
  total.textContent = this.totalSales;
  row.appendChild(total);
}

// Create a table header
// Dynamically add the hours to the table header
function createTableHeader() {

  // the table header
  let header = document.getElementById("salesTableHeader");

  // create a row and add to the header
  let row = document.createElement("tr");
  header.appendChild(row);

  // Create the first header cell for the Location
  let location = document.createElement("th");
  location.textContent = "Location";
  row.appendChild(location);

  // Add all the hours to the table header
  for(let i=0; i<hours.length; i++) {
    let th = document.createElement("th");
    th.textContent = hours[i];
    row.appendChild(th);
  }

  // Create the last header cell for the Location
  let totals = document.createElement("th");
  totals.textContent = "Location Totals";
  row.appendChild(totals);

}

// Create a table footer
// Dynamically add the hourly totals to the table footer
function createTableFooter() {

  let footer = document.getElementById("salesTableFooter");

  // Create the row for the footer data
  let row = document.createElement("tr");
  footer.appendChild(row);

  // Create the first cell in the footer
  let totalLabel = document.createElement("td");
  totalLabel.textContent = "Totals by the hour";
  row.appendChild(totalLabel)

  // // Add all the houly totals to the footer
  // for(let i=0; i<totalsPerHour.length; i++) {
  //   let td = document.createElement("td");
  //   td.textContent = totalsPerHour[i];
  //   row.appendChild(td);
  // }

  // loop over each hour in the hours array, and then loop over each store's hours total array and add it all up

  // This will store the array of all the totals for each hour from all the stores
  let totals = [];

  // Loop over each hour
  // hours[i] would be "7am"
  for(let i=0; i<hours.length; i++) {
    let hourTotal = 0;

    // Loop over the stores list
    // Each store will be seen here as allStores[j]
    for(let j=0; j<allStores.length; j++) {
      // Iteration 1: i = 0 and j is 0 ---- 7am and Seattle object's hourlySales array at index 0 which is ##
      // Iteration 2: i = 0 and j is 1 ---- 7am and Jordan object's hourlySales array at index 0 which is ##

      // Iteration 2: i = 1 and j is 0 ---- 8am and Seattle object's hourlySales array at index 1 which is ##
      // Iteration 2: i = 1 and j is 1 ---- 8am and Jordan object's hourlySales array at index 1 which is ##
      hourTotal += allStores[j].hourlySales[i];
    }
    totals.push(hourTotal);
  }

  for(let i=0; i<totals.length; i++) {
    let td = document.createElement("td");
    td.textContent = totals[i];
    row.appendChild(td);
  }


  // Add the main total to the table
  let mainTotal = document.createElement("td");
  mainTotal.textContent = totalSales;
  row.appendChild(mainTotal);

}


// Create a table body that draws each store's data
// 1. Generate sales data into the totals per hour and to each store
// 2. Keep track of all the totals for hours and for the grand total as we go...


// Create function that "starts the process"
function start() {
  console.log("Starting the process");

  let seattle = new Store("Seattle", 23, 65, 6.3);
  let jordan = new Store("Jordan", 11, 42, 2.4);

  console.log("Created the stores:", allStores);

  createTableHeader();

  // print each location to the table
  for(let i=0; i<allStores.length; i++) {
    allStores[i].render();
  }

  createTableFooter();

}

start();
