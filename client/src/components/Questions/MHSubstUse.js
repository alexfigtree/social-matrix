import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

import useStyles from '../Form/styles';
import { createPost, updatePost } from '../../actions/posts';
import CheckboxField from '../Form/CheckboxField';

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
      console.log('retrievedObject: Access', JSON.parse(retrievedObject));
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

    let domain21_pre = [...q6_32.split(','),...q6_35.split(',')];
    let domain21_pre_small = Math.min(...domain21_pre);
    let domain21_pre_large = Math.max(...domain21_pre);

    let domain21_post = [...q6_31.split(','),...q6_34.split(',')];
    let domain21_post_small = Math.min(...domain21_post);
    let domain21_post_large = Math.max(...domain21_post);

    tempData[0][14].value = domain21_pre_small;
    tempData[1][14].value = domain21_pre_large;
    tempData[2][14].value = domain21_post_small;
    tempData[3][14].value = domain21_post_large;

    localStorage.setItem('matrixData', JSON.stringify(tempData));
    setMatrixData(tempData);



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
            <label htmlFor="formGroupExampleInput6.31"><h4>Q 6.31</h4></label>
            <br/>
            <p>
                Rate PERSON's <b>current</b> privilege or marginalization in relation to mental health or mental illness.
            </p>
            <br/>
            <CheckboxField id="container6.31" />
        </Box>

        <Box component="div" style={{ width: '100%' }}>
            <label htmlFor="formGroupExampleInput6.32"><h4>Q 6.32</h4></label>
            <br/>
            <p>
                Rate PERSON's <b>previous</b> privilege or marginalization in relation to mental health or mental illness.
            </p>
            <br/>
            <CheckboxField id="container6.32" />
        </Box>

        <Box component="div" style={{ width: '100%' }}>
            <label htmlFor="formGroupExampleInput6.34"><h4>Q 6.34</h4></label>
            <br/>
            <p>
                Please rate PERSON's <b>current</b> relationship to substance use and abuse.
            </p>
            <br/>
            <CheckboxField id="container6.34" />
        </Box>

        <Box component="div" style={{ width: '100%' }}>
            <label htmlFor="formGroupExampleInput6.35"><h4>Q 6.35</h4></label>
            <br/>
            <p>
                Please rate PERSON's <b>previous</b> relationship to substance use and abuse.
            </p>
            <br/>
            <CheckboxField id="container6.35" />
        </Box>

        
        <Link to="/q22"><Button onClick={handleSubmit} style={{ marginTop: '20px' }} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Next</Button></Link>

      </form>

   
    </Box>
  );
};

export default MHSubstUse;
