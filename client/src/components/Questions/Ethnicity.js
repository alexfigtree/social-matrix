import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

import useStyles from '../Form/styles';
import { createPost, updatePost } from '../../actions/posts';
import CheckboxField from '../Form/CheckboxField';

//q11
const Ethnicity = () => {
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

    const q5_6 = localStorage.getItem("container5.6"); //post
    const q5_7 = localStorage.getItem("container5.7"); //pre

    let domain11_pre = [...q5_7.split(',')];
    let domain11_pre_small = Math.min(...domain11_pre);
    let domain11_pre_large = Math.max(...domain11_pre);

    let domain11_post = [...q5_6.split(',')];
    let domain11_post_small = Math.min(...domain11_post);
    let domain11_post_large = Math.max(...domain11_post);

    tempData[0][24].value = domain11_pre_small;
    tempData[1][24].value = domain11_pre_large;
    tempData[2][24].value = domain11_post_small;
    tempData[3][24].value = domain11_post_large;

    localStorage.setItem('matrixData', JSON.stringify(tempData));
    setMatrixData(tempData);



    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
    history.push('/q12');
  };

  return (
    <Box className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

        <Typography variant="h5">Ethnicity/Tribe</Typography>
      
        <Box component="div">
            <label htmlFor="formGroupExampleInput5.6"><h4>Q 5.6</h4></label>
            <br/>
            <p>
                Please subjectively choose how privileged or marginalized you see PERSON's ethnic or tribal identity as being, <b><span style={{ textDecoration: 'underline' }}>currently</span></b>. If PERSON identifies with more than one ethnicity or tribe, you can choose two numbers.
            </p>
            <br/>
            <CheckboxField id="container5.6" />
        </Box>

        <Box component="div">
            <label htmlFor="formGroupExampleInput5.7"><h4>Q 5.7</h4></label>
            <br/>
            <p>
                Please subjectively choose how privileged or marginalized you see PERSON's ethnic or tribal identity as having been <b><span style={{ textDecoration: 'underline' }}>earlier</span></b>. For instance, the relative privilege or marginalization of
                PERSON's ethnic or tribal identity may have changed because of immigration or because of a historical change in the societal status of the ethnicities or tribes involved.
            </p>
            <br/>
            <p>
                If PERSON identified with more than one ethnicity or tribe, you can choose two numbers.
            </p>
            <CheckboxField id="container5.7" />
        </Box>
        
        <Link to="/q12"><Button onClick={handleSubmit} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Next</Button></Link>

      </form>

   
    </Box>
  );
};

export default Ethnicity;