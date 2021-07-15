/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

import useStyles from '../Form/styles';
import { createPost, updatePost } from '../../actions/posts';
import CheckboxField from '../Form/CheckboxField';
import FootnoteField from '../Form/FootnoteField';

//q15
const ChosenReligion = () => {
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

    const q6_7 = localStorage.getItem("container6.7"); //pre
    const q6_6 = localStorage.getItem("container6.6"); //post

    let domain15_pre = [...q6_7.split(',')];
    let domain15_pre_small = Math.min(...domain15_pre);
    let domain15_pre_large = Math.max(...domain15_pre);


    let domain15_post = [...q6_6.split(',')];
    let domain15_post_small = Math.min(...domain15_post);
    let domain15_post_large = Math.max(...domain15_post);


    tempData[0][20].value = domain15_pre_small;
    tempData[1][20].value = domain15_pre_large;
    tempData[2][20].value = domain15_post_small;
    tempData[3][20].value = domain15_post_large;

    localStorage.setItem('matrixData', JSON.stringify(tempData));
    setMatrixData(tempData);

    //PROCESS FOOTNOTE DATA:
    let tempFootnotes =JSON.parse(localStorage.getItem('footnotes'));

    const f6_5 = localStorage.getItem("6.5");
    const f6_8 = localStorage.getItem("6.8");

    //generate concatentated string
    let concatString = 
      [f6_5, f6_8].filter(Boolean).join("; ");
    tempFootnotes[0][20].value = concatString;
    localStorage.setItem('footnotes', JSON.stringify(tempFootnotes));

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
    history.push('/q16');
  };

  return (
    <Box className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

        <Typography variant="h5">Chosen Religion</Typography>
        

        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput6.5"><h4>Q 6.5</h4></label>
        
            <Typography variant="h5" align="left">
                PERSON's own religion of choice
            </Typography>
      
            <p>
                Please specify PERSON's own religion or spiritual philosophy of choice. This may or may not be the same as the family religion.
            </p>
           
            <FootnoteField id="6.5" />
        </Box>


        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput6.6"><h4>Q 6.6</h4></label>
            <br/>
            <p>
                Rate the extent to which PERSON's religion or philosophy(ies) is <b>currently</b> dominant or marginalized in PERSON'S life. For instance, the family's religion may be more or less marginalized now than in the past because of immigration or because of earlier religious conversion in the family, or because of historical changes in how that religion was received.
            </p>
            <br/><br/>
            <CheckboxField id="container6.6" />
        </Box>


        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput6.7"><h4>Q 6.7</h4></label>
            <br/>
            <p>
                Rate the extent to which PERSON's religion(s) or philosophy(ies) was dominant or marginalized <b style={{ textDecoration: 'underline' }}>earlier</b>  in PERSON'S social context. For instance, PERSON's religion may be more or less marginalized now than in the past because of immigration or because of earlier religious conversion, or because of historical changes in how that religion was received.
            </p>
            <br/><br/>
            <CheckboxField id="container6.7" />
        </Box>

        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput6.8"><h4>Q 6.8</h4></label>
          
            <p>
                Explain your answer to the last two questions
            </p>
         
            <FootnoteField id="6.8" />
        </Box>
        
        <Link to="/q16"><Button onClick={handleSubmit} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Next</Button></Link>

      </form>

   
    </Box>
  );
};

export default ChosenReligion;
