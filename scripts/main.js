
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
/////// Initiate legend  - Subject 1 ///////
////////////////////////////////////////////	

////// Volunteer #1 - Pre////////
var svg1 = d3.select('#body')
	.selectAll('svg')
	.append('svg')
	.attr("width", w+400)
	.attr("height", h);

//Create the title for the legend
var text1 = svg1.append("text")
	.attr("class", "title")
	.attr('transform', 'translate(90,0)') 
	.attr("x", w - 70)
	.attr("y", 10)
	.attr("font-size", "12px")
	.attr("fill", "#404040")
	.text("Social Matrix for individual over a period of time");
		
//Initiate Legend	
var legend1 = svg1.append("g")
	.attr("class", "legend")
	.attr("height", 100)
	.attr("width", 200)
	.attr('transform', 'translate(90,20)') 
	;
	//Create colour squares
	legend1.selectAll('rect')
	  .data(LegendOptions)
	  .enter()
	  .append("rect")
	  .attr("x", w - 65)
	  .attr("y", function(d, i){ return i * 20;})
	  .attr("width", 10)
	  .attr("height", 10)
	  .style("fill", function(d, i) { return orangeColors[i]})
	  ;
	//Create text next to squares
	legend1.selectAll('text')
	  .data(LegendOptions)
	  .enter()
	  .append("text")
	  .attr("x", w - 52)
	  .attr("y", function(d, i){ return i * 20 + 9;})
	  .attr("font-size", "11px")
	  .attr("fill", "#737373")
	  .text(function(d) { return d; })
	  ;	


////// Volunteer #1 - Post ////////
var svg2 = d3.select('#body2')
	.selectAll('svg')
	.append('svg')
	.attr("width", w+400)
	.attr("height", h);

//Create the title for the legend
var text2 = svg2.append("text")
	.attr("class", "title")
	.attr('transform', 'translate(90,0)') 
	.attr("x", w - 70)
	.attr("y", 10)
	.attr("font-size", "12px")
	.attr("fill", "#404040")
	.text("Social Matrix for individual over a period of time");
		
//Initiate Legend	
var legend2 = svg2.append("g")
	.attr("class", "legend")
	.attr("height", 100)
	.attr("width", 200)
	.attr('transform', 'translate(90,20)') 
	;
	//Create colour squares
	legend2.selectAll('rect')
	  .data(LegendOptions)
	  .enter()
	  .append("rect")
	  .attr("x", w - 65)
	  .attr("y", function(d, i){ return i * 20;})
	  .attr("width", 10)
	  .attr("height", 10)
	  .style("fill", function(d, i) { return blueColors[i]})
	  ;
	//Create text next to squares
	legend2.selectAll('text')
	  .data(LegendOptions)
	  .enter()
	  .append("text")
	  .attr("x", w - 52)
	  .attr("y", function(d, i){ return i * 20 + 9;})
	  .attr("font-size", "11px")
	  .attr("fill", "#737373")
	  .text(function(d) { return d; })
	  ;	



////////////////////////////////////////////
/////// Initiate legend  - Subject 2 ///////
////////////////////////////////////////////	

////// Volunteer #2 - Pre////////
var svg3 = d3.select('#body3')
	.selectAll('svg')
	.append('svg')
	.attr("width", w+400)
	.attr("height", h);

//Create the title for the legend
var text3 = svg3.append("text")
	.attr("class", "title")
	.attr('transform', 'translate(90,0)') 
	.attr("x", w - 70)
	.attr("y", 10)
	.attr("font-size", "12px")
	.attr("fill", "#404040")
	.text("Social Matrix for individual over a period of time");
		
//Initiate Legend	
var legend3 = svg3.append("g")
	.attr("class", "legend")
	.attr("height", 100)
	.attr("width", 200)
	.attr('transform', 'translate(90,20)') 
	;
	//Create colour squares
	legend3.selectAll('rect')
	  .data(LegendOptions)
	  .enter()
	  .append("rect")
	  .attr("x", w - 65)
	  .attr("y", function(d, i){ return i * 20;})
	  .attr("width", 10)
	  .attr("height", 10)
	  .style("fill", function(d, i) { return orangeColors[i]})
	  ;
	//Create text next to squares
	legend3.selectAll('text')
	  .data(LegendOptions)
	  .enter()
	  .append("text")
	  .attr("x", w - 52)
	  .attr("y", function(d, i){ return i * 20 + 9;})
	  .attr("font-size", "11px")
	  .attr("fill", "#737373")
	  .text(function(d) { return d; })
	  ;	


////// Volunteer #2 - Post ////////
var svg4 = d3.select('#body4')
	.selectAll('svg')
	.append('svg')
	.attr("width", w+400)
	.attr("height", h);

//Create the title for the legend
var text4 = svg4.append("text")
	.attr("class", "title")
	.attr('transform', 'translate(90,0)') 
	.attr("x", w - 70)
	.attr("y", 10)
	.attr("font-size", "12px")
	.attr("fill", "#404040")
	.text("Social Matrix for individual over a period of time");
		
//Initiate Legend	
var legend4 = svg4.append("g")
	.attr("class", "legend")
	.attr("height", 100)
	.attr("width", 200)
	.attr('transform', 'translate(90,20)') 
	;
	//Create colour squares
	legend4.selectAll('rect')
	  .data(LegendOptions)
	  .enter()
	  .append("rect")
	  .attr("x", w - 65)
	  .attr("y", function(d, i){ return i * 20;})
	  .attr("width", 10)
	  .attr("height", 10)
	  .style("fill", function(d, i) { return blueColors[i]})
	  ;
	//Create text next to squares
	legend4.selectAll('text')
	  .data(LegendOptions)
	  .enter()
	  .append("text")
	  .attr("x", w - 52)
	  .attr("y", function(d, i){ return i * 20 + 9;})
	  .attr("font-size", "11px")
	  .attr("fill", "#737373")
	  .text(function(d) { return d; })
	  ;	




////////////////////////////////////////////
/////// Initiate legend  - Subject 3 ///////
////////////////////////////////////////////  

////// Volunteer #3 - Pre////////
var svg5 = d3.select('#body5')
  .selectAll('svg')
  .append('svg')
  .attr("width", w+400)
  .attr("height", h);

//Create the title for the legend
var text5 = svg5.append("text")
  .attr("class", "title")
  .attr('transform', 'translate(90,0)') 
  .attr("x", w - 70)
  .attr("y", 10)
  .attr("font-size", "12px")
  .attr("fill", "#404040")
  .text("Social Matrix for individual over a period of time");
    
//Initiate Legend 
var legend5 = svg5.append("g")
  .attr("class", "legend")
  .attr("height", 100)
  .attr("width", 200)
  .attr('transform', 'translate(90,20)') 
  ;
  //Create colour squares
  legend5.selectAll('rect')
    .data(LegendOptions)
    .enter()
    .append("rect")
    .attr("x", w - 65)
    .attr("y", function(d, i){ return i * 20;})
    .attr("width", 10)
    .attr("height", 10)
    .style("fill", function(d, i) { return orangeColors[i]})
    ;
  //Create text next to squares
  legend5.selectAll('text')
    .data(LegendOptions)
    .enter()
    .append("text")
    .attr("x", w - 52)
    .attr("y", function(d, i){ return i * 20 + 9;})
    .attr("font-size", "11px")
    .attr("fill", "#737373")
    .text(function(d) { return d; })
    ; 


////// Volunteer #3 - Post ////////
var svg6 = d3.select('#body6')
  .selectAll('svg')
  .append('svg')
  .attr("width", w+400)
  .attr("height", h);

//Create the title for the legend
var text6 = svg6.append("text")
  .attr("class", "title")
  .attr('transform', 'translate(90,0)') 
  .attr("x", w - 70)
  .attr("y", 10)
  .attr("font-size", "12px")
  .attr("fill", "#404040")
  .text("Social Matrix for individual over a period of time");
    
//Initiate Legend 
var legend6 = svg6.append("g")
  .attr("class", "legend")
  .attr("height", 100)
  .attr("width", 200)
  .attr('transform', 'translate(90,20)') 
  ;
  //Create colour squares
  legend6.selectAll('rect')
    .data(LegendOptions)
    .enter()
    .append("rect")
    .attr("x", w - 65)
    .attr("y", function(d, i){ return i * 20;})
    .attr("width", 10)
    .attr("height", 10)
    .style("fill", function(d, i) { return blueColors[i]})
    ;
  //Create text next to squares
  legend6.selectAll('text')
    .data(LegendOptions)
    .enter()
    .append("text")
    .attr("x", w - 52)
    .attr("y", function(d, i){ return i * 20 + 9;})
    .attr("font-size", "11px")
    .attr("fill", "#737373")
    .text(function(d) { return d; })
    ; 


////////////////////////////////////////////
/////// Initiate legend  - Subject 4 ///////
////////////////////////////////////////////	

////// Volunteer #4 - Pre////////
var svg7 = d3.select('#body7')
	.selectAll('svg')
	.append('svg')
	.attr("width", w+400)
	.attr("height", h);

//Create the title for the legend
var text7 = svg7.append("text")
	.attr("class", "title")
	.attr('transform', 'translate(90,0)') 
	.attr("x", w - 70)
	.attr("y", 10)
	.attr("font-size", "12px")
	.attr("fill", "#404040")
	.text("Social Matrix for individual over a period of time");
		
//Initiate Legend	
var legend7 = svg7.append("g")
	.attr("class", "legend")
	.attr("height", 100)
	.attr("width", 200)
	.attr('transform', 'translate(90,20)') 
	;
	//Create colour squares
	legend7.selectAll('rect')
	  .data(LegendOptions)
	  .enter()
	  .append("rect")
	  .attr("x", w - 65)
	  .attr("y", function(d, i){ return i * 20;})
	  .attr("width", 10)
	  .attr("height", 10)
	  .style("fill", function(d, i) { return orangeColors[i]})
	  ;
	//Create text next to squares
	legend7.selectAll('text')
	  .data(LegendOptions)
	  .enter()
	  .append("text")
	  .attr("x", w - 52)
	  .attr("y", function(d, i){ return i * 20 + 9;})
	  .attr("font-size", "11px")
	  .attr("fill", "#737373")
	  .text(function(d) { return d; })
	  ;	


////// Volunteer #4 - Post ////////
var svg8 = d3.select('#body8')
	.selectAll('svg')
	.append('svg')
	.attr("width", w+400)
	.attr("height", h);

//Create the title for the legend
var text8 = svg8.append("text")
	.attr("class", "title")
	.attr('transform', 'translate(90,0)') 
	.attr("x", w - 70)
	.attr("y", 10)
	.attr("font-size", "12px")
	.attr("fill", "#404040")
	.text("Social Matrix for individual over a period of time");
		
//Initiate Legend	
var legend8 = svg8.append("g")
	.attr("class", "legend")
	.attr("height", 100)
	.attr("width", 200)
	.attr('transform', 'translate(90,20)') 
	;
	//Create colour squares
	legend8.selectAll('rect')
	  .data(LegendOptions)
	  .enter()
	  .append("rect")
	  .attr("x", w - 65)
	  .attr("y", function(d, i){ return i * 20;})
	  .attr("width", 10)
	  .attr("height", 10)
	  .style("fill", function(d, i) { return blueColors[i]})
	  ;
	//Create text next to squares
	legend8.selectAll('text')
	  .data(LegendOptions)
	  .enter()
	  .append("text")
	  .attr("x", w - 52)
	  .attr("y", function(d, i){ return i * 20 + 9;})
	  .attr("font-size", "11px")
	  .attr("fill", "#737373")
	  .text(function(d) { return d; })
	  ;	


