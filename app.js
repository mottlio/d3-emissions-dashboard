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