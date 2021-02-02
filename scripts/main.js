
define([], function () {
    return ['data']; // Array of module names
});

var w = 600,
	h = 600;

//Legend titles
var LegendOptions = ['P1','P2'];

//All Subject data
var d = data;

var orangeDark = 'rgb(255, 127, 14)';
var orangeLight = 'rgb(252, 220, 159)';
var blueDark = 'rgb(9, 67, 122)';
var blueLight = 'rgb(44, 160, 199)';

var orangeColors = [orangeDark, orangeLight];
var blueColors = [blueDark, blueLight];
//Options for the Radar chart, other than default
var mycfg = {
  w: w,
  h: h,
  maxValue: 7,
  levels: 7,
  ExtraWidthX: 300,
  color: function(i) {
      c = [orangeDark, orangeLight];
      return c[i];
      //Should probably be return c[i%(c.length-1)]; to avoid errors
    }
}

var mycfgBlue = {
  w: w,
  h: h,
  maxValue: 7,
  levels: 7,
  ExtraWidthX: 300,
  color: function(i) {
      c = [blueDark, blueLight];
      return c[i];
      //Should probably be return c[i%(c.length-1)]; to avoid errors
    }
}

//Call function to draw the Radar chart
//Will expect that data is in %'s

//Subject 1 - Pre
RadarChart.draw("#chart", d.slice(0, 2), mycfg);
//Subject 1 - Post
RadarChart.draw("#chart2", d.slice(2, 4), mycfgBlue);

//Subject 2 - Pre
RadarChart.draw("#chart3", d.slice(4, 6), mycfg);
//Subject 2 - Post
RadarChart.draw("#chart4", d.slice(6, 8), mycfgBlue);

//Subject 3 - Pre
RadarChart.draw("#chart5", d.slice(8, 10), mycfg);
//Subject 3 - Post
RadarChart.draw("#chart6", d.slice(10, 12), mycfgBlue);

//Subject 4 - Pre
RadarChart.draw("#chart7", d.slice(12, 14), mycfg);
//Subject 4 - Post
RadarChart.draw("#chart8", d.slice(14, 16), mycfgBlue);



////////////////////////////////////////////
/////// Initiate - Subject 1 ///////
////////////////////////////////////////////	

////// Volunteer #1 - Pre////////
var svg1 = d3.select('#body')
	.selectAll('svg')
	.append('svg')
	.attr("width", w+400)
	.attr("height", h);


////// Volunteer #1 - Post ////////
var svg2 = d3.select('#body2')
	.selectAll('svg')
	.append('svg')
	.attr("width", w+400)
	.attr("height", h);
		

////////////////////////////////////////////
/////// Initiate - Subject 2 ///////
////////////////////////////////////////////	

////// Volunteer #2 - Pre////////
var svg3 = d3.select('#body3')
	.selectAll('svg')
	.append('svg')
	.attr("width", w+400)
	.attr("height", h);


////// Volunteer #2 - Post ////////
var svg4 = d3.select('#body4')
	.selectAll('svg')
	.append('svg')
	.attr("width", w+400)
	.attr("height", h);
		

////////////////////////////////////////////
/////// Initiate - Subject 3 ///////
////////////////////////////////////////////  

////// Volunteer #3 - Pre////////
var svg5 = d3.select('#body5')
  .selectAll('svg')
  .append('svg')
  .attr("width", w+400)
  .attr("height", h);

////// Volunteer #3 - Post ////////
var svg6 = d3.select('#body6')
  .selectAll('svg')
  .append('svg')
  .attr("width", w+400)
  .attr("height", h);

    

////////////////////////////////////////////
/////// Initiate - Subject 4 ///////
////////////////////////////////////////////	

////// Volunteer #4 - Pre////////
var svg7 = d3.select('#body7')
	.selectAll('svg')
	.append('svg')
	.attr("width", w+400)
	.attr("height", h);
		

////// Volunteer #4 - Post ////////
var svg8 = d3.select('#body8')
	.selectAll('svg')
	.append('svg')
	.attr("width", w+400)
	.attr("height", h);

		
