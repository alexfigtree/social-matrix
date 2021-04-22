import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

import useStyles from '../Form/styles';
import { createPost, updatePost } from '../../actions/posts';
import CheckboxField from '../Form/CheckboxField';

//q24
const Appearance = () => {
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
      console.log('retrievedObject: Appearance', JSON.parse(retrievedObject));
  }, []);

  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let tempData = matrixData;

    const q6_44 = localStorage.getItem("container6.44"); //pre
    const q6_43 = localStorage.getItem("container6.43"); //post

    let domain24_pre = [...q6_44.split(',')];
    let domain24_pre_small = Math.min(...domain24_pre);
    let domain24_pre_large = Math.max(...domain24_pre);


    let domain24_post = [...q6_43.split(',')];
    let domain24_post_small = Math.min(...domain24_post);
    let domain24_post_large = Math.max(...domain24_post);


    tempData[0][11].value = domain24_pre_small;
    tempData[1][11].value = domain24_pre_large;
    tempData[2][11].value = domain24_post_small;
    tempData[3][11].value = domain24_post_large;

    localStorage.setItem('matrixData', JSON.stringify(tempData));
    setMatrixData(tempData);

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
    history.push('/q25');
  };

  return (
    <Box className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

        <Typography variant="h5">Appearance</Typography>
        

        <Box component="div">
            <label htmlFor="formGroupExampleInput6.43"><h4>Q 6.43</h4></label>
         
            <p>
                <b>Physical Appearance.</b> Please subjectively rate Person’s privilege or marginalization in physical appearance <b>now.</b> If Person does not draw either positive or negative or overly curious attention on the basis of appearance, please choose “4” (neither privileged nor marginalized).
            </p>
        
            <CheckboxField id="container6.43" />
        </Box>

  
        <Box component="div">
            <label htmlFor="formGroupExampleInput6.44"><h4>Q 6.44</h4></label>
         
            <p>
                <b>Physical Appearance.</b> Please subjectively rate Person’s privilege or marginalization in physical appearance <b>earlier.</b> If Person does not draw either positive or negative or overly curious attention on the basis of appearance, please choose “4” (neither privileged nor marginalized).
            </p>
         
            <CheckboxField id="container6.44" />
        </Box>

        <Link to="/q25"><Button onClick={handleSubmit} style={{ marginTop: '20px' }} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Next</Button></Link>

      </form>

   
    </Box>
  );
};

export default Appearance;
