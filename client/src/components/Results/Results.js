/*eslint no-unused-expressions: "error"*/
import React, { useState, useEffect } from 'react';
import { Box, Container, Divider, Typography} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
//import Radar from 'react-d3-radar';
import { getMatrix, createMatrix, updateMatrix, createFootnotes, getFootnotes, updateFootnotes } from '../../actions/posts';
//import GeneratedMatrix from './GeneratedMatrix';



//import data from './data/data.js';
import * as d3 from "d3";

//import * as d3 from '../../scripts/d3.v3.min.js'

/*require("amd-loader");
define([], function () {
    return ['data']; // Array of module names
});
*/
//import { RadarChart } from './RadarChart.js'
import * as data from '../../data/dataBlank.js'
//import * as AllRequire from './require.js'
//
//import * as d3 from "../../scripts/d3.v3.min.js";

//import * as d3 from '../../scripts/d3.v3.min.js';
//import * as AllMain from './scripts/main.js';
//import * as AllRequire from './scripts/require.js'
//import { RadarChart } from '../../scripts/RadarChartOld.js'

//import { draw } from '../../scripts/RadarChartOld.js'
//import FormPostContainer from './FormPostContainer';
//import useStyles from '../styles';

//import styles from '../style.css';

const Results = () => {
 const [data, setData] = useState(localStorage.getItem('matrixData'));
 var svgBody1;
 var svgBody2;
 //const [footnotes, setFootnotes] = useState(localStorage.getItem('footnotes'));
  useEffect(() => {
      var retrievedObject = localStorage.getItem('matrixData');
      console.log('retrievedObject: Results', JSON.parse(retrievedObject));


      var retrievedFootnotes = localStorage.getItem('footnotes');
      console.log('retrievedFootnotes', JSON.parse(retrievedFootnotes));


var w = 600,
    h = 600;

//Legend titles
var LegendOptions = ['P1','P2'];

//All Subject data
var d = matrixData;
console.log('matrixData', matrixData);
console.log('test d.slice(0, 2)', d.slice(0, 2));
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
      var c = [orangeDark, orangeLight];
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
      var c = [blueDark, blueLight];
      return c[i];
      //Should probably be return c[i%(c.length-1)]; to avoid errors
    }
}

//Call function to draw the Radar chart
//Will expect that data is in %'s

//Subject 1 - Pre
RadarChartDraw("#chart", d.slice(0, 2), mycfg);
//Subject 1 - Post
RadarChartDraw("#chart2", d.slice(2, 4), mycfgBlue);

        var svg1 = d3.select('#body')
            .append('svg')
            .attr("width", w+400)
            .attr("height", 0)
            .selectAll('svg');

        console.log('svg1', svg1);

        ////// Volunteer #1 - Post ////////
        var svg2 = d3.select('#body2')
            .append('svg')
            .attr("width", w+400)
            .attr("height", 0);


      //svgBody1 = d3.select('#body');
      //svgBody2 = d3.select('#body2');
      
  }, []);

    //console.log("SVGHBODY1 outside ", svgBody1);
  const [currentId, setCurrentId] = useState(0);
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });

/*  useEffect(() => {
    dispatch(getMatrix());
    dispatch(getFootnotes());
  }, [currentId, dispatch]);*/
  //const [matrixData, setMatrixData] = useState({ matrixData: [{}] });
  //const [footnotesData, setFootnotes] = useState({ footnotesData: [{}] });

  const [matrixData, setMatrixData] = useState(JSON.parse(localStorage.getItem('matrixData')));
  const [footnotesData, setFootnotes] = useState(localStorage.getItem('footnotes'));
  
  const matrix = useSelector((state) => (currentId ? state.matrixData.find((matrixData) => matrixData._id === currentId) : null));
  const footnotes = useSelector((state) => (currentId ? state.footnotes.find((footnotesData) => footnotes._id === currentId) : null));

  const dispatch = useDispatch();
  //const classes = useStyles();

    if (currentId === 0) {

      dispatch(createMatrix(matrixData));
      dispatch(createFootnotes(footnotesData));
      //clear();
    } else {
      dispatch(updateMatrix(currentId, matrixData));
      dispatch(updateFootnotes(currentId, footnotesData));
      //clear();
    }









console.log('mainOLD');

//var amd = require("./amd");

/*define([], function () {
    return ['data']; // Array of module names
});

 define(function(require, exports, module) {
        exports.data = ["data"];
    });*/





////////////////////////////////////////////
/////// Initiate - Subject 1 ///////
////////////////////////////////////////////   

////// Volunteer #1 - Pre////////

        










function RadarChartDraw(id, d, options) {
console.log('RADRAR CHAR NW being called with id of ', id);

    var cfg = {
         radius: 5,
         w: 600,
         h: 600,
         factor: 1,
         factorLegend: .85,
         levels: 3,
         maxValue: 0,
         radians: 2 * Math.PI,
         opacityArea: 0.5,
         ToRight: 5,
         TranslateX: 80,
         TranslateY: 30,
         ExtraWidthX: 100,
         ExtraWidthY: 100,
         color: d3.scale.category10(),
         wrapWidth: 80
    };
    
    if('undefined' !== typeof options){
      for(var i in options){
        if('undefined' !== typeof options[i]){
          cfg[i] = options[i];
        }
      }
    }
    cfg.maxValue = Math.max(cfg.maxValue, d3.max(d, function(i){return d3.max(i.map(function(o){return o.value;}))}));
    var allAxis = (d[0].map(function(i, j){return i.axis}));
    var total = allAxis.length;

    var radius = cfg.factor*Math.min(cfg.w/2, cfg.h/2);
    var Format = d3.format("");
    d3.select(id).select("svg").remove();
    
    var padding = {top: 30, right: 0, bottom: 0, left: 100};

    var g = d3.select(id)
            .append("svg")
            .attr("width", cfg.w+cfg.ExtraWidthX)
            .attr("height", cfg.h+cfg.ExtraWidthY)
            .append("g")
            .attr("transform", "translate(" + cfg.TranslateX + "," + cfg.TranslateY + ")");
            ;

    var tooltip;
    
    //Circular segments
    for(var j=0; j<cfg.levels-1; j++){
      var levelFactor = cfg.factor*radius*((j+1)/cfg.levels);
      g.selectAll(".levels")
       .data(allAxis)
       .enter()
       .append("svg:line")
       .attr("x1", function(d, i){return levelFactor*(1-cfg.factor*Math.sin(i*cfg.radians/total));})
       .attr("y1", function(d, i){return levelFactor*(1-cfg.factor*Math.cos(i*cfg.radians/total));})
       .attr("x2", function(d, i){return levelFactor*(1-cfg.factor*Math.sin((i+1)*cfg.radians/total));})
       .attr("y2", function(d, i){return levelFactor*(1-cfg.factor*Math.cos((i+1)*cfg.radians/total));})
       .attr("class", "line")
       .style("stroke", "grey")
       .style("stroke-opacity", "0.75")
       .style("stroke-width", "0.3px")
       .attr("transform", "translate(" + (cfg.w/2-levelFactor) + ", " + (cfg.h/2-levelFactor) + ")");
    }

    //Text indicating at what % each level is: 12:00
    for(var j=0; j<cfg.levels; j++){
      var levelFactor = cfg.factor*radius*((j+1)/cfg.levels);
      console.log('level factor', levelFactor);
      g.selectAll(".levels")
       .data([1]) //dummy data
       .enter()
       .append("svg:text")
       .attr("x", function(d){return levelFactor*(1-cfg.factor*Math.sin(0));})
       .attr("y", function(d){return levelFactor*(1-cfg.factor*Math.cos(0));})
       .attr("class", "legend")
       .style("font-family", "sans-serif")
       .style("font-size", "10px")
       //.attr("transform", "translate(255, 190)")
       .attr("transform", "translate(" + (cfg.w/2-levelFactor + cfg.ToRight) + ", " + (cfg.h/2-levelFactor) + ")")
       
       //.attr("transform", "translate(" + (cfg.w/2-levelFactor + cfg.ToRight) + ", " + (90) + ")")
       //.attr("transform", "translate(90,0)")
       .attr("fill", "#737373")
       .text(Format((j+1)*cfg.maxValue/cfg.levels));
    }

    //Text indicating at what % each level is: 3:00
    for(var j=0; j<cfg.levels; j++){
      var levelFactor = cfg.factor*radius*((j+1)/cfg.levels);
      g.selectAll(".levels")
       .data([1]) //dummy data
       .enter()
       .append("svg:text")
       .attr("x", function(d){return levelFactor*(1-cfg.factor*Math.sin(0));})
       .attr("y", function(d){return levelFactor*(1.01-cfg.factor*Math.cos(0));})
       .attr("class", "legend")
       .style("font-family", "sans-serif")
       .style("font-size", "10px")
       .attr("transform", "translate(300, 300)")
       .attr("fill", "#737373")
       .text(Format((j+1)*cfg.maxValue/cfg.levels));
    }


    //Text indicating at what % each level is: 6:00
    for(var j=0; j<cfg.levels; j++){
      var levelFactor = cfg.factor*radius*((j+1)/cfg.levels);
      //console.log("level facort 2", levelFactor);
      g.selectAll(".levels")
       .data([1]) //dummy data
       .enter()
       .append("svg:text")
       .attr("x", function(d){return levelFactor*(0.9-cfg.factor*Math.sin(90));})
       .attr("y", function(d){return levelFactor*(0.95-cfg.factor*Math.cos(165));})
       .attr("class", "legend")
       .style("font-family", "sans-serif")
       .style("font-size", "10px")
       .attr("transform", "translate(300, 300)")
       .attr("fill", "#737373")
       .text(Format((j+1)*cfg.maxValue/cfg.levels));
    }

    //Text indicating at what % each level is: 9:00
    for(var j=0; j<cfg.levels; j++){
      var levelFactor = cfg.factor*radius*((j+1)/cfg.levels);
      g.selectAll(".levels")
       .data([1]) //dummy data
       .enter()
       .append("svg:text")
       .attr("x", function(d){return levelFactor*(-0.15-cfg.factor*Math.sin(89));})
       .attr("y", function(d){return levelFactor*(-0.05-cfg.factor*Math.cos(165));})
       .attr("class", "legend")
       .style("font-family", "sans-serif")
       .style("font-size", "10px")
       .attr("transform", "translate(300, 300)")
       .attr("fill", "#737373")
       .text(Format((j+1)*cfg.maxValue/cfg.levels));
    }
    var series = 0;

    var axis = g.selectAll(".axis")
            .data(allAxis)
            .enter()
            .append("g")
            .attr("class", "axis");

    axis.append("line")
        .attr("x1", cfg.w/2)
        .attr("y1", cfg.h/2)
        .attr("x2", function(d, i){return cfg.w/2*(1-cfg.factor*Math.sin(i*cfg.radians/total));})
        .attr("y2", function(d, i){return cfg.h/2*(1-cfg.factor*Math.cos(i*cfg.radians/total));})
        .attr("class", "line")
        .style("stroke", "grey")
        .style("stroke-width", "1px");

    axis.append("text")
        .attr("class", "legend")
        .text(function(d){return d})
        .style("font-family", "sans-serif")
        .style("font-size", "11px")
        .attr("text-anchor", "middle")
        .attr("dy", "1.5em")
        .attr("transform", function(d, i){return "translate(0, -10)"})
        .attr("x", function(d, i){return cfg.w/2*(1-cfg.factorLegend*Math.sin(i*cfg.radians/total))-90*Math.sin(i*cfg.radians/total);})
        .attr("y", function(d, i){return cfg.h/2*(1-Math.cos(i*cfg.radians/total))-25*Math.cos(i*cfg.radians/total);})
        .call(wrap, cfg.wrapWidth);

    function wrap(text, width) {
      text.each(function() {
        var text = d3.select(this),
            words = text.text().split(/\s+/).reverse(),
            word,
            line = [],
            lineNumber = 0,
            lineHeight = 1.4, // ems
            y = text.attr("y"),
            x = text.attr("x"),
            dy = parseFloat(text.attr("dy")),
            tspan = text.text(null).append("tspan").attr("x", x).attr("y", y).attr("dy", dy + "em");
            
        while (word = words.pop()) {
          line.push(word);
          tspan.text(line.join(" "));
          if (tspan.node().getComputedTextLength() > width) {
            line.pop();
            tspan.text(line.join(" "));
            line = [word];
            tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
          }
        }
      });
    }//wrap

    d.forEach(function(y, x){
      var dataValues = [];
      g.selectAll(".nodes")
        .data(y, function(j, i){
          dataValues.push([
            cfg.w/2*(1-(parseFloat(Math.max(j.value, 0))/cfg.maxValue)*cfg.factor*Math.sin(i*cfg.radians/total)), 
            cfg.h/2*(1-(parseFloat(Math.max(j.value, 0))/cfg.maxValue)*cfg.factor*Math.cos(i*cfg.radians/total))
          ]);
        });
      dataValues.push(dataValues[0]);
      g.selectAll(".area")
                     .data([dataValues])
                     .enter()
                     .append("polygon")
                     .attr("class", "radar-chart-serie"+series)
                     .style("stroke-width", "2px")
                     .style("stroke", cfg.color(series))
                     .attr("points",function(d) {
                         var str="";
                         for(var pti=0;pti<d.length;pti++){
                             str=str+d[pti][0]+","+d[pti][1]+" ";
                         }
                         return str;
                      })
                     .style("fill", function(j, i){return cfg.color(series)})
                     .style("fill-opacity", cfg.opacityArea)
                     .on('mouseover', function (d){
                                        var z = "polygon."+d3.select(this).attr("class");
                                        g.selectAll("polygon")
                                         .transition(200)
                                         .style("fill-opacity", 0.1); 
                                        g.selectAll(z)
                                         .transition(200)
                                         .style("fill-opacity", .7);
                                      })
                     .on('mouseout', function(){
                                        g.selectAll("polygon")
                                         .transition(200)
                                         .style("fill-opacity", cfg.opacityArea);
                     });
      series++;
    });
    series=0;

    var dataValues = [];
    d.forEach(function(y, x){
      g.selectAll(".nodes")
        .data(y).enter()
        .append("svg:circle")
        .attr("class", "radar-chart-serie"+series)
        .attr('r', cfg.radius)
        .attr("alt", function(j){return Math.max(j.value, 0)})
        .attr("cx", function(j, i){
          dataValues.push([
            cfg.w/2*(1-(parseFloat(Math.max(j.value, 0))/cfg.maxValue)*cfg.factor*Math.sin(i*cfg.radians/total)), 
            cfg.h/2*(1-(parseFloat(Math.max(j.value, 0))/cfg.maxValue)*cfg.factor*Math.cos(i*cfg.radians/total))
        ]);
        return cfg.w/2*(1-(Math.max(j.value, 0)/cfg.maxValue)*cfg.factor*Math.sin(i*cfg.radians/total));
        })
        .attr("cy", function(j, i){
          return cfg.h/2*(1-(Math.max(j.value, 0)/cfg.maxValue)*cfg.factor*Math.cos(i*cfg.radians/total));
        })
        .attr("data-id", function(j){return j.axis})
        .style("fill", cfg.color(series)).style("fill-opacity", .9)
        .on('mouseover', function (d){
                    var newX =  parseFloat(d3.select(this).attr('cx')) - 10;
                    var newY =  parseFloat(d3.select(this).attr('cy')) - 5;
                    
                    tooltip
                        .attr('x', newX)
                        .attr('y', newY)
                        .text(Format(d.value))
                        .transition(200)
                        .style('opacity', 1);
                        
                    var z = "polygon."+d3.select(this).attr("class");
                    g.selectAll("polygon")
                        .transition(200)
                        .style("fill-opacity", 0.1); 
                    g.selectAll(z)
                        .transition(200)
                        .style("fill-opacity", .7);
                  })
        .on('mouseout', function(){
                    tooltip
                        .transition(200)
                        .style('opacity', 0);
                    g.selectAll("polygon")
                        .transition(200)
                        .style("fill-opacity", cfg.opacityArea);
                  })
        .append("svg:title")
        .text(function(j){return Math.max(j.value, 0)});

      series++;
    });
    //Tooltip
    tooltip = g.append('text')
               .style('opacity', 0)
               .style('font-family', 'sans-serif')
               .style('display', 'block')
               .style('font-size', '13px');
  
};







/*


var w = 500,
    h = 500;

var colorscale = d3.scaleOrdinal(d3.schemeCategory10);

//Legend titles
var LegendOptions = ['Smartphone','Tablet'];

//Data
var d = data;

//Options for the Radar chart, other than default
var mycfg = {
  w: w,
  h: h,
  maxValue: 0.6,
  levels: 6,
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
    .attr("width", w+300)
    .attr("height", h)

//Create the title for the legend
var text = svg.append("text")
    .attr("class", "title")
    .attr('transform', 'translate(90,0)') 
    .attr("x", w - 70)
    .attr("y", 10)
    .attr("font-size", "12px")
    .attr("fill", "#404040")
    .text("What % of owners use a specific service in a week");
        
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
      ; */






  return (
    <div className="container">
        <Typography variant="h2" align="center">Social Matrix Project - Results</Typography>

 
        
        
            
        <div>
          <h1>Your generated social matrix:</h1>
        
    
          <div id="body">
             <div className="matrix-header">Subject 1 - Earlier Matrix</div>
            <div id="chart" className="svg-align"></div>
          </div>
     
  
          <div id="body2">
            <div className="matrix-header">Subject 1 - Current Matrix</div>
            <div id="chart2" className="svg-align"></div>
          </div>
          <div className="footnotes-bottom">
            <div className="footnotes-header">Footnotes:</div>
            1) <i>Educ. Level:</i> PhD Social-Clinical Psychology, 1979, US
            <br />
            2) <i>Guardians’ Educ:</i> Parent 1: Mo in college when I was born, BA when I was 13, MA when I was 15/ Parent 2: Fa got MD when I was 1
            <br />
            3) <i>Occupation(s):</i> Professor, Clinical Psychologist; More highly privileged in country than community
            <br /> 
            4) <i>Guardians’ Occupation:</i> Mother homemaker till I was 7-8, then student, then master's level psychologist/ Father psychiatrist
            <br />
            7) <i>Guardian’s Childhood House. Income:</i> Mo. w/ more wealth in her father's home till age 12, then no contact/ Father's family working poor, then upper-middle- income
            <br /> 
            8) <i>Access:</i>  Very high access to info, influence (as professor), good access to $ resources 
            <br />
            9) <i>Guardians’ Access:</i>  Mother not Internet savvy, but good access to $, info Father very internet-savvy, influential, high access to resources
            <br />
            10) <i>Race(s):</i>  White; European Jews not fully white in my childhood, esp. in south. &gt; privilege now, but also &gt;antisemitism. I raised multiracial children.
            <br />
            11) <i>Ethnicity / Tribe:</i>  Jewish (Ashkenazi &amp; Sephardi)
            <br /> 
            12) <i>Person's Nation of Origin:</i>  US
            <br />
            13) <i>Citizenship Status. Income:</i>  US; B. US
            <br /> 
            15) <i>Language(s) Spoken:</i>  English; Spanish, French, a little Hebrew and Yiddish
            <br />
            16) <i>Family Religion:</i> Judaism (reform); More acceptance of non-Christian religions, except by the radical right
            <br /> 
            17) <i>Chosen Religion:</i> Judaism (reform); Less antisemitism, more religious inclusion (except for radical right)
            <br />
            18) <i>Politics:</i> progressive/socialist; Somewhat marginalized, less so in my community
            <br /> 
            19) <i>Geo. Region:</i> Grew up in NY, now in MA 
            <br />
            20) <i>Impact of Historical Times:</i> I grew up during a more antisemitic time, post-WWII. I've gained privilege b/c my interracial, multi-faith family is less marginalized now. Feminism is more accepted. Importance of medical advances
            <br />
            21) <i>Relation to Military:</i> Father drafted into Navy as a lieutenant (doctor) when I was 3-5; Father was in US Navy
            <br />
            22) <i>Relation to Legal System:</i> had a close family member involved in legal system as a defendant
            <br /> 
            23) <i>Relation to MH System:</i> Currently or previously in short-term outtpatient psychiatric treatment or psychotherapy
            <br />
            24) <i>MH/Subst. Abuse:</i> Family issues, death of son with Mental Illness, close relative of someone with SA
            <br /> 
            25) <i>Cognitive Ability/Style:</i> Very intelligent, 2 TBIs left minor difficulties w/ executive functioning
            <br />
            26) <i>Health/Ability:</i> chronic asthma, GERD, controlled hypertension, arthritis, allergies ?&gt; life-threatening heart condition @68
            <br /> 
            27) <i>Appearance:</i> Attractive, gray hair, short
            <br />
            28) <i>Age:</i> 68 (b. 1952)
            <br /> 
            29) <i>Raised By:</i> Raised by Mo &amp; Fa; Parent 1: Straight, Parent 2: Straight; Parent 1: cis-gender woman/Parent 2: cis-gender man; Mother 19, Father 22; No; No
            <br />
            30) <i>Guardians’ Marital Status:</i> Birth parents married till I was 25; N/A
            <br />
            31) <i>Parental Status:</i> Adoptive parent of child w/ serious mental illness who died, stepparent of multiracial grown children; Gained stepchildren at age 29; adoptive mother at 34, child died when I was 53; Adoptive child had mental illness, died at 19; stepchildren are multiracial
            <br />
            32) <i>Marital Status:</i> in 2nd marriage; LT @ 18, m. at 21, Div. @ 26; LT @ 29, m. @ 30; Opposite sex
            <br /> 
            33) <i>Sexual Orientation:</i> Straight
            <br />
            34) <i>Gender ID:</i> Cis-gender woman
            <br /> 
            35) <i>Gender Expression:</i> Feminine-looking woman
            <br />
            36) <i>Sex Assigned at Birth:</i> Female
            <br /> 
            37) <i>Unique History:</i> Son?s death; in multiracial, multifaith family, grew up with very sick brother, family Hx of refugee experience, rare, life-threatening illness
          </div>
        </div>

    


        <Box>{data}</Box>

        <Box component="div" style={{ marginTop: '30px' }}>{footnotesData}</Box>

        <Box style={{ marginTop: '30px', marginBottom: '30px' }}>PRE/EARLIER</Box>

        
        <Box style={{ marginTop: '30px', marginBottom: '30px' }}>POST/LATER</Box>


    </div>


  );
}

export default Results;