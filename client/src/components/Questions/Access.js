import React, { useState, useEffect } from 'react';
import { Box, InputLabel, TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { Link } from "react-router-dom";

import useStyles from '../Form/styles';
import { createPost, updatePost } from '../../actions/posts';
import CheckboxField from '../Form/CheckboxField';

const Access = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  const [q1_2, setq1_2] = useState(localStorage.getItem("container1.2"));
  const [q1_3, setq1_3] = useState(localStorage.getItem("container1.3"));
  const [q1_4, setq1_4] = useState(localStorage.getItem("container1.4"));
  const [q1_5, setq1_5] = useState(localStorage.getItem("container1.5"));

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);


  useEffect(() => {
    //let q1_2 = localStorage.getItem("container1.2");

    setq1_2(localStorage.getItem("container1.2"));
    setq1_3(localStorage.getItem("container1.3"));
    setq1_4(localStorage.getItem("container1.4"));
    setq1_5(localStorage.getItem("container1.5"));
    console.log('OCCUP q12', typeof q1_2);
    console.log('OCCUP q13', q1_3);
    console.log('OCCUP q14', q1_4);
    console.log('OCCUP q14', q1_5);

  }, []);

  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
    //history.push('/q9');
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

        <Typography variant="h5">Access</Typography>
        
      
        <br/>
        <Box component="div">
            <label htmlFor="formGroupExampleInput3.5"><h4>Q 3.5</h4></label>
            <br/>
            <Typography variant="h5" align="left">
                <span style={{ textDecoration: 'underline' }}>PERSON's Access to Resources, Information, Influence:</span> 
            </Typography>
            <br/>
            <p>
                How much do you think PERSON can advocate for him/her/themself, get medical care, find jobs, get support, or reach policy makers or advocates? (For instance, how easy or difficult is it for PERSON to get a second medical opinion or a good therapist or lawyer, or to apply for loans, or get information or to influence policy makers, etc.?)
            </p>
            <p>
                You can choose two answers if this access has changed or is mixed in some way (for instance,
                PERSON can find medical care easily but can't access loans or find information online).
            </p>
            <br/><br/>
            <CheckboxField id="container3.5" />
        </Box>

    
        <hr/><br/>
        <Box component="div">
            <label htmlFor="formGroupExampleInput3.6"><h4>Q 3.6</h4></label>
            <br/>
            <Typography variant="h5" align="left">
                Please explain above answer (for instance, high access in some specific areas, lower in others).
            </Typography>
            <br/>

            <TextField id="container3.6" name="exampleInputEmail3.6" variant="outlined" label="" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
          
        </Box>
        
        <Link to="/q8"><Button onClick={handleSubmit} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Next</Button></Link>

      </form>

   
    </Paper>
  );
};

export default Access;
