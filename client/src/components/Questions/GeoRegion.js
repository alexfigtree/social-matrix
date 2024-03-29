/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

import useStyles from '../Form/styles';
import { createPost, updatePost } from '../../actions/posts';
import CheckboxField from '../Form/CheckboxField';
import FootnoteField from '../Form/FootnoteField';

//q17
const GeoRegion = () => {
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

    const q6_14 = localStorage.getItem("container6.14"); //pre
    const q6_13 = localStorage.getItem("container6.13"); //post

    let domain17_pre_not_null = [q6_14].filter(function (el) {
      return el !== null;
    });
    let domain17_pre_small = Math.min(...domain17_pre_not_null);
    let domain17_pre_large = Math.max(...domain17_pre_not_null);

    let domain17_post_not_null = [q6_13].filter(function (el) {
      return el !== null;
    });
    let domain17_post_small = Math.min(...domain17_post_not_null);
    let domain17_post_large = Math.max(...domain17_post_not_null);


    tempData[0][18].value = domain17_pre_small;
    tempData[1][18].value = domain17_pre_large;
    tempData[2][18].value = domain17_post_small;
    tempData[3][18].value = domain17_post_large;

    localStorage.setItem('matrixData', JSON.stringify(tempData));
    setMatrixData(tempData);


    //PROCESS FOOTNOTE DATA:
    let tempFootnotes =JSON.parse(localStorage.getItem('footnotes'));

    const f6_15 = localStorage.getItem("6.15");

    //generate concatentated string
    let concatString = 
      [f6_15].filter(Boolean).join("; ");
    tempFootnotes[0][18].value = concatString;
    localStorage.setItem('footnotes', JSON.stringify(tempFootnotes));


    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
    history.push('/q18');
  };

  return (
    <Box className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

        <Typography variant="h5">Geo. Region</Typography>
        
        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput6.13"><h4>Q 6.13</h4></label>
            <br/>
            <Typography variant="h5" align="left">PERSON's <b><span style={{ textDecoration: 'underline' }}>Current</span></b> Geographical Region of Country/World
            </Typography>
            <p>
                Compared to the rest of the world, subjectively rate PERSON's <b>current</b> geographical region on the basis of privilege/marginalization. For instance, is PERSON's region economically thriving, impoverished, peaceful, war-torn, devastated by disaster? Is PERSON's nation a democracy, dictatorship, or theocracy, etc.? Is it urban, suburban, rural? How much power, influence, and wealth does the region (of the country or the world) have relative to the rest of the world?
            </p>
            <br/>
            <CheckboxField id="container6.13" />
        </Box>

 
        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput6.14"><h4>Q 6.14</h4></label>
            <br/>
            <Typography variant="h5" align="left">PERSON's Previous Geographical Region of Country/World (if any)
            </Typography>
            <p>
                Compared to the rest of the world, subjectively rate PERSON's <b>previous</b> geographical region on the basis of privilege/marginalization. For instance, is PERSON's region economically thriving, impoverished, peaceful, war-torn, devastated by disaster? Is PERSON's nation a democracy, dictatorship, or theocracy, etc.? Is it urban, suburban, rural? How much power, influence, and wealth does the region (of the country or the world) have relative to the rest of the world?
            </p>
            <br/>
            <CheckboxField id="container6.14" />
        </Box>


        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput6.15"><h4>Q 6.15</h4></label>
         
            <p>
                Explain your answer to the question(s) about PERSON's geographical region(s).
            </p>
       
            <FootnoteField id="6.15" />
        </Box>
        
        <Link to="/q18"><Button onClick={handleSubmit} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Next</Button></Link>

      </form>

   
    </Box>
  );
};

export default GeoRegion;
