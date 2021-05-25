import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

import useStyles from '../Form/styles';
import { createPost, updatePost } from '../../actions/posts';
import CheckboxField from '../Form/CheckboxField';
import CheckboxInputField_Substance6_29 from '../Form/CheckboxInputField_Substance6_29';
import CheckboxInputField_Substance6_30 from '../Form/CheckboxInputField_Substance6_30';
import CheckboxInputField_Substance6_33 from '../Form/CheckboxInputField_Substance6_33';


//q21
const MHSubstUse = () => {
  const history = useHistory();
  const [currentId, setCurrentId] = useState(0);
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  const [matrixData, setMatrixData] = useState(JSON.parse(localStorage.getItem('matrixData')));
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);


  useEffect(() => {
      var retrievedObject = localStorage.getItem('matrixData');
      console.log('retrievedObject', JSON.parse(retrievedObject));

      var retrievedFootnotes = localStorage.getItem('footnotes');
      console.log('retrievedFootnotes', JSON.parse(retrievedFootnotes));
  }, []);


  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let tempData = matrixData;

    const q6_32 = localStorage.getItem("container6.32"); //pre
    const q6_35 = localStorage.getItem("container6.35"); //pre
    const q6_31 = localStorage.getItem("container6.31"); //post
    const q6_34 = localStorage.getItem("container6.34"); //post

    let domain21_pre = [...q6_32.split(','),...q6_35.split(',')];
    let domain21_pre_small = Math.min(...domain21_pre);
    let domain21_pre_large = Math.max(...domain21_pre);

    let domain21_post = [...q6_31.split(','),...q6_34.split(',')];
    let domain21_post_small = Math.min(...domain21_post);
    let domain21_post_large = Math.max(...domain21_post);

    tempData[0][14].value = domain21_pre_small;
    tempData[1][14].value = domain21_pre_large;
    tempData[2][14].value = domain21_post_small;
    tempData[3][14].value = domain21_post_large;

    localStorage.setItem('matrixData', JSON.stringify(tempData));
    setMatrixData(tempData);



    //PROCESS FOOTNOTE DATA:
    let tempFootnotes =JSON.parse(localStorage.getItem('footnotes'));


    const f6_26_1_checkbox = localStorage.getItem("6.26-1-checkbox");
    const f6_26_1 = localStorage.getItem("6.26-1");
    const concat6_26_1 = f6_26_1_checkbox + f6_26_1;

    const f6_26_2_checkbox = localStorage.getItem("6.26-2-checkbox");
    const f6_26_2 = localStorage.getItem("6.26-2");
    const concat6_26_2 = f6_26_2_checkbox + f6_26_2;

    const f6_26_3_checkbox = localStorage.getItem("6.26-3-checkbox");
    const f6_26_3 = localStorage.getItem("6.26-3");
    const concat6_26_3 = f6_26_3_checkbox + f6_26_3;

    const f6_26_4_checkbox = localStorage.getItem("6.26-4-checkbox");
    const f6_26_4 = localStorage.getItem("6.26-4");
    const concat6_26_4 = f6_26_4_checkbox + f6_26_4;

    const f6_26_5_checkbox = localStorage.getItem("6.26-5-checkbox");
    const f6_26_5 = localStorage.getItem("6.26-5");
    const concat6_26_5 = f6_26_5_checkbox + f6_26_5;

    const f6_26_6_checkbox = localStorage.getItem("6.26-6-checkbox");
    const f6_26_6 = localStorage.getItem("6.26-6");
    const concat6_26_6 = f6_26_6_checkbox + f6_26_6;

    const f6_26_7_checkbox = localStorage.getItem("6.26-7-checkbox");
    const f6_26_7 = localStorage.getItem("6.26-7");
    const concat6_26_7 = f6_26_7_checkbox + f6_26_7;


    let concatString6_26 =  [concat6_26_1, concat6_26_2, concat6_26_3, concat6_26_4, concat6_26_5, concat6_26_6, concat6_26_7].filter(Boolean).join('; '); 
    
    tempFootnotes[0][14].value = concatString6_26;
    localStorage.setItem('footnotes', JSON.stringify(tempFootnotes));



    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
    history.push('/q22');
  };

  return (
    <Box className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

        <Typography variant="h5">MH/Substance Use</Typography>
      
    
        <Box component="div" style={{ width: '100%' }}>
            <label htmlFor="formGroupExampleInput6.31"><h4>Q 6.31</h4></label>
            <br/>
            <p>
                Rate PERSON's <b>current</b> privilege or marginalization in relation to mental health or mental illness.
            </p>
            <br/>
            <CheckboxField id="container6.31" />
        </Box>

        <Box component="div" style={{ width: '100%' }}>
            <label htmlFor="formGroupExampleInput6.32"><h4>Q 6.32</h4></label>
            <br/>
            <p>
                Rate PERSON's <b>previous</b> privilege or marginalization in relation to mental health or mental illness.
            </p>
            <br/>
            <CheckboxField id="container6.32" />
        </Box>

        <Box component="div" style={{ width: '100%' }}>
            <label htmlFor="formGroupExampleInput6.33"><h4>Q 6.33</h4></label>
            <Typography variant="h5" align="left">PERSON'S Relationship to Substance Use/Dependence/Addiction
            </Typography>
       
            <p>
                Please choose <b>all that apply</b> in relation to substance use, dependence, and/or addiction. Consider all recreational substances (including alcohol and nicotine, as well as drugs) and prescription drugs that are misused.
            </p>
            <br/>
            <CheckboxInputField_Substance6_33 id="container6.33" />
        </Box>

        <Box component="div" style={{ width: '100%' }}>
            <label htmlFor="formGroupExampleInput6.34"><h4>Q 6.34</h4></label>
            <br/>
            <p>
                Please rate PERSON's <b>current</b> relationship to substance use and abuse.
            </p>
            <br/>
            <CheckboxField id="container6.34" />
        </Box>

        <Box component="div" style={{ width: '100%' }}>
            <label htmlFor="formGroupExampleInput6.35"><h4>Q 6.35</h4></label>
            <br/>
            <p>
                Please rate PERSON's <b>previous</b> relationship to substance use and abuse.
            </p>
            <br/>
            <CheckboxField id="container6.35" />
        </Box>

        
        <Link to="/q22"><Button onClick={handleSubmit} style={{ marginTop: '20px' }} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Next</Button></Link>

      </form>

   
    </Box>
  );
};

export default MHSubstUse;
