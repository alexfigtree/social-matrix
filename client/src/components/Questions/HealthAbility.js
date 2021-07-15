/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

import useStyles from '../Form/styles';
import { createPost, updatePost } from '../../actions/posts';
import CheckboxField from '../Form/CheckboxField';
import FootnoteField from '../Form/FootnoteField';

//q23
const HealthAbility = () => {
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

    const q6_41 = localStorage.getItem("container6.41"); //pre
    const q6_40 = localStorage.getItem("container6.40"); //post

    let domain23_pre = [...q6_41.split(',')];
    let domain23_pre_small = Math.min(...domain23_pre);
    let domain23_pre_large = Math.max(...domain23_pre);


    let domain23_post = [...q6_40.split(',')];
    let domain23_post_small = Math.min(...domain23_post);
    let domain23_post_large = Math.max(...domain23_post);


    tempData[0][12].value = domain23_pre_small;
    tempData[1][12].value = domain23_pre_large;
    tempData[2][12].value = domain23_post_small;
    tempData[3][12].value = domain23_post_large;

    localStorage.setItem('matrixData', JSON.stringify(tempData));
    setMatrixData(tempData);

    //PROCESS FOOTNOTE DATA:
    let tempFootnotes =JSON.parse(localStorage.getItem('footnotes'));

    const f6_39 = localStorage.getItem("6.39");

    //generate concatentated string
    let concatString = 
      [f6_39].filter(Boolean).join("; ");
    tempFootnotes[0][12].value = concatString;
    localStorage.setItem('footnotes', JSON.stringify(tempFootnotes));


    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
    history.push('/q24');
  };

  return (
    <Box className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

        <Typography variant="h5">Health / Ability</Typography>
        
        
        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput6.39"><h4>Q 6.39</h4></label>
          
            <Typography variant="h5" align="left">
                PERSON'S Physical Health/Illness/Ability
            </Typography>
          
            <p>
                Please specify any chronic or life-threatening illness as well as any unusual physical talents or abilities (such as strong athletic abilities). You can specify both (e.g., has paralyzed legs or has asthma, but is very athletic).
            </p>
         
            <FootnoteField id="6.39" />
        </Box>

        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput6.40"><h4>Q 6.40</h4></label>
         
            <p>
                Please rate PERSON'S <b>current</b> privilege or marginalization in this domain. If PERSON has both a special ability AND a limitation. You can choose 2 numbers.
            </p>
          
            <CheckboxField id="container6.40" />
        </Box>

   
        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput6.41"><h4>Q 6.41</h4></label>
       
            <p>
                Please rate PERSON'S <b>previous</b> privilege or marginalization in this domain. If PERSON has both a special ability AND a limitation. You can choose 2 numbers.
            </p>
          
            <CheckboxField id="container6.41" />
        </Box>


        <Link to="/q24"><Button onClick={handleSubmit} style={{ marginTop: '20px' }} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Next</Button></Link>

      </form>

   
    </Box>
  );
};

export default HealthAbility;
