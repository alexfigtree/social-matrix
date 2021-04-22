import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

import useStyles from '../Form/styles';
import { createPost, updatePost } from '../../actions/posts';
import CheckboxField from '../Form/CheckboxField';
import CheckboxField5_11 from '../Form/CheckboxField5_11';
import CheckboxField5_12 from '../Form/CheckboxField5_12';
//q12
const NationOfOriginCitizenship = () => {
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

    const q5_11 = localStorage.getItem("container5.11"); //pre and post
    const q5_12 = localStorage.getItem("container5.12"); //pre and post
    const q5_13 = localStorage.getItem("container5.13"); //pre and post

    let domain12_pre_post = [...q5_11.split(','),...q5_12.split(','),...q5_13.split(',')];
    let domain12_pre_post_small = Math.min(...domain12_pre_post);
    let domain12_pre_post_large = Math.max(...domain12_pre_post);

    tempData[0][23].value = domain12_pre_post_small;
    tempData[1][23].value = domain12_pre_post_large;
    tempData[2][23].value = domain12_pre_post_small;
    tempData[3][23].value = domain12_pre_post_large;

    localStorage.setItem('matrixData', JSON.stringify(tempData));
    setMatrixData(tempData);


    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
    history.push('/q13');
  };

  return (
    <Box className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

        <Typography variant="h5">Nation of Origin / Citizenship</Typography>

        <Box component="div">
            <label htmlFor="formGroupExampleInput5.11"><h4>Q 5.11</h4></label>
            <br/>
            <Typography variant="h5" align="left">
                Is/was Person:
            </Typography>
            <br/>
            <Typography variant="h5" align="left">
                (This information is anonymous and will not be shared with governmental authorities, nor is it associated online with Person's identity or computer IP address, nor that of anyone who fills this survey out)
            </Typography>
            <br/>
            <CheckboxField5_11 id="container5.11" />
        </Box>

        <Box component="div">
            <label htmlFor="formGroupExampleInput5.12"><h4>Q 5.12</h4></label>
            <br/>
            <p>
                How many generations has PERSON's family been in country of residence?
            </p>
            
            <CheckboxField5_12 id="container5.12" />
        </Box>


        <Box component="div">
            <label htmlFor="formGroupExampleInput5.13"><h4>Q 5.13</h4></label>
            <br/>
            <p>
                Whenever PERSON or PERSON's ancestors arrived, what was their reception by the country? A very welcoming response would be 1=most privileged and an extremely unwelcoming response would be 7=most marginalized.
            </p>
            <br/>
            <CheckboxField id="container5.13" />
        </Box>
        
        <Link to="/q13"><Button onClick={handleSubmit} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Next</Button></Link>

      </form>

   
    </Box>
  );
};

export default NationOfOriginCitizenship;