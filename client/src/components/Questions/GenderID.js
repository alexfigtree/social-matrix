import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

import useStyles from '../Form/styles';
import { createPost, updatePost } from '../../actions/posts';
import CheckboxField from '../Form/CheckboxField';
import FootnoteField from '../Form/FootnoteField';

//q31
const GenderID = () => {
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

    const q7_19 = localStorage.getItem("container7.19"); //pre
    const q7_18 = localStorage.getItem("container7.18"); //post

    let domain31_pre = [...q7_19.split(',')];
    let domain31_pre_small = Math.min(...domain31_pre);
    let domain31_pre_large = Math.max(...domain31_pre);

    let domain31_post = [...q7_18.split(',')];
    let domain31_post_small = Math.min(...domain31_post);
    let domain31_post_large = Math.max(...domain31_post);

    tempData[0][4].value = domain31_pre_small;
    tempData[1][4].value = domain31_pre_large;
    tempData[2][4].value = domain31_post_small;
    tempData[3][4].value = domain31_post_large;

    localStorage.setItem('matrixData', JSON.stringify(tempData));
    setMatrixData(tempData);


    //PROCESS FOOTNOTE DATA:
    let tempFootnotes =JSON.parse(localStorage.getItem('footnotes'));

    const f7_17 = localStorage.getItem("7.17");

    //generate concatentated string
    let concatString = 
      [f7_17].filter(Boolean).join("; ");
    tempFootnotes[0][4].value = concatString;
    localStorage.setItem('footnotes', JSON.stringify(tempFootnotes));


    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
    history.push('/q32');
  };

  return (
    <Box className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

        <Typography variant="h5">Gender ID</Typography>

        <Box component="div" style={{ width: '100%' }}>
            <label htmlFor="formGroupExampleInput7.17"><h4>Q 7.17</h4></label>
            <p>
                <b>Gender Identity</b>
            </p>
            <p>
                Gender identity refers to whether one identifies as cisgender 
                (identifying with one’s assigned biological sex); trans (a 
                transwoman was originally assigned a male sex but now identifies 
                as female, while a transman was originally assigned a female sex 
                but identifies as male); genderqueer (those who reject a gender 
                binary and identify as without gender or with all genders, also 
                called gender fluid, gender non- binary, or pangender); or as 
                agender (without gender). Additional terms for people other than 
                cisgender are used in various cultures (two-spirit people, hijra, muxes, etc.)
            </p>
            <p>
                <b>Note: if filling this out for another person, note that the person’s 
                own self-identification, and not whether Person has used hormones or had 
                any surgeries, determines trans status.</b>
            </p>
            <p>
                Name PERSON'S gender identity (i.e., cisgender, transgender, 
                genderqueer, gender fluid, pangender, gender non-binary, agender, 
                two-spirit, hijra, muxe, gender fluid, etc., or use PERSON'S preferred 
                term. If that identification has changed, give all identifications, 
                with age(s) at time(s) of transition.
            </p>
            <FootnoteField id="7.17" />
        </Box>

        <Box component="div" style={{ width: '100%' }}>
            <label htmlFor="formGroupExampleInput7.18"><h4>Q 7.18</h4></label>
      
            <p>
                Please rate how privileged or marginalized PERSON'S gender identity is <b>currently</b>, including all the aspects of that status, considering attitudes over time in PERSON'S larger community and whether those attitudes have shifted, shifts in where PERSON has lived, and, if relevant, any visible gender transition PERSON has started or completed over time.
            </p>
        
            <CheckboxField id="container7.18" />
        </Box>

        <Box component="div" style={{ width: '100%' }}>
            <label htmlFor="formGroupExampleInput7.19"><h4>Q 7.19</h4></label>
      
            <p>
                Please rate how privileged or marginalized PERSON'S gender identity was <b>previously</b>, including all the aspects of that status, considering attitudes over time in PERSON'S larger community and whether those attitudes have shifted, shifts in where PERSON has lived, and, if relevant, any visible gender transition PERSON has started or completed over time.
            </p>
        
            <CheckboxField id="container7.19" />
        </Box>

        <Link to="/q32"><Button onClick={handleSubmit} style={{ marginTop: '20px' }} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Next</Button></Link>

      </form>

   
    </Box>
  );
};

export default GenderID;
