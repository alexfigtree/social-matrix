import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

import useStyles from '../Form/styles';
import { createPost, updatePost } from '../../actions/posts';
import CheckboxField from '../Form/CheckboxField';

//q32
const GenderExpression = () => {
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
      console.log('retrievedObject: GenderExpression', JSON.parse(retrievedObject));
  }, []);

  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let tempData = matrixData;

    const q7_22 = localStorage.getItem("container7.22"); //pre
    const q7_21 = localStorage.getItem("container7.21"); //post

    let domain32_pre = [...q7_22.split(',')];
    let domain32_pre_small = Math.min(...domain32_pre);
    let domain32_pre_large = Math.max(...domain32_pre);

    let domain32_post = [...q7_21.split(',')];
    let domain32_post_small = Math.min(...domain32_post);
    let domain32_post_large = Math.max(...domain32_post);

    tempData[0][3].value = domain32_pre_small;
    tempData[1][3].value = domain32_pre_large;
    tempData[2][3].value = domain32_post_small;
    tempData[3][3].value = domain32_post_large;

    localStorage.setItem('matrixData', JSON.stringify(tempData));
    setMatrixData(tempData);

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
    history.push('/q33');
  };

  return (
    <Box className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

        <Typography variant="h5">Gender Expression</Typography>

        <Box component="div">
            <label htmlFor="formGroupExampleInput7.21"><h4>Q 7.21</h4></label>
         
            <p>
                Please rate how privileged or marginalized PERSON' gender expression is <b>currently</b>, including all the aspects of that status. Consider any changes in PERSON'S gender expression, social attitudes over time in PERSON'S larger community and whether those attitudes have shifted, and whether Person has moved to from one community or region to another, with implications for how PERSON is perceived.
            </p>
        
            <CheckboxField id="container7.21" />
        </Box>

 
        <Box component="div">
            <label htmlFor="formGroupExampleInput7.22"><h4>Q 7.22</h4></label>
     
            <p>
                Please rate how privileged or marginalized PERSON' gender expression <b>was previously</b>, including all the aspects of that status. Consider any changes in PERSON'S gender expression, social attitudes over time in PERSON'S larger community and whether those attitudes have shifted, and whether Person has moved to from one community or region to another, with implications for how PERSON is perceived.
            </p>
    
            <CheckboxField id="container7.22" />
        </Box>

        <Link to="/q33"><Button onClick={handleSubmit} style={{ marginTop: '20px' }} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Next</Button></Link>

      </form>

   
    </Box>
  );
};

export default GenderExpression;
