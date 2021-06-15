import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

import useStyles from '../Form/styles';
import { createPost, updatePost } from '../../actions/posts';
import CheckboxField from '../Form/CheckboxField';
import FootnoteField from '../Form/FootnoteField';

//q27
const GuardiansMaritalStatus = () => {
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

      localStorage.setItem('4.13.1', '');
      localStorage.setItem('4.13.2', '');
      localStorage.setItem('4.13.3', '');
      localStorage.setItem('4.13.4', '');
      localStorage.setItem('4.13.5', '');
      localStorage.setItem('4.15', '');

  }, []);

  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let tempData = matrixData;

    let q4_14_1 = localStorage.getItem("container4.14.1"); //pre and post
    let q4_14_2 = localStorage.getItem("container4.14.2"); //pre and post
    let q4_14_3 = localStorage.getItem("container4.14.3"); //pre and post
    let q4_14_4 = localStorage.getItem("container4.14.4"); //pre and post
    let q4_14_5 = localStorage.getItem("container4.14.5"); //pre and post

    console.log("1", q4_14_1);
    console.log("2", q4_14_2);
    console.log("3", q4_14_3);
    console.log("4", q4_14_4);
    console.log("5", q4_14_5);

    let domain27_pre_post = [...q4_14_1.split(','),...q4_14_2.split(','),...q4_14_3.split(','),...q4_14_4.split(','),...q4_14_5.split(',')];
    let domain27_pre_post_small = Math.min(...domain27_pre_post);
    let domain27_pre_post_large = Math.max(...domain27_pre_post);

    tempData[0][8].value = domain27_pre_post_small;
    tempData[1][8].value = domain27_pre_post_large;
    tempData[2][8].value = domain27_pre_post_small;
    tempData[3][8].value = domain27_pre_post_large;

    localStorage.setItem('matrixData', JSON.stringify(tempData));
    setMatrixData(tempData);

    //PROCESS FOOTNOTE DATA:
    let tempFootnotes =JSON.parse(localStorage.getItem('footnotes'));

    const f4_13_1 = localStorage.getItem("4.13.1");
    const f4_13_2 = localStorage.getItem("4.13.2");
    const f4_13_3 = localStorage.getItem("4.13.3");
    const f4_13_4 = localStorage.getItem("4.13.4");
    const f4_13_5 = localStorage.getItem("4.13.5");

    const f4_15 = localStorage.getItem("4.15");

    //generate concatentated string
    let concatString = 
      [f4_13_1, f4_13_2,f4_13_3,f4_13_4,f4_13_5,f4_15].filter(Boolean).join("; ");
    tempFootnotes[0][8].value = concatString;
    localStorage.setItem('footnotes', JSON.stringify(tempFootnotes));

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
    history.push('/q28');
  };

  return (
    <Box className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

        <Typography variant="h5">Guardians' Marital Status</Typography>
        

        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput4.13"><h4>Q 4.13</h4></label>
         
            <p>
                <b>Parent/Guardians' Marital Status While Raising Person.</b>
            </p>       
            <p>
                Please describe each Parent/Guardian’s marital status(es) <b>while 
                raising PERSON and include any changes in marital status while raising 
                Person.</b>
            </p>
            <p>
                For instance, was each Parent/Guardian married to: PERSON's other 
                parent/stepparent/guardian; living with PERSON's other parent; 
                widowed, divorced or separated from (and how many times) the other 
                parent/guardian, or never married? Is the parent in a monogamous, 
                polygamous or polyamorous family structure? Say if there was a 
                change in status, for instance, single parent who married stepparent 
                when Person was 13 or a birth parent who lost custody of PERSON when 
                Person was 4.
            </p>       
            <p>
                Please only answer for relevant number of parents/parenting figures.
            </p>       
        
            <p>
                Parent/Figure 1
            </p>
            <FootnoteField id="4.13.1" />

            <p>
                Parent/Figure 2
            </p>
            <FootnoteField id="4.13.2" />

            <p>
                Parent/Figure 3
            </p>
            <FootnoteField id="4.13.3" />

            <p>
                Parent/Figure 4
            </p>
            <FootnoteField id="4.13.4" />

            <p>
                Additional Parent/Figure
            </p>
            <FootnoteField id="4.13.5" />
        </Box>


        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput4.8"><h4>Q 4.14</h4></label>
          
            <p>
                How would you rate the marital status(es) of each Parent/Guardian while raising PERSON?
            </p>
            <p>
                You can choose two answers if Parent/Guardian's marital status changed.
            </p>
            <p>
                Please only answer for relevant number of parents/parenting figures.
            </p>
          
            <p>
                Parent/Figure 1
            </p>
            <CheckboxField id="container4.14.1" />

            <p>
                Parent/Figure 2
            </p>
            <CheckboxField id="container4.14.2" />

            <p>
                Parent/Figure 3
            </p>
            <CheckboxField id="container4.14.3" />

            <p>
                Parent/Figure 4
            </p>
            <CheckboxField id="container4.14.4" />

            <p>
                Additional Parent/ Parenting Figure
            </p>
            <CheckboxField id="container4.14.5" />
        </Box>

        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput4.15"><h4>Q 4.15</h4></label>
           
            <p>
                Please explain any changes in each Parent/Guardian's marital 
                status and anything that might affect how that marital status is 
                received in Parent/Guardian's community.
            </p>
           
            <FootnoteField id="4.15" />
        </Box>
        <Link to="/q28"><Button onClick={handleSubmit} style={{ marginTop: '20px' }} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Next</Button></Link>

      </form>

   
    </Box>
  );
};

export default GuardiansMaritalStatus;
