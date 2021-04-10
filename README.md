# Plotly Homework Assignment
![GitHub Logo](/images/bacteria.jpg)
# Belly Button Biodiversity

In this assignment, I built an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels.
The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.


## About the Dataset

Retrieved from: http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/

>The belly button is one of the habitats closest to us, and yet it remains relatively unexplored. In January 2011, we launched Belly Button Biodiversity to investigate the microbes inhabiting our navels and the factors that might influence the microscopic life calling this protected, moist patch of skin home. In addition to inspiring scientific curiosity, Belly Button Biodiversity inspired conversations about the beneficial roles microbes play in our daily lives.

### Belly Button Biodiversity Dashboard is hosted at GitHub Pages. 

[Belly Button Biodiversity Dashboard](https://sandygoodell.github.io/ploty_hw/) 


## Assignment Details

1. Use the D3 library to read in samples.json.

2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
    * Use sample_values as the values for the bar chart.
    * Use otu_ids as the labels for the bar chart.
    * Use otu_labels as the hovertext for the chart.

3. Create a bubble chart that displays each sample.
    * Use otu_ids for the x values.
    * Use sample_values for the y values.
    * Use sample_values for the marker size.
    * Use otu_ids for the marker colors.
    * Use otu_labels for the text values.

4. Display the sample metadata, i.e., an individual's demographic information.

5. Display each key-value pair from the metadata JSON object somewhere on the page.

6. Update all of the plots any time that a new sample is selected.











