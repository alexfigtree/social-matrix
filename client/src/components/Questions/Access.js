import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

import useStyles from '../Form/styles';
import { createPost, updatePost } from '../../actions/posts';
import CheckboxField from '../Form/CheckboxField';
import FootnoteField from '../Form/FootnoteField';

//q8
const Access = () => {
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
      console.log('retrievedObject: Access', JSON.parse(retrievedObject));

      var retrievedFootnotes = localStorage.getItem('footnotes');
      console.log('retrievedFootnotes: Access', JSON.parse(retrievedFootnotes));
  }, []);

  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let tempData = matrixData;
    
    const q3_5 = localStorage.getItem("container3.5");

    let domain8_pre_post = [...q3_5.split(',')];

    let domain8_pre_post_small = Math.min(...domain8_pre_post);
    
    let domain8_pre_post_large = Math.max(...domain8_pre_post);


    tempData[0][27].value = domain8_pre_post_small;
    tempData[1][27].value = domain8_pre_post_large;
    tempData[2][27].value = domain8_pre_post_small;
    tempData[3][27].value = domain8_pre_post_large;

    localStorage.setItem('matrixData', JSON.stringify(tempData));
    setMatrixData(tempData);

    //PROCESS FOOTNOTE DATA:
    let tempFootnotes =JSON.parse(localStorage.getItem('footnotes'));
    const f3_6 = localStorage.getItem("3.6");
    tempFootnotes[0][27].value = f3_6;
    localStorage.setItem('footnotes', JSON.stringify(tempFootnotes));


    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
    history.push('/q9');
  };

  return (
    <Box className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

        <Typography variant="h5">Access</Typography>
 
        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput3.5"><h4>Q 3.5</h4></label>
            <br/>
            <Typography variant="h5" align="left">
                <span style={{ textDecoration: 'underline' }}>PERSON's Access to Resources, Information, Influence:</span> 
            </Typography>
            <br/>
            <p>
                How much do you think PERSON can advocate for him/her/themself, get medical care, find jobs, get support, or reach policy makers or advocates? (For instance, how easy or difficult is it for PERSON to get a second medical opinion or a good therapist or lawyer, or to apply for loans, or get information or to influence policy makers, etc.?)
            </p>
            <p>
                You can choose two answers if this access has changed or is mixed in some way (for instance,
                PERSON can find medical care easily but can't access loans or find information online).
            </p>
            <br/><br/>
            <CheckboxField id="container3.5" />
        </Box>

        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput3.6"><h4>Q 3.6</h4></label>
            <br/>
            <Typography variant="h5" align="left">
                Please explain above answer (for instance, high access in some 
                specific areas, lower in others).
            </Typography>
            <br/>

            <FootnoteField id="3.6" />
          
        </Box>
        
        <Link to="/q9"><Button onClick={handleSubmit} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Next</Button></Link>

      </form>

   
    </Box>
  );
};

export default Access;
