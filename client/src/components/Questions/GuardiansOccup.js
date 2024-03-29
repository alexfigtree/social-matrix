/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Box, InputLabel, TextField, Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { Link, useHistory } from "react-router-dom";

import useStyles from '../Form/styles';
import { createPost, updatePost } from '../../actions/posts';
import CheckboxField from '../Form/CheckboxField';
import FootnoteField from '../Form/FootnoteField';

//q4
const GuardiansOccup = () => {
  const history = useHistory();
  const [currentId, setCurrentId] = useState(0);
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  const [matrixData, setMatrixData] = useState(JSON.parse(localStorage.getItem('matrixData')));
  
  const [footnotes, setFootnotes] = useState(JSON.parse(localStorage.getItem('footnotes')));

  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

/*  const [q1_2, setq1_2] = useState(localStorage.getItem("container1.2"));
  const [q1_3, setq1_3] = useState(localStorage.getItem("container1.3"));
  const [q1_4, setq1_4] = useState(localStorage.getItem("container1.4"));
  const [q1_5, setq1_5] = useState(localStorage.getItem("container1.5"));*/

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);


  useEffect(() => {
    var retrievedObject = localStorage.getItem('matrixData');
    console.log('GUARD OCCUP - now q4: retrievedObject: ', JSON.parse(retrievedObject));

    var retrievedFootnotes = localStorage.getItem('footnotes');
      console.log('GUARD OCCUP - now q4: retrievedFootnotes: ', JSON.parse(retrievedFootnotes)); 
  }, []);

  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    let tempData = matrixData;

    let q4_6_1 = localStorage.getItem("container4.6.1"); //pre and post
    let q4_6_2 = localStorage.getItem("container4.6.2"); //pre and post
    let q4_6_3 = localStorage.getItem("container4.6.3"); //pre and post
    let q4_6_4 = localStorage.getItem("container4.6.4"); //pre and post
    let q4_6_5 = localStorage.getItem("container4.6.5"); //pre and post

    console.log("1", q4_6_1);
    console.log("2", q4_6_2);
    console.log("3", q4_6_3);
    console.log("4", q4_6_4);
    console.log("5", q4_6_5);

    let domain4_not_null = [q4_6_1,q4_6_2,q4_6_3,q4_6_4,q4_6_5].filter(function (el) {
      return el !== null;
    });
    //console.log('domain4_pre_post', domain4_pre_post);
    //let domain4_pre_post = [...q4_6_1.split(','),...q4_6_2.split(','),...q4_6_3.split(','),...q4_6_4.split(','),...q4_6_5.split(',')].filter(Boolean);
    let domain4_pre_post_small = Math.min(...domain4_not_null);
    let domain4_pre_post_large = Math.max(...domain4_not_null);

    tempData[0][31].value = domain4_pre_post_small;
    tempData[1][31].value = domain4_pre_post_large;
    tempData[2][31].value = domain4_pre_post_small;
    tempData[3][31].value = domain4_pre_post_large;

    localStorage.setItem('matrixData', JSON.stringify(tempData));
    setMatrixData(tempData);

    //PROCESS FOOTNOTE DATA:
    let tempFootnotes =JSON.parse(localStorage.getItem('footnotes'));
    const f4_7 = localStorage.getItem("4.7");
    tempFootnotes[0][31].value = f4_7;
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
    history.push('/q5');
  };

  return (
    <Box className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

        <Typography variant="h5">Guardian's Occupation</Typography>
        
          <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput4.6"><h4>Q 4.6</h4></label>
           
            <Typography variant="h5" align="left">
                <span style={{ textDecoration: 'underline' }}>
                Parent/Guardians' occupation(s), compared to each Parent'/Guardian's 
                COUNTRY AND LOCAL COMMUNITY later on while raising PERSON.</span> 
            </Typography>
        
            <p>
                How would you rate the privilege of each Parent/Guardian 
                occupation while raising PERSON, as compared to everyone in 
                Parent/Guardian's COUNTRY and LOCAL COMMUNITY?
            </p>
            <p style={{ textDecoration: 'underline' }}>
                Choose one answer for COUNTRY and, if different, a second answer 
                for LOCAL COMMUNITY, for a total of one or two responses. If 
                  relative occupational privilege changed because of Parent/Guardian's 
                work situation or other change in status, including im/migration, 
                you may also choose two responses.
            </p>
            <p>
                Please only answer for relevant number of parents/parenting figures.
            </p>
            
            <p>
                Parent/Figure 1
            </p>
            <CheckboxField id="container4.6.1" />

            <p>
                Parent/Figure 2
            </p>
            <CheckboxField id="container4.6.2" />

            <p>
                Parent/Figure 3
            </p>
            <CheckboxField id="container4.6.3" />

            <p>
                Parent/Figure 4
            </p>
            <CheckboxField id="container4.6.4" />

            <p>
                Additional Parent/ Parenting Figure
            </p>
            <CheckboxField id="container4.6.5" />
          </Box>

          <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput4.7"><h4>Q 4.7</h4></label>
      
            <Typography variant="h5" align="left">
                Describe each Parent/Guardian's occupation(s) during PERSON's childhood. 
                Briefly explain why you rated Parent's occupation(s) as you did in 
                relation to both local community and country. Your answer can include 
                multiple occupations over time and in different communities and countries 
                for each parent, if relevant:
            </Typography>
      
            <FootnoteField id="4.7" />
      
          </Box>

        
        <Link to="/q5"><Button onClick={handleSubmit} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Next</Button></Link>

      </form>

   
    </Box>
  );
};

export default GuardiansOccup;
