/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

import useStyles from '../Form/styles';
import { createPost, updatePost } from '../../actions/posts';
import CheckboxField from '../Form/CheckboxField';
import FootnoteField from '../Form/FootnoteField';

//q24
const Appearance = () => {
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

    const q6_44 = localStorage.getItem("container6.44"); //pre
    const q6_43 = localStorage.getItem("container6.43"); //post

    let domain24_pre_not_null = [q6_44].filter(function (el) {
      return el !== null;
    });
    let domain24_pre_small = Math.min(...domain24_pre_not_null);
    let domain24_pre_large = Math.max(...domain24_pre_not_null);

    let domain24_post_not_null = [q6_43].filter(function (el) {
      return el !== null;
    });
    let domain24_post_small = Math.min(...domain24_post_not_null);
    let domain24_post_large = Math.max(...domain24_post_not_null);


    tempData[0][11].value = domain24_pre_small;
    tempData[1][11].value = domain24_pre_large;
    tempData[2][11].value = domain24_post_small;
    tempData[3][11].value = domain24_post_large;

    localStorage.setItem('matrixData', JSON.stringify(tempData));
    setMatrixData(tempData);

    //PROCESS FOOTNOTE DATA:
    let tempFootnotes =JSON.parse(localStorage.getItem('footnotes'));

    const f6_42 = localStorage.getItem("6.42");

    //generate concatentated string
    let concatString = 
      [f6_42].filter(Boolean).join("; ");
    tempFootnotes[0][11].value = concatString;
    localStorage.setItem('footnotes', JSON.stringify(tempFootnotes));


    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
    history.push('/q25');
  };

  return (
    <Box className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

        <Typography variant="h5">Appearance</Typography>
        
        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput6.42"><h4>Q 6.42</h4></label>
         
            <p>
                Please specify any noteworthy visible features, for instance, being unusually tall or unusually short, very overweight or very underweight, having a gender-nonconforming appearance, being strikingly attractive or having a visible physical disfigurement or disability that draws attention, or being racially unusual in the immediate context.
            </p>
           
            <p>
                If appearance has changed significantly, specify how.
            </p>
      
            <p>
                If person does not draw particular attention with his/her/their appearance, write in “N/A” for not applicable.
            </p>
            
            <FootnoteField id="6.42" />
        </Box>


        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput6.43"><h4>Q 6.43</h4></label>
         
            <p>
                <b>Physical Appearance.</b> Please subjectively rate Person’s privilege or marginalization in physical appearance <b>now.</b> If Person does not draw either positive or negative or overly curious attention on the basis of appearance, please choose “4” (neither privileged nor marginalized).
            </p>
        
            <CheckboxField id="container6.43" />
        </Box>

  
        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput6.44"><h4>Q 6.44</h4></label>
         
            <p>
                <b>Physical Appearance.</b> Please subjectively rate Person’s privilege or marginalization in physical appearance <b>earlier.</b> If Person does not draw either positive or negative or overly curious attention on the basis of appearance, please choose “4” (neither privileged nor marginalized).
            </p>
         
            <CheckboxField id="container6.44" />
        </Box>

        <Link to="/q25"><Button onClick={handleSubmit} style={{ marginTop: '20px' }} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Next</Button></Link>

      </form>

   
    </Box>
  );
};

export default Appearance;
