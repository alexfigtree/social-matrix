import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

import useStyles from '../Form/styles';
import { createPost, updatePost } from '../../actions/posts';
import CheckboxField from '../Form/CheckboxField';

//q7
const GuardiansChildHouseIncome = () => {
  const history = useHistory();
  const [currentId, setCurrentId] = useState(0);
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  const [matrixData, setMatrixData] = useState(JSON.parse(localStorage.getItem('matrixData')));
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
/*

  const [q1_2, setq1_2] = useState(localStorage.getItem("container1.2"));
  const [q1_3, setq1_3] = useState(localStorage.getItem("container1.3"));
  const [q1_4, setq1_4] = useState(localStorage.getItem("container1.4"));
  const [q1_5, setq1_5] = useState(localStorage.getItem("container1.5"));*/

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);


  useEffect(() => {
      var retrievedObject = localStorage.getItem('matrixData');
      console.log('retrievedObject: during GuardChildhood Income', JSON.parse(retrievedObject));
  }, []);

  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let tempData = matrixData;



    let q4_9_1 = localStorage.getItem("container4.9.1"); //pre and post
    let q4_9_2 = localStorage.getItem("container4.9.2"); //pre and post
    let q4_9_3 = localStorage.getItem("container4.9.3"); //pre and post
    let q4_9_4 = localStorage.getItem("container4.9.4"); //pre and post
    let q4_9_5 = localStorage.getItem("container4.9.5"); //pre and post

    console.log("1", q4_9_1);
    console.log("2", q4_9_2);
    console.log("3", q4_9_3);
    console.log("4", q4_9_4);
    console.log("5", q4_9_5);

    let domain7_pre_post = [...q4_9_1.split(','),...q4_9_2.split(','),...q4_9_3.split(','),...q4_9_4.split(','),...q4_9_5.split(',')];
    let domain7_pre_post_small = Math.min(...domain7_pre_post);
    let domain7_pre_post_large = Math.max(...domain7_pre_post);

    tempData[0][28].value = domain7_pre_post_small;
    tempData[1][28].value = domain7_pre_post_large;
    tempData[2][28].value = domain7_pre_post_small;
    tempData[3][28].value = domain7_pre_post_large;

    localStorage.setItem('matrixData', JSON.stringify(tempData));
    setMatrixData(tempData);

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
    history.push('/q8');
  };

  return (
    <Box className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

        <Typography variant="h5">Guardians’ Childhood Household Income</Typography>
        
          <Box component="div">
            <label htmlFor="formGroupExampleInput4.9"><h4>Q 4.9</h4></label>
            <br/>
            <Typography variant="h5" align="left">
                <span style={{ textDecoration: 'underline' }}>Parent/Guardians' 
                occupation(s), compared to EachParent'/Guardians COUNTRY AND
                 LOCAL COMMUNITY later on while raising PERSON.</span> 
            </Typography>
            <br/>
            <p>
              How do you rate the relative privilege of each <b>Parent/Guardian's 
              household income and wealth <span style={{ textDecoration: 'underline' }}>
              DURING PARENT/GUARDIAN'S OWN CHILDHOOD (not person's childhood)</span>, 
              as compared to others in each Parent/Guardian's
              <b>community and country at that time?</b>
            </p>
            <p>
                You can give up to two answers for each <b>Parent/Guardian's </b>
                own childhood household income and wealth if it changed during 
                Parent/Guardian's childhood or was mixed (for instance because of 
                going between two parents/guardians' homes).
            </p>
            <p>
                Note: The value of household wealth (household income, assets, 
                and debts) differs for different generations and different 
                geographical areas.
            </p>
            <p>
                Please only answer for relevant number of parents/parenting figures.
            </p>
            <br/><br/>
            <p>
                Parent/Figure 1
            </p>
            <CheckboxField id="container4.9.1" />

            <p>
                Parent/Figure 2
            </p>
            <CheckboxField id="container4.9.2" />

            <p>
                Parent/Figure 3
            </p>
            <CheckboxField id="container4.9.3" />

            <p>
                Parent/Figure 4
            </p>
            <CheckboxField id="container4.9.4" />

            <p>
                Additional Parent/Figure
            </p>
            <CheckboxField id="container4.9.5" />
          </Box>
        
        <Link to="/q8"><Button onClick={handleSubmit} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Next</Button></Link>

      </form>

   
    </Box>
  );
};

export default GuardiansChildHouseIncome;
