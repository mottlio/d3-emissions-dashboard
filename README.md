Data dashboard for CO2 emissions around the world

Steps in the projects:

1. find data
2. get data into JS format
3. make map
4. make pie chart
5. make bar chart
6. add tooltips

## DATA

Source: http://data.un.org/

The CSV file containing the data I need is stored on the server.

Need to make 2 requests: to CSV file (for UN emissions data)and TopoJSON file (for map data).

I use a d3.queue() which includes 2 defer() calls -> d3.csv and d3.json to fetch the data.

I then use a formatter callback to transfer data from rows in a CSV to an array of JS objects.

##MAP, PIECHART AND BARCHART

I then call d3 methods from within the callback to create (define the area) and draw (populate with data) the charts. For improved code legibility those functions are placed in separate JS files which are called from the index.html file.

