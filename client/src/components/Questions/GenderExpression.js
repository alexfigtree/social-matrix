/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

import useStyles from '../Form/styles';
import { createPost, updatePost } from '../../actions/posts';
import CheckboxField from '../Form/CheckboxField';
import CheckboxInputField_GenderExpression from '../Form/CheckboxInputField_GenderExpression';

//q32
const GenderExpression = () => {
  const history = useHistory();
  const [currentId, setCurrentId] = useState(0);
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  const [matrixData, setMatrixData] = useState(JSON.parse(localStorage.getItem('matrixData')));
  const [footnotes, setFootnotes] = useState(JSON.parse(localStorage.getItem('footnotes')));
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);


  useEffect(() => {
      var retrievedObject = localStorage.getItem('matrixData');
      console.log('retrievedObject:', JSON.parse(retrievedObject));

      var retrievedFootnotes = localStorage.getItem('footnotes');
      console.log('retrievedFootnotes:', JSON.parse(retrievedFootnotes));
  }, []);

  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let tempData = matrixData;

    const q7_22 = localStorage.getItem("container7.22"); //pre
    const q7_21 = localStorage.getItem("container7.21"); //post

    let domain32_pre_not_null = [q7_22].filter(function (el) {
      return el !== null;
    });
    let domain32_pre_small = Math.min(...domain32_pre_not_null);
    let domain32_pre_large = Math.max(...domain32_pre_not_null);

    let domain32_post_not_null = [q7_21].filter(function (el) {
      return el !== null;
    });
    let domain32_post_small = Math.min(...domain32_post_not_null);
    let domain32_post_large = Math.max(...domain32_post_not_null);

    tempData[0][3].value = domain32_pre_small;
    tempData[1][3].value = domain32_pre_large;
    tempData[2][3].value = domain32_post_small;
    tempData[3][3].value = domain32_post_large;

    localStorage.setItem('matrixData', JSON.stringify(tempData));
    setMatrixData(tempData);



    //PROCESS FOOTNOTE DATA:
    let tempFootnotes =JSON.parse(localStorage.getItem('footnotes'));

    const f7_20_1 = localStorage.getItem("7.20-1");
    const f7_20_1_checkbox = localStorage.getItem("7.20-1-checkbox");

    let concatString7_20_1 = 
      [f7_20_1_checkbox, f7_20_1].filter(Boolean).join(": ");

    const f7_20_2 = localStorage.getItem("7.20-2");
    const f7_20_2_checkbox = localStorage.getItem("7.20-2-checkbox");

    let concatString7_20_2 = 
      [f7_20_2_checkbox, f7_20_2].filter(Boolean).join(": ");


    const f7_20_3 = localStorage.getItem("7.20-3");
    const f7_20_3_checkbox = localStorage.getItem("7.20-3-checkbox");

    let concatString7_20_3 = 
      [f7_20_3_checkbox, f7_20_3].filter(Boolean).join(": ");

    const f7_20_4 = localStorage.getItem("7.20-4");
    const f7_20_4_checkbox = localStorage.getItem("7.20-4-checkbox");

    let concatString7_20_4 = 
      [f7_20_4_checkbox, f7_20_4].filter(Boolean).join(": ");


    //generate concatentated string
    let concatString = 
      [concatString7_20_1, concatString7_20_2, concatString7_20_3, concatString7_20_4].filter(Boolean).join("; ");
    tempFootnotes[0][3].value = concatString;
    localStorage.setItem('footnotes', JSON.stringify(tempFootnotes));



    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
    history.push('/q33');
  };

  return (
    <Box className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

        <Typography variant="h5">Gender Expression</Typography>


        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput7.20"><h4>Q 7.20</h4></label>
       
            <Typography variant="h5" align="left">
                Gender Expression
            </Typography>
            <p>
                Gender expression, or how one expresses one’s gender to others and how one is perceived, 
                through dress, hair, gestures, mannerisms, and activities, etc., is 
                separate from either sexual orientation or gender identity.
            </p>
     
            <p>
                Gender expression can also be <b>gender-nonconforming</b> (not conforming 
                with traditional gender expectations). For instance, a man who wears 
                long hair and “feminine” clothing, and jewelry may be cisgender and 
                straight, cisgender and gay, or gender-fluid and gay or genderqueer.
            </p>

            <p>
                In addition gender expression can be <b>gender-fluid</b>, 
                in which one shifts often between presentations associated 
                ith “masculine,” “feminine,” or mixes the two (for instance, 
                earing eyeliner, a long skirt and dangly earrings together with 
                a men’s shirt, tie, and work boots). Gender expression is 
                culturally and historically determined.
            </p>

            <p>
                Briefly describe PERSON'S gender expression.
            </p>
            <CheckboxInputField_GenderExpression id="7.20" />
        </Box>

        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput7.21"><h4>Q 7.21</h4></label>
         
            <p>
                Please rate how privileged or marginalized PERSON' gender expression is <b>currently</b>, including all the aspects of that status. Consider any changes in PERSON'S gender expression, social attitudes over time in PERSON'S larger community and whether those attitudes have shifted, and whether Person has moved to from one community or region to another, with implications for how PERSON is perceived.
            </p>
        
            <CheckboxField id="container7.21" />
        </Box>

 
        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput7.22"><h4>Q 7.22</h4></label>
     
            <p>
                Please rate how privileged or marginalized PERSON' gender expression <b>was previously</b>, including all the aspects of that status. Consider any changes in PERSON'S gender expression, social attitudes over time in PERSON'S larger community and whether those attitudes have shifted, and whether Person has moved to from one community or region to another, with implications for how PERSON is perceived.
            </p>
    
            <CheckboxField id="container7.22" />
        </Box>

        <Link to="/q33"><Button onClick={handleSubmit} style={{ marginTop: '20px' }} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Next</Button></Link>

      </form>

   
    </Box>
  );
};

export default GenderExpression;
