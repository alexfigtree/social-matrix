/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

import useStyles from '../Form/styles';
import { createPost, updatePost } from '../../actions/posts';
import CheckboxField from '../Form/CheckboxField';
import CheckboxInputField_SexOrientation from '../Form/CheckboxInputField_SexOrientation';


//q30
const SexualOrientation = () => {
  const history = useHistory();
  const [currentId, setCurrentId] = useState(0);
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  const [matrixData, setMatrixData] = useState(JSON.parse(localStorage.getItem('matrixData')));
  const [footnotes, setFootnotes] = useState(JSON.parse(localStorage.getItem('footnotes')));
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

    const q7_25 = localStorage.getItem("container7.25"); //pre
    const q7_24 = localStorage.getItem("container7.24"); //post

    let domain30_pre_not_null = [q7_25].filter(function (el) {
      return el !== null;
    });
    let domain30_pre_small = Math.min(...domain30_pre_not_null);
    let domain30_pre_large = Math.max(...domain30_pre_not_null);

    let domain30_post_not_null = [q7_24].filter(function (el) {
      return el !== null;
    });
    let dom
    let domain30_post_small = Math.min(...domain30_post_not_null);
    let domain30_post_large = Math.max(...domain30_post_not_null);

    tempData[0][5].value = domain30_pre_small;
    tempData[1][5].value = domain30_pre_large;
    tempData[2][5].value = domain30_post_small;
    tempData[3][5].value = domain30_post_large;

    localStorage.setItem('matrixData', JSON.stringify(tempData));
    setMatrixData(tempData);


    //PROCESS FOOTNOTE DATA:
    let tempFootnotes =JSON.parse(localStorage.getItem('footnotes'));

    const f7_23 = localStorage.getItem("7.23");

    const f7_23_7 = localStorage.getItem("7.23-7");
    const f7_23_7_checkbox = localStorage.getItem("7.23-7-checkbox");

    let concatString7_23_7 = 
      [f7_23_7_checkbox, f7_23_7].filter(Boolean).join(": ");

    //generate concatentated string
    let concatString = 
      [f7_23, concatString7_23_7].filter(Boolean).join("; ");
    tempFootnotes[0][5].value = concatString;
    localStorage.setItem('footnotes', JSON.stringify(tempFootnotes));



    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
    history.push('/q31');
  };

  return (
    <Box className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

        <Typography variant="h5">Sexual Orientation</Typography>

        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput7.23"><h4>Q 7.23</h4></label>
       
            <Typography variant="h5" align="left">
                Sexual Orientation
            </Typography>
            <p>
                Sexual orientation refers to whether one is sexually and romantically attracted to and/or involved romantically with the opposite sex, one’s own sex, both sexes, or all sexes.
            </p>
     
            <CheckboxInputField_SexOrientation id="7.23" />
        </Box>

        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput7.24"><h4>Q 7.24</h4></label>
       
            <p>
                Please rate how privileged or marginalized PERSON'S sexual orientation is, <b>currently</b>. You can choose more than one number if PERSON'S status is different in PERSON's different communities and social contexts (for instance, with friends vs. at work or in one's religious community, or in different geographical locations PERSON relates to.)
            </p>
     
            <CheckboxField id="container7.24" />
        </Box>

        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput7.25"><h4>Q 7.25</h4></label>
       
            <p>
                Please rate how privileged or marginalized PERSON'S sexual orientation was <b>previously</b>. You can choose more than one number if PERSON'S status is different in PERSON's different communities and social contexts (for instance, with friends vs. at work or in one's religious community, or in different geographical locations PERSON relates to.)
            </p>
        
            <CheckboxField id="container7.25" />
        </Box>
        <Link to="/q31"><Button onClick={handleSubmit} style={{ marginTop: '20px' }} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Next</Button></Link>

      </form>

   
    </Box>
  );
};

export default SexualOrientation;
