import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

import useStyles from '../Form/styles';
import { createPost, updatePost } from '../../actions/posts';
import { createMatrix, updateMatrix } from '../../actions/posts';
import CheckboxField from '../Form/CheckboxField';
import { questionData } from '../Form/QuestionData.js';

//q2
const GuardiansEduc = () => {
  const history = useHistory();
  const [currentId, setCurrentId] = useState(0);
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });

  const [matrixData, setMatrixData] = useState({ matrixData: {} });
  const matrix = useSelector((state) => (currentId ? state.matrixData.find((matrixData) => matrixData._id === currentId) : null));
  
  const dispatch = useDispatch();
  const classes = useStyles();
/*  const [q1_2, setq1_2] = useState(null);
  const [q1_3, setq1_3] = useState(null);
  const [q1_4, setq1_4] = useState(null);
  const [q1_5, setq1_5] = useState(null);*/

  useEffect(() => {
    if (matrix) setMatrixData(matrix);
  }, [matrix]);


    useEffect(() => {
        var retrievedObject = localStorage.getItem('matrixData');
        console.log('retrievedObject during q2 Guard Educ: ', JSON.parse(retrievedObject));
    //let q1_2 = localStorage.getItem("container1.2");

    }, []);

  const clear = () => {
    setCurrentId(0);
    setMatrixData({ matrixData: {} });
  };

  const handleSubmit = async (e) => {
    let tempData = matrixData;

    //let educPreSmall = tempData[0];
    //let educPreLarge = tempData[1];
    //let educPostSmall = tempData[2];
    //let educPostLarge = tempData[3];

    //pre: 1.3, 1.5
    //first [0] corresponds for first array
    //second [0] corresponds to educ level
/*
    console.log('educPreSmall[0]', tempData[0][0].value);
    let q1_pre = [...q1_3.split(','), ...q1_5.split(',')];
    //console.log('q1_pre', q1_pre);

    let q1_pre_small = Math.min(...q1_pre);
    let q1_pre_large = Math.max(...q1_pre);
    console.log('q1_pre_small', q1_pre_small);
    console.log('q1_pre_large', q1_pre_large);
    
    //post 1.2, 1.4
    let q1_post = [...q1_2.split(','), ...q1_4.split(',')];
    //console.log('q1_post', q1_post);
    
    let q1_post_small = Math.min(...q1_post);
    let q1_post_large = Math.max(...q1_post);
    console.log('q1_post_small', q1_post_small);
    console.log('q1_post_large', q1_post_large);


    tempData[0][0].value = q1_pre_small;
    tempData[1][0].value = q1_pre_large;
    tempData[2][0].value = q1_post_small;
    tempData[3][0].value = q1_post_large;*/

    //questionData = tempData;
    //console.log("NEW QUESTION DATA", tempData);
    //console.log("TYPEOF NEW QUESTION DATA", typeof tempData);
    //console.log('educPreSmall', educPreSmall);
/*    console.log('hey q12', q1_2);
    console.log('hey q13', q1_3);
    console.log('hey q14', q1_4);
    console.log('hey q15', q1_5);
    e.preventDefault();*/
    setMatrixData({ tempData });
    //setMatrixData({ ...matrixData, matrixData: tempData });

    //console.log("what is my matrix data after submitting?", matrixData);
    e.preventDefault();

    //console.log("WHAT IS CURRENT ID", currentId);

    if (currentId === 0) {
      dispatch(createMatrix(matrixData));
      clear();
    } else {
      dispatch(updateMatrix(currentId, matrixData));
      clear();
    }
    history.push('/q3');
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

        <Typography variant="h5">Guardians’ Education</Typography>

        
        <Link to="/q3"><Button onClick={handleSubmit} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Next</Button></Link>
      </form>

   
    </Paper>
  );
};

export default GuardiansEduc;
