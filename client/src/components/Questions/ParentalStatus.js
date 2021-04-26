import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

import useStyles from '../Form/styles';
import { createPost, updatePost } from '../../actions/posts';
import CheckboxField from '../Form/CheckboxField';

//q28
const ParentalStatus = () => {
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
      console.log('retrievedObject: ParentalStatus', JSON.parse(retrievedObject));
  }, []);

  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let tempData = matrixData;

    const q7_7 = localStorage.getItem("container7.7"); //pre
    const q7_6 = localStorage.getItem("container7.6"); //post

    let domain28_pre = [...q7_7.split(',')];
    let domain28_pre_small = Math.min(...domain28_pre);
    let domain28_pre_large = Math.max(...domain28_pre);

    let domain28_post = [...q7_6.split(',')];
    let domain28_post_small = Math.min(...domain28_post);
    let domain28_post_large = Math.max(...domain28_post);

    tempData[0][7].value = domain28_pre_small;
    tempData[1][7].value = domain28_pre_large;
    tempData[2][7].value = domain28_post_small;
    tempData[3][7].value = domain28_post_large;

    localStorage.setItem('matrixData', JSON.stringify(tempData));
    setMatrixData(tempData);

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
    history.push('/q29');
  };

  return (
    <Box className={classes.paper} style={{ flexDirection: 'col' }}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

        <Typography variant="h5">Parental Status</Typography>

        <Box component="div" style={{ width: '100%' }}>
            <label htmlFor="formGroupExampleInput7.6"><h4>Q 7.6</h4></label>
            <p>
                Please rate PERSON's <b>current</b> privilege or marginalization in relation to PERSON's own parental status.
            </p>
      
            <CheckboxField id="container7.6" />
        </Box>

     
        <Box component="div" style={{ width: '100%' }}>
            <label htmlFor="formGroupExampleInput7.7"><h4>Q 7.7</h4></label>
    
            <p>
                Please rate PERSON's privilege or marginalization in relation to PERSON's own parental status <b>earlier.</b>
            </p>
       
            <CheckboxField id="container7.7" />
        </Box>

 
      
        <Link to="/q29"><Button onClick={handleSubmit} style={{ marginTop: '20px' }} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Next</Button></Link>
  
      </form>

   
    </Box>
  );
};

export default ParentalStatus;
