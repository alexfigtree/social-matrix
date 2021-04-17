import React, { useState, useEffect } from 'react';
import { Box, InputLabel, TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { Link, useHistory } from "react-router-dom";

import useStyles from '../Form/styles';
import { createPost, updatePost } from '../../actions/posts';
import CheckboxField from '../Form/CheckboxField';

const HouseholdIncome = () => {
  const history = useHistory();
  const [currentId, setCurrentId] = useState(0);
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
    history.push('/q6');
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

        <Typography variant="h5">Household Income (Now)</Typography>
        
       
        <br/>
        <Box component="div">
            <label htmlFor="formGroupExampleInput3.1"><h4>Q 3.1</h4></label>
            <br/>
            <Typography variant="h5" align="left">
                <span style={{ textDecoration: 'underline' }}> Current Household Income Relative to Community:</span> 
            </Typography>
            <br/>
            <p>
                How do you rate the relative privilege of PERSON's <b>current</b>household income, assets, and debts, <b>as compared to the rest of PERSON's LOCAL COMMUNITY, today? </b>
            </p>
            <p>
                <b>(As with education, take into account how income levels differ between both local communities, and historical eras. You may choose up to two answers.)</b>
            </p>
            <br/><br/>
            <CheckboxField id="container3.1" />
        </Box>

       
        <hr/><br/>
        <Box component="div">
            <label htmlFor="formGroupExampleInput3.2"><h4>Q 3.2</h4></label>
            <br/>
            <Typography variant="h5" align="left">
                <span style={{ textDecoration: 'underline' }}>Current Household Income Relative to COUNTRY:</span> 
            </Typography>
            <br/>
            <p>
                How do you rate the relative privilege of PERSON's <b>current </b>household income, assets, and debts, <b>as compared to the rest of PERSON's COUNTRY, today</b>?
            </p>
            <p>
                <b>(As with education, take into account how income levels differ between countries, regions, local communities, and historical eras. You may choose up to two answers.)</b>
            </p>
            <br/><br/>
            <CheckboxField id="container3.2" />
        </Box>

        <hr/><br/>
        <Box component="div">
            <label htmlFor="formGroupExampleInput3.3"><h4>Q 3.3</h4></label>
            <br/>
            <Typography variant="h5" align="left">
                <span style={{ textDecoration: 'underline' }}> Previous Household Income Relative to Community:</span> 
            </Typography>
            <br/>
            <p>
                How do you rate the relative privilege of PERSON's <b>PREVIOUS</b> household income, assets, and debts, <b>as compared to the rest of PERSON's LOCAL COMMUNITY? (For instance, there may have been a significant change in household income over time.</b>You may choose up to two answers.)
            </p>
            <p>
                <b>(As with education, take into account how income levels differ between both local communities, and historical eras.)</b>
            </p>
            <br/><br/>
            <CheckboxField id="container3.3" />
        </Box>

   
        <hr/><br/>
        <Box component="div">
            <label htmlFor="formGroupExampleInput3.4"><h4>Q 3.4</h4></label>
            <br/>
            <Typography variant="h5" align="left">
                <span style={{ textDecoration: 'underline' }}>PREVIOUS Household Income Relative to COUNTRY:</span> 
            </Typography>
            <br/>
            <p>
                How do you rate the relative privilege of PERSON's <b>PREVIOUS</b> household income, assets, and debts,  <b>as compared to the rest of PERSON's COUNTRY at the time? (For instance, there may have been a significant change in household income over time. </b>You may choose up to two answers.)
            </p>
            <p>
                <b>(As with education, income levels differ between countries, regions, local communities, and historical eras.)</b>
            </p>
            <br/><br/>
            <CheckboxField id="container3.4" />
        </Box>
        
        <Link to="/q6"><Button onClick={handleSubmit} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Next</Button></Link>

      </form>

   
    </Paper>
  );
};

export default HouseholdIncome;
