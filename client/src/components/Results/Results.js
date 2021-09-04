/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Box, Container, Divider, Typography} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import * as d3 from "d3";
import * as data from '../../data/dataBlank.js';

import useStyles from '../../styles';

import html2pdf from 'html2pdf.js';

import NavBar from '../NavBar.js';

import { getMatrix, createMatrix, updateMatrix, createFootnotes, getFootnotes, updateFootnotes } from '../../actions/posts';

const Results = () => {
    const [data, setData] = useState(localStorage.getItem('matrixData'));
    const [currentId, setCurrentId] = useState(0);
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });

    const [matrixData, setMatrixData] = useState(JSON.parse(localStorage.getItem('matrixData')));
    const [footnotesData, setFootnotes] = useState(localStorage.getItem('footnotes'));
 
    const [educ, setEduc] = useState('');
    const [uniqueHistory, setUniqueHistory] = useState('');
    const [sexAtBirth, setSexAtBirth] = useState('');
    const [genderExpression, setGenderExpression] = useState('');
    const [sexualOrientation, setSexualOrientation] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [parentalStatus, setParentalStatus] = useState('');
    const [genderID, setGenderID] = useState('');
    const [guardiansMaritalStatus, setGuardiansMaritalStatus] = useState('');
    
    const [raisedBy, setRaisedBy] = useState('');
    const [age, setAge] = useState('');
    const [appearance, setAppearance] = useState('');
    const [healthAbility, setHealthAbility] = useState('');
    const [cognitiveAbilityStyle, setCognitiveAbilityStyle] = useState('');
    const [mHSubstanceUse, setMHSubstanceUse] = useState('');
    const [relationLegalSystem, setRelationLegalSystem] = useState('');
    const [relationMilitary, setRelationMilitary] = useState('');
    const [impactHistTimes, setImpactHistTimes] = useState('');
    const [geoRegion, setGeoRegion] = useState('');
    const [politics, setPolitics] = useState('');
    const [chosenReligion, setChosenReligion] = useState('');

    const [familyReligion, setFamilyReligion] = useState('');
    const [languagesSpoken, setLanguagesSpoken] = useState('');
    const [noc, setNOC] = useState('');
    const [ethnicity, setEthnicity] = useState('');
    const [race, setRace] = useState('');
    const [guardiansAccess, setGuardiansAccess] = useState('');
    const [access, setAccess] = useState('');
    const [guardiansChildhoodIncome, setGuardiansChildhoodIncome] = useState('');
    const [childhoodIncome, setChildhoodIncome] = useState('');
    const [income, setIncome] = useState('');
    const [guardiansOccupation, setGuardiansOccupation] = useState('');
    const [occupation, setOccupation] = useState('');
    const [guardiansEduc, setGuardiansEduc] = useState('');
   
    var svgBody1;
    var svgBody2;

    const classes = useStyles();

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
        var combinedData = matrixData;

        //parse footnotes for tooltips:
        var footnotesParsed = JSON.parse(footnotesData);

        for (let i = 0; i < combinedData.length; i++) {
            for (let j = 0; j < 34; j++) {

                footnotesParsed.forEach(function (arrayItem) {
                    if(Object.keys(arrayItem).find(key => arrayItem[parseInt(key)].question === combinedData[i][j].axis)){
                        combinedData[i][j].footnote = arrayItem[parseInt(j)].value;
                    }

                });

            }

        }

        //collect specific footnotes for text display under matrices:
        JSON.parse(footnotesData).map((item) =>
          item.forEach(element => {
            if(element.question == "Educ."){
              setEduc(element.value)
            }
            if(element.question == "Unique History"){
              setUniqueHistory(element.value)
            }
            if(element.question == "Sex Assigned at Birth"){
              setSexAtBirth(element.value)
            }
            if(element.question == "Gender Expression"){
              setGenderExpression(element.value)
            }
            if(element.question == "Sexual Orientation"){
              setSexualOrientation(element.value)
            }
            if(element.question == "Marital Status"){
              setMaritalStatus(element.value)
            }
            if(element.question == "Parental Status"){
              setParentalStatus(element.value)
            }
            if(element.question == "Gender ID"){
              setGenderID(element.value)
            }
            if(element.question == "Guardians’ Marital Status"){
              setGuardiansMaritalStatus(element.value)
            }
            if(element.question == "Raised By"){
              setRaisedBy(element.value)
            }
            if(element.question == "Age"){
              setAge(element.value)
            }
            if(element.question == "Appearance"){
              setAppearance(element.value)
            }
            if(element.question == "Health/Ability"){
              setHealthAbility(element.value)
            }
            if(element.question == "Cognitive Ability/Style"){
              setCognitiveAbilityStyle(element.value)
            }
            if(element.question == "MH/Substance Use"){
              setMHSubstanceUse(element.value)
            }
            if(element.question == "Relation to Legal System"){
              setRelationLegalSystem(element.value)
            }
            if(element.question == "Relation to Military"){
              setRelationMilitary(element.value)
            }
            if(element.question == "Impact of Historical Times"){
              setImpactHistTimes(element.value)
            }
            if(element.question == "Geo. Region"){
              setGeoRegion(element.value)
            }
            if(element.question == "Politics"){
              setPolitics(element.value)
            }
            if(element.question == "Chosen Religion"){
              setChosenReligion(element.value)
            }
            if(element.question == "Family Religion"){
              setFamilyReligion(element.value)
            }
            if(element.question == "Language(s) Spoken"){
              setLanguagesSpoken(element.value)
            }
            if(element.question == "Nation of Origin / Citizenship"){
              setNOC(element.value)
            }
            if(element.question == "Ethnicity / Tribe"){
              setEthnicity(element.value)
            }
            if(element.question == "Race(s)"){
              setRace(element.value)
            }
            if(element.question == "Guardians’ Access"){
              setGuardiansAccess(element.value)
            }
            if(element.question == "Access"){
              setAccess(element.value)
            }
            if(element.question == "Guardian’s Childhood House. Income"){
              setGuardiansChildhoodIncome(element.value)
            }
            if(element.question == "Childhood House. Income w. Guardian"){
              setChildhoodIncome(element.value)
            }
            if(element.question == "Household Income (Now)"){
              setIncome(element.value)
            }
            if(element.question == "Guardians’ Occupation"){
              setGuardiansOccupation(element.value)
            }
            if(element.question == "Occupation(s)"){
              setOccupation(element.value)
            }
            if(element.question == "Guardians’ Educ."){
              setGuardiansEduc(element.value)
            }

          })
        );

        var d = combinedData;

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

        ////// Volunteer #1 - Post ////////
        var svg2 = d3.select('#body2')
            .append('svg')
            .attr("width", w+400)
            .attr("height", 0);

    }, []);

    const matrix = useSelector((state) => (currentId ? state.matrixData.find((matrixData) => matrixData._id === currentId) : null));
    const footnotes = useSelector((state) => (currentId ? state.footnotes.find((footnotesData) => footnotes._id === currentId) : null));

    const dispatch = useDispatch();

    if (currentId === 0) {

      dispatch(createMatrix(matrixData));
      dispatch(createFootnotes(footnotesData));
      //clear();
    } else {
      dispatch(updateMatrix(currentId, matrixData));
      dispatch(updateFootnotes(currentId, footnotesData));
      //clear();
    }


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

    const download = () => {
      var element = document.getElementById('results-container');

      var opt = {
        filename: 'my-social-matrix.pdf',
        margin: [0,0,1,0],
        pagebreak: { mode: 'avoid-all', before: '#footnotes-header' }
      };

      html2pdf().set(opt).from(element).save();
    };

  return (
    <div className="container" id="results-container">
        <NavBar />
        <br />
        <Typography variant="h2" align="center" className={classes.test}>Social Matrix Diagram - Results</Typography>

        <div>
          <h1>Your generated social matrix:</h1>

          <a
            href="/results"
            download
            onClick={e => download(e)}
          >
            Download Your Results Here
          </a>
          
          <br />
          <br />
          <br />
          <br />
          <div id="body">
             <div className="matrix-header" style={{ marginLeft: '-40px'}}>Earlier Matrix:</div>
            <div id="chart" className="svg-align" style={{ marginLeft: '-200px' }}></div>
          </div>
     
          <br />
          <br />
          <br />
          <br />
          <div id="body2">
            <div className="matrix-header" style={{ marginLeft: '-40px' }}>Current Matrix:</div>
            <div id="chart2" className="svg-align" style={{ marginLeft: '-200px' }}></div>
          </div>


          <div className="footnotes-bottom">
            <div className="footnotes-header">Footnotes:</div>
            1) <i>Educ. Level: </i>{educ}
            <br />
            2) <i>Guardians’ Educ: </i> {guardiansEduc}
            <br />
            3) <i>Occupation(s): </i> {occupation}
            <br /> 
            4) <i>Guardians’ Occupation: </i> {guardiansOccupation}
            <br />
            5) <i>Household Income(Now): </i> {income}
            <br />
            6) <i>Childhood House. Income w. Guardian: </i> {childhoodIncome}
            <br />
            7) <i>Guardian’s Childhood House. Income: </i> {guardiansChildhoodIncome}
            <br /> 
            8) <i>Access: </i> {access}
            <br />
            9) <i>Guardians’ Access: </i> {guardiansAccess}
            <br />
            10) <i>Race(s): </i> {race}
            <br />
            11) <i>Ethnicity / Tribe: </i> {ethnicity}
            <br /> 
            12) <i>Nation of Origin/ Citizenship: </i>  {noc}
            <br />
            13) <i>Language(s) Spoken: </i> {languagesSpoken}
            <br />
            14) <i>Family Religion: </i> {familyReligion}
            <br /> 
            15) <i>Chosen Religion: </i> {chosenReligion}
            <br />
            16) <i>Politics: </i> {politics}
            <br /> 
            17) <i>Geo. Region: </i> {geoRegion} 
            <br />
            18) <i>Impact of Historical Times: </i> {impactHistTimes}
            <br />
            19) <i>Relation to Military: </i> {relationMilitary}
            <br />
            20) <i>Relation to Legal System: </i> {relationLegalSystem}
            <br /> 
            21) <i>MH/Subst. Abuse: </i> {mHSubstanceUse}
            <br /> 
            22) <i>Cognitive Ability/Style: </i> {cognitiveAbilityStyle}
            <br />
            23) <i>Health/Ability: </i> {healthAbility}
            <br /> 
            24) <i>Appearance: </i> {appearance}
            <br />
            25) <i>Age: </i> {age}
            <br /> 
            26) <i>Raised By: </i> {raisedBy}
            <br />
            27) <i>Guardians’ Marital Status: </i>{guardiansMaritalStatus}
            <br />
            28) <i>Parental Status: </i>{parentalStatus}
            <br />
            29) <i>Marital Status: </i>{maritalStatus}
            <br /> 
            30) <i>Sexual Orientation: </i>{sexualOrientation}
            <br />
            31) <i>Gender ID: </i>{genderID}
            <br /> 
            32) <i>Gender Expression: </i>{genderExpression}
            <br />
            33) <i>Sex Assigned at Birth: </i>{sexAtBirth}
            <br /> 
            34) <i>Unique History: </i>{uniqueHistory}
            <br /> 
            <br /> 
          </div>
        </div>

    </div>


  );
}

export default Results;