import React, { useState, useEffect } from 'react';
import { InputLabel, TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { Link } from "react-router-dom";

import useStyles from '../Form/styles';
import { createPost, updatePost } from '../../actions/posts';
import CheckboxField from '../Form/CheckboxField';

const Occupation = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  const [q1_2, setq1_2] = useState(localStorage.getItem("container1.2"));
  const [q1_3, setq1_3] = useState(localStorage.getItem("container1.3"));
  const [q1_4, setq1_4] = useState(localStorage.getItem("container1.4"));

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);


  useEffect(() => {
    //let q1_2 = localStorage.getItem("container1.2");

    setq1_2(localStorage.getItem("container1.2"));
    setq1_3(localStorage.getItem("container1.3"));
    setq1_4(localStorage.getItem("container1.4"));
    console.log('OCCUP q12', q1_2);
    console.log('OCCUP q13', q1_3);
    console.log('OCCUP q14', q1_4);

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
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

      <Typography variant="h6">Occupation</Typography>
<Typography variant="h6">{currentId ? `Editing OCCUP "${post.title}"` : 'Q2'}</Typography>
        <TextField name="creator" variant="outlined" label="Subject" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="message" variant="outlined" label="Answer" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />

        <CheckboxField />

        
        <Link to="/q1"><Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Next</Button></Link>
      </form>

   
    </Paper>
  );
};

export default Occupation;
