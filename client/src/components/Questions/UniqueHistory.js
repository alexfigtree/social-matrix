import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

import useStyles from '../Form/styles';
import { createPost, updatePost } from '../../actions/posts';
import CheckboxField from '../Form/CheckboxField';

//q34
const UniqueHistory = () => {
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
      console.log('retrievedObject: UniqueHistory', JSON.parse(retrievedObject));
  }, []);

  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let tempData = matrixData;

    const q7_28 = localStorage.getItem("container7.28"); //pre
    const q7_27 = localStorage.getItem("container7.27"); //post

    let domain34_pre = [...q7_28.split(',')];
    let domain34_pre_small = Math.min(...domain34_pre);
    let domain34_pre_large = Math.max(...domain34_pre);

    let domain34_post = [...q7_27.split(',')];
    let domain34_post_small = Math.min(...domain34_post);
    let domain34_post_large = Math.max(...domain34_post);

    tempData[0][1].value = domain34_pre_small;
    tempData[1][1].value = domain34_pre_large;
    tempData[2][1].value = domain34_post_small;
    tempData[3][1].value = domain34_post_large;

    localStorage.setItem('matrixData', JSON.stringify(tempData));
    setMatrixData(tempData);

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
    history.push('/results');
  };

  return (
    <Box className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

        <Typography variant="h5">Unique History</Typography>

        <Box component="div">
            <label htmlFor="formGroupExampleInput7.27"><h4>Q 7.27</h4></label>
         
            <p>
                Rate PERSON'S <b>CURRENT</b> relative privilege or marginalization in relation to unique individual or family history (PERSON might have more than one answer because of having more privilege in one unique area than in another unique area).
            </p>
         
            <CheckboxField id="container7.27" />
        </Box>

        <Box component="div">
            <label htmlFor="formGroupExampleInput7.28"><h4>Q 7.28</h4></label>
           
            <p>
                Rate PERSON'S <b>PREVIOUS</b> relative privilege or marginalization in relation to unique individual or family history (PERSON might have more than one answer because of having more privilege in one unique area than in another unique area).
            </p>
           
            <CheckboxField id="container7.28" />
        </Box>
        <Link to="/results"><Button onClick={handleSubmit} style={{ marginTop: '20px' }} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>FINISH</Button></Link>

      </form>

   
    </Box>
  );
};

export default UniqueHistory;
