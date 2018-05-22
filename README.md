Data dashboard for CO2 emissions around the world

Steps in the projects:

1. find data
2. get data into JS format
3. make map
4. make pie chart
5. make bar chart
6. add tooltips

## DATA

Need to make 2 requests: to CSV file and TopoJSON file (for map data).

I use a d3.queue() which includes 2 defer() calls -> d3.csv and d3.json to fetch the data.

I then use a formatter callback to transfer data from rows in a CSV to an array of JS objects.

