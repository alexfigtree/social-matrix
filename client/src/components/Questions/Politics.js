import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

import useStyles from '../Form/styles';
import { createPost, updatePost } from '../../actions/posts';
import CheckboxField from '../Form/CheckboxField';

//q16
const Politics = () => {
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

    const q6_11 = localStorage.getItem("container6.11"); //pre
    const q6_10 = localStorage.getItem("container6.10"); //post

    let domain16_pre = [...q6_11.split(',')];
    let domain16_pre_small = Math.min(...domain16_pre);
    let domain16_pre_large = Math.max(...domain16_pre);


    let domain16_post = [...q6_10.split(',')];
    let domain16_post_small = Math.min(...domain16_post);
    let domain16_post_large = Math.max(...domain16_post);


    tempData[0][19].value = domain16_pre_small;
    tempData[1][19].value = domain16_pre_large;
    tempData[2][19].value = domain16_post_small;
    tempData[3][19].value = domain16_post_large;

    localStorage.setItem('matrixData', JSON.stringify(tempData));
    setMatrixData(tempData);



    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
    history.push('/q17');
  };

  return (
    <Box className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

        <Typography variant="h5">Politics</Typography>
        
  
        <Box component="div">
            <label htmlFor="formGroupExampleInput6.10"><h4>Q 6.10</h4></label>
            <br/>
            <p>
                Rate the extent to which PERSON's political stance is <b>currently</b> privileged and accepted, or is marginalized in the PERSON's country or region (that is, whether that political stance is the dominant one or is marginalized or targeted.
            </p>
            <br/><br/>
            <CheckboxField id="container6.10" />
        </Box>


        <Box component="div">
            <label htmlFor="formGroupExampleInput6.11"><h4>Q 6.11</h4></label>
            <br/>
            <p>
                Rate the extent to which PERSON's political stance was privileged and accepted, or was marginalized in the PERSON's country or region <b>at an earlier time </b> (that is, whether that political stance was the dominant one or was marginalized or targeted.
            </p>
            <br/><br/>
            <CheckboxField id="container6.11" />
        </Box>
        
        <Link to="/q17"><Button onClick={handleSubmit} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Next</Button></Link>

      </form>

   
    </Box>
  );
};

export default Politics;
