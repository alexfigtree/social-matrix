import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

import useStyles from '../Form/styles';
import { createPost, updatePost } from '../../actions/posts';
import CheckboxField from '../Form/CheckboxField';
import FootnoteField from '../Form/FootnoteField';

//q25
const Age = () => {
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

    const q7_2 = localStorage.getItem("container7.2");

    let domain25_pre_post = [...q7_2.split(',')];

    let domain25_pre_post_small = Math.min(...domain25_pre_post);
    
    let domain25_pre_post_large = Math.max(...domain25_pre_post);


    tempData[0][10].value = domain25_pre_post_small;
    tempData[1][10].value = domain25_pre_post_large;
    tempData[2][10].value = domain25_pre_post_small;
    tempData[3][10].value = domain25_pre_post_large;

    localStorage.setItem('matrixData', JSON.stringify(tempData));
    setMatrixData(tempData);

    //PROCESS FOOTNOTE DATA:
    let tempFootnotes =JSON.parse(localStorage.getItem('footnotes'));

    const f7_1 = localStorage.getItem("7.1");

    //generate concatentated string
    let concatString = 
      [f7_1].filter(Boolean).join("; ");
    tempFootnotes[0][10].value = concatString;
    localStorage.setItem('footnotes', JSON.stringify(tempFootnotes));

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
    history.push('/q26');
  };

  return (
    <Box className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

        <Typography variant="h5">Age</Typography>
        
        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput7.1"><h4>Q 7.1</h4></label>
         
            <Typography variant="h5" align="left">
                Age
            </Typography>
           
            <p>
                Give PERSON’s current age and birth year. For a deceased person, give age at time of death approximate year of death. If you are not sure, write in an approximate age, with a question mark.
            </p>
           
            <FootnoteField id="7.1" />
        </Box>



        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput7.2"><h4>Q 7.2</h4></label>
        
            <p>
                Please rate PERSON’s privilege or marginalization in relation to age.
            </p>
           
            <p>
                Consider how different ages are valued differently, depending on culture and context, but in most societies, children and adolescents are less powerful than adults and the middle-aged generally are most powerful people economically, occupationally, and politically, except in countries that revere elders, or in occupations that prize youth (for instance, sports, entertainment).
            </p>
           
            <CheckboxField id="container7.2" />
        </Box>

        <Link to="/q26"><Button onClick={handleSubmit} style={{ marginTop: '20px' }} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Next</Button></Link>

      </form>

   
    </Box>
  );
};

export default Age;
