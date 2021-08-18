/* eslint-disable */
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

    let domain21_pre_not_null = [q6_32,q6_35].filter(function (el) {
      return el !== null;
    });
    let domain21_pre_small = Math.min(...domain21_pre_not_null);
    let domain21_pre_large = Math.max(...domain21_pre_not_null);

    let domain21_post_not_null = [q6_31,q6_34].filter(function (el) {
      return el !== null;
    });
    let domain21_post_small = Math.min(...domain21_post_not_null);
    let domain21_post_large = Math.max(...domain21_post_not_null);

    tempData[0][14].value = domain21_pre_small;
    tempData[1][14].value = domain21_pre_large;
    tempData[2][14].value = domain21_post_small;
    tempData[3][14].value = domain21_post_large;

    localStorage.setItem('matrixData', JSON.stringify(tempData));
    setMatrixData(tempData);



    //PROCESS FOOTNOTE DATA:
    let tempFootnotes =JSON.parse(localStorage.getItem('footnotes'));


    const f6_29 = localStorage.getItem("6.29");

    const f6_29_4_checkbox = localStorage.getItem("6.29-4-checkbox");
    const f6_29_4 = localStorage.getItem("6.29-4");
    const concat6_29_4 = f6_29_4_checkbox + f6_29_4;

    const f6_29_8_checkbox = localStorage.getItem("6.29-8-checkbox");
    const f6_29_8 = localStorage.getItem("6.29-8");
    const concat6_29_8 = f6_29_8_checkbox + f6_29_8;

    let concatString6_29 =  [f6_29, concat6_29_4, concat6_29_8].filter(Boolean).join('; '); 
    

    const f6_30 = localStorage.getItem("6.30");

    const f6_30_2_checkbox = localStorage.getItem("6.30-2-checkbox");
    const f6_30_2 = localStorage.getItem("6.30-2");
    const concat6_30_2 = f6_30_2_checkbox + f6_30_2;

    const f6_30_4_checkbox = localStorage.getItem("6.30-4-checkbox");
    const f6_30_4 = localStorage.getItem("6.30-4");
    const concat6_30_4 = f6_30_4_checkbox + f6_30_4;

    const f6_30_5_checkbox = localStorage.getItem("6.30-5-checkbox");
    const f6_30_5 = localStorage.getItem("6.30-5");
    const concat6_30_5 = f6_30_5_checkbox + f6_30_5;

    const f6_30_6_checkbox = localStorage.getItem("6.30-6-checkbox");
    const f6_30_6 = localStorage.getItem("6.30-6");
    const concat6_30_6 = f6_30_6_checkbox + f6_30_6;

    const f6_30_7_checkbox = localStorage.getItem("6.30-7-checkbox");
    const f6_30_7 = localStorage.getItem("6.30-7");
    const concat6_30_7 = f6_30_7_checkbox + f6_30_7;
    let concatString6_30 =  [f6_30, concat6_30_2, concat6_30_4, concat6_30_5, concat6_30_6, concat6_30_7].filter(Boolean).join('; '); 
    

    const f6_33 = localStorage.getItem("6.33");
    const f6_33_7_checkbox = localStorage.getItem("6.33-7-checkbox");
    const f6_33_7 = localStorage.getItem("6.33-7");
    const concat6_33_7 = f6_33_7_checkbox + f6_33_7;
    let concatString6_33 =  [f6_33, concat6_33_7].filter(Boolean).join('; '); 
    
    tempFootnotes[0][14].value = concatString6_29 + "; " + concatString6_30 + "; " + concatString6_33;
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
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput6.29"><h4>Q 6.29</h4></label>
            <Typography variant="h5" align="left">PERSON's Relation to Mental Health System
            </Typography>
       
            <p>
                Please choose all that apply.
            </p>
      
            <CheckboxInputField_Substance6_29 id="container6.29" />
        </Box>


        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput6.30"><h4>Q 6.30</h4></label>
            <Typography variant="h5" align="left">PERSON's Mental Health/Illness
            </Typography>
       
            <p>
                Please check all answers that apply
            </p>
          
            <CheckboxInputField_Substance6_30 id="container6.30" />
        </Box>
    
        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput6.31"><h4>Q 6.31</h4></label>
         
            <p>
                Rate PERSON's <b>current</b> privilege or marginalization in relation to mental health or mental illness.
            </p>
     
            <CheckboxField id="container6.31" />
        </Box>

        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput6.32"><h4>Q 6.32</h4></label>
        
            <p>
                Rate PERSON's <b>previous</b> privilege or marginalization in relation to mental health or mental illness.
            </p>
       
            <CheckboxField id="container6.32" />
        </Box>

        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput6.33"><h4>Q 6.33</h4></label>
            <Typography variant="h5" align="left">PERSON'S Relationship to Substance Use/Dependence/Addiction
            </Typography>
       
            <p>
                Please choose <b>all that apply</b> in relation to substance use, dependence, and/or addiction. Consider all recreational substances (including alcohol and nicotine, as well as drugs) and prescription drugs that are misused.
            </p>
      
            <CheckboxInputField_Substance6_33 id="container6.33" />
        </Box>

        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput6.34"><h4>Q 6.34</h4></label>
        
            <p>
                Please rate PERSON's <b>current</b> relationship to substance use and abuse.
            </p>
          
            <CheckboxField id="container6.34" />
        </Box>

        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput6.35"><h4>Q 6.35</h4></label>
           
            <p>
                Please rate PERSON's <b>previous</b> relationship to substance use and abuse.
            </p>
        
            <CheckboxField id="container6.35" />
        </Box>

        
        <Link to="/q22"><Button onClick={handleSubmit} style={{ marginTop: '20px' }} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Next</Button></Link>

      </form>

   
    </Box>
  );
};

export default MHSubstUse;
