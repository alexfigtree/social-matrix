
/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

import useStyles from '../Form/styles';
import { createPost, updatePost } from '../../actions/posts';
import CheckboxField from '../Form/CheckboxField';
import FootnoteField from '../Form/FootnoteField';

//q7
const GuardiansChildHouseIncome = () => {
  const history = useHistory();
  const [currentId, setCurrentId] = useState(0);
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  const [matrixData, setMatrixData] = useState(JSON.parse(localStorage.getItem('matrixData')));
  const [footnotes, setFootnotes] = useState(JSON.parse(localStorage.getItem('footnotes')));

  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
/*

  const [q1_2, setq1_2] = useState(localStorage.getItem("container1.2"));
  const [q1_3, setq1_3] = useState(localStorage.getItem("container1.3"));
  const [q1_4, setq1_4] = useState(localStorage.getItem("container1.4"));
  const [q1_5, setq1_5] = useState(localStorage.getItem("container1.5"));*/

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);


  useEffect(() => {
      var retrievedObject = localStorage.getItem('matrixData');
      console.log('retrievedObject: during GuardChildhood Income', JSON.parse(retrievedObject));

      var retrievedFootnotes = localStorage.getItem('footnotes');
      console.log('retrievedFootnotes: during GuardChildhood Income', JSON.parse(retrievedFootnotes));
  }, []);

  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let tempData = matrixData;

    let q4_9_1 = localStorage.getItem("container4.9.1"); //pre and post
    let q4_9_2 = localStorage.getItem("container4.9.2"); //pre and post
    let q4_9_3 = localStorage.getItem("container4.9.3"); //pre and post
    let q4_9_4 = localStorage.getItem("container4.9.4"); //pre and post
    let q4_9_5 = localStorage.getItem("container4.9.5"); //pre and post

    console.log("1", q4_9_1);
    console.log("2", q4_9_2);
    console.log("3", q4_9_3);
    console.log("4", q4_9_4);
    console.log("5", q4_9_5);

    let domain7_not_null = [q4_9_1,q4_9_2,q4_9_3,q4_9_4,q4_9_5].filter(function (el) {
      return el !== null;
    });
    let domain7_pre_post_small = Math.min(...domain7_not_null);
    let domain7_pre_post_large = Math.max(...domain7_not_null);

    tempData[0][28].value = domain7_pre_post_small;
    tempData[1][28].value = domain7_pre_post_large;
    tempData[2][28].value = domain7_pre_post_small;
    tempData[3][28].value = domain7_pre_post_large;

    localStorage.setItem('matrixData', JSON.stringify(tempData));
    setMatrixData(tempData);

    //PROCESS FOOTNOTE DATA:
    let tempFootnotes =JSON.parse(localStorage.getItem('footnotes'));
    //footnote 1.6
    const f4_5_1 = localStorage.getItem("4.5.1");
    const f4_5_2 = localStorage.getItem("4.5.2");
    const f4_5_3 = localStorage.getItem("4.5.3");
    const f4_5_4 = localStorage.getItem("4.5.4");
    const f4_5_5 = localStorage.getItem("4.5.5");

    const f4_10_1 = localStorage.getItem("4.10.1");
    const f4_10_2 = localStorage.getItem("4.10.2");
    const f4_10_3 = localStorage.getItem("4.10.3");
    const f4_10_4 = localStorage.getItem("4.10.4");
    const f4_10_5 = localStorage.getItem("4.10.5");

    //generate concatentated string
    let concatString = 
      [f4_5_1, f4_5_2, f4_5_3, f4_5_4, f4_5_5, f4_10_1, f4_10_2, f4_10_3, f4_10_4, f4_10_5].filter(Boolean).join("; ");
    console.log('concatString', concatString);
    tempFootnotes[0][28].value = concatString;
    localStorage.setItem('footnotes', JSON.stringify(tempFootnotes));
    setFootnotes(tempFootnotes);


    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
    history.push('/q8');
  };

  return (
    <Box className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

        <Typography variant="h5">Guardians’ Childhood Household Income</Typography>
        

          <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput4.5"><h4>Q 4.5</h4></label>
      
            <Typography variant="h5" align="left">
                Please describe each Parent/Guardian's highest educational level 
                achieved while raising Q4.5 person (for example, "finished 9th grade," 
                "vocational degree as electrician," or "masters degree in education"). 
                Please also give year and community in which each Parent's education ended. 
                 years of education changed in PERSON's childhood, or if Parent's educational 
                 privilege changed because of im/migration or major changes in economy, 
                 please specify that.
            </Typography>

            <Typography variant="h5" align="left">
                Please only answer for relevant number of parents/parenting figures.
            </Typography>

            <p>Parent/Parenting Figure 1</p>
            <FootnoteField id="4.5.1" />

            <p>Parent/Parenting Figure 2</p>
            <FootnoteField id="4.5.2" />

            <p>Parent/Parenting Figure 3</p>
            <FootnoteField id="4.5.3" />

            <p>Parent/Parenting Figure 4</p>
            <FootnoteField id="4.5.4" />

            <p>Additional Parent/Parenting Figure</p>
            <FootnoteField id="4.5.5" />
      
          </Box>

          <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput4.9"><h4>Q 4.9</h4></label>
         
            <Typography variant="h5" align="left">
                <span style={{ textDecoration: 'underline' }}>Parent/Guardians' 
                occupation(s), compared to EachParent'/Guardians COUNTRY AND
                 LOCAL COMMUNITY later on while raising PERSON.</span> 
            </Typography>
       
            <p>
              How do you rate the relative privilege of each <b>Parent/Guardian's 
              household income and wealth <span style={{ textDecoration: 'underline' }}>
              DURING PARENT/GUARDIAN'S OWN CHILDHOOD (not person's childhood)</span></b>, 
              as compared to others in each Parent/Guardian's
              <b>community and country at that time?</b>
            </p>
            <p>
                You can give up to two answers for each <b>Parent/Guardian's </b>
                own childhood household income and wealth if it changed during 
                Parent/Guardian's childhood or was mixed (for instance because of 
                going between two parents/guardians' homes).
            </p>
            <p>
                Note: The value of household wealth (household income, assets, 
                and debts) differs for different generations and different 
                geographical areas.
            </p>
            <p>
                Please only answer for relevant number of parents/parenting figures.
            </p>
          
            <p>
                Parent/Figure 1
            </p>
            <CheckboxField id="container4.9.1" />

            <p>
                Parent/Figure 2
            </p>
            <CheckboxField id="container4.9.2" />

            <p>
                Parent/Figure 3
            </p>
            <CheckboxField id="container4.9.3" />

            <p>
                Parent/Figure 4
            </p>
            <CheckboxField id="container4.9.4" />

            <p>
                Additional Parent/Figure
            </p>
            <CheckboxField id="container4.9.5" />
          </Box>


          <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput4.10"><h4>Q 4.10</h4></label>
      
            <p>
                Please explain your answer to the last question, including any 
                significant changes in Parent/Guardian's household wealth during 
                Parent/Guardian's own childhood, and the reasons for those changes 
                (for instance, explain changes in wealth because of immigration, 
                or illness in the family).
            </p>

            <p>
                Please only answer for relevant number of parents/parenting figures.
            </p>

            <p>Parent/Parenting Figure 1</p>
            <FootnoteField id="4.10.1" />

            <p>Parent/Parenting Figure 2</p>
            <FootnoteField id="4.10.2" />

            <p>Parent/Parenting Figure 3</p>
            <FootnoteField id="4.10.3" />

            <p>Parent/Parenting Figure 4</p>
            <FootnoteField id="4.10.4" />

            <p>Additional Parent/Parenting Figure</p>
            <FootnoteField id="4.10.5" />
      
          </Box>
        
        <Link to="/q8"><Button onClick={handleSubmit} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Next</Button></Link>

      </form>

   
    </Box>
  );
};

export default GuardiansChildHouseIncome;
