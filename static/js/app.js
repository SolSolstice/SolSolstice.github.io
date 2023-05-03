function showInfo(id){
    d3.json("samples.json").then(data => {
        let metaData = data.metadata;
        let identifier = metaData.filter(sample => {
            return sample.id.toString() == id})[0];
        let panel = d3.select("#sample-metadata");
        panel.html("");
        Object.entries(identifier).forEach(([key,value]) => 
        {panel.append("h5").text(`${key}: ${value}`)});

        });
    
};

function Plots(id)
{
    d3.json("samples.json").then(data => {
        
        let samples = data.samples;
        let identifier = samples.filter(sample => sample.id == id);
        let theFilter = identifier[0];
        let sample_values = theFilter.sample_values.slice(0,10).reverse();
        let otu_ids = theFilter.otu_ids.slice(0,10).reverse();
        let otu_labels = theFilter.otu_labels.slice(0,10).reverse();

        let barTrace = {
            x: sample_values,
            y: otu_ids.map(object => "OTU " + object),
            type: "bar",
            name: otu_labels,
            orientation: "h"
        };
        let barLayout = {width: 400, height: 600};
        let barData = [barTrace];
        Plotly.newPlot("bar", barData, barLayout);

        // Create a bubble chart that displays each sample
        let bubbleTrace = {
            x: theFilter.otu_ids,
            y: theFilter.sample_values,
            mode: "markers",
            marker: {
                color: theFilter.otu_ids,
                colorscale: "Portland",
                size: theFilter.sample_values
            },
            text: theFilter.otu_labels,
        };
        let bubbleData = [bubbleTrace];
        let bubbleLayout = {
            xTitle: {title: "OTU ID"},
            width: 1200, height: 550
        };
        Plotly.newPlot("bubble", bubbleData, bubbleLayout);




    })
};



function optionChanged(id){Plots(id),showInfo(id)};

function init()
{
    let dropDown = d3.select("#selDataset");
    d3.json("samples.json").then(data =>
    {
        sampleData = data;
        let theNames = sampleData.names;
        Object.values(theNames).forEach(value => {dropDown.append("option").text(value)});
        showInfo(theNames[0]);
        Plots(theNames[0])
    })
};



init();
