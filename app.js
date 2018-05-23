d3.queue()
.defer(d3.json, "https://unpkg.com/world-atlas@1.1.4/world/110m.json")
.defer(d3.csv, "./data/all_data.csv", function(row){
    return {
        continent: row.Continent,
        country: row.Country,
        countryCode: row["Country Code"],
        emissions: row["Emissions"],
        emissionsPerCapita: +row["Emissions Per Capita"],
        region: row.Region,
        year: +row.Year
    }
})
.await(function(error, mapData, data){
    if (error) throw error;

    var extremeYears = d3.extent(data, d => d.year);
    var currentYear = extremeYears[0];
    var currentDataType = d3.select('input[name="data-type"]:checked')
                                .attr("value");
    var geoData = topojson.feature(mapData, mapData.objects.countries).features;
    var width = +d3.select(".chart-container")
                            .node().offsetWidth;
    var height = 300;
    
    createMap(width, width * 4 / 5);
    createPie(width, height);
    createBar(width, height);
    drawMap(geoData, data, currentYear, currentDataType);
    drawPie(data, currentYear);
    drawBar(data, currentDataType, "");


    d3.select('#year')
        .property("min", currentYear)
        .property("max", extremeYears[1])
        .property("value", currentYear)
        .on("input", () => {
            currentYear = +d3.event.target.value;
            drawMap(geoData, data, currentYear, currentDataType);
            drawPie(data, currentYear);
            highlightBars(currentYear);
        });

    d3.selectAll('input[name="data-type"]')
        .on("change", () => {
            var active = d3.select(".active").data()[0];
            var country = active ? active.properties.country : "";
            currentDataType = d3.event.target.value;
            drawMap(geoData, data, currentYear, currentDataType);
            drawBar(data, currentDataType, country);
        });

})