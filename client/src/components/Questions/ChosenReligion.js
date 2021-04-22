import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

import useStyles from '../Form/styles';
import { createPost, updatePost } from '../../actions/posts';
import CheckboxField from '../Form/CheckboxField';

//q15
const ChosenReligion = () => {
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

    const q6_7 = localStorage.getItem("container6.7"); //pre
    const q6_6 = localStorage.getItem("container6.6"); //post

    let domain15_pre = [...q6_7.split(',')];
    let domain15_pre_small = Math.min(...domain15_pre);
    let domain15_pre_large = Math.max(...domain15_pre);


    let domain15_post = [...q6_6.split(',')];
    let domain15_post_small = Math.min(...domain15_post);
    let domain15_post_large = Math.max(...domain15_post);


    tempData[0][20].value = domain15_pre_small;
    tempData[1][20].value = domain15_pre_large;
    tempData[2][20].value = domain15_post_small;
    tempData[3][20].value = domain15_post_large;

    localStorage.setItem('matrixData', JSON.stringify(tempData));
    setMatrixData(tempData);



    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
    history.push('/q16');
  };

  return (
    <Box className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

        <Typography variant="h5">Chosen Religion</Typography>
        
            <Box component="div">
            <label htmlFor="formGroupExampleInput6.6"><h4>Q 6.6</h4></label>
            <br/>
            <p>
                Rate the extent to which PERSON's religion or philosophy(ies) is <b>currently</b> dominant or marginalized in PERSON'S life. For instance, the family's religion may be more or less marginalized now than in the past because of immigration or because of earlier religious conversion in the family, or because of historical changes in how that religion was received.
            </p>
            <br/><br/>
            <CheckboxField id="container6.6" />
        </Box>


        <Box component="div">
            <label htmlFor="formGroupExampleInput6.7"><h4>Q 6.7</h4></label>
            <br/>
            <p>
                Rate the extent to which PERSON's religion(s) or philosophy(ies) was dominant or marginalized <b style={{ textDecoration: 'underline' }}>earlier</b>  in PERSON'S social context. For instance, PERSON's religion may be more or less marginalized now than in the past because of immigration or because of earlier religious conversion, or because of historical changes in how that religion was received.
            </p>
            <br/><br/>
            <CheckboxField id="container6.7" />
        </Box>
        
        <Link to="/q16"><Button onClick={handleSubmit} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Next</Button></Link>

      </form>

   
    </Box>
  );
};

export default ChosenReligion;
