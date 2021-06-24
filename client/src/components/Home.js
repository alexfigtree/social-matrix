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


/*            <Container>
                <Box style={{ marginTop: '30px', marginBottom: '30px' }}>Subject 1 - Earlier Matrix</Box>
                    <Radar
                      width={1400}
                      height={800}
                      padding={70}
                      domainMax={7}
                      highlighted={null}
                      onHover={(point) => {
                        if (point) {
                          console.log('hovered over a data point');
                        } else {
                          console.log('not over anything');
                        }
                      }}
                      data={{
                        variables: [
                          {key: 'educLevel', label: 'Educational Level'},
                          {key: 'guardiansEduc.', label: 'Guardians Educ.'},
                          {key: 'occupation', label: 'Occupation'},
                          {key: 'guardiansOccup', label: 'Guardians Occupation'},
                          {key: 'householdIncome', label: 'Household Income'},
                          {key: 'childhoodIncome', label: 'Childhood Household Income (w/ guardian)'},
                          {key: 'guardiansChildHouseIncome', label: 'Guardians Childhood House Income'},
                          {key: 'access', label: 'Access'},
                          {key: 'guardiansAccess', label: 'Guardians Access'},
                          {key: 'race', label: 'Race'},
                          {key: 'ethnicity', label: 'Ethnicity'},
                          {key: 'nationOfOriginCitizenship', label: 'Nation Of Origin Citizenship'},
                          {key: 'languages', label: 'Languages'},
                          {key: 'familyReligion.', label: 'Family Religion'},
                          {key: 'chosenReligion', label: 'Chosen Religion'},
                          {key: 'politics', label: 'Politics'},
                          {key: 'geoRegion', label: 'Geo Region'},
                          {key: 'impactHistTimes', label: 'Impact of Historical Times'},
                          {key: 'relationToMilitary', label: 'Relation to Military'},
                          {key: 'relationLegalSystem.', label: 'Relation to Legal System'},
                          {key: 'mHSubstUse', label: 'MH/Substance Use'},
                          {key: 'cognitiveAbilityStyle', label: 'Cognitive Ability/Style'},
                          {key: 'healthAbility', label: 'Health/Ability'},
                          {key: 'appearance', label: 'Appearance'},
                          {key: 'age', label: 'Age'},
                          {key: 'raisedBy.', label: 'Raised By'},
                          {key: 'guardiansMaritalStatus', label: 'Guardians Marital Status'},
                          {key: 'parentalStatus', label: 'Parental Status'},
                          {key: 'maritalStatus', label: 'Marital Status'},
                          {key: 'sexualOrientation', label: 'Sexual Orientation'},
                          {key: 'genderID', label: 'Gender ID'},
                          {key: 'genderExpression.', label: 'Gender Expression'},
                          {key: 'sexAtBirth', label: 'Sex At Birth'},
                          {key: 'uniqueHistory', label: 'Unique History'},
                        ],
                        sets: [
                          {
                            key: 'pre-small',
                            label: 'P1',
                            values: {
                              educLevel: tempData[0][0].value,
                              guardiansEduc: tempData[0][33].value,
                              occupation: tempData[0][32].value,
                              guardiansOccup: tempData[0][31].value,
                              householdIncome: tempData[0][30].value,
                              childhoodIncome: tempData[0][29].value,
                              guardiansChildHouseIncome: tempData[0][28].value,
                              access: tempData[0][27].value,
                              guardiansAccess: tempData[0][26].value,
                              race: tempData[0][25].value,
                              ethnicity: tempData[0][24].value,
                              nationOfOriginCitizenship: tempData[0][23].value,
                              languages: tempData[0][22].value,
                              familyReligion: tempData[0][21].value,
                              chosenReligion: tempData[0][20].value,
                              politics: tempData[0][19].value,
                              geoRegion: tempData[0][18].value,
                              impactHistTimes: tempData[0][17].value,
                              relationToMilitary: tempData[0][16].value,
                              relationLegalSystem: tempData[0][15].value,
                              mHSubstUse: tempData[0][14].value,
                              cognitiveAbilityStyle: tempData[0][13].value,
                              healthAbility: tempData[0][12].value,
                              appearance: tempData[0][11].value,
                              age: tempData[0][10].value,
                              raisedBy: tempData[0][9].value,
                              guardiansMaritalStatus: tempData[0][8].value,
                              parentalStatus: tempData[0][7].value,
                              maritalStatus: tempData[0][6].value,
                              sexualOrientation: tempData[0][5].value,
                              genderID: tempData[0][4].value,
                              genderExpression: tempData[0][3].value,
                              sexAtBirth: tempData[0][2].value,
                              uniqueHistory: tempData[0][1].value,
                            },
                          },
                          {
                            key: 'pre-large',
                            label: 'P2',
                            values: {
                              educLevel: tempData[1][0].value,
                              guardiansEduc: tempData[1][33].value,
                              occupation: tempData[1][32].value,
                              guardiansOccup: tempData[1][31].value,
                              householdIncome: tempData[1][30].value,
                              childhoodIncome: tempData[1][29].value,
                              guardiansChildHouseIncome: tempData[1][28].value,
                              access: tempData[1][27].value,
                              guardiansAccess: tempData[1][26].value,
                              race: tempData[1][25].value,
                              ethnicity: tempData[1][24].value,
                              nationOfOriginCitizenship: tempData[1][23].value,
                              languages: tempData[1][22].value,
                              familyReligion: tempData[1][21].value,
                              chosenReligion: tempData[1][20].value,
                              politics: tempData[1][19].value,
                              geoRegion: tempData[1][18].value,
                              impactHistTimes: tempData[1][17].value,
                              relationToMilitary: tempData[1][16].value,
                              relationLegalSystem: tempData[1][15].value,
                              mHSubstUse: tempData[1][14].value,
                              cognitiveAbilityStyle: tempData[1][13].value,
                              healthAbility: tempData[1][12].value,
                              appearance: tempData[1][11].value,
                              age: tempData[1][10].value,
                              raisedBy: tempData[1][9].value,
                              guardiansMaritalStatus: tempData[1][8].value,
                              parentalStatus: tempData[1][7].value,
                              maritalStatus: tempData[1][6].value,
                              sexualOrientation: tempData[1][5].value,
                              genderID: tempData[1][4].value,
                              genderExpression: tempData[1][3].value,
                              sexAtBirth: tempData[1][2].value,
                              uniqueHistory: tempData[1][1].value,
                            },
                          },
                        ],
                      }}
                />
                <Box style={{ marginTop: '30px', marginBottom: '30px' }}>Subject 1 - Current Matrix</Box>
                    <Radar
                      width={1400}
                      height={800}
                      padding={70}
                      domainMax={7}
                      highlighted={null}
                      onHover={(point) => {
                        if (point) {
                          console.log('hovered over a data point');
                        } else {
                          console.log('not over anything');
                        }
                      }}
                      data={{
                        variables: [
                          {key: 'educLevel', label: 'Educational Level'},
                          {key: 'guardiansEduc.', label: 'Guardians Educ.'},
                          {key: 'occupation', label: 'Occupation'},
                          {key: 'guardiansOccup', label: 'Guardians Occupation'},
                          {key: 'householdIncome', label: 'Household Income'},
                          {key: 'childhoodIncome', label: 'Childhood Household Income (w/ guardian)'},
                          {key: 'guardiansChildHouseIncome', label: 'Guardians Childhood House Income'},
                          {key: 'access', label: 'Access'},
                          {key: 'guardiansAccess', label: 'Guardians Access'},
                          {key: 'race', label: 'Race'},
                          {key: 'ethnicity', label: 'Ethnicity'},
                          {key: 'nationOfOriginCitizenship', label: 'Nation Of Origin Citizenship'},
                          {key: 'languages', label: 'Languages'},
                          {key: 'familyReligion.', label: 'Family Religion'},
                          {key: 'chosenReligion', label: 'Chosen Religion'},
                          {key: 'politics', label: 'Politics'},
                          {key: 'geoRegion', label: 'Geo Region'},
                          {key: 'impactHistTimes', label: 'Impact of Historical Times'},
                          {key: 'relationToMilitary', label: 'Relation to Military'},
                          {key: 'relationLegalSystem.', label: 'Relation to Legal System'},
                          {key: 'mHSubstUse', label: 'MH/Substance Use'},
                          {key: 'cognitiveAbilityStyle', label: 'Cognitive Ability/Style'},
                          {key: 'healthAbility', label: 'Health/Ability'},
                          {key: 'appearance', label: 'Appearance'},
                          {key: 'age', label: 'Age'},
                          {key: 'raisedBy.', label: 'Raised By'},
                          {key: 'guardiansMaritalStatus', label: 'Guardians Marital Status'},
                          {key: 'parentalStatus', label: 'Parental Status'},
                          {key: 'maritalStatus', label: 'Marital Status'},
                          {key: 'sexualOrientation', label: 'Sexual Orientation'},
                          {key: 'genderID', label: 'Gender ID'},
                          {key: 'genderExpression.', label: 'Gender Expression'},
                          {key: 'sexAtBirth', label: 'Sex At Birth'},
                          {key: 'uniqueHistory', label: 'Unique History'},
                        ],
                        sets: [
                          {
                            key: 'post-small',
                            label: 'P1',
                            values: {
                              educLevel: tempData[2][0].value,
                              guardiansEduc: tempData[2][33].value,
                              occupation: tempData[2][32].value,
                              guardiansOccup: tempData[2][31].value,
                              householdIncome: tempData[2][30].value,
                              childhoodIncome: tempData[2][29].value,
                              guardiansChildHouseIncome: tempData[2][28].value,
                              access: tempData[2][27].value,
                              guardiansAccess: tempData[2][26].value,
                              race: tempData[2][25].value,
                              ethnicity: tempData[2][24].value,
                              nationOfOriginCitizenship: tempData[2][23].value,
                              languages: tempData[2][22].value,
                              familyReligion: tempData[2][21].value,
                              chosenReligion: tempData[2][20].value,
                              politics: tempData[2][19].value,
                              geoRegion: tempData[2][18].value,
                              impactHistTimes: tempData[2][17].value,
                              relationToMilitary: tempData[2][16].value,
                              relationLegalSystem: tempData[2][15].value,
                              mHSubstUse: tempData[2][14].value,
                              cognitiveAbilityStyle: tempData[2][13].value,
                              healthAbility: tempData[2][12].value,
                              appearance: tempData[2][11].value,
                              age: tempData[2][10].value,
                              raisedBy: tempData[2][9].value,
                              guardiansMaritalStatus: tempData[2][8].value,
                              parentalStatus: tempData[2][7].value,
                              maritalStatus: tempData[2][6].value,
                              sexualOrientation: tempData[2][5].value,
                              genderID: tempData[2][4].value,
                              genderExpression: tempData[2][3].value,
                              sexAtBirth: tempData[2][2].value,
                              uniqueHistory: tempData[2][1].value,
                            },
                          },
                          {
                            key: 'post-large',
                            label: 'P2',
                            values: {
                              educLevel: tempData[3][0].value,
                              guardiansEduc: tempData[3][33].value,
                              occupation: tempData[3][32].value,
                              guardiansOccup: tempData[3][31].value,
                              householdIncome: tempData[3][30].value,
                              childhoodIncome: tempData[3][29].value,
                              guardiansChildHouseIncome: tempData[3][28].value,
                              access: tempData[3][27].value,
                              guardiansAccess: tempData[3][26].value,
                              race: tempData[3][25].value,
                              ethnicity: tempData[3][24].value,
                              nationOfOriginCitizenship: tempData[3][23].value,
                              languages: tempData[3][22].value,
                              familyReligion: tempData[3][21].value,
                              chosenReligion: tempData[3][20].value,
                              politics: tempData[3][19].value,
                              geoRegion: tempData[3][18].value,
                              impactHistTimes: tempData[3][17].value,
                              relationToMilitary: tempData[3][16].value,
                              relationLegalSystem: tempData[3][15].value,
                              mHSubstUse: tempData[3][14].value,
                              cognitiveAbilityStyle: tempData[3][13].value,
                              healthAbility: tempData[3][12].value,
                              appearance: tempData[3][11].value,
                              age: tempData[3][10].value,
                              raisedBy: tempData[3][9].value,
                              guardiansMaritalStatus: tempData[3][8].value,
                              parentalStatus: tempData[3][7].value,
                              maritalStatus: tempData[3][6].value,
                              sexualOrientation: tempData[3][5].value,
                              genderID: tempData[3][4].value,
                              genderExpression: tempData[3][3].value,
                              sexAtBirth: tempData[3][2].value,
                              uniqueHistory: tempData[3][1].value,
                            },
                          },
                        ],
                      }}
                />

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
            </Container>*/

            /*            <Container className="after-one">
                <Box style={{ marginTop: '30px', marginBottom: '30px' }}>Subject 2 - Earlier Matrix</Box>
                    <Radar
                      width={1400}
                      height={800}
                      padding={70}
                      domainMax={7}
                      highlighted={null}
                      onHover={(point) => {
                        if (point) {
                          console.log('hovered over a data point');
                        } else {
                          console.log('not over anything');
                        }
                      }}
                      data={{
                        variables: [
                          {key: 'educLevel', label: 'Educational Level'},
                          {key: 'guardiansEduc.', label: 'Guardians Educ.'},
                          {key: 'occupation', label: 'Occupation'},
                          {key: 'guardiansOccup', label: 'Guardians Occupation'},
                          {key: 'householdIncome', label: 'Household Income'},
                          {key: 'childhoodIncome', label: 'Childhood Household Income (w/ guardian)'},
                          {key: 'guardiansChildHouseIncome', label: 'Guardians Childhood House Income'},
                          {key: 'access', label: 'Access'},
                          {key: 'guardiansAccess', label: 'Guardians Access'},
                          {key: 'race', label: 'Race'},
                          {key: 'ethnicity', label: 'Ethnicity'},
                          {key: 'nationOfOriginCitizenship', label: 'Nation Of Origin Citizenship'},
                          {key: 'languages', label: 'Languages'},
                          {key: 'familyReligion.', label: 'Family Religion'},
                          {key: 'chosenReligion', label: 'Chosen Religion'},
                          {key: 'politics', label: 'Politics'},
                          {key: 'geoRegion', label: 'Geo Region'},
                          {key: 'impactHistTimes', label: 'Impact of Historical Times'},
                          {key: 'relationToMilitary', label: 'Relation to Military'},
                          {key: 'relationLegalSystem.', label: 'Relation to Legal System'},
                          {key: 'mHSubstUse', label: 'MH/Substance Use'},
                          {key: 'cognitiveAbilityStyle', label: 'Cognitive Ability/Style'},
                          {key: 'healthAbility', label: 'Health/Ability'},
                          {key: 'appearance', label: 'Appearance'},
                          {key: 'age', label: 'Age'},
                          {key: 'raisedBy.', label: 'Raised By'},
                          {key: 'guardiansMaritalStatus', label: 'Guardians Marital Status'},
                          {key: 'parentalStatus', label: 'Parental Status'},
                          {key: 'maritalStatus', label: 'Marital Status'},
                          {key: 'sexualOrientation', label: 'Sexual Orientation'},
                          {key: 'genderID', label: 'Gender ID'},
                          {key: 'genderExpression.', label: 'Gender Expression'},
                          {key: 'sexAtBirth', label: 'Sex At Birth'},
                          {key: 'uniqueHistory', label: 'Unique History'},
                        ],
                        sets: [
                          {
                            key: 'pre-small',
                            label: 'P1',
                            values: {
                              educLevel: tempData[4][0].value,
                              guardiansEduc: tempData[4][33].value,
                              occupation: tempData[4][32].value,
                              guardiansOccup: tempData[4][31].value,
                              householdIncome: tempData[4][30].value,
                              childhoodIncome: tempData[4][29].value,
                              guardiansChildHouseIncome: tempData[4][28].value,
                              access: tempData[4][27].value,
                              guardiansAccess: tempData[4][26].value,
                              race: tempData[4][25].value,
                              ethnicity: tempData[4][24].value,
                              nationOfOriginCitizenship: tempData[4][23].value,
                              languages: tempData[4][22].value,
                              familyReligion: tempData[4][21].value,
                              chosenReligion: tempData[4][20].value,
                              politics: tempData[4][19].value,
                              geoRegion: tempData[4][18].value,
                              impactHistTimes: tempData[4][17].value,
                              relationToMilitary: tempData[4][16].value,
                              relationLegalSystem: tempData[4][15].value,
                              mHSubstUse: tempData[4][14].value,
                              cognitiveAbilityStyle: tempData[4][13].value,
                              healthAbility: tempData[4][12].value,
                              appearance: tempData[4][11].value,
                              age: tempData[4][10].value,
                              raisedBy: tempData[4][9].value,
                              guardiansMaritalStatus: tempData[4][8].value,
                              parentalStatus: tempData[4][7].value,
                              maritalStatus: tempData[4][6].value,
                              sexualOrientation: tempData[4][5].value,
                              genderID: tempData[4][4].value,
                              genderExpression: tempData[4][3].value,
                              sexAtBirth: tempData[4][2].value,
                              uniqueHistory: tempData[4][1].value,
                            },
                          },
                          {
                            key: 'pre-large',
                            label: 'P2',
                            values: {
                              educLevel: tempData[5][0].value,
                              guardiansEduc: tempData[5][33].value,
                              occupation: tempData[5][32].value,
                              guardiansOccup: tempData[5][31].value,
                              householdIncome: tempData[5][30].value,
                              childhoodIncome: tempData[5][29].value,
                              guardiansChildHouseIncome: tempData[5][28].value,
                              access: tempData[5][27].value,
                              guardiansAccess: tempData[5][26].value,
                              race: tempData[5][25].value,
                              ethnicity: tempData[5][24].value,
                              nationOfOriginCitizenship: tempData[5][23].value,
                              languages: tempData[5][22].value,
                              familyReligion: tempData[5][21].value,
                              chosenReligion: tempData[5][20].value,
                              politics: tempData[5][19].value,
                              geoRegion: tempData[5][18].value,
                              impactHistTimes: tempData[5][17].value,
                              relationToMilitary: tempData[5][16].value,
                              relationLegalSystem: tempData[5][15].value,
                              mHSubstUse: tempData[5][14].value,
                              cognitiveAbilityStyle: tempData[5][13].value,
                              healthAbility: tempData[5][12].value,
                              appearance: tempData[5][11].value,
                              age: tempData[5][10].value,
                              raisedBy: tempData[5][9].value,
                              guardiansMaritalStatus: tempData[5][8].value,
                              parentalStatus: tempData[5][7].value,
                              maritalStatus: tempData[5][6].value,
                              sexualOrientation: tempData[5][5].value,
                              genderID: tempData[5][4].value,
                              genderExpression: tempData[5][3].value,
                              sexAtBirth: tempData[5][2].value,
                              uniqueHistory: tempData[5][1].value,
                            },
                          },
                        ],
                      }}
                />      
                <Box style={{ marginTop: '30px', marginBottom: '30px' }}>Subject 2 - Current Matrix</Box>
                    <Radar
                      width={1400}
                      height={800}
                      padding={70}
                      domainMax={7}
                      highlighted={null}
                      onHover={(point) => {
                        if (point) {
                          console.log('hovered over a data point');
                        } else {
                          console.log('not over anything');
                        }
                      }}
                      data={{
                        variables: [
                          {key: 'educLevel', label: 'Educational Level'},
                          {key: 'guardiansEduc.', label: 'Guardians Educ.'},
                          {key: 'occupation', label: 'Occupation'},
                          {key: 'guardiansOccup', label: 'Guardians Occupation'},
                          {key: 'householdIncome', label: 'Household Income'},
                          {key: 'childhoodIncome', label: 'Childhood Household Income (w/ guardian)'},
                          {key: 'guardiansChildHouseIncome', label: 'Guardians Childhood House Income'},
                          {key: 'access', label: 'Access'},
                          {key: 'guardiansAccess', label: 'Guardians Access'},
                          {key: 'race', label: 'Race'},
                          {key: 'ethnicity', label: 'Ethnicity'},
                          {key: 'nationOfOriginCitizenship', label: 'Nation Of Origin Citizenship'},
                          {key: 'languages', label: 'Languages'},
                          {key: 'familyReligion.', label: 'Family Religion'},
                          {key: 'chosenReligion', label: 'Chosen Religion'},
                          {key: 'politics', label: 'Politics'},
                          {key: 'geoRegion', label: 'Geo Region'},
                          {key: 'impactHistTimes', label: 'Impact of Historical Times'},
                          {key: 'relationToMilitary', label: 'Relation to Military'},
                          {key: 'relationLegalSystem.', label: 'Relation to Legal System'},
                          {key: 'mHSubstUse', label: 'MH/Substance Use'},
                          {key: 'cognitiveAbilityStyle', label: 'Cognitive Ability/Style'},
                          {key: 'healthAbility', label: 'Health/Ability'},
                          {key: 'appearance', label: 'Appearance'},
                          {key: 'age', label: 'Age'},
                          {key: 'raisedBy.', label: 'Raised By'},
                          {key: 'guardiansMaritalStatus', label: 'Guardians Marital Status'},
                          {key: 'parentalStatus', label: 'Parental Status'},
                          {key: 'maritalStatus', label: 'Marital Status'},
                          {key: 'sexualOrientation', label: 'Sexual Orientation'},
                          {key: 'genderID', label: 'Gender ID'},
                          {key: 'genderExpression.', label: 'Gender Expression'},
                          {key: 'sexAtBirth', label: 'Sex At Birth'},
                          {key: 'uniqueHistory', label: 'Unique History'},
                        ],
                        sets: [
                          {
                            key: 'post-small',
                            label: 'P1',
                            values: {
                              educLevel: tempData[6][0].value,
                              guardiansEduc: tempData[6][33].value,
                              occupation: tempData[6][32].value,
                              guardiansOccup: tempData[6][31].value,
                              householdIncome: tempData[6][30].value,
                              childhoodIncome: tempData[6][29].value,
                              guardiansChildHouseIncome: tempData[6][28].value,
                              access: tempData[6][27].value,
                              guardiansAccess: tempData[6][26].value,
                              race: tempData[6][25].value,
                              ethnicity: tempData[6][24].value,
                              nationOfOriginCitizenship: tempData[6][23].value,
                              languages: tempData[6][22].value,
                              familyReligion: tempData[6][21].value,
                              chosenReligion: tempData[6][20].value,
                              politics: tempData[6][19].value,
                              geoRegion: tempData[6][18].value,
                              impactHistTimes: tempData[6][17].value,
                              relationToMilitary: tempData[6][16].value,
                              relationLegalSystem: tempData[6][15].value,
                              mHSubstUse: tempData[6][14].value,
                              cognitiveAbilityStyle: tempData[6][13].value,
                              healthAbility: tempData[6][12].value,
                              appearance: tempData[6][11].value,
                              age: tempData[6][10].value,
                              raisedBy: tempData[6][9].value,
                              guardiansMaritalStatus: tempData[6][8].value,
                              parentalStatus: tempData[6][7].value,
                              maritalStatus: tempData[6][6].value,
                              sexualOrientation: tempData[6][5].value,
                              genderID: tempData[6][4].value,
                              genderExpression: tempData[6][3].value,
                              sexAtBirth: tempData[6][2].value,
                              uniqueHistory: tempData[6][1].value,
                            },
                          },
                          {
                            key: 'post-large',
                            label: 'P2',
                            values: {
                              educLevel: tempData[7][0].value,
                              guardiansEduc: tempData[7][33].value,
                              occupation: tempData[7][32].value,
                              guardiansOccup: tempData[7][31].value,
                              householdIncome: tempData[7][30].value,
                              childhoodIncome: tempData[7][29].value,
                              guardiansChildHouseIncome: tempData[7][28].value,
                              access: tempData[7][27].value,
                              guardiansAccess: tempData[7][26].value,
                              race: tempData[7][25].value,
                              ethnicity: tempData[7][24].value,
                              nationOfOriginCitizenship: tempData[7][23].value,
                              languages: tempData[7][22].value,
                              familyReligion: tempData[7][21].value,
                              chosenReligion: tempData[7][20].value,
                              politics: tempData[7][19].value,
                              geoRegion: tempData[7][18].value,
                              impactHistTimes: tempData[7][17].value,
                              relationToMilitary: tempData[7][16].value,
                              relationLegalSystem: tempData[7][15].value,
                              mHSubstUse: tempData[7][14].value,
                              cognitiveAbilityStyle: tempData[7][13].value,
                              healthAbility: tempData[7][12].value,
                              appearance: tempData[7][11].value,
                              age: tempData[7][10].value,
                              raisedBy: tempData[7][9].value,
                              guardiansMaritalStatus: tempData[7][8].value,
                              parentalStatus: tempData[7][7].value,
                              maritalStatus: tempData[7][6].value,
                              sexualOrientation: tempData[7][5].value,
                              genderID: tempData[7][4].value,
                              genderExpression: tempData[7][3].value,
                              sexAtBirth: tempData[7][2].value,
                              uniqueHistory: tempData[7][1].value,
                            },
                          },
                        ],
                      }}
                />
                <Container className="footnotes-bottom-after-one">
                  <Container className="footnotes-header">Footnotes:</Container>
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
            </Container>*/

/*            
            <Container className="after-one">
                <Box style={{ marginTop: '30px', marginBottom: '30px' }}>Subject 3 - Earlier Matrix</Box>
                    <Radar
                      width={1400}
                      height={800}
                      padding={70}
                      domainMax={7}
                      highlighted={null}
                      onHover={(point) => {
                        if (point) {
                          console.log('hovered over a data point');
                        } else {
                          console.log('not over anything');
                        }
                      }}
                      data={{
                        variables: [
                          {key: 'educLevel', label: 'Educational Level'},
                          {key: 'guardiansEduc.', label: 'Guardians Educ.'},
                          {key: 'occupation', label: 'Occupation'},
                          {key: 'guardiansOccup', label: 'Guardians Occupation'},
                          {key: 'householdIncome', label: 'Household Income'},
                          {key: 'childhoodIncome', label: 'Childhood Household Income (w/ guardian)'},
                          {key: 'guardiansChildHouseIncome', label: 'Guardians Childhood House Income'},
                          {key: 'access', label: 'Access'},
                          {key: 'guardiansAccess', label: 'Guardians Access'},
                          {key: 'race', label: 'Race'},
                          {key: 'ethnicity', label: 'Ethnicity'},
                          {key: 'nationOfOriginCitizenship', label: 'Nation Of Origin Citizenship'},
                          {key: 'languages', label: 'Languages'},
                          {key: 'familyReligion.', label: 'Family Religion'},
                          {key: 'chosenReligion', label: 'Chosen Religion'},
                          {key: 'politics', label: 'Politics'},
                          {key: 'geoRegion', label: 'Geo Region'},
                          {key: 'impactHistTimes', label: 'Impact of Historical Times'},
                          {key: 'relationToMilitary', label: 'Relation to Military'},
                          {key: 'relationLegalSystem.', label: 'Relation to Legal System'},
                          {key: 'mHSubstUse', label: 'MH/Substance Use'},
                          {key: 'cognitiveAbilityStyle', label: 'Cognitive Ability/Style'},
                          {key: 'healthAbility', label: 'Health/Ability'},
                          {key: 'appearance', label: 'Appearance'},
                          {key: 'age', label: 'Age'},
                          {key: 'raisedBy.', label: 'Raised By'},
                          {key: 'guardiansMaritalStatus', label: 'Guardians Marital Status'},
                          {key: 'parentalStatus', label: 'Parental Status'},
                          {key: 'maritalStatus', label: 'Marital Status'},
                          {key: 'sexualOrientation', label: 'Sexual Orientation'},
                          {key: 'genderID', label: 'Gender ID'},
                          {key: 'genderExpression.', label: 'Gender Expression'},
                          {key: 'sexAtBirth', label: 'Sex At Birth'},
                          {key: 'uniqueHistory', label: 'Unique History'},
                        ],
                        sets: [
                          {
                            key: 'pre-small',
                            label: 'P1',
                            values: {
                              educLevel: tempData[8][0].value,
                              guardiansEduc: tempData[8][33].value,
                              occupation: tempData[8][32].value,
                              guardiansOccup: tempData[8][31].value,
                              householdIncome: tempData[8][30].value,
                              childhoodIncome: tempData[8][29].value,
                              guardiansChildHouseIncome: tempData[8][28].value,
                              access: tempData[8][27].value,
                              guardiansAccess: tempData[8][26].value,
                              race: tempData[8][25].value,
                              ethnicity: tempData[8][24].value,
                              nationOfOriginCitizenship: tempData[8][23].value,
                              languages: tempData[8][22].value,
                              familyReligion: tempData[8][21].value,
                              chosenReligion: tempData[8][20].value,
                              politics: tempData[8][19].value,
                              geoRegion: tempData[8][18].value,
                              impactHistTimes: tempData[8][17].value,
                              relationToMilitary: tempData[8][16].value,
                              relationLegalSystem: tempData[8][15].value,
                              mHSubstUse: tempData[8][14].value,
                              cognitiveAbilityStyle: tempData[8][13].value,
                              healthAbility: tempData[8][12].value,
                              appearance: tempData[8][11].value,
                              age: tempData[8][10].value,
                              raisedBy: tempData[8][9].value,
                              guardiansMaritalStatus: tempData[8][8].value,
                              parentalStatus: tempData[8][7].value,
                              maritalStatus: tempData[8][6].value,
                              sexualOrientation: tempData[8][5].value,
                              genderID: tempData[8][4].value,
                              genderExpression: tempData[8][3].value,
                              sexAtBirth: tempData[8][2].value,
                              uniqueHistory: tempData[8][1].value,
                            },
                          },
                          {
                            key: 'pre-large',
                            label: 'P2',
                            values: {
                              educLevel: tempData[9][0].value,
                              guardiansEduc: tempData[9][33].value,
                              occupation: tempData[9][32].value,
                              guardiansOccup: tempData[9][31].value,
                              householdIncome: tempData[9][30].value,
                              childhoodIncome: tempData[9][29].value,
                              guardiansChildHouseIncome: tempData[9][28].value,
                              access: tempData[9][27].value,
                              guardiansAccess: tempData[9][26].value,
                              race: tempData[9][25].value,
                              ethnicity: tempData[9][24].value,
                              nationOfOriginCitizenship: tempData[9][23].value,
                              languages: tempData[9][22].value,
                              familyReligion: tempData[9][21].value,
                              chosenReligion: tempData[9][20].value,
                              politics: tempData[9][19].value,
                              geoRegion: tempData[9][18].value,
                              impactHistTimes: tempData[9][17].value,
                              relationToMilitary: tempData[9][16].value,
                              relationLegalSystem: tempData[9][15].value,
                              mHSubstUse: tempData[9][14].value,
                              cognitiveAbilityStyle: tempData[9][13].value,
                              healthAbility: tempData[9][12].value,
                              appearance: tempData[9][11].value,
                              age: tempData[9][10].value,
                              raisedBy: tempData[9][9].value,
                              guardiansMaritalStatus: tempData[9][8].value,
                              parentalStatus: tempData[9][7].value,
                              maritalStatus: tempData[9][6].value,
                              sexualOrientation: tempData[9][5].value,
                              genderID: tempData[9][4].value,
                              genderExpression: tempData[9][3].value,
                              sexAtBirth: tempData[9][2].value,
                              uniqueHistory: tempData[9][1].value,
                            },
                          },
                        ],
                      }}
                />      
                <Box style={{ marginTop: '30px', marginBottom: '30px' }}>Subject 3 - Current Matrix</Box>
                    <Radar
                      width={1400}
                      height={800}
                      padding={70}
                      domainMax={7}
                      highlighted={null}
                      onHover={(point) => {
                        if (point) {
                          console.log('hovered over a data point');
                        } else {
                          console.log('not over anything');
                        }
                      }}
                      data={{
                        variables: [
                          {key: 'educLevel', label: 'Educational Level'},
                          {key: 'guardiansEduc.', label: 'Guardians Educ.'},
                          {key: 'occupation', label: 'Occupation'},
                          {key: 'guardiansOccup', label: 'Guardians Occupation'},
                          {key: 'householdIncome', label: 'Household Income'},
                          {key: 'childhoodIncome', label: 'Childhood Household Income (w/ guardian)'},
                          {key: 'guardiansChildHouseIncome', label: 'Guardians Childhood House Income'},
                          {key: 'access', label: 'Access'},
                          {key: 'guardiansAccess', label: 'Guardians Access'},
                          {key: 'race', label: 'Race'},
                          {key: 'ethnicity', label: 'Ethnicity'},
                          {key: 'nationOfOriginCitizenship', label: 'Nation Of Origin Citizenship'},
                          {key: 'languages', label: 'Languages'},
                          {key: 'familyReligion.', label: 'Family Religion'},
                          {key: 'chosenReligion', label: 'Chosen Religion'},
                          {key: 'politics', label: 'Politics'},
                          {key: 'geoRegion', label: 'Geo Region'},
                          {key: 'impactHistTimes', label: 'Impact of Historical Times'},
                          {key: 'relationToMilitary', label: 'Relation to Military'},
                          {key: 'relationLegalSystem.', label: 'Relation to Legal System'},
                          {key: 'mHSubstUse', label: 'MH/Substance Use'},
                          {key: 'cognitiveAbilityStyle', label: 'Cognitive Ability/Style'},
                          {key: 'healthAbility', label: 'Health/Ability'},
                          {key: 'appearance', label: 'Appearance'},
                          {key: 'age', label: 'Age'},
                          {key: 'raisedBy.', label: 'Raised By'},
                          {key: 'guardiansMaritalStatus', label: 'Guardians Marital Status'},
                          {key: 'parentalStatus', label: 'Parental Status'},
                          {key: 'maritalStatus', label: 'Marital Status'},
                          {key: 'sexualOrientation', label: 'Sexual Orientation'},
                          {key: 'genderID', label: 'Gender ID'},
                          {key: 'genderExpression.', label: 'Gender Expression'},
                          {key: 'sexAtBirth', label: 'Sex At Birth'},
                          {key: 'uniqueHistory', label: 'Unique History'},
                        ],
                        sets: [
                          {
                            key: 'post-small',
                            label: 'P1',
                            values: {
                              educLevel: tempData[10][0].value,
                              guardiansEduc: tempData[10][33].value,
                              occupation: tempData[10][32].value,
                              guardiansOccup: tempData[10][31].value,
                              householdIncome: tempData[10][30].value,
                              childhoodIncome: tempData[10][29].value,
                              guardiansChildHouseIncome: tempData[10][28].value,
                              access: tempData[10][27].value,
                              guardiansAccess: tempData[10][26].value,
                              race: tempData[10][25].value,
                              ethnicity: tempData[10][24].value,
                              nationOfOriginCitizenship: tempData[10][23].value,
                              languages: tempData[10][22].value,
                              familyReligion: tempData[10][21].value,
                              chosenReligion: tempData[10][20].value,
                              politics: tempData[10][19].value,
                              geoRegion: tempData[10][18].value,
                              impactHistTimes: tempData[10][17].value,
                              relationToMilitary: tempData[10][16].value,
                              relationLegalSystem: tempData[10][15].value,
                              mHSubstUse: tempData[10][14].value,
                              cognitiveAbilityStyle: tempData[10][13].value,
                              healthAbility: tempData[10][12].value,
                              appearance: tempData[10][11].value,
                              age: tempData[10][10].value,
                              raisedBy: tempData[10][9].value,
                              guardiansMaritalStatus: tempData[10][8].value,
                              parentalStatus: tempData[10][7].value,
                              maritalStatus: tempData[10][6].value,
                              sexualOrientation: tempData[10][5].value,
                              genderID: tempData[10][4].value,
                              genderExpression: tempData[10][3].value,
                              sexAtBirth: tempData[10][2].value,
                              uniqueHistory: tempData[10][1].value,
                            },
                          },
                          {
                            key: 'post-large',
                            label: 'P2',
                            values: {
                              educLevel: tempData[11][0].value,
                              guardiansEduc: tempData[11][33].value,
                              occupation: tempData[11][32].value,
                              guardiansOccup: tempData[11][31].value,
                              householdIncome: tempData[11][30].value,
                              childhoodIncome: tempData[11][29].value,
                              guardiansChildHouseIncome: tempData[11][28].value,
                              access: tempData[11][27].value,
                              guardiansAccess: tempData[11][26].value,
                              race: tempData[11][25].value,
                              ethnicity: tempData[11][24].value,
                              nationOfOriginCitizenship: tempData[11][23].value,
                              languages: tempData[11][22].value,
                              familyReligion: tempData[11][21].value,
                              chosenReligion: tempData[11][20].value,
                              politics: tempData[11][19].value,
                              geoRegion: tempData[11][18].value,
                              impactHistTimes: tempData[11][17].value,
                              relationToMilitary: tempData[11][16].value,
                              relationLegalSystem: tempData[11][15].value,
                              mHSubstUse: tempData[11][14].value,
                              cognitiveAbilityStyle: tempData[11][13].value,
                              healthAbility: tempData[11][12].value,
                              appearance: tempData[11][11].value,
                              age: tempData[11][10].value,
                              raisedBy: tempData[11][9].value,
                              guardiansMaritalStatus: tempData[11][8].value,
                              parentalStatus: tempData[11][7].value,
                              maritalStatus: tempData[11][6].value,
                              sexualOrientation: tempData[11][5].value,
                              genderID: tempData[11][4].value,
                              genderExpression: tempData[11][3].value,
                              sexAtBirth: tempData[11][2].value,
                              uniqueHistory: tempData[11][1].value,
                            },
                          },
                        ],
                      }}
                />
                
            </Container>*/

/*

                        <Container className="after-one">
                <Box style={{ marginTop: '30px', marginBottom: '30px' }}>Subject 4 - Earlier Matrix</Box>
                    <Radar
                      width={1400}
                      height={800}
                      padding={70}
                      domainMax={7}
                      highlighted={null}
                      onHover={(point) => {
                        if (point) {
                          console.log('hovered over a data point');
                        } else {
                          console.log('not over anything');
                        }
                      }}
                      data={{
                        variables: [
                          {key: 'educLevel', label: 'Educational Level'},
                          {key: 'guardiansEduc.', label: 'Guardians Educ.'},
                          {key: 'occupation', label: 'Occupation'},
                          {key: 'guardiansOccup', label: 'Guardians Occupation'},
                          {key: 'householdIncome', label: 'Household Income'},
                          {key: 'childhoodIncome', label: 'Childhood Household Income (w/ guardian)'},
                          {key: 'guardiansChildHouseIncome', label: 'Guardians Childhood House Income'},
                          {key: 'access', label: 'Access'},
                          {key: 'guardiansAccess', label: 'Guardians Access'},
                          {key: 'race', label: 'Race'},
                          {key: 'ethnicity', label: 'Ethnicity'},
                          {key: 'nationOfOriginCitizenship', label: 'Nation Of Origin Citizenship'},
                          {key: 'languages', label: 'Languages'},
                          {key: 'familyReligion.', label: 'Family Religion'},
                          {key: 'chosenReligion', label: 'Chosen Religion'},
                          {key: 'politics', label: 'Politics'},
                          {key: 'geoRegion', label: 'Geo Region'},
                          {key: 'impactHistTimes', label: 'Impact of Historical Times'},
                          {key: 'relationToMilitary', label: 'Relation to Military'},
                          {key: 'relationLegalSystem.', label: 'Relation to Legal System'},
                          {key: 'mHSubstUse', label: 'MH/Substance Use'},
                          {key: 'cognitiveAbilityStyle', label: 'Cognitive Ability/Style'},
                          {key: 'healthAbility', label: 'Health/Ability'},
                          {key: 'appearance', label: 'Appearance'},
                          {key: 'age', label: 'Age'},
                          {key: 'raisedBy.', label: 'Raised By'},
                          {key: 'guardiansMaritalStatus', label: 'Guardians Marital Status'},
                          {key: 'parentalStatus', label: 'Parental Status'},
                          {key: 'maritalStatus', label: 'Marital Status'},
                          {key: 'sexualOrientation', label: 'Sexual Orientation'},
                          {key: 'genderID', label: 'Gender ID'},
                          {key: 'genderExpression.', label: 'Gender Expression'},
                          {key: 'sexAtBirth', label: 'Sex At Birth'},
                          {key: 'uniqueHistory', label: 'Unique History'},
                        ],
                        sets: [
                          {
                            key: 'pre-small',
                            label: 'P1',
                            values: {
                              educLevel: tempData[12][0].value,
                              guardiansEduc: tempData[12][33].value,
                              occupation: tempData[12][32].value,
                              guardiansOccup: tempData[12][31].value,
                              householdIncome: tempData[12][30].value,
                              childhoodIncome: tempData[12][29].value,
                              guardiansChildHouseIncome: tempData[12][28].value,
                              access: tempData[12][27].value,
                              guardiansAccess: tempData[12][26].value,
                              race: tempData[12][25].value,
                              ethnicity: tempData[12][24].value,
                              nationOfOriginCitizenship: tempData[12][23].value,
                              languages: tempData[12][22].value,
                              familyReligion: tempData[12][21].value,
                              chosenReligion: tempData[12][20].value,
                              politics: tempData[12][19].value,
                              geoRegion: tempData[12][18].value,
                              impactHistTimes: tempData[12][17].value,
                              relationToMilitary: tempData[12][16].value,
                              relationLegalSystem: tempData[12][15].value,
                              mHSubstUse: tempData[12][14].value,
                              cognitiveAbilityStyle: tempData[12][13].value,
                              healthAbility: tempData[12][12].value,
                              appearance: tempData[12][11].value,
                              age: tempData[12][10].value,
                              raisedBy: tempData[12][9].value,
                              guardiansMaritalStatus: tempData[12][8].value,
                              parentalStatus: tempData[12][7].value,
                              maritalStatus: tempData[12][6].value,
                              sexualOrientation: tempData[12][5].value,
                              genderID: tempData[12][4].value,
                              genderExpression: tempData[12][3].value,
                              sexAtBirth: tempData[12][2].value,
                              uniqueHistory: tempData[12][1].value,
                            },
                          },
                          {
                            key: 'pre-large',
                            label: 'P2',
                            values: {
                              educLevel: tempData[13][0].value,
                              guardiansEduc: tempData[13][33].value,
                              occupation: tempData[13][32].value,
                              guardiansOccup: tempData[13][31].value,
                              householdIncome: tempData[13][30].value,
                              childhoodIncome: tempData[13][29].value,
                              guardiansChildHouseIncome: tempData[13][28].value,
                              access: tempData[13][27].value,
                              guardiansAccess: tempData[13][26].value,
                              race: tempData[13][25].value,
                              ethnicity: tempData[13][24].value,
                              nationOfOriginCitizenship: tempData[13][23].value,
                              languages: tempData[13][22].value,
                              familyReligion: tempData[13][21].value,
                              chosenReligion: tempData[13][20].value,
                              politics: tempData[13][19].value,
                              geoRegion: tempData[13][18].value,
                              impactHistTimes: tempData[13][17].value,
                              relationToMilitary: tempData[13][16].value,
                              relationLegalSystem: tempData[13][15].value,
                              mHSubstUse: tempData[13][14].value,
                              cognitiveAbilityStyle: tempData[13][13].value,
                              healthAbility: tempData[13][12].value,
                              appearance: tempData[13][11].value,
                              age: tempData[13][10].value,
                              raisedBy: tempData[13][9].value,
                              guardiansMaritalStatus: tempData[13][8].value,
                              parentalStatus: tempData[13][7].value,
                              maritalStatus: tempData[13][6].value,
                              sexualOrientation: tempData[13][5].value,
                              genderID: tempData[13][4].value,
                              genderExpression: tempData[13][3].value,
                              sexAtBirth: tempData[13][2].value,
                              uniqueHistory: tempData[13][1].value,
                            },
                          },
                        ],
                      }}
                />      
                <Box style={{ marginTop: '30px', marginBottom: '30px' }}>Subject 4 - Current Matrix</Box>
                    <Radar
                      width={1400}
                      height={800}
                      padding={70}
                      domainMax={7}
                      highlighted={null}
                      onHover={(point) => {
                        if (point) {
                          console.log('hovered over a data point');
                        } else {
                          console.log('not over anything');
                        }
                      }}
                      data={{
                        variables: [
                          {key: 'educLevel', label: 'Educational Level'},
                          {key: 'guardiansEduc.', label: 'Guardians Educ.'},
                          {key: 'occupation', label: 'Occupation'},
                          {key: 'guardiansOccup', label: 'Guardians Occupation'},
                          {key: 'householdIncome', label: 'Household Income'},
                          {key: 'childhoodIncome', label: 'Childhood Household Income (w/ guardian)'},
                          {key: 'guardiansChildHouseIncome', label: 'Guardians Childhood House Income'},
                          {key: 'access', label: 'Access'},
                          {key: 'guardiansAccess', label: 'Guardians Access'},
                          {key: 'race', label: 'Race'},
                          {key: 'ethnicity', label: 'Ethnicity'},
                          {key: 'nationOfOriginCitizenship', label: 'Nation Of Origin Citizenship'},
                          {key: 'languages', label: 'Languages'},
                          {key: 'familyReligion.', label: 'Family Religion'},
                          {key: 'chosenReligion', label: 'Chosen Religion'},
                          {key: 'politics', label: 'Politics'},
                          {key: 'geoRegion', label: 'Geo Region'},
                          {key: 'impactHistTimes', label: 'Impact of Historical Times'},
                          {key: 'relationToMilitary', label: 'Relation to Military'},
                          {key: 'relationLegalSystem.', label: 'Relation to Legal System'},
                          {key: 'mHSubstUse', label: 'MH/Substance Use'},
                          {key: 'cognitiveAbilityStyle', label: 'Cognitive Ability/Style'},
                          {key: 'healthAbility', label: 'Health/Ability'},
                          {key: 'appearance', label: 'Appearance'},
                          {key: 'age', label: 'Age'},
                          {key: 'raisedBy.', label: 'Raised By'},
                          {key: 'guardiansMaritalStatus', label: 'Guardians Marital Status'},
                          {key: 'parentalStatus', label: 'Parental Status'},
                          {key: 'maritalStatus', label: 'Marital Status'},
                          {key: 'sexualOrientation', label: 'Sexual Orientation'},
                          {key: 'genderID', label: 'Gender ID'},
                          {key: 'genderExpression.', label: 'Gender Expression'},
                          {key: 'sexAtBirth', label: 'Sex At Birth'},
                          {key: 'uniqueHistory', label: 'Unique History'},
                        ],
                        sets: [
                          {
                            key: 'post-small',
                            label: 'P1',
                            values: {
                              educLevel: tempData[14][0].value,
                              guardiansEduc: tempData[14][33].value,
                              occupation: tempData[14][32].value,
                              guardiansOccup: tempData[14][31].value,
                              householdIncome: tempData[14][30].value,
                              childhoodIncome: tempData[14][29].value,
                              guardiansChildHouseIncome: tempData[14][28].value,
                              access: tempData[14][27].value,
                              guardiansAccess: tempData[14][26].value,
                              race: tempData[14][25].value,
                              ethnicity: tempData[14][24].value,
                              nationOfOriginCitizenship: tempData[14][23].value,
                              languages: tempData[14][22].value,
                              familyReligion: tempData[14][21].value,
                              chosenReligion: tempData[14][20].value,
                              politics: tempData[14][19].value,
                              geoRegion: tempData[14][18].value,
                              impactHistTimes: tempData[14][17].value,
                              relationToMilitary: tempData[14][16].value,
                              relationLegalSystem: tempData[14][15].value,
                              mHSubstUse: tempData[14][14].value,
                              cognitiveAbilityStyle: tempData[14][13].value,
                              healthAbility: tempData[14][12].value,
                              appearance: tempData[14][11].value,
                              age: tempData[14][10].value,
                              raisedBy: tempData[14][9].value,
                              guardiansMaritalStatus: tempData[14][8].value,
                              parentalStatus: tempData[14][7].value,
                              maritalStatus: tempData[14][6].value,
                              sexualOrientation: tempData[14][5].value,
                              genderID: tempData[14][4].value,
                              genderExpression: tempData[14][3].value,
                              sexAtBirth: tempData[14][2].value,
                              uniqueHistory: tempData[14][1].value,
                            },
                          },
                          {
                            key: 'post-large',
                            label: 'P2',
                            values: {
                              educLevel: tempData[15][0].value,
                              guardiansEduc: tempData[15][33].value,
                              occupation: tempData[15][32].value,
                              guardiansOccup: tempData[15][31].value,
                              householdIncome: tempData[15][30].value,
                              childhoodIncome: tempData[15][29].value,
                              guardiansChildHouseIncome: tempData[15][28].value,
                              access: tempData[15][27].value,
                              guardiansAccess: tempData[15][26].value,
                              race: tempData[15][25].value,
                              ethnicity: tempData[15][24].value,
                              nationOfOriginCitizenship: tempData[15][23].value,
                              languages: tempData[15][22].value,
                              familyReligion: tempData[15][21].value,
                              chosenReligion: tempData[15][20].value,
                              politics: tempData[15][19].value,
                              geoRegion: tempData[15][18].value,
                              impactHistTimes: tempData[15][17].value,
                              relationToMilitary: tempData[15][16].value,
                              relationLegalSystem: tempData[15][15].value,
                              mHSubstUse: tempData[15][14].value,
                              cognitiveAbilityStyle: tempData[15][13].value,
                              healthAbility: tempData[15][12].value,
                              appearance: tempData[15][11].value,
                              age: tempData[15][10].value,
                              raisedBy: tempData[15][9].value,
                              guardiansMaritalStatus: tempData[15][8].value,
                              parentalStatus: tempData[15][7].value,
                              maritalStatus: tempData[15][6].value,
                              sexualOrientation: tempData[15][5].value,
                              genderID: tempData[15][4].value,
                              genderExpression: tempData[15][3].value,
                              sexAtBirth: tempData[15][2].value,
                              uniqueHistory: tempData[15][1].value,
                            },
                          },
                        ],
                      }}
                />
                <Container className="footnotes-bottom-after-one">
                  <Container className="footnotes-header">Footnotes:</Container>
                    
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
            </Container>*/
    };

    return (
        <div className="container">

            <AppBar position="static" 
                style={{ 
                    flexDirection: 'row', 
                    float: 'right',
                    backgroundColor: 'white',
                    border: 'none',
                    color: 'black',
                    display: 'block',
                    padding: '15px',
                    boxShadow: 'none !important'

                }}
            >
              <Link to="/" style={{ fontSize: '22px', marginTop: '30px', padding: '25px', textDecoration: 'none' }}>The Social Matrix</Link>
              <Link to="/identity" style={{ fontSize: '22px', marginTop: '30px', padding: '25px', textDecoration: 'none' }}>Areas of Identity</Link>
              <Link to="/faq" style={{ fontSize: '22px', marginTop: '30px', padding: '25px', textDecoration: 'none' }}>FAQ's</Link>
              <Link to="/uses" style={{ fontSize: '22px', marginTop: '30px', padding: '25px', textDecoration: 'none' }}>Uses</Link>
              <Link to="/intro" style={{ fontSize: '22px', marginTop: '30px', padding: '25px', textDecoration: 'none' }}>Take Survey</Link>
              <Link to="/references" style={{ fontSize: '22px', marginTop: '30px', padding: '25px', textDecoration: 'none' }}>References</Link>
              <Link to="/contact" style={{ fontSize: '22px', marginTop: '30px', padding: '25px', textDecoration: 'none' }}>Contact</Link>
            </AppBar>
            <Typography variant="h2" style={{ marginBottom: '20px', paddingTop: '50px' }} align="center">Social Matrix Project</Typography>

            <div className="" style={{ marginTop: '20px', marginBottom: '20px' }}>Examples:</div>
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
     

    </div>


  )
};

export default Home;