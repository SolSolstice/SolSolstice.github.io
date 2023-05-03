/*

!! This is a work in progress - I was unable to finish before the turn in !!

function showInfo(id){
    d3.json("samples.json").then(data => {
        let metaData = data.metadata;
        let identifier = metaData.filter(sample => {
            return sample.id.toString() == id})[0];
        let panel = d3.select("#sample-metadata");
        panel.html("");
        Object.entries(identifier).forEach(([key,value]) => 
        {panel.append("h5").text(`${key}: ${value}`)});

        })
    
};



//d3.json("samples.json").then(data => {
  //  console.log(data)
//});

function gaugePlot(id)
{
    d3.json("samples.json").then(data => {
        let theData = data.metadata;
        let identifier = theData.filter(data => data.id == id);
        let theFilter = identifier[0];
        let xValues = theFilter.theData;
        
        console.log(xValues)

    });
    
};



function gaugePlot(id)
{
    d3.json("samples.json").then(data => { 
        let theData = data.metadata;
        let identifier = theData.filter(data => data.id == id)
        let washFreq = identifier[0].wfreq;
        console.log(washFreq);
        console.log(identifier);
    }); 

    // manually "draw a rainbow" and fill it in .. instead of using gauge plot code from documentation
    let guageTrace = {
        domain: {x: washFreq,y:identifier},
        value: 40,
        title: {text: "wash freq"},
        type: "indicator",
        mode: "guage+number+delta",
        delta: {reference:70},
        guage: {
            axis: {range:[null,9]},
            steps: [
                {range: [0,1], color: "lightgray"}
            ],
            threshold:{
                line:{color:"red",width:4},
                thickness:0.75,
                value:490
            }
        }
    };
    //console.log(washFreq);
    
    let guageData = [guageTrace];
    var layout = {width: 600,height:450,margin:{t:0,b:0}};
    Plotly.newPlot("gauge",guageData,layout)
    
};





init();

function gaugePlot(id)
{
    d3.json("samples.json").then(data => 
        { 
            let theData = data.metadata;
            let identifier = theData.filter(data => data.id == id)
            let washFreq = theData.map((obj) => {
                return obj.wfreq;
            });
            console.log(identifier);
            console.log(washFreq);
            */
            /*
            let guageTrace = {
                domain: {x: washFreq,y:identifier},
                value: 40,
                title: {text: "wash freq"},
                type: "indicator",
                mode: "guage+number+delta",
                delta: {reference:70},
                guage: {
                    axis: {range:[null,9]},
                    steps: [
                        {range: [0,1], color: "lightgray"}
                    ],
                    threshold:{
                        line:{color:"red",width:4},
                        thickness:0.75,
                        value:490
                    }
                }
            };
            //console.log(washFreq);
            
            let guageData = [guageTrace];
            var layout = {width: 600,height:450,margin:{t:0,b:0}};
            Plotly.newPlot("gauge",guageData,layout)
            
        });
        

        

};



function optionChanged(id){gaugePlot(id), showInfo(id)};

function init()
{
    let dropDown = d3.select("#selDataset");
    d3.json("samples.json").then(data =>
    {
        sampleData = data.metadata;
        let theNames = sampleData.id;
        Object.values(theNames).forEach(value => {dropDown.append("option").text(value)});
        showInfo(theNames[0]);
        gaugePlot(theNames[0])
    })
};

init();



*/