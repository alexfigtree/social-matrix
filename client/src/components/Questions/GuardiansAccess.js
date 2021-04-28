import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

import useStyles from '../Form/styles';
import { createPost, updatePost } from '../../actions/posts';
import CheckboxField from '../Form/CheckboxField';

//q9
const GuardiansAccess = () => {
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


    let q4_11_1 = localStorage.getItem("container4.11.1"); //pre and post
    let q4_11_2 = localStorage.getItem("container4.11.2"); //pre and post
    let q4_11_3 = localStorage.getItem("container4.11.3"); //pre and post
    let q4_11_4 = localStorage.getItem("container4.11.4"); //pre and post
    let q4_11_5 = localStorage.getItem("container4.11.5"); //pre and post

    console.log("1", q4_11_1);
    console.log("2", q4_11_2);
    console.log("3", q4_11_3);
    console.log("4", q4_11_4);
    console.log("5", q4_11_5);


    //console.log('domain9_pre_post', domain9_pre_post);
    let domain9_pre_post = [...q4_11_1.split(','),...q4_11_2.split(','),...q4_11_3.split(','),...q4_11_4.split(','),...q4_11_5.split(',')];
    let domain9_pre_post_small = Math.min(...domain9_pre_post);
    let domain9_pre_post_large = Math.max(...domain9_pre_post);

    tempData[0][26].value = domain9_pre_post_small;
    tempData[1][26].value = domain9_pre_post_large;
    tempData[2][26].value = domain9_pre_post_small;
    tempData[3][26].value = domain9_pre_post_large;

    localStorage.setItem('matrixData', JSON.stringify(tempData));
    setMatrixData(tempData);



    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
    history.push('/q10');
  };

  return (
    <Box className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

        <Typography variant="h5">Guardian's Access</Typography>
        
                
        <Box component="div">
            <label htmlFor="formGroupExampleInput4.8"><h4>Q 4.11</h4></label>
            <br/>
            <Typography variant="h5" align="left">
                Parent/Guardians' Access to Resources, Information, Influence:
            </Typography>
            <br/>
            <p>
              How much do you think each Parent/Guardian can advocate for 
              him/her/themself, get medical care, find jobs, get support, 
              or reach policy makers or advocates? (For instance, how easy 
              or difficult is it for that Parent/Guardian to get a second 
              medical opinion or a good therapist or lawyer, or to apply for 
              loans, or get information or to influence policy makers, etc.?)
            </p>
            <p>
                You can choose two answers if this access has changed or is 
                mixed in some way (for instance, if Parent? Guardian can find 
                medical care easily but can't access loans or find information 
                online).
            </p>
            <p>
                Please only answer for relevant number of parents/parenting figures.
            </p>
            <br/><br/>
            <p>
                Parent/Figure 1
            </p>
            <CheckboxField id="container4.11.1" />

            <p>
                Parent/Figure 2
            </p>
            <CheckboxField id="container4.11.2" />

            <p>
                Parent/Figure 3
            </p>
            <CheckboxField id="container4.11.3" />

            <p>
                Parent/Figure 4
            </p>
            <CheckboxField id="container4.11.4" />

            <p>
                Additional Parent/ Parenting Figure
            </p>
            <CheckboxField id="container4.11.5" />
        </Box>

        <Link to="/q10"><Button onClick={handleSubmit} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Next</Button></Link>

      </form>

   
    </Box>
  );
};

export default GuardiansAccess;
