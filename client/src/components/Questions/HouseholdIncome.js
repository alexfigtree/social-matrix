import React, { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

import useStyles from '../Form/styles';
import { createPost, updatePost } from '../../actions/posts';
import CheckboxField from '../Form/CheckboxField';

//q5
const HouseholdIncome = () => {
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
      console.log('retrievedObject: during HHIncome', JSON.parse(retrievedObject));
  }, []);

  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    let tempData = matrixData;
    //PRE/EARLIER: 3.3, 3.4
    //POST/CURRENT: 3.1, 3.2
    //if 1 and 2 chosen for all:
    //{
      //pre-small = 1
      //pre-large = 2
      //post-small = 1
      //post-large = 2
    //}
    const q3_1 = localStorage.getItem("container3.1");
    const q3_2 = localStorage.getItem("container3.2");
    const q3_3 = localStorage.getItem("container3.3");
    const q3_4 = localStorage.getItem("container3.4");

    console.log('q3_1', q3_1);
    console.log('q3_2', q3_2);
    console.log('q3_3', q3_3);
    console.log('q3_4', q3_4);
    let domain5_pre = [...q3_3.split(','), ...q3_4.split(',')];
    console.log('domain5_pre', domain5_pre);

    let domain5_pre_small = Math.min(...domain5_pre);
    let domain5_pre_large = Math.max(...domain5_pre);
    //console.log('q1_pre_small', q1_pre_small);
    //console.log('domain5_pre_large', domain5_pre_large);
    
    //post 1.2, 1.4
    let domain5_post = [...q3_1.split(','), ...q3_2.split(',')];
    console.log('domain5_post', domain5_post);
    
    let domain5_post_small = Math.min(...domain5_post);
    let domain5_post_large = Math.max(...domain5_post);
    //console.log('q1_post_small', q1_post_small);
    //console.log('q1_post_large', q1_post_large);

  console.log('Values being saved for domain5 pre', domain5_pre_small, ' ', domain5_pre_large);
  console.log('Values being saved for domain5 post', domain5_post_small, ' ', domain5_post_large);
    tempData[0][30].value = domain5_pre_small;
    tempData[1][30].value = domain5_pre_large;
    tempData[2][30].value = domain5_post_small;
    tempData[3][30].value = domain5_post_large;

    //questionData = tempData;
    //console.log("NEW QUESTION DATA", tempData);
    //console.log("TYPEOF NEW QUESTION DATA", typeof tempData);//object
    //console.log('educPreSmall', educPreSmall);
/*    console.log('hey q12', q1_2);
    console.log('hey q13', q1_3);
    console.log('hey q14', q1_4);
    console.log('hey q15', q1_5);
    e.preventDefault();*/
    localStorage.setItem('matrixData', JSON.stringify(tempData));
    setMatrixData(tempData);



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
    <Box className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

        <Typography variant="h5">Household Income (Now)</Typography>

        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput3.1"><h4>Q 3.1</h4></label>
     
            <Typography variant="h5" align="left">
                <span style={{ textDecoration: 'underline' }}> Current Household Income Relative to Community:</span> 
            </Typography>
     
            <p>
                How do you rate the relative privilege of PERSON's <b>current</b>household income, assets, and debts, <b>as compared to the rest of PERSON's LOCAL COMMUNITY, today? </b>
            </p>
            <p>
                <b>(As with education, take into account how income levels differ between both local communities, and historical eras. You may choose up to two answers.)</b>
            </p>
       
            <CheckboxField id="container3.1" />
        </Box>

 
        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput3.2"><h4>Q 3.2</h4></label>
         
            <Typography variant="h5" align="left">
                <span style={{ textDecoration: 'underline' }}>Current Household Income Relative to COUNTRY:</span> 
            </Typography>
         
            <p>
                How do you rate the relative privilege of PERSON's <b>current </b>household income, assets, and debts, <b>as compared to the rest of PERSON's COUNTRY, today</b>?
            </p>
            <p>
                <b>(As with education, take into account how income levels differ between countries, regions, local communities, and historical eras. You may choose up to two answers.)</b>
            </p>
           
            <CheckboxField id="container3.2" />
        </Box>


        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput3.3"><h4>Q 3.3</h4></label>
     
            <Typography variant="h5" align="left">
                <span style={{ textDecoration: 'underline' }}> Previous Household Income Relative to Community:</span> 
            </Typography>
  
            <p>
                How do you rate the relative privilege of PERSON's <b>PREVIOUS</b> household income, assets, and debts, <b>as compared to the rest of PERSON's LOCAL COMMUNITY? (For instance, there may have been a significant change in household income over time.</b>You may choose up to two answers.)
            </p>
            <p>
                <b>(As with education, take into account how income levels differ between both local communities, and historical eras.)</b>
            </p>
        
            <CheckboxField id="container3.3" />
        </Box>

   
        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput3.4"><h4>Q 3.4</h4></label>
         
            <Typography variant="h5" align="left">
                <span style={{ textDecoration: 'underline' }}>PREVIOUS Household Income Relative to COUNTRY:</span> 
            </Typography>
          
            <p>
                How do you rate the relative privilege of PERSON's <b>PREVIOUS</b> household income, assets, and debts,  <b>as compared to the rest of PERSON's COUNTRY at the time? (For instance, there may have been a significant change in household income over time. </b>You may choose up to two answers.)
            </p>
            <p>
                <b>(As with education, income levels differ between countries, regions, local communities, and historical eras.)</b>
            </p>
         
            <CheckboxField id="container3.4" />
        </Box>
        
        <Link to="/q6"><Button onClick={handleSubmit} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Next</Button></Link>

      </form>

   
    </Box>
  );
};

export default HouseholdIncome;
