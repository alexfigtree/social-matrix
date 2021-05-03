import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

import useStyles from '../Form/styles';
import { createPost, updatePost } from '../../actions/posts';
import CheckboxField from '../Form/CheckboxField';

//q30
const SexualOrientation = () => {
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
      console.log('retrievedObject: SexualOrientation', JSON.parse(retrievedObject));
  }, []);

  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let tempData = matrixData;

    const q7_25 = localStorage.getItem("container7.25"); //pre
    const q7_24 = localStorage.getItem("container7.24"); //post

    let domain30_pre = [...q7_25.split(',')];
    let domain30_pre_small = Math.min(...domain30_pre);
    let domain30_pre_large = Math.max(...domain30_pre);

    let domain30_post = [...q7_24.split(',')];
    let domain30_post_small = Math.min(...domain30_post);
    let domain30_post_large = Math.max(...domain30_post);

    tempData[0][5].value = domain30_pre_small;
    tempData[1][5].value = domain30_pre_large;
    tempData[2][5].value = domain30_post_small;
    tempData[3][5].value = domain30_post_large;

    localStorage.setItem('matrixData', JSON.stringify(tempData));
    setMatrixData(tempData);

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
    history.push('/q31');
  };

  return (
    <Box className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

        <Typography variant="h5">Sexual Orientation</Typography>

        <Box component="div" style={{ width: '100%' }}>
            <label htmlFor="formGroupExampleInput7.24"><h4>Q 7.24</h4></label>
       
            <p>
                Please rate how privileged or marginalized PERSON'S sexual orientation is, <b>currently</b>. You can choose more than one number if PERSON'S status is different in PERSON's different communities and social contexts (for instance, with friends vs. at work or in one's religious community, or in different geographical locations PERSON relates to.)
            </p>
     
            <CheckboxField id="container7.24" />
        </Box>

        <Box component="div" style={{ width: '100%' }}>
            <label htmlFor="formGroupExampleInput7.25"><h4>Q 7.25</h4></label>
       
            <p>
                Please rate how privileged or marginalized PERSON'S sexual orientation was <b>previously</b>. You can choose more than one number if PERSON'S status is different in PERSON's different communities and social contexts (for instance, with friends vs. at work or in one's religious community, or in different geographical locations PERSON relates to.)
            </p>
        
            <CheckboxField id="container7.25" />
        </Box>
        <Link to="/q31"><Button onClick={handleSubmit} style={{ marginTop: '20px' }} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Next</Button></Link>

      </form>

   
    </Box>
  );
};

export default SexualOrientation;
