/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

import useStyles from '../Form/styles';
import { createPost, updatePost } from '../../actions/posts';
import CheckboxField from '../Form/CheckboxField';

//q6
const ChildhoodIncome = () => {
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
      console.log('retrievedObject: during Childhood Income', JSON.parse(retrievedObject));
  }, []);

  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let tempData = matrixData;


    let q4_8_1 = localStorage.getItem("container4.8.1"); //pre and post
    let q4_8_2 = localStorage.getItem("container4.8.2"); //pre and post
    let q4_8_3 = localStorage.getItem("container4.8.3"); //pre and post
    let q4_8_4 = localStorage.getItem("container4.8.4"); //pre and post
    let q4_8_5 = localStorage.getItem("container4.8.5"); //pre and post

    console.log("1", q4_8_1);
    console.log("2", q4_8_2);
    console.log("3", q4_8_3);
    console.log("4", q4_8_4);
    console.log("5", q4_8_5);


    //console.log('domain6_pre_post', domain6_pre_post);
    let domain6_pre_post = [...q4_8_1.split(','),...q4_8_2.split(','),...q4_8_3.split(','),...q4_8_4.split(','),...q4_8_5.split(',')];
    let domain6_pre_post_small = Math.min(...domain6_pre_post);
    let domain6_pre_post_large = Math.max(...domain6_pre_post);

    tempData[0][29].value = domain6_pre_post_small;
    tempData[1][29].value = domain6_pre_post_large;
    tempData[2][29].value = domain6_pre_post_small;
    tempData[3][29].value = domain6_pre_post_large;

    localStorage.setItem('matrixData', JSON.stringify(tempData));
    setMatrixData(tempData);


    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
    history.push('/q7');
  };

  return (
    <Box className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

        <Typography variant="h5">Childhood Household Income (w/ guardian)</Typography>
        
        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput4.8"><h4>Q 4.8</h4></label>
            <br/>
            <Typography variant="h5" align="left">
                <span style={{ textDecoration: 'underline' }}>Parent/Guardians' 
                Household Income and Wealth While Raising PERSON:
                </span> 
            </Typography>
            <br/>
            <p>
              Please rate each Parent/Guardian's relative income and wealth while 
              raising PERSON. You can give up to two answers for each Parent/Guardians 
              household income and wealth if it changed during PERSON's childhood or 
              was mixed (for instance because of going between two or more 
              parents/guardian's' homes).
            </p>
            <p>
                Note: A person's wealth (household incomes, assets, and debts) can 
                change over time and buys more or less in different locations. 
                How do you rate Parent/Guardian's income and wealth <b>while 
                raising PERSON, as compared to the local community and country</b> 
                at that time??
            </p>
            <p>
                Choose one answer for COUNTRY and, if different, a second answer 
                for LOCAL COMMUNITY, If relative wealth changed for any reason, 
                including im/migration, you may also choose two responses.
            </p>
            <p>
                Please only answer for relevant number of parents/parenting figures.
            </p>
            <br/><br/>
            <p>
                Parent/Figure 1
            </p>
            <CheckboxField id="container4.8.1" />

            <p>
                Parent/Figure 2
            </p>
            <CheckboxField id="container4.8.2" />

            <p>
                Parent/Figure 3
            </p>
            <CheckboxField id="container4.8.3" />

            <p>
                Parent/Figure 4
            </p>
            <CheckboxField id="container4.8.4" />

            <p>
                Additional Parent/ Parenting Figure
            </p>
            <CheckboxField id="container4.8.5" />
        </Box>
        
        <Link to="/q7"><Button onClick={handleSubmit} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Next</Button></Link>

      </form>

   
    </Box>
  );
};

export default ChildhoodIncome;
