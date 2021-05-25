import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

import useStyles from '../Form/styles';
import { createPost, updatePost } from '../../actions/posts';
import CheckboxField from '../Form/CheckboxField';
import FootnoteField from '../Form/FootnoteField';
import CheckboxInputField_Legal from '../Form/CheckboxInputField_Legal';

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

    const q6_28 = localStorage.getItem("container6.28"); //pre
    const q6_27 = localStorage.getItem("container6.27"); //post

    console.log('tests q6_28', q6_28);
    console.log('tests q6_27', q6_27);
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





    //PROCESS FOOTNOTE DATA:
    let tempFootnotes =JSON.parse(localStorage.getItem('footnotes'));


    const f6_26_1_checkbox = localStorage.getItem("6.26-1-checkbox");
    const f6_26_1 = localStorage.getItem("6.26-1");
    const concat6_26_1 = f6_26_1_checkbox + f6_26_1;

    const f6_26_2_checkbox = localStorage.getItem("6.26-2-checkbox");
    const f6_26_2 = localStorage.getItem("6.26-2");
    const concat6_26_2 = f6_26_2_checkbox + f6_26_2;

    const f6_26_3_checkbox = localStorage.getItem("6.26-3-checkbox");
    const f6_26_3 = localStorage.getItem("6.26-3");
    const concat6_26_3 = f6_26_3_checkbox + f6_26_3;

    const f6_26_4_checkbox = localStorage.getItem("6.26-4-checkbox");
    const f6_26_4 = localStorage.getItem("6.26-4");
    const concat6_26_4 = f6_26_4_checkbox + f6_26_4;

    const f6_26_5_checkbox = localStorage.getItem("6.26-5-checkbox");
    const f6_26_5 = localStorage.getItem("6.26-5");
    const concat6_26_5 = f6_26_5_checkbox + f6_26_5;

    const f6_26_6_checkbox = localStorage.getItem("6.26-6-checkbox");
    const f6_26_6 = localStorage.getItem("6.26-6");
    const concat6_26_6 = f6_26_6_checkbox + f6_26_6;

    const f6_26_7_checkbox = localStorage.getItem("6.26-7-checkbox");
    const f6_26_7 = localStorage.getItem("6.26-7");
    const concat6_26_7 = f6_26_7_checkbox + f6_26_7;


    let concatString6_26 =  [concat6_26_1, concat6_26_2, concat6_26_3, concat6_26_4, concat6_26_5, concat6_26_6, concat6_26_7].filter(Boolean).join('; '); 
    
    tempFootnotes[0][15].value = concatString6_26;
    localStorage.setItem('footnotes', JSON.stringify(tempFootnotes));


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
        
        <Box component="div">
            <label htmlFor="formGroupExampleInput6.26"><h4>Q 6.26</h4></label>
        
            <Typography variant="h5" align="left">PERSON's Relationship to Legal System
            </Typography>
       
            <p>
                Please rate Person’s relationship to the legal system 
                (Please choose all that apply):
            </p>
    
            <CheckboxInputField_Legal id="6.26" />
        </Box>

        <Box component="div" style={{ width: '100%' }}>
            <label htmlFor="formGroupExampleInput6.27"><h4>Q 6.27</h4></label>
         
            <p>
                Rate PERSON's <b>current</b> privilege or marginalization in relation to the legal system.
            </p>
          
            <CheckboxField id="container6.27" />
        </Box>

  
        <Box component="div" style={{ width: '100%' }}>
            <label htmlFor="formGroupExampleInput6.28"><h4>Q 6.28</h4></label>
       
            <p>
                Rate PERSON's <b>previous</b> privilege or marginalization in relation to the legal system.
            </p>
         
            <CheckboxField id="container6.28" />
        </Box>

        <Link to="/q21"><Button onClick={handleSubmit} style={{ marginTop: '20px' }} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Next</Button></Link>

      </form>

   
    </Box>
  );
};

export default RelationLegalSystem;
