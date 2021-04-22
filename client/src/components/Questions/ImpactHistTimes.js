import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

import useStyles from '../Form/styles';
import { createPost, updatePost } from '../../actions/posts';
import CheckboxField from '../Form/CheckboxField';

//q18
const ImpactHistTimes = () => {
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

    const q6_17 = localStorage.getItem("container6.17"); //pre
    const q6_16 = localStorage.getItem("container6.16"); //post

    let domain18_pre = [...q6_17.split(',')];
    let domain18_pre_small = Math.min(...domain18_pre);
    let domain18_pre_large = Math.max(...domain18_pre);


    let domain18_post = [...q6_16.split(',')];
    let domain18_post_small = Math.min(...domain18_post);
    let domain18_post_large = Math.max(...domain18_post);


    tempData[0][17].value = domain18_pre_small;
    tempData[1][17].value = domain18_pre_large;
    tempData[2][17].value = domain18_post_small;
    tempData[3][17].value = domain18_post_large;

    localStorage.setItem('matrixData', JSON.stringify(tempData));
    setMatrixData(tempData);



    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
    history.push('/q19');
  };

  return (
    <Box className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

        <Typography variant="h5">Impact of Historical Times</Typography>

        <Box component="div">
            <label htmlFor="formGroupExampleInput6.16"><h4>Q 6.16</h4></label>
            <br/>
            <Typography variant="h5" align="left">Degree PERSON is currently affected by historical period or changes
            </Typography>
            <p>
                Subjectively rate the extent to which PERSON's privilege or marginalization was affected as a result of having lived through historical, cultural, or political events. For example, did PERSON live through war, famine, or persecution and did the PERSON suffer or benefit as a result of those events? Or has PERSON experienced oppression or marginalization because of race, religion, sexual orientation, immigration status, or marital status?
            </p>
            <br/>
            <CheckboxField id="container6.16" />
        </Box>


        <Box component="div">
            <label htmlFor="formGroupExampleInput6.17"><h4>Q 6.17</h4></label>
            <br/>
            <Typography variant="h5" align="left">Degree PERSON was previously affected by historical period or changes.
            </Typography>
            <p>
                Subjectively rate the extent to which PERSON's privilege or marginalizing <b>was previously affected</b> as a result of having lived through historical, cultural, or political events. For example, did PERSON live through war, famine, or persecution and did the PERSON suffer or benefit as a result of those events? Or did PERSON experienced oppression or marginalization because of race, religion, sexual orientation, immigration status, or marital status?
            </p>
            <br/>
            <CheckboxField id="container6.17" />
        </Box>

        
        <Link to="/q19"><Button onClick={handleSubmit} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Next</Button></Link>

      </form>

   
    </Box>
  );
};

export default ImpactHistTimes;
