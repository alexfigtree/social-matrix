import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

import useStyles from '../Form/styles';
import { createPost, updatePost } from '../../actions/posts';
import CheckboxField from '../Form/CheckboxField';

//q33
const SexAtBirth = () => {
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
      console.log('retrievedObject: SexAtBirth', JSON.parse(retrievedObject));
  }, []);

  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let tempData = matrixData;

    const q7_16 = localStorage.getItem("container7.16"); //pre
    const q7_15 = localStorage.getItem("container7.15"); //post

    let domain33_pre = [...q7_16.split(',')];
    let domain33_pre_small = Math.min(...domain33_pre);
    let domain33_pre_large = Math.max(...domain33_pre);

    let domain33_post = [...q7_15.split(',')];
    let domain33_post_small = Math.min(...domain33_post);
    let domain33_post_large = Math.max(...domain33_post);

    tempData[0][2].value = domain33_pre_small;
    tempData[1][2].value = domain33_pre_large;
    tempData[2][2].value = domain33_post_small;
    tempData[3][2].value = domain33_post_large;

    localStorage.setItem('matrixData', JSON.stringify(tempData));
    setMatrixData(tempData);

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
    history.push('/q34');
  };

  return (
    <Box className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

        <Typography variant="h5">Sex Assigned at Birth</Typography>

        <Box component="div">
            <label htmlFor="formGroupExampleInput7.15"><h4>Q 7.15</h4></label>
   
            <p>
                Please rate how privileged or marginalized PERSON'S assigned sex at birth is, <b>currently</b>, including all the aspects of that status, in PERSON’s current social context
            </p>
         
            <CheckboxField id="container7.15" />
        </Box>

        <Box component="div">
            <label htmlFor="formGroupExampleInput7.16"><h4>Q 7.16</h4></label>
     
            <p>
                Please rate how privileged or marginalized PERSON'S assigned sex at birth was <b>previously</b>, including all the aspects of that status, in PERSON’s previous social context
            </p>
       
            <CheckboxField id="container7.16" />
        </Box>

        <Link to="/q34"><Button onClick={handleSubmit} style={{ marginTop: '20px' }} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Next</Button></Link>

      </form>

   
    </Box>
  );
};

export default SexAtBirth;
