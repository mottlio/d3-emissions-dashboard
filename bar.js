function createBar(width, height){
    var bar = d3.select("#bar")
                .attr("width", width)
                .attr("height", height);

    bar.append("g")
        .classed("x-axis", true);
    
    bar.append("g")
        .classed("y-axis", true);

    bar.append("text")
            .attr("transform", "rotate(-90)")
            .attr("x", - height / 2)
            .attr("dy", "1em")
            .style("text-anchor", "middle")
            .style("font-size", "1em")
            .classed("y-axis-label", true);

    bar.append("text")
        .attr("x", width / 2)
        .attr("y", "1em")
        .attr("font-size", "1.5em")
        .style("text-anchor", "middle")
        .classed("bar-title", true);
}

function highlightBars(year){
    d3.select("#bar")
        .selectAll("rect")
            .attr("fill", d => d.year === year ? "#16a085" : "#1abc9c");
}

function drawBar(data, dataType, country){
    var bar = d3.select("#bar");
    var padding = {
        top: 30,
        right: 30,
        bottom: 30,
        left: 110
    };
    var barPadding = 1;
    var width = +bar.attr("width");
    var height = +bar.attr("height");
    var countryData = data.filter(d => d.country === country)
                        .sort((a, b) => a.year - b.year);

    
}