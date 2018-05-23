function createPie(width, height) {
    var pie = d3.select("#pie")
                    .attr("width", width)
                    .attr("height", height);

    pie.append("g")
            .attr("transform", "translate(" + width/2 + ", " + (height/2 + 10) + ")")
            .classed("chart", true);

    pie.append("text")
        .attr("x", width/2)
        .attr("y", "1em")
        .attr("font-size", "1.5em")
        .style("text-anchor", "middle")
        .classed("pie-title", true);
}

function drawPie(data, currentYear) {
    
}