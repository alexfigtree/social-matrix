import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

import useStyles from '../Form/styles';
import { createPost, updatePost } from '../../actions/posts';
import CheckboxField from '../Form/CheckboxField';
import FootnoteField from '../Form/FootnoteField';

//q19
const RelationToMilitary = () => {
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
      console.log('retrievedObject', JSON.parse(retrievedObject));

      var retrievedFootnotes = localStorage.getItem('footnotes');
      console.log('retrievedFootnotes', JSON.parse(retrievedFootnotes));
  }, []);

  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let tempData = matrixData;

    const q6_25 = localStorage.getItem("container6.25"); //pre
    const q6_24 = localStorage.getItem("container6.24"); //post

    let domain19_pre = [...q6_25.split(',')];
    let domain19_pre_small = Math.min(...domain19_pre);
    let domain19_pre_large = Math.max(...domain19_pre);


    let domain19_post = [...q6_24.split(',')];
    let domain19_post_small = Math.min(...domain19_post);
    let domain19_post_large = Math.max(...domain19_post);


    tempData[0][16].value = domain19_pre_small;
    tempData[1][16].value = domain19_pre_large;
    tempData[2][16].value = domain19_post_small;
    tempData[3][16].value = domain19_post_large;

    localStorage.setItem('matrixData', JSON.stringify(tempData));
    setMatrixData(tempData);


    //PROCESS FOOTNOTE DATA:
/*    let tempFootnotes =JSON.parse(localStorage.getItem('footnotes'));

    const f6_19 = localStorage.getItem("6.19");
    const f6_20 = localStorage.getItem("6.20");
    const f6_21 = localStorage.getItem("6.21");
    const f6_22 = localStorage.getItem("6.22");
    const f6_23 = localStorage.getItem("6.23");


    //generate concatentated string
    let concatString = 
      [f6_19, f6_8].filter(Boolean).join("; ");
    tempFootnotes[0][20].value = concatString;
    localStorage.setItem('footnotes', JSON.stringify(tempFootnotes));*/


    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
    history.push('/q20');
  };

  return (
    <Box className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

        <Typography variant="h5">Relation to Military</Typography>
        

        <Box component="div" style={{ width: '100%' }}>
            <label htmlFor="formGroupExampleInput6.24"><h4>Q 6.24</h4></label>
            <br/>
            <p>
                Rate PERSON's <b>current</b> privilege or marginalization in relation to the military. (Please select one).
            </p>
            <br/>
            <CheckboxField id="container6.24" />
        </Box>

     
        <Box component="div" style={{ width: '100%' }}>
            <label htmlFor="formGroupExampleInput6.25"><h4>Q 6.25</h4></label>
            <br/>
            <p>
                Rate PERSON's <b>previous</b> privilege or marginalization in relation to the military. (Please select one).
            </p>
            <br/>
            <CheckboxField id="container6.25" />
        </Box>

        <Link to="/q20"><Button onClick={handleSubmit} style={{ marginTop: '20px' }} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Next</Button></Link>
        
        

      </form>

   
    </Box>
  );
};

export default RelationToMilitary;
