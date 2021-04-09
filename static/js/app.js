// d3.json('samples.json').then(data => {
//    console.log(data);
// })

// Use the D3 library to read in samples.json
d3.json('data/samples.json').then((data) => {
   console.log(data);
})


// Build metadata function (first) // (data) is a local variable in that function
function buildMetadata(data) {
   console.log(data);


}

// function for barchart
function buildCharts(data) {
   // bar chart

}   

// handle that will repull data based on new sample
function optionChanged(newSample) {
   buildMetadata(newSample);
   buildCharts(newSample);
}



// Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual
// Use sample_values as the values for the bar chart.
// Use otu_ids as the labels for the bar chart.
// Use otu_labels as the hovertext for the chart.

// Build a funtion (initial function) to populate page with defaul sample id and populat drop down selection

function init() {
    // Get reference to the dropdown select element
    var selector = d3.select("#selDataset");
   
    // use the list of sample names to populate the selction options
    d3.json('data/samples.json').then((data) => {
       var sampleNames = data.names;
       console.log(sampleNames);
       sampleNames.forEach((sample) => {
          selector
            .append("option").text(sample).property("value", sample);
            console.log(selector);
       }); //end of sample names

       // get first sample
       var firstSample = sampleNames[0];
       console.log(firstSample);  // this is 940, the first sample
       
       // call metadata and build chart functions
       buildMetadata(firstSample);
       buildCharts(firstSample);








      
      



      
      }); // d3.json




     
   
    
    
    
   } // end init()



// Set up dashboards 
init();