// from data.js
var tableData = data;
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Create event handlers 
button.on("click", sightings);
form.on("submit",sightings);


function sightings() {
    d3.event.preventDefault();
    var input = d3.select("#datetime").property("value");
    var city_input= d3.select("#city").property("value");
    var state_input= d3.select("#state").property("value");
    var country_input= d3.select("#country").property("value");
    var shape_input= d3.select("#shape").property("value");
    
    let filteredData=tableData
    
    if (input != "") {
    filteredData = filteredData.filter(entries => entries.datetime === input);
    }
    if (city_input != "") {
    filteredData= filteredData.filter(entries => entries.city === city_input );
    }
    if (state_input != "") {
    filteredData= filteredData.filter(entries => entries.state === state_input );
    }
    if (country_input != "") {
    filteredData= filteredData.filter(entries => entries.country === country_input );
    }
    if (shape_input != "") {
    filteredData= filteredData.filter(entries => entries.shape === shape_input );
    }
    d3.select("tbody").html("");

    for( var i=0; i < filteredData.length; i++){
        var entry=filteredData[i]
        var row= d3.select("tbody").append("tr");   
        row.append("td").text(entry.datetime);
        row.append("td").text(entry.city);
        row.append("td").text(entry.state);
        row.append("td").text(entry.country);
        row.append("td").text(entry.shape);
        row.append("td").text(entry.durationMinutes);
        row.append("td").text(entry.comments);
    }
}
