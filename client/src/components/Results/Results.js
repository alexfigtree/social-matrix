import React, { useState, useEffect } from 'react';
import { Box, Container, Divider, Typography} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import Radar from 'react-d3-radar';
//import data from './data/data.js';
import * as d3 from "d3";
//import * as AllMain from './scripts/main.js';
//import * as AllRequire from './scripts/require.js'
//import { RadarChart } from '../../scripts/RadarChart.js'

//import { draw } from '../../scripts/RadarChart.js'
//import FormPostContainer from './FormPostContainer';
//import useStyles from '../styles';

//import styles from '../style.css';

const Results = () => {
 const [data, setData] = useState(localStorage.getItem('matrixData'));
 const [footnotes, setFootnotes] = useState(localStorage.getItem('footnotes'));
  useEffect(() => {
      var retrievedObject = localStorage.getItem('matrixData');
      console.log('retrievedObject: Results', JSON.parse(retrievedObject));


      var retrievedFootnotes = localStorage.getItem('footnotes');
      console.log('retrievedFootnotes', JSON.parse(retrievedFootnotes));
  }, []);

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

        <Box>{data}</Box>

        <Box>{footnotes}</Box>

        <Box style={{ marginTop: '30px', marginBottom: '30px' }}>PRE/EARLIER</Box>
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
                  educLevel: JSON.parse(data)[0][0].value,
                  guardiansEduc: JSON.parse(data)[0][33].value,
                  occupation: JSON.parse(data)[0][32].value,
                  guardiansOccup: JSON.parse(data)[0][31].value,
                  householdIncome: JSON.parse(data)[0][30].value,
                  childhoodIncome: JSON.parse(data)[0][29].value,
                  guardiansChildHouseIncome: JSON.parse(data)[0][28].value,
                  access: JSON.parse(data)[0][27].value,
                  guardiansAccess: JSON.parse(data)[0][26].value,
                  race: JSON.parse(data)[0][25].value,
                  ethnicity: JSON.parse(data)[0][24].value,
                  nationOfOriginCitizenship: JSON.parse(data)[0][23].value,
                  languages: JSON.parse(data)[0][22].value,
                  familyReligion: JSON.parse(data)[0][21].value,
                  chosenReligion: JSON.parse(data)[0][20].value,
                  politics: JSON.parse(data)[0][19].value,
                  geoRegion: JSON.parse(data)[0][18].value,
                  impactHistTimes: JSON.parse(data)[0][17].value,
                  relationToMilitary: JSON.parse(data)[0][16].value,
                  relationLegalSystem: JSON.parse(data)[0][15].value,
                  mHSubstUse: JSON.parse(data)[0][14].value,
                  cognitiveAbilityStyle: JSON.parse(data)[0][13].value,
                  healthAbility: JSON.parse(data)[0][12].value,
                  appearance: JSON.parse(data)[0][11].value,
                  age: JSON.parse(data)[0][10].value,
                  raisedBy: JSON.parse(data)[0][9].value,
                  guardiansMaritalStatus: JSON.parse(data)[0][8].value,
                  parentalStatus: JSON.parse(data)[0][7].value,
                  maritalStatus: JSON.parse(data)[0][6].value,
                  sexualOrientation: JSON.parse(data)[0][5].value,
                  genderID: JSON.parse(data)[0][4].value,
                  genderExpression: JSON.parse(data)[0][3].value,
                  sexAtBirth: JSON.parse(data)[0][2].value,
                  uniqueHistory: JSON.parse(data)[0][1].value,
                },
              },
              {
                key: 'pre-large',
                label: 'P2',
                values: {
                  educLevel: JSON.parse(data)[1][0].value,
                  guardiansEduc: JSON.parse(data)[1][33].value,
                  occupation: JSON.parse(data)[1][32].value,
                  guardiansOccup: JSON.parse(data)[1][31].value,
                  householdIncome: JSON.parse(data)[1][30].value,
                  childhoodIncome: JSON.parse(data)[1][29].value,
                  guardiansChildHouseIncome: JSON.parse(data)[1][28].value,
                  access: JSON.parse(data)[1][27].value,
                  guardiansAccess: JSON.parse(data)[1][26].value,
                  race: JSON.parse(data)[1][25].value,
                  ethnicity: JSON.parse(data)[1][24].value,
                  nationOfOriginCitizenship: JSON.parse(data)[1][23].value,
                  languages: JSON.parse(data)[1][22].value,
                  familyReligion: JSON.parse(data)[1][21].value,
                  chosenReligion: JSON.parse(data)[1][20].value,
                  politics: JSON.parse(data)[1][19].value,
                  geoRegion: JSON.parse(data)[1][18].value,
                  impactHistTimes: JSON.parse(data)[1][17].value,
                  relationToMilitary: JSON.parse(data)[1][16].value,
                  relationLegalSystem: JSON.parse(data)[1][15].value,
                  mHSubstUse: JSON.parse(data)[1][14].value,
                  cognitiveAbilityStyle: JSON.parse(data)[1][13].value,
                  healthAbility: JSON.parse(data)[1][12].value,
                  appearance: JSON.parse(data)[1][11].value,
                  age: JSON.parse(data)[1][10].value,
                  raisedBy: JSON.parse(data)[1][9].value,
                  guardiansMaritalStatus: JSON.parse(data)[1][8].value,
                  parentalStatus: JSON.parse(data)[1][7].value,
                  maritalStatus: JSON.parse(data)[1][6].value,
                  sexualOrientation: JSON.parse(data)[1][5].value,
                  genderID: JSON.parse(data)[1][4].value,
                  genderExpression: JSON.parse(data)[1][3].value,
                  sexAtBirth: JSON.parse(data)[1][2].value,
                  uniqueHistory: JSON.parse(data)[1][1].value,
                },
              },
            ],
          }}
        />
        
        <Box style={{ marginTop: '30px', marginBottom: '30px' }}>POST/LATER</Box>
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
                  educLevel: JSON.parse(data)[2][0].value,
                  guardiansEduc: JSON.parse(data)[2][33].value,
                  occupation: JSON.parse(data)[2][32].value,
                  guardiansOccup: JSON.parse(data)[2][31].value,
                  householdIncome: JSON.parse(data)[2][30].value,
                  childhoodIncome: JSON.parse(data)[2][29].value,
                  guardiansChildHouseIncome: JSON.parse(data)[2][28].value,
                  access: JSON.parse(data)[2][27].value,
                  guardiansAccess: JSON.parse(data)[2][26].value,
                  race: JSON.parse(data)[2][25].value,
                  ethnicity: JSON.parse(data)[2][24].value,
                  nationOfOriginCitizenship: JSON.parse(data)[2][23].value,
                  languages: JSON.parse(data)[2][22].value,
                  familyReligion: JSON.parse(data)[2][21].value,
                  chosenReligion: JSON.parse(data)[2][20].value,
                  politics: JSON.parse(data)[2][19].value,
                  geoRegion: JSON.parse(data)[2][18].value,
                  impactHistTimes: JSON.parse(data)[2][17].value,
                  relationToMilitary: JSON.parse(data)[2][16].value,
                  relationLegalSystem: JSON.parse(data)[2][15].value,
                  mHSubstUse: JSON.parse(data)[2][14].value,
                  cognitiveAbilityStyle: JSON.parse(data)[2][13].value,
                  healthAbility: JSON.parse(data)[2][12].value,
                  appearance: JSON.parse(data)[2][11].value,
                  age: JSON.parse(data)[2][10].value,
                  raisedBy: JSON.parse(data)[2][9].value,
                  guardiansMaritalStatus: JSON.parse(data)[2][8].value,
                  parentalStatus: JSON.parse(data)[2][7].value,
                  maritalStatus: JSON.parse(data)[2][6].value,
                  sexualOrientation: JSON.parse(data)[2][5].value,
                  genderID: JSON.parse(data)[2][4].value,
                  genderExpression: JSON.parse(data)[2][3].value,
                  sexAtBirth: JSON.parse(data)[2][2].value,
                  uniqueHistory: JSON.parse(data)[2][1].value,
                },
              },
              {
                key: 'post-large',
                label: 'P2',
                values: {
                  educLevel: JSON.parse(data)[3][0].value,
                  guardiansEduc: JSON.parse(data)[3][33].value,
                  occupation: JSON.parse(data)[3][32].value,
                  guardiansOccup: JSON.parse(data)[3][31].value,
                  householdIncome: JSON.parse(data)[3][30].value,
                  childhoodIncome: JSON.parse(data)[3][29].value,
                  guardiansChildHouseIncome: JSON.parse(data)[3][28].value,
                  access: JSON.parse(data)[3][27].value,
                  guardiansAccess: JSON.parse(data)[3][26].value,
                  race: JSON.parse(data)[3][25].value,
                  ethnicity: JSON.parse(data)[3][24].value,
                  nationOfOriginCitizenship: JSON.parse(data)[3][23].value,
                  languages: JSON.parse(data)[3][22].value,
                  familyReligion: JSON.parse(data)[3][21].value,
                  chosenReligion: JSON.parse(data)[3][20].value,
                  politics: JSON.parse(data)[3][19].value,
                  geoRegion: JSON.parse(data)[3][18].value,
                  impactHistTimes: JSON.parse(data)[3][17].value,
                  relationToMilitary: JSON.parse(data)[3][16].value,
                  relationLegalSystem: JSON.parse(data)[3][15].value,
                  mHSubstUse: JSON.parse(data)[3][14].value,
                  cognitiveAbilityStyle: JSON.parse(data)[3][13].value,
                  healthAbility: JSON.parse(data)[3][12].value,
                  appearance: JSON.parse(data)[3][11].value,
                  age: JSON.parse(data)[3][10].value,
                  raisedBy: JSON.parse(data)[3][9].value,
                  guardiansMaritalStatus: JSON.parse(data)[3][8].value,
                  parentalStatus: JSON.parse(data)[3][7].value,
                  maritalStatus: JSON.parse(data)[3][6].value,
                  sexualOrientation: JSON.parse(data)[3][5].value,
                  genderID: JSON.parse(data)[3][4].value,
                  genderExpression: JSON.parse(data)[3][3].value,
                  sexAtBirth: JSON.parse(data)[3][2].value,
                  uniqueHistory: JSON.parse(data)[3][1].value,
                },
              },
            ],
          }}
        />

    </div>


  );
}

export default Results;