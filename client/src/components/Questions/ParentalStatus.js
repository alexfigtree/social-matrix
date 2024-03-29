/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

import useStyles from '../Form/styles';
import { createPost, updatePost } from '../../actions/posts';
import CheckboxField from '../Form/CheckboxField';
import FootnoteField from '../Form/FootnoteField';
import CheckboxInputField_ParentalStatus from '../Form/CheckboxInputField_ParentalStatus';
//q28
const ParentalStatus = () => {
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

      localStorage.setItem('7.4', '');
      localStorage.setItem('7.5', '');

  }, []);

  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let tempData = matrixData;

    const q7_7 = localStorage.getItem("container7.7"); //pre
    const q7_6 = localStorage.getItem("container7.6"); //post


    let domain28_pre_not_null = [q7_7].filter(function (el) {
      return el !== null;
    });
    let domain28_pre_small = Math.min(...domain28_pre_not_null);
    let domain28_pre_large = Math.max(...domain28_pre_not_null);


    let domain28_post_not_null = [q7_6].filter(function (el) {
      return el !== null;
    });
    let domain28_post_small = Math.min(...domain28_post_not_null);
    let domain28_post_large = Math.max(...domain28_post_not_null);

    tempData[0][7].value = domain28_pre_small;
    tempData[1][7].value = domain28_pre_large;
    tempData[2][7].value = domain28_post_small;
    tempData[3][7].value = domain28_post_large;

    localStorage.setItem('matrixData', JSON.stringify(tempData));
    setMatrixData(tempData);

    //PROCESS FOOTNOTE DATA:
    let tempFootnotes =JSON.parse(localStorage.getItem('footnotes'));


    const f7_3 = localStorage.getItem("7.3");

    const f7_3_5_checkbox = localStorage.getItem("7.3-5-checkbox");
    const f7_3_5 = localStorage.getItem("7.3-5");
    const concatString7_3_5 = f7_3_5_checkbox + ": " + f7_3_5;

    const f7_3_16_checkbox = localStorage.getItem("7.3-16-checkbox");
    const f7_3_16 = localStorage.getItem("7.3-16");
    const concatString7_3_16 = f7_3_16_checkbox + ": " + f7_3_16;

    const f7_4 = localStorage.getItem("7.4");
    const f7_5 = localStorage.getItem("7.5");

    //generate concatentated string
    let concatString = 
      [f7_3, concatString7_3_5, concatString7_3_16, f7_4, f7_5].filter(Boolean).join("; ");
    tempFootnotes[0][7].value = concatString;
    localStorage.setItem('footnotes', JSON.stringify(tempFootnotes));

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
    history.push('/q29');
  };

  return (
    <Box className={classes.paper} style={{ flexDirection: 'col' }}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

        <Typography variant="h5">Parental Status</Typography>

        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput7.3"><h4>Q 7.3</h4></label>
            
            <Typography variant="h5" align="left">
                PERSON'S Own Parental Status
            </Typography>
            <p>
                Select <b>all</b> responses that describe PERSON's own parental status. For instance, PERSON might be both a birth parent who raised his/her own children and a foster parent or a birth parent who gave one child up for adoption.
            </p>

            <CheckboxInputField_ParentalStatus id="7.3" />
        </Box>

        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput7.4"><h4>Q 7.4</h4></label>
            <p>
                If PERSON has had children, give the age(s) at which 
                PERSON gave birth or adopted or fostered each child.
            </p>

            <FootnoteField id="7.4" />
        </Box>

        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput7.5"><h4>Q 7.5</h4></label>
            <p>
                <b>Other identities affecting privilege or marginalization of 
                parental status.</b> If there are factors that particularly 
                privilege or marginalize PERSON&#39;s parental status, describe them 
                here. For instance, not having children may mean something different 
                at age 20 and at age 45. A teenaged mother or mother in her 40s with a 
                baby may be received differently in their communities. Similarly, 
                married or single parents, as well as straight or gay parents, may be 
                received differently.
            </p>
            <p>
                Please describe relevant factors here.
            </p>
            <FootnoteField id="7.5" />
        </Box>

        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput7.6"><h4>Q 7.6</h4></label>
            <p>
                Please rate PERSON's <b>current</b> privilege or marginalization in relation to PERSON's own parental status.
            </p>
      
            <CheckboxField id="container7.6" />
        </Box>

        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput7.7"><h4>Q 7.7</h4></label>
    
            <p>
                Please rate PERSON's privilege or marginalization in relation to PERSON's own parental status <b>earlier.</b>
            </p>
       
            <CheckboxField id="container7.7" />
        </Box> 
      
        <Link to="/q29"><Button onClick={handleSubmit} style={{ marginTop: '20px' }} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Next</Button></Link>
  
      </form>

   
    </Box>
  );
};

export default ParentalStatus;
