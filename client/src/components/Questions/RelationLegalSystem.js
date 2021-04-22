import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

import useStyles from '../Form/styles';
import { createPost, updatePost } from '../../actions/posts';
import CheckboxField from '../Form/CheckboxField';

//q20
const RelationLegalSystem = () => {
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

    const q6_28 = localStorage.getItem("container6.28"); //pre
    const q6_27 = localStorage.getItem("container6.27"); //post

    let domain20_pre = [...q6_28.split(',')];
    let domain20_pre_small = Math.min(...domain20_pre);
    let domain20_pre_large = Math.max(...domain20_pre);


    let domain20_post = [...q6_27.split(',')];
    let domain20_post_small = Math.min(...domain20_post);
    let domain20_post_large = Math.max(...domain20_post);


    tempData[0][15].value = domain20_pre_small;
    tempData[1][15].value = domain20_pre_large;
    tempData[2][15].value = domain20_post_small;
    tempData[3][15].value = domain20_post_large;

    localStorage.setItem('matrixData', JSON.stringify(tempData));
    setMatrixData(tempData);



    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
    history.push('/q21');
  };

  return (
    <Box className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

        <Typography variant="h5">Relation to Legal System</Typography>
        

        <Box component="div" style={{ width: '100%' }}>
            <label htmlFor="formGroupExampleInput6.27"><h4>Q 6.27</h4></label>
            <br/>
            <p>
                Rate PERSON's <b>current</b> privilege or marginalization in relation to the legal system.
            </p>
            <br/>
            <CheckboxField id="container6.27" />
        </Box>

  
        <Box component="div" style={{ width: '100%' }}>
            <label htmlFor="formGroupExampleInput6.28"><h4>Q 6.28</h4></label>
            <br/>
            <p>
                Rate PERSON's <b>previous</b> privilege or marginalization in relation to the legal system.
            </p>
            <br/>
            <CheckboxField id="container6.28" />
        </Box>

        <Link to="/q21"><Button onClick={handleSubmit} style={{ marginTop: '20px' }} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Next</Button></Link>

      </form>

   
    </Box>
  );
};

export default RelationLegalSystem;
