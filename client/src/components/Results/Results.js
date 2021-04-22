import React, { useState, useEffect } from 'react';
import { Box, Container, Divider, Typography} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

//import data from './data/data.js';
//import * as d3 from "d3";
//import * as AllMain from './scripts/main.js';
//import * as AllRequire from './scripts/require.js'
//import { RadarChart } from './scripts/RadarChart.js'

//import FormPostContainer from './FormPostContainer';
//import useStyles from '../styles';

//import styles from '../style.css';

const Results = () => {
 const [resultsData, setResultsData] = useState(localStorage.getItem('matrixData'));
  useEffect(() => {
      var retrievedObject = localStorage.getItem('matrixData');
      console.log('retrievedObject: Results', JSON.parse(retrievedObject));
  }, []);


  return (
    <div className="container">
        <Typography variant="h2" align="center">Social Matrix Project - Results</Typography>

        <Box>{resultsData}</Box>

    </div>


  )
};

export default Results;