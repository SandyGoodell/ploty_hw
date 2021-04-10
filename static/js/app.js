// d3.json('samples.json').then(data => {
//    console.log(data);
// })

//Use the D3 library to read in samples.json
d3.json('data/samples.json').then((data) => {
   console.log(data);
})


// Build metadata function (first) // (data) is a local variable in that function
function buildMetadata(sample) {
   d3.json('data/samples.json').then((data) => {
      // get demographic data tied to IDS - metadata
      let metadata = data.metadata;
      // filter by the id in the metadata
      let results = metadata.filter(MyObject => MyObject.id == sample)
      let result = results[0]
      //console.log(results)
      // use d3 to select the display panel for the (#sample-metadata) for the specific sample individual
      let display = d3.select("#sample-metadata");
      console.log(display)
      // clear any existing display
      display.html("");
      // add each key and value pair to the display box
      Object.entries(result).forEach(([key, value]) => {
         display.append("h6").text(`${key.toUpperCase()}: ${value}`);
         console.log(`${key} ${value}`);
      });     
   });  
}

// function for barchart
function buildCharts(sample) {
   d3.json("data/samples.json").then((data) => {
      let samples = data.samples;
      let results = samples.filter(MyObject => MyObject.id == sample);
      let result = results[0];
      let otu_ids = result.otu_ids;
      let otu_labels = result.otu_labels;
      let sample_values = result.sample_values;
      // build the bar chart for top 100
      // use slice (0,10) and .reverse to order the results
      let y = otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();
      let barData = [
         {
            y: y,
            x: sample_values.slice(0,10).reverse(),
            text: otu_labels.slice(0,10).reverse(),
            marker: {
               color: otu_ids,
               colorscale: 'Jet'},
            type: "bar",
            orientation: "h"
         }
      ];
      // bar layout
      let barLayout = {
         title: "Top 10 Bacteria Cultures Found",
         margin: { t: 30, l: 150 },
      };
      // call plotyly
      Plotly.newPlot("bar", barData, barLayout);

       // Build a Bubble Chart for the Bacteria Cultures for selected sample
       let bubbleLayout = {
         title: "Bacteria Cultures Per Sample",
         margin: { t: 0 },
         hovermode: "closest",
         xaxis: { title: "OTU ID" },
         margin: { t: 30}
       };
       let bubbleData = [
         {
           x: otu_ids,
           y: sample_values,
           text: otu_labels,
           mode: "markers",
           marker: {
             size: sample_values,
             color: otu_ids,
             colorscale: "Jet"
           }
         }
       ];
       Plotly.newPlot("bubble", bubbleData, bubbleLayout);
      })
    };




// handle that will repull data based on new sample
function optionChanged(newSample) {
   buildCharts(newSample);
   buildMetadata(newSample);

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
       //console.log(sampleNames);
       sampleNames.forEach((sample) => {
          selector
            .append("option")
            .text(sample)
            .property("value", sample);
            //console.log(selector);
       }); //end of sample names

       // get first sample
       var firstSample = sampleNames[0];
       console.log(firstSample);  // this is 940, the first sample
       
       // call metadata and build chart functions
       buildCharts(firstSample);
       buildMetadata(firstSample);

   }); // d3.json

} // end init()



// Set up dashboards 
init();