import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

import useStyles from '../Form/styles';
import { createPost, updatePost } from '../../actions/posts';
import CheckboxField from '../Form/CheckboxField';

//q14
const FamilyReligion = () => {
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

    const q6_3 = localStorage.getItem("container6.3"); //pre
    const q6_2 = localStorage.getItem("container6.2"); //post

    let domain14_pre = [...q6_3.split(',')];
    let domain14_pre_small = Math.min(...domain14_pre);
    let domain14_pre_large = Math.max(...domain14_pre);


    let domain14_post = [...q6_2.split(',')];
    let domain14_post_small = Math.min(...domain14_post);
    let domain14_post_large = Math.max(...domain14_post);


    tempData[0][21].value = domain14_pre_small;
    tempData[1][21].value = domain14_pre_large;
    tempData[2][21].value = domain14_post_small;
    tempData[3][21].value = domain14_post_large;


    localStorage.setItem('matrixData', JSON.stringify(tempData));
    setMatrixData(tempData);



    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
    history.push('/q15');
  };

  return (
    <Box className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

        <Typography variant="h5">Family Religion</Typography>
        

        <Box component="div">
            <label htmlFor="formGroupExampleInput6.2"><h4>Q 6.2</h4></label>
            <br/>
            <p>
                Including all sides of PERSON's family, rate the extent to which that religion is <b>currently</b> dominant or marginalized in PERSON's country or region. You may include two choices, if there is more than one religion in your family of origin.
            </p>
            <br/><br/>
            <CheckboxField id="container6.2" />
        </Box>

        <Box component="div">
            <label htmlFor="formGroupExampleInput6.3"><h4>Q 6.3</h4></label>
            <br/>
            <p>
                Rate the extent to which that religion(s) or philosophy(ies) was dominant or marginalized <b style={{ textDecoration: 'underline' }}>earlier</b> in PERSON'S life. For instance, the family's religion may be more or less marginalized now than in the past because of immigration or because of earlier religious conversion in the family, or because of historical changes in how that religion was received.
            </p>
            <br/><br/>
            <CheckboxField id="container6.3" />
        </Box>
        
        <Link to="/q15"><Button onClick={handleSubmit} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Next</Button></Link>

      </form>

   
    </Box>
  );
};

export default FamilyReligion;
