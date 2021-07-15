/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { 
    Box, 
    Container, 
    Divider, 
    Typography,
    AppBar,
    Toolbar,
    IconButton,
    Button
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import Radar from 'react-d3-radar';
import * as d3 from "d3";

import { data } from '../data/data.js';
import { questionData } from './Form/QuestionData.js';
import NavBar from './NavBar.js';
//import * as d3 from "d3";
//import * as AllMain from './scripts/main.js';
//import * as AllRequire from './scripts/require.js'
//import { RadarChart } from './scripts/RadarChart.js'

//import FormPostContainer from './FormPostContainer';
import useStyles from '../styles';

import styles from '../style.css';

const Home = () => {
    let tempData = data;
    console.log('temp data', tempData);
    localStorage.setItem('tempData', JSON.stringify(tempData));


    var svgBody1;
    var svgBody2;
    var svgBody3;
    var svgBody4;
    var svgBody5;
    var svgBody6;
    var svgBody7;
    var svgBody8;

    const classes = useStyles();


    useEffect(() => {
/*        var retrievedObject = localStorage.getItem('matrixData');
        console.log('retrievedObject: Results', JSON.parse(retrievedObject));


        var retrievedFootnotes = localStorage.getItem('footnotes');
        console.log('retrievedFootnotes', JSON.parse(retrievedFootnotes));
*/

        var w = 600,
            h = 600;

        //Legend titles
        var LegendOptions = ['P1','P2'];


        //All Subject data
/*        var combinedData = matrixData;
        //combinedData = matrixData + footnotesData;
        var footnotesParsed = JSON.parse(footnotesData);

        for (let i = 0; i < combinedData.length; i++) {
            for (let j = 0; j < 34; j++) {

                footnotesParsed.forEach(function (arrayItem) {
                    if(Object.keys(arrayItem).find(key => arrayItem[parseInt(key)].question === combinedData[i][j].axis)){
                        combinedData[i][j].footnote = arrayItem[parseInt(j)].value;
                    }

                });

            }

        }*/

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

        //Subject 2 - Pre
        RadarChartDraw("#chart3", d.slice(4, 6), mycfg);
        //Subject 2 - Post
        RadarChartDraw("#chart4", d.slice(6, 8), mycfgBlue);

        //Subject 3 - Pre
        RadarChartDraw("#chart5", d.slice(8, 10), mycfg);
        //Subject 3 - Post
        RadarChartDraw("#chart6", d.slice(10, 12), mycfgBlue);

        //Subject 4 - Pre
        RadarChartDraw("#chart7", d.slice(12, 14), mycfg);
        //Subject 4 - Post
        RadarChartDraw("#chart8", d.slice(14, 16), mycfgBlue);


        ////// Volunteer #1 - Pre ////////
        var svg1 = d3.select('#body')
            .append('svg')
            .attr("width", w+400)
            .attr("height", 0)
            .selectAll('svg');

        ////// Volunteer #1 - Post ////////
        var svg2 = d3.select('#body2')
            .append('svg')
            .attr("width", w+400)
            .attr("height", 0);

        ////// Volunteer #2 - Pre ////////
        var svg3 = d3.select('#body3')
            .append('svg')
            .attr("width", w+400)
            .attr("height", 0)
            .selectAll('svg');

        ////// Volunteer #2 - Post ////////
        var svg4 = d3.select('#body4')
            .append('svg')
            .attr("width", w+400)
            .attr("height", 0);

        ////// Volunteer #3 - Pre ////////
        var svg5 = d3.select('#body5')
            .append('svg')
            .attr("width", w+400)
            .attr("height", 0)
            .selectAll('svg');

        ////// Volunteer #3 - Post ////////
        var svg6 = d3.select('#body6')
            .append('svg')
            .attr("width", w+400)
            .attr("height", 0);

        ////// Volunteer #4 - Pre ////////
        var svg7 = d3.select('#body7')
            .append('svg')
            .attr("width", w+400)
            .attr("height", 0)
            .selectAll('svg');

        ////// Volunteer #4 - Post ////////
        var svg8 = d3.select('#body8')
            .append('svg')
            .attr("width", w+400)
            .attr("height", 0);
    }, []);


    function RadarChartDraw(id, d, options) {
        var cfg = {
             radius: 5,
             w: 800,
             h: 600,
             factor: 1,
             factorLegend: .85,
             levels: 3,
             maxValue: 0,
             radians: 2 * Math.PI,
             opacityArea: 0.5,
             ToRight: 5,
             TranslateX: 100,
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
        
        var padding = {top: 50, right: 0, bottom: 0, left: 100};
        var margin = {top: 50, right: 0, bottom: 0, left: 100};

        var g = d3.select(id)
                .append("svg")
                .attr("width", cfg.w+cfg.ExtraWidthX)
                .attr("height", cfg.h+cfg.ExtraWidthY)
                .attr("transform", "translate(" + padding.left + ")")
                .attr("transform", "translate(" + padding.top + ")")
                .attr("transform", "translate(" + margin.left + ")")
                .attr("transform", "translate(" + margin.top + ")")
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

        //tooltip wrap function:
        function tooltipWrap(text, width) {
          text.each(function() {
            var text = d3.select(this),
              words = text.text().split(/\s+/).reverse(),
              word,
              line = [],
              lineNumber = 0,
              lineHeight = 1.1, // ems
              y = text.attr("y"),
              x = text.attr("x"),
              tspan = text.text(null).append("tspan").attr("x", x).attr("y", y);
            
            while (word = words.pop()) {
              line.push(word);
              tspan.text(line.join(" "));
              if (tspan.node().getComputedTextLength() > width) {
                line.pop();
                tspan.text(line.join(" "));
                line = [word];
                tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", ++lineNumber * lineHeight + "em").text(word);
              }
            }
          });
        }


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
                        //var newX =  parseFloat(d3.select(this).attr('cx')) - 10;
                        //var newY =  parseFloat(d3.select(this).attr('cy')) - 5;
                        //this.parentNode.appendChild(this);
                        var newX =  0;
                        var newY =  0;

                        tooltip
                            .attr('x', newX-100)
                            .attr('y', newY-20)
                            .attr('class', 'tooltip') 
                            .text(d.footnote)
                            .transition(100)
                            .style('fill', 'blue')
                            .style('opacity', 1)
                            .style('marginLeft', -100)
                            .call(tooltipWrap, 200);

                            
                        var z = "polygon."+d3.select(this).attr("class");

                        var div = d3.select("body")
                            .append("div")  // declare the tooltip div 
                            .attr("class", "tooltip")              // apply the 'tooltip' class
                            .style("opacity", 0);   


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
            .text(function(j){return Math.max(j.value, 0)});

          series++;
        });
        //Tooltip
        tooltip = g.append('text')
                   .style('opacity', 0)
                   .style('font-family', 'sans-serif')
                   .style('font-size', '13px')
                   .style('marginLeft', '-100px')
                   .attr("transform", "translate(0, 0)");

    };

    return (
        <div className="container">

            <NavBar />

            <Typography variant="h2" style={{ marginBottom: '20px', paddingTop: '50px' }} align="center">Social Matrix Project</Typography>

            <Typography variant="h6" align="center" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
                Everyone has some areas of identity or social membership that provide them with privilege or
                power, but they also have other aspects of identity in which they have little to no privilege or
                power. Those are their areas of marginalization.
            </Typography>

            <Typography variant="h6" align="center" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
                We all have areas of privilege we don’t even notice. Those areas of privilege can lead to blind
                spots and those blind spots can lead us to act in unintentionally biased or discriminatory ways
                that can be hurtful to others. At the same time, we may be vulnerable because of our
                marginalized areas – the areas where we have least power or privilege.
            </Typography>

            <Typography variant="h6" align="center" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
                The way these areas of privilege and marginalization relate to each other involves 
                INTERSECTIONALITY, the way in which different aspects of identity combine to create an 
                overall experience of relative privilege or relative marginalization.
            </Typography>

            <Typography variant="h6" align="center" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
                The Social Matrix Diagram includes many different <Link to="/identity" style={{ fontSize: '22px' }}>Areas of Identity</Link>, like educational level, income level, race, ethnicity, religion, sexual orientation, etc. Each aspect of 
                identity falls along a line (or axis) going from the most highly privileged “1” at the center 
                 the diagram to the most marginalized “7” at the outermost circle. 
            </Typography>


            <Typography variant="h6" align="center" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
                The more total area is filled in with color on the diagram, the more marginalized you are, 
                overall. The less total area that is colored in, the more privileged you are. However, 
                even one or two areas of great marginalization can have an impact on the total experience 
                of marginalization. For instance, someone who once had great privilege may lose that 
                privilege in many areas of identity because of immigration or a sudden major disability. 
                Similarly, a Black, heterosexual, cisgender man who is in good health and employed in a 
                prestigious job risks losing all that privilege in a traffic stop in which his life and 
                freedom are endangered.
            </Typography>


            <Typography variant="h6" align="center" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
                You can see several examples of Social Matrix Diagrams here:
            </Typography>

              <div id="body">
                 <div className="matrix-header" style={{ marginLeft: '-10px' }}>Subject 1 - Earlier Matrix:</div>
                <div id="chart" className="svg-align" style={{ marginLeft: '-15px' }}></div>
              </div>
         
      
              <div id="body2">
                <div className="matrix-header" style={{ marginLeft: '-10px' }}>Subject 1 - Current Matrix:</div>
                <div id="chart2" className="svg-align" style={{ marginLeft: '-15px' }}></div>
              </div>

            <Container className="footnotes-bottom">
                  <Typography variant="h5" align="left">Footnotes:</Typography>
                    <Typography variant="h6" align="left">1) <i>Educ. Level:</i> PhD Social-Clinical Psychology, 1979, US
                    </Typography>
                    <Typography variant="h6" align="left">2) <i>Guardians’ Educ:</i> Parent 1: Mo in college when I was born, BA when I was 13, MA when I was 15/ Parent 2: Fa got MD when I was 1
                    </Typography>
                    <Typography variant="h6" align="left">3) <i>Occupation(s):</i> Professor, Clinical Psychologist; More highly privileged in country than community
                    </Typography>
                    <Typography variant="h6" align="left">4) <i>Guardians’ Occupation:</i> Mother homemaker till I was 7-8, then student, then master's level psychologist/ Father psychiatrist
                    </Typography>
                    <Typography variant="h6" align="left">7) <i>Guardian’s Childhood House. Income:</i> Mo. w/ more wealth in her father's home till age 12, then no contact/ Father's family working poor, then upper-middle- income
                    </Typography>
                    <Typography variant="h6" align="left">8) <i>Access:</i>  Very high access to info, influence (as professor), good access to $ resources 
                    </Typography>
                    <Typography variant="h6" align="left">9) <i>Guardians’ Access:</i>  Mother not Internet savvy, but good access to $, info Father very internet-savvy, influential, high access to resources
                    </Typography>
                    <Typography variant="h6" align="left">10) <i>Race(s):</i>  White; European Jews not fully white in my childhood, esp. in south. > privilege now, but also >antisemitism. I raised multiracial children.
                    </Typography>
                    <Typography variant="h6" align="left">11) <i>Ethnicity / Tribe:</i>  Jewish (Ashkenazi & Sephardi)
                    </Typography>
                    <Typography variant="h6" align="left">12) <i>Person's Nation of Origin:</i>  US
                    </Typography>
                    <Typography variant="h6" align="left">13) <i>Citizenship Status. Income:</i>  US; B. US
                    </Typography>
                    <Typography variant="h6" align="left">15) <i>Language(s) Spoken:</i>  English; Spanish, French, a little Hebrew and Yiddish
                    </Typography>
                    <Typography variant="h6" align="left">16) <i>Family Religion:</i> Judaism (reform); More acceptance of non-Christian religions, except by the radical right
                    </Typography>
                    <Typography variant="h6" align="left">17) <i>Chosen Religion:</i> Judaism (reform); Less antisemitism, more religious inclusion (except for radical right)
                    </Typography>
                    <Typography variant="h6" align="left">18) <i>Politics:</i> progressive/socialist; Somewhat marginalized, less so in my community
                    </Typography>
                    <Typography variant="h6" align="left">19) <i>Geo. Region:</i> Grew up in NY, now in MA 
                    </Typography>
                    <Typography variant="h6" align="left">20) <i>Impact of Historical Times:</i> I grew up during a more antisemitic time, post-WWII. I've gained privilege b/c my interracial, multi-faith family is less marginalized now. Feminism is more accepted. Importance of medical advances
                    </Typography>
                    <Typography variant="h6" align="left">21) <i>Relation to Military:</i> Father drafted into Navy as a lieutenant (doctor) when I was 3-5; Father was in US Navy
                    </Typography>
                    <Typography variant="h6" align="left">22) <i>Relation to Legal System:</i> had a close family member involved in legal system as a defendant
                    </Typography>
                    <Typography variant="h6" align="left">23) <i>Relation to MH System:</i> Currently or previously in short-term outtpatient psychiatric treatment or psychotherapy
                    </Typography>
                    <Typography variant="h6" align="left">24) <i>MH/Subst. Abuse:</i> Family issues, death of son with Mental Illness, close relative of someone with SA
                    </Typography>
                    <Typography variant="h6" align="left">25) <i>Cognitive Ability/Style:</i> Very intelligent, 2 TBIs left minor difficulties w/ executive functioning
                    </Typography>
                    <Typography variant="h6" align="left">26) <i>Health/Ability:</i> chronic asthma, GERD, controlled hypertension, arthritis, allergies ?> life-threatening heart condition @68
                    </Typography>
                    <Typography variant="h6" align="left">27) <i>Appearance:</i> Attractive, gray hair, short
                    </Typography>
                    <Typography variant="h6" align="left">28) <i>Age:</i> 68 (b. 1952)
                    </Typography>
                    <Typography variant="h6" align="left">29) <i>Raised By:</i> Raised by Mo & Fa; Parent 1: Straight, Parent 2: Straight; Parent 1: cis-gender woman/Parent 2: cis-gender man; Mother 19, Father 22; No; No
                    </Typography>
                    <Typography variant="h6" align="left">30) <i>Guardians’ Marital Status:</i> Birth parents married till I was 25; N/A
                    </Typography>
                    <Typography variant="h6" align="left">31) <i>Parental Status:</i> Adoptive parent of child w/ serious mental illness who died, stepparent of multiracial grown children; Gained stepchildren at age 29; adoptive mother at 34, child died when I was 53; Adoptive child had mental illness, died at 19; stepchildren are multiracial
                    </Typography>
                    <Typography variant="h6" align="left">32) <i>Marital Status:</i> in 2nd marriage; LT @ 18, m. at 21, Div. @ 26; LT @ 29, m. @ 30; Opposite sex
                    </Typography>
                    <Typography variant="h6" align="left">33) <i>Sexual Orientation:</i> Straight
                    </Typography>
                    <Typography variant="h6" align="left">34) <i>Gender ID:</i> Cis-gender woman
                    </Typography>
                    <Typography variant="h6" align="left">35) <i>Gender Expression:</i> Feminine-looking woman
                    </Typography>
                    <Typography variant="h6" align="left">36) <i>Sex Assigned at Birth:</i> Female
                    </Typography>
                    <Typography variant="h6" align="left">37) <i>Unique History:</i> Son?s death; in multiracial, multifaith family, grew up with very sick brother, family Hx of refugee experience, rare, life-threatening illness
                    </Typography>
            </Container>


            <div id="body3">
                 <div className="matrix-header" style={{ marginLeft: '-10px' }}>Subject 2 - Earlier Matrix:</div>
                <div id="chart3" className="svg-align" style={{ marginLeft: '-15px' }}></div>
              </div>
         
      
              <div id="body4">
                <div className="matrix-header" style={{ marginLeft: '-10px' }}>Subject 2 - Current Matrix:</div>
                <div id="chart4" className="svg-align" style={{ marginLeft: '-15px' }}></div>
              </div>

             
            <Container className="footnotes-bottom">
                  <Typography variant="h5" align="left">Footnotes:</Typography>
                    <Typography variant="h6" align="left">
                    1) <i>Educ. Level:</i> Masters, Clinical Psych, 2019
                    </Typography>
                    <Typography variant="h6" align="left">
                    2) <i>Guardians’ Educ:</i> Par 1: Doctor of Medicine in Dentistry 1989, US DMD certificate when I was 8-10 after immigration / Par 2: Doctor of Pharmacy when I was 14 b/c pharmacy tech degree w/ less status in US than in Botswana
                    </Typography>
                    <Typography variant="h6" align="left">
                    3) <i>Occupation(s):</i> Grad Student; No changes in occupation
                    </Typography>
                    <Typography variant="h6" align="left"> 
                    4) <i>Guardians’ Occupation:</i> Parent 1: Rating of 1 for DMD, rating of 6 after having to return to school/ Parent 2: Pharm D=1,pharmacy tech, student=6
                    </Typography>
                    <Typography variant="h6" align="left">
                    7) <i>Guardian’s Childhood House. Income:</i> No changes in Parent's childhood household income
                    </Typography>
                    <Typography variant="h6" align="left"> 
                    8) <i>Access:</i>  Resources and information, but not influence, are pretty accessible, as a black woman
                    </Typography>
                    <Typography variant="h6" align="left">
                    9) <i>Guardians’ Access:</i>  access to influence lower than access to information and resources
                    </Typography>
                    <Typography variant="h6" align="left">
                    10) <i>Race(s):</i>  Black; Most marginalized
                    </Typography>
                    <Typography variant="h6" align="left">
                    11) <i>Ethnicity / Tribe:</i>  Digo (tribe), Kimvita (clan), Kenyan (Mijikenda - 9-tribe subgroup) (consider putting clan, subgroup into additional axis, w/explanation)
                    </Typography>
                    <Typography variant="h6" align="left"> 
                    12) <i>Person's Nation of Origin:</i>  N/A-Skip logic
                    </Typography>
                    <Typography variant="h6" align="left">
                    13) <i>Citizenship Status. Income:</i>  United States, Kenya; Naturalized citizen
                    </Typography>
                    <Typography variant="h6" align="left"> 
                    15) <i>Language(s) Spoken:</i>  English and Swahili; No additional language
                    </Typography>
                    <Typography variant="h6" align="left">
                    16) <i>Family Religion:</i> Muslim and Christian; Mo b. Christian, became Muslim; Fa Muslim
                    </Typography>
                    <Typography variant="h6" align="left"> 
                    17) <i>Chosen Religion:</i> Muslim; Islam most marginalized religion in US
                    </Typography>
                    <Typography variant="h6" align="left">
                    18) <i>Politics:</i> Progressive; More marginalized than privileged
                    </Typography>
                    <Typography variant="h6" align="left"> 
                    19) <i>Geo. Region:</i> Not war torn, but not peaceful
                    </Typography>
                    <Typography variant="h6" align="left">
                    20) <i>Impact of Historical Times:</i> Islam more marginalized since 9/11
                    </Typography>
                    <Typography variant="h6" align="left">
                    21) <i>Relation to Military:</i> N/A- skip logic: No relationship to military; N/A- skip logic: No relationship to military
                    </Typography>
                    <Typography variant="h6" align="left">
                    22) <i>Relation to Legal System:</i> No contact with system
                    </Typography>
                    <Typography variant="h6" align="left"> 
                    23) <i>Relation to MH System:</i> No relationship with mental health system, except as a mental health professional
                    </Typography>
                    <Typography variant="h6" align="left">
                    24) <i>MH/Subst. Abuse:</i> Close relative of someone with significant substance abuse problem
                    </Typography>
                    <Typography variant="h6" align="left"> 
                    25) <i>Cognitive Ability/Style:</i> No special abilities or disabilities
                    </Typography>
                    <Typography variant="h6" align="left">
                    26) <i>Health/Ability:</i> No illnesses or abilities
                    </Typography>
                    <Typography variant="h6" align="left"> 
                    27) <i>Appearance:</i> N/A
                    </Typography>
                    <Typography variant="h6" align="left">
                    28) <i>Age:</i> 26
                    </Typography>
                    <Typography variant="h6" align="left"> 
                    29) <i>Raised By:</i> Raised by Mo & Fa; Heterosexual; Parent 1: cis-gender woman/Parent 2: cis-gender man; Par 1: 34/ Par 2:26; No, never lived apart from parents; No, never lived in boarding school
                    </Typography>
                    <Typography variant="h6" align="left">
                    30) <i>Guardians’ Marital Status:</i> Married to my other parent; No changes in marital status
                    </Typography>
                    <Typography variant="h6" align="left">
                    31) <i>Parental Status:</i> Not a parent, guardian, or other parenting figure; N/A-Skip logic; N/A-Skip logic
                    </Typography>
                    <Typography variant="h6" align="left">
                    32) <i>Marital Status:</i> Single; single at 26; opposite-sex
                    </Typography>
                    <Typography variant="h6" align="left"> 
                    33) <i>Sexual Orientation:</i> Straight
                    </Typography>
                    <Typography variant="h6" align="left">
                    34) <i>Gender ID:</i> cis-gender
                    </Typography>
                    <Typography variant="h6" align="left"> 
                    35) <i>Gender Expression:</i> Gender-normative
                    </Typography>
                    <Typography variant="h6" align="left">
                    36) <i>Sex Assigned at Birth:</i> Female
                    </Typography>
                    <Typography variant="h6" align="left"> 
                    37) <i>Unique History:</i> prominent chiefs and founder of village from family, some family in poverty
                    </Typography>      
            </Container>

            <div id="body5">
                 <div className="matrix-header" style={{ marginLeft: '-10px' }}>Subject 3 - Earlier Matrix:</div>
                <div id="chart5" className="svg-align" style={{ marginLeft: '-15px' }}></div>
              </div>
         
      
              <div id="body6">
                <div className="matrix-header" style={{ marginLeft: '-10px' }}>Subject 3 - Current Matrix:</div>
                <div id="chart6" className="svg-align" style={{ marginLeft: '-15px' }}></div>
              </div>

               <Container className="footnotes-bottom">
                  <Typography variant="h5" align="left">Footnotes:</Typography>
                    <Typography variant="h6" align="left">
                    1) <i>Educ. Level:</i> MA
                    </Typography>
                    <Typography variant="h6" align="left">
                    2) <i>Guardians’ Educ:</i> Father completed 6 grade and mother completed 10 grade
                    </Typography>
                    <Typography variant="h6" align="left">
                    3) <i>Occupation(s):</i> CNA, cashier then. Now researcher/student; Changed career approximately 6 years ago
                    </Typography>
                    <Typography variant="h6" align="left"> 
                    4) <i>Guardians’ Occupation:</i> mother CNA and father motorcycle mechanic
                    </Typography>
                    <Typography variant="h6" align="left">
                    7) <i>Guardian’s Childhood House. Income:</i> both low income
                    </Typography>
                    <Typography variant="h6" align="left"> 
                    8) <i>Access:</i>  mother has very limited access; father deceased
                    </Typography>
                    <Typography variant="h6" align="left">
                    9) <i>Guardians’ Access:</i>  both limited access to resources
                    </Typography>
                    <Typography variant="h6" align="left">
                    10) <i>Race(s):</i>  black/brown; black/brown
                    </Typography>
                    <Typography variant="h6" align="left">
                    11) <i>Ethnicity / Tribe:</i>  Dominican
                    </Typography>
                    <Typography variant="h6" align="left"> 
                    12) <i>Person's Nation of Origin:</i>  Dominican
                    </Typography>
                    <Typography variant="h6" align="left">
                    13) <i>Citizenship Status. Income:</i>  DR and USA; Naturalized citizen of the country of residence
                    </Typography>
                    <Typography variant="h6" align="left"> 
                    15) <i>Language(s) Spoken:</i>  Spanish; English
                    </Typography>
                    <Typography variant="h6" align="left">
                    16) <i>Family Religion:</i> Christian; born Christian which is practiced by approx 98% of DR
                    </Typography>
                    <Typography variant="h6" align="left"> 
                    17) <i>Chosen Religion:</i> Atheist; born Christian which is practiced by approx 98% of DR
                    </Typography>
                    <Typography variant="h6" align="left">
                    18) <i>Politics:</i> Progressive; I can be a little radical at times
                    </Typography>
                    <Typography variant="h6" align="left"> 
                    19) <i>Geo. Region:</i> born and raised in the DR; now live in CT, USA
                    </Typography>
                    <Typography variant="h6" align="left">
                    20) <i>Impact of Historical Times:</i> none
                    </Typography>
                    <Typography variant="h6" align="left">
                    21) <i>Relation to Military:</i> no relationship with the military; no relationship with the military
                    </Typography>
                    <Typography variant="h6" align="left">
                    22) <i>Relation to Legal System:</i> no relationship with the legal system
                    </Typography>
                    <Typography variant="h6" align="left"> 
                    23) <i>Relation to MH System:</i> no relationship with the MH
                    </Typography>
                    <Typography variant="h6" align="left">
                    24) <i>MH/Subst. Abuse:</i> no history with mental health problems
                    </Typography>
                    <Typography variant="h6" align="left"> 
                    25) <i>Cognitive Ability/Style:</i> Average
                    </Typography>
                    <Typography variant="h6" align="left">
                    26) <i>Health/Ability:</i> Average
                    </Typography>
                    <Typography variant="h6" align="left"> 
                    27) <i>Appearance:</i> average
                    </Typography>
                    <Typography variant="h6" align="left">
                    28) <i>Age:</i> 45
                    </Typography>
                    <Typography variant="h6" align="left"> 
                    29) <i>Raised By:</i> raised by mother, father, and other immediate relatives; straight; both parents are straight; mother was about 23 and father about 25 average; no; no
                    </Typography>
                    <Typography variant="h6" align="left">
                    30) <i>Guardians’ Marital Status:</i> parents separated when I was approximately 4 years old; mother divorced and father deceased
                    </Typography>
                    <Typography variant="h6" align="left">
                    31) <i>Parental Status:</i> have two biological daughters; 18 and 15; none
                    </Typography>
                    <Typography variant="h6" align="left">
                    32) <i>Marital Status:</i> divorced; married at 25 and divorced at 33; opposite sex
                    </Typography>
                    <Typography variant="h6" align="left"> 
                    33) <i>Sexual Orientation:</i> straight
                    </Typography>
                    <Typography variant="h6" align="left">
                    34) <i>Gender ID:</i> cisgender
                    </Typography>
                    <Typography variant="h6" align="left"> 
                    35) <i>Gender Expression:</i> I don't wear make up but I don?t wear ties either
                    </Typography>
                    <Typography variant="h6" align="left">
                    36) <i>Sex Assigned at Birth:</i> female
                    </Typography>
                    <Typography variant="h6" align="left"> 
                    37) <i>Unique History:</i> N/A
                    </Typography>
                </Container>


            <div id="body7">
                 <div className="matrix-header" style={{ marginLeft: '-10px' }}>Subject 4 - Earlier Matrix:</div>
                <div id="chart7" className="svg-align" style={{ marginLeft: '-15px' }}></div>
              </div>
         
      
              <div id="body8">
                <div className="matrix-header" style={{ marginLeft: '-10px' }}>Subject 4 - Current Matrix:</div>
                <div id="chart8" className="svg-align" style={{ marginLeft: '-15px' }}></div>
              </div>

                <Container className="footnotes-bottom">
                  <Typography variant="h5" align="left">Footnotes:</Typography>
                    
                    <Typography variant="h6" align="left">1) <i>Educ. Level:</i> Masters of Science in Education for Clinical Mental Health Counseling, 2019, USA 
                    </Typography>
                    <Typography variant="h6" align="left">
                    2) <i>Guardians’ Educ:</i> Par 1: Masters degree of education. Education ended in 2005. Parent?s education changed due to going back to school for a masters degree. Par 2: Bachelors degree of science. Education ended in 2009. 
                    </Typography>
                    <Typography variant="h6" align="left">
                    3) <i>Occupation(s):</i> Community Support Specialist, Research Assistant, Clinical Intern, and Graduate Student; Currently, I am classified as a "professional," holding the title of a community support specialist. Compared with the current economic climate within the United States, I have a lot of privilege with being employed during a pandemic.   
                    </Typography>
                    <Typography variant="h6" align="left">
                    4) <i>Guardians’ Occupation:</i> Par 1: mother was stay at home. Went back to school at night when other parent was laid off. Worked full time and went to school at night to obtain Masters degree. Par 2: Father was laid off due to onset of physical disability. Held infrequent low paying jobs throughout my childhood. 
                    </Typography>
                    <Typography variant="h6" align="left">
                    7) <i>Guardian’s Childhood House. Income:</i> Par 1: Parent?s childhood had little money, single income household. Par 2: Parent?s childhood had little money and single income household.  
                    </Typography>
                    <Typography variant="h6" align="left">
                    8) <i>Access:</i>  I have the ability to advocate for myself, as well as, obtain medical care and obtain a job. Additionally, I have a Euro-centric name that would assist me in getting a job/loan/etc., if needed 
                    </Typography>
                    <Typography variant="h6" align="left">
                    9) <i>Guardians’ Access:</i>  Par 1: Parent has been able to advocate for assistance. Has the ability to advocate and will be taken seriously. Par 2: has had difficulty in advocated for themself due to cognitive impairment. Has the ability to advocate and will taken seriously, when they want to.  
                    </Typography>
                    <Typography variant="h6" align="left">
                    10) <i>Race(s):</i>  White; Most privileged. They identify and have always identified as white and lived in majority white-identifying places.  
                    </Typography>
                    <Typography variant="h6" align="left">
                    11) <i>Ethnicity / Tribe:</i>  Jewish
                    </Typography>
                    <Typography variant="h6" align="left"> 
                    12) <i>Person's Nation of Origin:</i>  Born in County of residence with generations spanning 4+ 
                    </Typography>
                    <Typography variant="h6" align="left">
                    13) <i>Citizenship Status. Income:</i>  United States; Naturalized Citizen  
                    </Typography>
                    <Typography variant="h6" align="left"> 
                    15) <i>Language(s) Spoken:</i>  English; No additional language 
                    </Typography>
                    <Typography variant="h6" align="left">
                    16) <i>Family Religion:</i> Jewish; My family?s experience with identifying as Jewish have remained consistent over their lifespan due to living in areas where they are accepted.  
                    </Typography>
                    <Typography variant="h6" align="left"> 
                    17) <i>Chosen Religion:</i> Athiest/Areligious; Born Jewish 
                    </Typography>
                    <Typography variant="h6" align="left">
                    18) <i>Politics:</i> Democratic Socialist; Socialism and socialist-identity have been incredibly marginalized and persecuted in the US. More understanding of the construct has come to light in recent years and is becoming more acceptable, albeit still marginalized. 
                    </Typography>
                    <Typography variant="h6" align="left"> 
                    19) <i>Geo. Region:</i> Geographically, I have lived in privileged spaces. Mostly economically thriving and safe from war, most disasters and within a democratically leaning country. The region is well off with power, influence, and wealth comparatively with other countries. 
                    </Typography>
                    <Typography variant="h6" align="left">
                    20) <i>Impact of Historical Times:</i> Historically, I have held privilege as a cisgender, white man. However, I lose privilege in other domains such as identifying as LGBTQ and nonbinary.  
                    </Typography>
                    <Typography variant="h6" align="left">
                    21) <i>Relation to Military:</i> No relationship with military  ; No relationship with military 
                    </Typography>
                    <Typography variant="h6" align="left">
                    22) <i>Relation to Legal System:</i> No relationship with legal system  
                    </Typography>
                    <Typography variant="h6" align="left"> 
                    23) <i>Relation to MH System:</i> Currently or previously in short term outpatient psychiatric treatment or psychotherapy.  
                    </Typography>
                    <Typography variant="h6" align="left">
                    24) <i>MH/Subst. Abuse:</i> In recovery from addiction to alcohol 
                    </Typography>
                    <Typography variant="h6" align="left"> 
                    25) <i>Cognitive Ability/Style:</i> No major cognitive disability or learning styles that impedes day to day functioning  
                    </Typography>
                    <Typography variant="h6" align="left">
                    26) <i>Health/Ability:</i> Previous history of asthma and currently lives with Crohn?s Disease and Ulcerative Colitis.  
                    </Typography>
                    <Typography variant="h6" align="left"> 
                    27) <i>Appearance:</i> Blank
                    </Typography>
                    <Typography variant="h6" align="left">
                    28) <i>Age:</i> 25 and 1995 
                    </Typography>
                    <Typography variant="h6" align="left"> 
                    29) <i>Raised By:</i> Blank; Par 1: Heterosexual Par 2: Heterosexual; Both parents are cisgender and heterosexual; Par 1: 33/ Par 2:36; No, never lived apart from parents; No, never lived in boarding school  
                    </Typography>
                    <Typography variant="h6" align="left">
                    30) <i>Guardians’ Marital Status:</i> Par 1: Monogamous and married once. Par 2: Monogamous and married once.; Par 1: Monogamous and married once. Par 2: Monogamous and married once. 
                    </Typography>
                    <Typography variant="h6" align="left">
                    31) <i>Parental Status:</i> Not a parent, guardian, or other parenting figure; blank; blank
                    </Typography>
                    <Typography variant="h6" align="left">
                    32) <i>Marital Status:</i> Coupled but unmarried; 18 when first seriously coupled, singled at 21, coupled at 22, singled at 23, coupled at 24.; Same Sex
                    </Typography>
                    <Typography variant="h6" align="left"> 
                    33) <i>Sexual Orientation:</i> Gay
                    </Typography>
                    <Typography variant="h6" align="left">
                    34) <i>Gender ID:</i> Nonbinary
                    </Typography>
                    <Typography variant="h6" align="left"> 
                    35) <i>Gender Expression:</i> Gender non-binary wears clothing that could be construed as feminine or masculine 
                    </Typography>
                    <Typography variant="h6" align="left">
                    36) <i>Sex Assigned at Birth:</i> Male
                    </Typography>
                    <Typography variant="h6" align="left"> 
                    37) <i>Unique History:</i> Personal history of trauma/abuse
                    </Typography>
                </Container>
     


            <Typography variant="h6" align="center" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
                Everyone has some aspects of identity or social membership that give them privilege or 
                power, but they also have other aspects of identity in which they have little to no 
                privilege or power. Those are their areas of marginalization.
            </Typography>

            <Typography variant="h6" align="center" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
                Our areas of privilege can lead to blind spots, which can lead us to act in 
                unintentionally biased or discriminatory ways that can be hurtful to others.  
                t the same time, we may be vulnerable because of our marginalized areas – the 
                areas where we have least power or privilege and where we might feel shame or 
                discomfort.   
            </Typography>

            
    </div>


  )
};

export default Home;