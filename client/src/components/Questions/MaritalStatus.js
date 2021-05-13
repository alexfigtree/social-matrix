import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

import useStyles from '../Form/styles';
import { createPost, updatePost } from '../../actions/posts';
import CheckboxField from '../Form/CheckboxField';
import FootnoteField from '../Form/FootnoteField';

//q29
const MaritalStatus = () => {
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

  const handleChange = async (event) => {
    localStorage.setItem(event.target.name, event.target.value);
  }; 
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    let tempData = matrixData;

    const q7_13 = localStorage.getItem("container7.13"); //pre
    const q7_12 = localStorage.getItem("container7.12"); //post

    let domain29_pre = [...q7_13.split(',')];
    let domain29_pre_small = Math.min(...domain29_pre);
    let domain29_pre_large = Math.max(...domain29_pre);

    let domain29_post = [...q7_12.split(',')];
    let domain29_post_small = Math.min(...domain29_post);
    let domain29_post_large = Math.max(...domain29_post);

    tempData[0][6].value = domain29_pre_small;
    tempData[1][6].value = domain29_pre_large;
    tempData[2][6].value = domain29_post_small;
    tempData[3][6].value = domain29_post_large;

    localStorage.setItem('matrixData', JSON.stringify(tempData));
    setMatrixData(tempData);


    //PROCESS FOOTNOTE DATA:
    let tempFootnotes =JSON.parse(localStorage.getItem('footnotes'));

    const f7_8 = localStorage.getItem("7.8");
    const f7_10 = localStorage.getItem("7.10");
    const f7_11 = localStorage.getItem("7.11");

    //generate concatentated string
    let concatString = 
      [f7_8, f7_10, f7_11].filter(Boolean).join("; ");
    tempFootnotes[0][6].value = concatString;
    localStorage.setItem('footnotes', JSON.stringify(tempFootnotes));


    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
    history.push('/q30');
  };

  return (
    <Box className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

        <Typography variant="h5">Marital Status</Typography>

       
        <Box component="div" style={{ width: '100%' }}>
            <label htmlFor="formGroupExampleInput7.8"><h4>Q 7.8</h4></label>
            <p>
                <b>PERSON'S Marital/Relational Status</b>
            </p>
            <p>
                Has PERSON ever been married, now or in the past?
            </p>
            <RadioGroup aria-label="gender" id="7.8" name="7.8" onChange={handleChange}>
              <FormControlLabel name="7.8" value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel name="7.8" value="No" control={<Radio />} label="No" />
            </RadioGroup>
        </Box>


        <Box component="div" style={{ width: '100%' }}>
            <label htmlFor="formGroupExampleInput7.10"><h4>Q 7.10</h4></label>
            <p>
                State PERSON'S age(s) at the time of each change in relationship 
                or marital status (e.g., “17 when first seriously coupled," 
                "single at age 22," "1st marriage age 28, divorce at age 41, 2nd 
                marriage at age 42,” or "never married, at 48").
            </p>

            <FootnoteField id="7.10" />
        </Box>


        <Box component="div" style={{ width: '100%' }}>
            <label htmlFor="formGroupExampleInput7.11"><h4>Q 7.11</h4></label>
            <p>
                Did these marital/relational statuses involve relationships 
                with someone of the opposite-sex, same-sex, or someone who 
                is/was transgender or genderqueer? Please specify.
            </p>

            <FootnoteField id="7.11" />
        </Box>

        <Box component="div">
            <label htmlFor="formGroupExampleInput7.12"><h4>Q 7.12</h4></label>
            
            <p>
                Please rate how privileged or marginalized PERSON'S marital/relational 
                status is, <b>currently</b>, including all the aspects of PERSON'S 
                marital/relational status
            </p>
       
            <CheckboxField id="container7.12" />
        </Box>

     
        <Box component="div">
            <label htmlFor="formGroupExampleInput7.13"><h4>Q 7.13</h4></label>
          
            <p>
                Please rate how privileged or marginalized PERSON'S marital/relational 
                status was <b>previously</b>, including all the aspects of PERSON'S 
                marital/relational status.
            </p>
         
            <CheckboxField id="container7.13" />
        </Box>

        <Link to="/q30"><Button onClick={handleSubmit} style={{ marginTop: '20px' }} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Next</Button></Link>

      </form>

   
    </Box>
  );
};

export default MaritalStatus;
