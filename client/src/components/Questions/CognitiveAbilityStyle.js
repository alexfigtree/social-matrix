import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

import useStyles from '../Form/styles';
import { createPost, updatePost } from '../../actions/posts';
import CheckboxField from '../Form/CheckboxField';

//q22
const CognitiveAbilityStyle = () => {
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
      console.log('retrievedObject: CognitiveAbilityStyle', JSON.parse(retrievedObject));
  }, []);

  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let tempData = matrixData;

    const q6_38 = localStorage.getItem("container6.38"); //pre
    const q6_37 = localStorage.getItem("container6.37"); //post

    let domain22_pre = [...q6_38.split(',')];
    let domain22_pre_small = Math.min(...domain22_pre);
    let domain22_pre_large = Math.max(...domain22_pre);


    let domain22_post = [...q6_37.split(',')];
    let domain22_post_small = Math.min(...domain22_post);
    let domain22_post_large = Math.max(...domain22_post);


    tempData[0][13].value = domain22_pre_small;
    tempData[1][13].value = domain22_pre_large;
    tempData[2][13].value = domain22_post_small;
    tempData[3][13].value = domain22_post_large;

    localStorage.setItem('matrixData', JSON.stringify(tempData));
    setMatrixData(tempData);



    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
    history.push('/q23');
  };

  return (
    <Box className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

        <Typography variant="h5">Cognitive Ability / Style</Typography>
        

        <Box component="div">
            <label htmlFor="formGroupExampleInput6.37"><h4>Q 6.37</h4></label>
            
            <p>
                Please rate PERSON's <b>current</b> privilege or marginalization around cognitive ability. If PERSON has <b>both</b> a special ability and a limitation or disability choose two numbers.
            </p>
       
            <CheckboxField id="container6.37" />
        </Box>


        <Box component="div">
            <label htmlFor="formGroupExampleInput6.38"><h4>Q 6.38</h4></label>
       
            <p>
                Please rate PERSON's <b>previous</b> privilege or marginalization around cognitive ability. If PERSON has <b>both</b> a special ability and a limitation or disability choose two numbers.
            </p>
       
            <CheckboxField id="container6.38" />
        </Box>

        <Link to="/q23"><Button onClick={handleSubmit} style={{ marginTop: '20px' }} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Next</Button></Link>

      </form>

   
    </Box>
  );
};

export default CognitiveAbilityStyle;
