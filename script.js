var w = 800,
	h = 500;

var colorscale = d3.scale.category10();

//Legend titles
var LegendOptions = ['Before','After'];

//Data
var d = [
		  [
			{axis:"",value:0.59},
			{axis:"Parents'/ Guardians' Years of Education",value:0.56},
			{axis:"Occupation(s)",value:0.42},
			{axis:"Parents'/ Guardians' Occupation(s)",value:0.34},
			{axis:"Household Income",value:0.48},
			{axis:"Household Income as Child",value:0.14},
			{axis:"Parents'/ Guardians' Household Income as Children",value:0.11},
			{axis:"Access to Resources, Information, & Influence",value:0.05},
			{axis:"Parents'/ Guardians' Access to Resources, Information, & Influence",value:0.07},
			
			{axis:"Race(s)",value:0.12},
			{axis:"Ethnicity / Ethnicities",value:0.27},
			{axis:"Im/Migration / Citizenship Status in Country of Residence",value:0.03},
			{axis:"Family Im/Migration History # of Generations in Country",value:0.12},
			{axis:"Language(s) Spoken",value:0.4},
			{axis:"Family's Religion / Philosophy",value:0.03},
			{axis:"Chosen Religion / Philosophy",value:0.22},
			{axis:"Politics",value:0.03},
			{axis:"Geographical Region",value:0.03},
			{axis:"Degree Affected by Historical Period",value:0.07},

			{axis:"Relationship to Legal System",value:0.48},
			{axis:"Cognitive Ability / Learning Style",value:0.41},
			{axis:"Mental Health / Illness & Substance Abuse",value:0.27},
			{axis:"Physical Health / Illness & Disability",value:0.28},
			{axis:"Physical Appearance",value:0.46},
			{axis:"Age",value:0.29},

			{axis:"Unique individual / Family History",value:0.48},
			{axis:"Raised by Whom",value:0.41},
			{axis:"Parent's / Guardians' Marital Status While Raising You",value:0.27},
			{axis:"Parental Status",value:0.28},
			{axis:"Marital Status",value:0.46},
			{axis:"Sexual Orientation",value:0.29},
			{axis:"Gender Identity",value:0.29},
			{axis:"Sex",value:0.29},

		  ],[
			{axis:"Years of Education",value:0.78},
			{axis:"Parents'/ Guardians' Years of Education",value:0.56},
			{axis:"Occupation(s)",value:0.42},
			{axis:"Parents'/ Guardians' Occupation(s)",value:0.34},
			{axis:"Household Income",value:0.48},
			{axis:"Household Income as Child",value:0.14},
			{axis:"Parents'/ Guardians' Household Income as Children",value:0.11},
			{axis:"Access to Resources, Information, & Influence",value:0.05},
			{axis:"Parents'/ Guardians' Access to Resources, Information, & Influence",value:0.07},
			
			{axis:"Race(s)",value:0.12},
			{axis:"Ethnicity / Ethnicities",value:0.27},
			{axis:"Im/Migration / Citizenship Status in Country of Residence",value:0.03},
			{axis:"Family Im/Migration History # of Generations in Country",value:0.12},
			{axis:"Language(s) Spoken",value:0.4},
			{axis:"Family's Religion / Philosophy",value:0.03},
			{axis:"Chosen Religion / Philosophy",value:0.22},
			{axis:"Politics",value:0.03},
			{axis:"Geographical Region",value:0.03},
			{axis:"Degree Affected by Historical Period",value:0.07},

			{axis:"Relationship to Legal System",value:0.48},
			{axis:"Cognitive Ability / Learning Style",value:0.41},
			{axis:"Mental Health / Illness & Substance Abuse",value:0.27},
			{axis:"Physical Health / Illness & Disability",value:0.28},
			{axis:"Physical Appearance",value:0.46},
			{axis:"Age",value:0.29},

			{axis:"Unique individual / Family History",value:0.48},
			{axis:"Raised by Whom",value:0.41},
			{axis:"Parent's / Guardians' Marital Status While Raising You",value:0.27},
			{axis:"Parental Status",value:0.28},
			{axis:"Marital Status",value:0.46},
			{axis:"Sexual Orientation",value:0.29},
			{axis:"Gender Identity",value:0.29},
			{axis:"Sex",value:0.29},
		  ]
		];

//Options for the Radar chart, other than default
var mycfg = {
  w: w,
  h: h,
  maxValue: 0.6,
  levels: 7,
  ExtraWidthX: 300
}

//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#chart", d, mycfg);

////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////

var svg = d3.select('#body')
	.selectAll('svg')
	.append('svg')
	.attr("width", w+400)
	.attr("height", h);

//Create the title for the legend
var text = svg.append("text")
	.attr("class", "title")
	.attr('transform', 'translate(90,0)') 
	.attr("x", w - 70)
	.attr("y", 10)
	.attr("font-size", "12px")
	.attr("fill", "#404040")
	.text("Social Matrix for individual over a period of time");
		
//Initiate Legend	
var legend = svg.append("g")
	.attr("class", "legend")
	.attr("height", 100)
	.attr("width", 200)
	.attr('transform', 'translate(90,20)') 
	;
	//Create colour squares
	legend.selectAll('rect')
	  .data(LegendOptions)
	  .enter()
	  .append("rect")
	  .attr("x", w - 65)
	  .attr("y", function(d, i){ return i * 20;})
	  .attr("width", 10)
	  .attr("height", 10)
	  .style("fill", function(d, i){ return colorscale(i);})
	  ;
	//Create text next to squares
	legend.selectAll('text')
	  .data(LegendOptions)
	  .enter()
	  .append("text")
	  .attr("x", w - 52)
	  .attr("y", function(d, i){ return i * 20 + 9;})
	  .attr("font-size", "11px")
	  .attr("fill", "#737373")
	  .text(function(d) { return d; })
	  ;	