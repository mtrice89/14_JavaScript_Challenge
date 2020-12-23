//Assign data from data.js
var tableData = data;

//Getting reference to the tbody & table
var tbody = d3.select('tbody')
var table = d3.select('table')

//Creating a funtion to build table & Looping through the data and displaying each array in console
function createTable(data){
    tbody.html('')
    data.forEach(item => {
    // console.log(item)
    let row = tbody.append('tr')
    let datetime = row.append('td')
    let city = row.append('td')
    let state = row.append('td')
    let country = row.append('td')
    let shape = row.append('td')
    let durationMinutes = row.append('td')
    let comments = row.append('td')
    datetime.text(item.datetime)
    city.text(item.city)
    state.text(item.state)
    country.text(item.country)
    shape.text(item.shape)
    durationMinutes.text(item.durationMinutes)
    comments.text(item.comments)
})
}
createTable(tableData)

//Creating reference to the button using id
var button = d3.select("#filter-btn")

//Creating reference to the input using id
var inputField = d3.select("#datetime");
let filteredData = tableData;

// Input fields can trigger a change event when new text is entered.
inputField.on("change", function() {
    var dateEntered = d3.event.target.value;
    console.log(dateEntered);
  });
  

//Creating a function for dates entered in the filter box
function handleClick() {

//Creating reference to the button using id
var button = d3.select("#filter-btn")

//Creating reference to the input using id
var inputField = d3.select("#datetime").property("value");
let filteredData = tableData;
    
    //Using the date entered to filter the table
    if (inputField) {
        //Filtering the table data to only display the date entered
        filteredData = filteredData.filter(row => row.datetime === inputField);
    }
    //If no date is entered then dispay the orginal table
    createTable(filteredData);
    }

    //Attach an event for the button
    button.on("click", handleClick);
    
    //Create the table
    createTable(tableData);