import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

import useStyles from '../Form/styles';
import { createPost, updatePost } from '../../actions/posts';
import CheckboxField from '../Form/CheckboxField';

//q8
const GuardiansAccess = () => {
  const history = useHistory();
  const [currentId, setCurrentId] = useState(0);
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  const [matrixData, setMatrixData] = useState(JSON.parse(localStorage.getItem('matrixData')));
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  //const [q3_5, setq3_5] = useState(localStorage.getItem("container3.5"));
/*  const [q1_2, setq1_2] = useState(localStorage.getItem("container1.2"));
  const [q1_3, setq1_3] = useState(localStorage.getItem("container1.3"));
  const [q1_4, setq1_4] = useState(localStorage.getItem("container1.4"));
  const [q1_5, setq1_5] = useState(localStorage.getItem("container1.5"));*/

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  useEffect(() => {
    //setq3_5(localStorage.getItem("container3.5"));
  }, []);

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



    localStorage.setItem('matrixData', JSON.stringify(tempData));
    setMatrixData(tempData);



    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
    //history.push('/q10');
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

        <Typography variant="h5">Access</Typography>
        
    
        
        <Link to="/q8"><Button onClick={handleSubmit} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Next</Button></Link>

      </form>

   
    </Paper>
  );
};

export default GuardiansAccess;
