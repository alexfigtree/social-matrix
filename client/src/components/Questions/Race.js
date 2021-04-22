import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

import useStyles from '../Form/styles';
import { createPost, updatePost } from '../../actions/posts';
import CheckboxField from '../Form/CheckboxField';

//q10
const Race = () => {
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

    const q5_2 = localStorage.getItem("container5.2"); //post
    const q5_3 = localStorage.getItem("container5.3"); //pre

    let domain10_pre = [...q5_3.split(',')];
    let domain10_pre_small = Math.min(...domain10_pre);
    let domain10_pre_large = Math.max(...domain10_pre);


    let domain10_post = [...q5_2.split(',')];
    let domain10_post_small = Math.min(...domain10_post);
    let domain10_post_large = Math.max(...domain10_post);


    tempData[0][25].value = domain10_pre_small;
    tempData[1][25].value = domain10_pre_large;
    tempData[2][25].value = domain10_post_small;
    tempData[3][25].value = domain10_post_large;


    localStorage.setItem('matrixData', JSON.stringify(tempData));
    setMatrixData(tempData);



    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
    history.push('/q11');
  };

  return (
    <Box className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

        <Typography variant="h5">Race</Typography>

        <Box component="div">
            <label htmlFor="formGroupExampleInput5.2"><h4>Q 5.2</h4></label>
            <br/>
            <Typography variant="h5" align="left">PERSON’s <span style={{ textDecoration: 'underline' }}>Current </span>Experience of Racial Privilege
            </Typography>
            <br/>
            <p>
                Please choose the number that fits PERSON'S <span style={{ textDecoration: 'underline' }}>current</span> experience of relative racial privilege or marginalization best. Consider racial context, for instance, country, region, PERSON’s class and occupational privilege, and any other factors that are relevant. PERSON's racial identity and relative racial privilege or marginalization may have changed following immigration or a historical change in race relations.
            </p>
            <p>
                If PERSON has mixed racial privilege (either because PERSON has a mixed racial background or because PERSON goes
                between contexts in which that racial identity is perceived differently), you may choose two numbers rather than one.
            </p>
            <br/><br/>
            <CheckboxField id="container5.2" />
        </Box>


        <Box component="div">
            <label htmlFor="formGroupExampleInput5.3"><h4>Q 5.3</h4></label>
            <br/>
            <Typography variant="h5" align="left">PERSON’s <span style={{ textDecoration: 'underline' }}>Earlier </span>Experience of Racial Privilege
            </Typography>
            <br/>
            <p>
                Please choose the number that fits PERSON'S <span style={{ textDecoration: 'underline' }}>earlier</span> experience of relative racial privilege or marginalization best. Consider racial context, for instance, country, region, PERSON’s class and occupational privilege, and any other factors that are relevant. PERSON's racial identity and relative racial privilege or marginalization may have changed following immigration or a historical change in race relations.
            </p>
            <p>
                If PERSON has mixed racial privilege (either because PERSON has a mixed racial background or because PERSON goes
                between contexts in which that racial identity is perceived differently), you may choose two numbers rather than one.
            </p>
            <br/><br/>
            <CheckboxField id="container5.3" />
        </Box>
        
        <Link to="/q11"><Button onClick={handleSubmit} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Next</Button></Link>

      </form>

   
    </Box>
  );
};

export default Race;