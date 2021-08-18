/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

import useStyles from '../Form/styles';
import { createPost, updatePost } from '../../actions/posts';
import CheckboxField from '../Form/CheckboxField';
import FootnoteField from '../Form/FootnoteField';

//q13
const LanguageSpoken = () => {
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

    const q5_17 = localStorage.getItem("container5.17");

    let domain13_not_null = [q5_17].filter(function (el) {
      return el !== null;
    });

    let domain13_pre_post_small = Math.min(...domain13_not_null);
    
    let domain13_pre_post_large = Math.max(...domain13_not_null);


    tempData[0][22].value = domain13_pre_post_small;
    tempData[1][22].value = domain13_pre_post_large;
    tempData[2][22].value = domain13_pre_post_small;
    tempData[3][22].value = domain13_pre_post_large;

    localStorage.setItem('matrixData', JSON.stringify(tempData));
    setMatrixData(tempData);

    //PROCESS FOOTNOTE DATA:
    let tempFootnotes =JSON.parse(localStorage.getItem('footnotes'));

    const f5_15 = localStorage.getItem("5.15");
    const f5_16 = localStorage.getItem("5.16");

    //generate concatentated string
    let concatString = 
      [f5_15, f5_16].filter(Boolean).join("; ");
    tempFootnotes[0][22].value = concatString;
    localStorage.setItem('footnotes', JSON.stringify(tempFootnotes));


    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
    history.push('/q14');
  };

  return (
    <Box className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

        <Typography variant="h5">Language(s)</Typography>

        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput5.15"><h4>Q 5.15</h4></label>
            <p>
                What is PERSON's first language or languages? If PERSON grew 
                up multilingual, name all languages spoken in childhood.
            </p>
            <FootnoteField id="5.15" />
        </Box>

        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput5.16"><h4>Q 5.16</h4></label>
          
            <p>
                What additional languages does PERSON speak now?
            </p>
         
            <FootnoteField id="5.16" />
        </Box>


        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput5.17"><h4>Q 5.17</h4></label>
          
            <p>
                Rate how privileged or marginalized PERSON's spoken languages are? <b>If PERSON speaks more than one language, select up to two choices.</b>
            </p>
          
            <CheckboxField id="container5.17" />
        </Box>
        
        <Link to="/q14"><Button onClick={handleSubmit} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Next</Button></Link>

      </form>

   
    </Box>
  );
};

export default LanguageSpoken;
