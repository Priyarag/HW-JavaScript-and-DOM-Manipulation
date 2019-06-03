// Assign the data from `data.js` to a descriptive variable
var ufo_data = data;
// Get a reference to the table body
var tbody = d3.select("tbody");
// Select the submit button
var submit = d3.select("#filter-btn");
// // Step 1: Create a function to loop Through `data` and console.log each ufo  object
function getdata(tdata){
    
    tbody.text("")
    tdata.forEach((ufotable) => {
    var row = tbody.append("tr");
    Object.entries(ufotable).forEach(([key, value]) => {
      var cell = row.append("td").text(value);
    //   cell.text(value); 
    });
  })
};
getdata(ufo_data);

submit.on("click", function() {
    
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#search");
  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  console.log(inputValue);
//   console.log(cityValue);
 // clear the input value
 d3.select("#search").node().value = "";
  console.log(ufo_data);
  // filter based on the serach text entered

  var filteredData = ufo_data.filter(ufo => ufo.datetime === inputValue
    || ufo.city === inputValue.toLowerCase() || ufo.state === inputValue.toLowerCase()
    || ufo.country === inputValue.toLowerCase() || ufo.shape === inputValue.toLowerCase()
    || ufo.durationMinutes === inputValue
    );

  console.log(filteredData);
  // get the data on the webpage
  getdata(filteredData);



// };
// getdata(filteredData)
});