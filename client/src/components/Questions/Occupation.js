/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

import useStyles from '../Form/styles';
import { createPost, updatePost } from '../../actions/posts';
import CheckboxField from '../Form/CheckboxField';
import FootnoteField from '../Form/FootnoteField';

//q3
const Occupation = () => {
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

  let [q2_2, setq2_2] = useState('');
  let [q2_4, setq2_4] = useState('');


  useEffect(() => {
      var retrievedObject = localStorage.getItem('matrixData');
      console.log('retrievedObject: during Occupation', JSON.parse(retrievedObject));

      var retrievedFootnotes = localStorage.getItem('footnotes');
      console.log('retrievedFootnotes during Occupation: ', JSON.parse(retrievedFootnotes)); 
  //let q1_2 = localStorage.getItem("container1.2");

  }, []);

  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {

    //PROCESS MATRIX DATA:
    let tempData = matrixData;

    //Expected matrixData for:
    //2.2, [2,4] - post
    //2.4, [1,3] - pre
    //{
    //1
    //3,
    //2,
    //4
      //}
    const q2_2 = localStorage.getItem("container2.2");
    const q2_4 = localStorage.getItem("container2.4");

    let domain3_pre_not_null = [q2_4].filter(function (el) {
      return el !== null;
    });

    let domain3_post_not_null = [q2_2].filter(function (el) {
      return el !== null;
    });

    console.log('domain3_pre', domain3_pre_not_null);
    console.log('domain3_pre', domain3_post_not_null);

    let domain3_pre_small = Math.min(...domain3_pre_not_null);
    let domain3_pre_large = Math.max(...domain3_pre_not_null);

    let domain3_post_small = Math.min(...domain3_post_not_null);
    let domain3_post_large = Math.max(...domain3_post_not_null);

    console.log('Values being saved for domain3 pre', domain3_pre_small, ' ', domain3_pre_large);
    console.log('Values being saved for domain3 post', domain3_post_small, ' ', domain3_post_large);
    //first [0] corresponds for first object (1/4)
    //second [0] corresponds to educ level
    tempData[0][32].value = domain3_pre_small; //will need to change to 33, 32 ARRAY VALUE
    tempData[1][32].value = domain3_pre_large;
    tempData[2][32].value = domain3_post_small;
    tempData[3][32].value = domain3_post_large;

    localStorage.setItem('matrixData', JSON.stringify(tempData));
    setMatrixData(tempData);


    //PROCESS FOOTNOTE DATA:
    let tempFootnotes =JSON.parse(localStorage.getItem('footnotes'));
    //footnote 1.6
    const f2_1 = localStorage.getItem("2.1");
    const f2_3 = localStorage.getItem("2.3");
    const f2_5 = localStorage.getItem("2.5");

    //generate concatentated string
    let concatString = 
      [f2_1, f2_3, f2_5].filter(Boolean).join("; ");

    console.log('concatString', concatString);
    tempFootnotes[0][32].value = concatString;
    localStorage.setItem('footnotes', JSON.stringify(tempFootnotes));
    setFootnotes(tempFootnotes);

    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
    history.push('/q4');
  };

  return (
    <Box className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

        <Typography variant="h4" align="center" style={{ width: '100%' }}>Occupation</Typography>

        
        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput2.1"><h4>Q 2.1</h4></label>
           
            <Typography variant="h5" align="left">
                PERSON'S Current Occupation(s)
            </Typography>
           
            <p>
                Include all <b style={{ textDecoration: 'underline' }}>current</b> jobs or occupations (for example, secretary, doctor, homemaker, student, unemployed, on disability).
            </p>
           
            <FootnoteField id="2.1" />
          
        </Box>

        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput2.2"><h4>Q 2.2</h4></label>
          
            <p>
                <b>Please rate current occupation(s):</b> (relative to PERSON's <b>current community</b>). (You may choose up to two responses)
            </p>
            
            <CheckboxField id="container2.2" />
        </Box>


        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput2.1"><h4>Q 2.3</h4></label>
          
            <Typography variant="h5" align="left">
                PERSON'S Previous Occupation(s)
            </Typography>
        
            <p>
                Include previous long-term jobs or occupations (for example, secretary, doctor,
                homemaker, student, unemployed, on disability).
            </p>
          
            <FootnoteField id="2.3" />
         
        </Box>

        
        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput2.4"><h4>Q 2.4</h4></label>
            
            <p>
                <b>Please rate occupation:</b> (relative to PERSON's <b>community at the time Person had this
                occupation</b>). (You may choose up to two responses)
            </p>
          
            <CheckboxField id="container2.4" />
        </Box>


       
        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput2.5"><h4>Q 2.5</h4></label>
      
            <p>
                Briefly explain your answer(s) on occupation, including any changes because of job
                change or community/country change:
            </p>
      
            <FootnoteField id="2.5" />
      
        </Box>

        
        <Link to="/q4"><Button onClick={handleSubmit} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Next</Button></Link>

      </form>

   
    </Box>
  );
};

export default Occupation;
