import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

import useStyles from '../Form/styles';
import { createPost, updatePost } from '../../actions/posts';
import { createMatrix, updateMatrix } from '../../actions/posts';
import CheckboxField from '../Form/CheckboxField';
import { questionData } from '../Form/QuestionData.js';

import FootnoteField from '../Form/FootnoteField';

//q2
const GuardiansEduc = () => {
  const history = useHistory();
  const [currentId, setCurrentId] = useState(0);
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });

  const [matrixData, setMatrixData] = useState(JSON.parse(localStorage.getItem('matrixData')));
  const [footnotes, setFootnotes] = useState(JSON.parse(localStorage.getItem('footnotes')));


  const matrix = useSelector((state) => (currentId ? state.matrixData.find((matrixData) => matrixData._id === currentId) : null));
  
  const dispatch = useDispatch();
  const classes = useStyles();
  let [q4_4_1, setq4_4_1] = useState('');
  let [q4_4_2, setq4_4_2] = useState('');
  let [q4_4_3, setq4_4_3] = useState('');
  let [q4_4_4, setq4_4_4] = useState('');
  let [q4_4_5, setq4_4_5] = useState('');

  useEffect(() => {
    if (matrix) setMatrixData(matrix);
  }, [matrix]);

  useEffect(() => {
    if (footnotes) setMatrixData(footnotes);
  }, [footnotes]);


  useEffect(() => {
    var retrievedObject = localStorage.getItem('matrixData');
    console.log('retrievedObject during q2 Guard Educ: ', JSON.parse(retrievedObject));

    var retrievedFootnotes = localStorage.getItem('footnotes');
    console.log('retrievedFootnotes during q2 Guard Educ: ', JSON.parse(retrievedFootnotes));      
  //let q1_2 = localStorage.getItem("container1.2");

  }, []);

  const clear = () => {
    setCurrentId(0);
    setMatrixData({ matrixData: {} });
    setFootnotes({ matrixData: {} });
  };

  const handleSubmit = async (e) => {
    //PROCESS FOOTNOTE DATA:
    let tempFootnotes =JSON.parse(localStorage.getItem('footnotes'));
    //footnote 1.6
    const f4_5 = localStorage.getItem("4.5");
    //generate concatentated string

    console.log('erge', f4_5);
    tempFootnotes[0][33].value = f4_5;
    localStorage.setItem('footnotes', JSON.stringify(tempFootnotes));
    setFootnotes(tempFootnotes);

    //PROCESS MATRIX DATA
    let tempData = JSON.parse(localStorage.getItem('matrixData'));

    const q4_4_1 = localStorage.getItem("container4.4.1"); //pre and post
    const q4_4_2 = localStorage.getItem("container4.4.2"); //pre and post
    let q4_4_3 = localStorage.getItem("container4.4.3"); //pre and post
    let q4_4_4 = localStorage.getItem("container4.4.4"); //pre and post
    let q4_4_5 = localStorage.getItem("container4.4.5"); //pre and post

    console.log("1", q4_4_1);
    console.log("2", q4_4_2);
    console.log("3", q4_4_3);
    console.log("4", q4_4_4);
    console.log("5", q4_4_5);

/*    let domain2_not_null = [q4_4_1,q4_4_2,q4_4_3,q4_4_4,q4_4_5].filter(function (el) {
      
      return el !== null;
    });*/

    //console.log('domain2_not_null', domain2_not_null);

    //let domain2_pre_post = [...domain2_not_null.split(',')];
    //let domain2_pre_post = [domain2_not_null];
    //console.log('domain2_pre_post', domain2_pre_post);
    let domain2_pre_post = [...q4_4_1.split(','),...q4_4_2.split(','),...q4_4_3.split(','),...q4_4_4.split(','),...q4_4_5.split(',')];

    console.log('wergwer', domain2_pre_post);
    let domain2_pre_post_small = Math.min(...domain2_pre_post);
    let domain2_pre_post_large = Math.max(...domain2_pre_post);
    console.log('domain2_pre_post_small', domain2_pre_post_small);
    console.log('domain2_pre_post_large', domain2_pre_post_large);

    tempData[0][33].value = domain2_pre_post_small;
    tempData[1][33].value = domain2_pre_post_large;
    tempData[2][33].value = domain2_pre_post_small;
    tempData[3][33].value = domain2_pre_post_large;

    localStorage.setItem('matrixData', JSON.stringify(tempData));
    setMatrixData(tempData);


    //MISC
    e.preventDefault();

    //console.log("WHAT IS CURRENT ID", currentId);

    if (currentId === 0) {
      dispatch(createMatrix(matrixData));
      clear();
    } else {
      dispatch(updateMatrix(currentId, matrixData));
      clear();
    }
    history.push('/q3');
  };

  return (
    <Box className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

        <Typography variant="h5">Guardians’ Education</Typography>

        <Box component="div">
            <label htmlFor="formGroupExampleInput4.4"><h4>Q 4.4</h4></label>
            <br/>
            <Typography variant="h5" align="left">
                <span style={{ textDecoration: 'underline' }}>Parent/guardian's 
                highest level of education, compared to Parent/Guardian's COUNTRY 
                AND LOCAL COMMUNITY while raising PERSON, early in raising 
                PERSON.</span> 
            </Typography>
            <br/>
            <p>
                How would you rate the privilege of each <b>Parent/Guardian's</b> 
                level of education early in the time they were <b>raising PERSON</b>, 
                as compared to everyone in that <b>Parent/Guardian's COUNTRY</b> and 
                <b>LOCAL COMMUNITY</b>?
            </p>
            <p>
                <b>In answering this question, consider both time and place.</b> For 
                instance, in the US in 2019, 88% of adults have high school 
                diplomas, but only 33% have bachelor's degree or higher. Those 
                numbers were much lower 50 years ago. In Mexico in 2019, 45% of 
                adults have finished high school and 8% have college degrees. 
                Therefore, being a high school graduate has different status in 
                Mexico than in the US, and that status has changed over the 
                generations. <b>The numbers will differ for different local 
                communities and for people born into different generations.</b>
            </p>

            <Typography variant="h5" align="left">
                <span style={{ textDecoration: 'underline' }}>Choose one 
                answer for COUNTRY and, if different, a second answer for 
                LOCAL COMMUNITY, for a total of one or two responses. 
                If relative educational privilege changed because of getting 
                more education or im/migrating, you may also choose two 
                responses.</span> 
            </Typography>
            <p>
                <b>Only answer for the actual number of parents/parenting figures.</b>
            </p>
            <br/><br/>
            <p>
                Parent/Figure 1
            </p>
            <CheckboxField id="container4.4.1" />

            <p>
                Parent/Figure 2
            </p>
            <CheckboxField id="container4.4.2" />

            <p>
                Parent/Figure 3
            </p>
            <CheckboxField id="container4.4.3" />

            <p>
                Parent/Figure 4
            </p>
            <CheckboxField id="container4.4.4" />

            <p>
                Additional Parent/Figure
            </p>
            <CheckboxField id="container4.4.5" />
        </Box>


        <Box component="div">
            <label htmlFor="formGroupExampleInput4.5"><h4>Q 4.5</h4></label>
            <br/>
            <p>
                <b>Please describe each Parent/Guardian's highest educational 
                level achieved while raising personv</b> (for example, "finished 
                9th grade," "vocational degree as electrician," or "masters degree 
                in education").  <b>Please also give year and community in which 
                each Parent's education ended. If years of education changed in 
                PERSON's childhood, or if Parent's educational privilege changed 
                because of im/migration or major changes in economy, please specify 
                that.</b>
            </p>
            <br/>
            
            <FootnoteField id="4.5" />
           
        </Box>


        <Link to="/q3"><Button onClick={handleSubmit} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Next</Button></Link>
      </form>

   
    </Box>
  );
};

export default GuardiansEduc;
