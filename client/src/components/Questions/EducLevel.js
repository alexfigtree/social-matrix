/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

import useStyles from '../Form/styles';
import { createMatrix, updateMatrix } from '../../actions/posts';
import CheckboxField from '../Form/CheckboxField';
import FootnoteField from '../Form/FootnoteField';
import { questionData } from '../Form/QuestionData.js';
import { blankFootnotes } from '../Form/BlankFootnotes.js';

//q1
const EducLevel = () => {
  const history = useHistory();
  const [currentId, setCurrentId] = useState(0);
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });

  const [matrixData, setMatrixData] = useState({ matrixData: {} });
  const [footnotes, setFootnotes] = useState({ matrixData: {} });
  const matrix = useSelector((state) => (currentId ? state.matrixData.find((matrixData) => matrixData._id === currentId) : null));
  
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    //console.log("MATRIX", matrix);
    //localStorage.clear();
    if (matrix) setMatrixData(matrix);
  }, [matrix]);

  const clear = () => {
    setCurrentId(0);
    setMatrixData({ matrixData: {} });
    setFootnotes({ footnotes: {} });
  };

  const handleSubmit = async (e) => {
    let tempData = questionData;

    //pre: 1.3, 1.5
    //first [0] corresponds for first object (1/4)
    //second [0] corresponds to educ level

    //PRE/EARLIER:  
    //1.3, 1.5  
    //POST/CURRENT:
    //1.2, 1.4

    const q1_2 = localStorage.getItem("container1.2");
    const q1_3 = localStorage.getItem("container1.3");
    const q1_4 = localStorage.getItem("container1.4");
    const q1_5 = localStorage.getItem("container1.5");
  
    //pre 1.3, 1.5
    let domain1_pre_not_null = [q1_3,q1_5].filter(function (el) {
      return el !== null;
    });

    let domain1_pre_small = Math.min(...domain1_pre_not_null);
    let domain1_pre_large = Math.max(...domain1_pre_not_null);
    
    //post 1.2, 1.4
    let domain1_post_not_null = [q1_2,q1_4].filter(function (el) {
      return el !== null;
    });
    let domain1_post_small = Math.min(...domain1_post_not_null);
    let domain1_post_large = Math.max(...domain1_post_not_null);


    tempData[0][0].value = domain1_pre_small;
    tempData[1][0].value = domain1_pre_large;
    tempData[2][0].value = domain1_post_small;
    tempData[3][0].value = domain1_post_large;

    localStorage.setItem('matrixData', JSON.stringify(tempData));
    setMatrixData(tempData);
    //setMatrixData({ tempData });

    //setMatrixData({ ...matrixData, matrixData: tempData });

    //PROCESS FOOTNOTE DATA
    let tempFootnotes = blankFootnotes;
    //footnote 1.6
    const f1_6 = localStorage.getItem("1.6");
    //generate concatentated string

    tempFootnotes[0][0].value = f1_6;
    localStorage.setItem('footnotes', JSON.stringify(tempFootnotes));
    setFootnotes(tempFootnotes);


    //MISC:
    e.preventDefault();

    //console.log("WHAT IS CURRENT ID", currentId);

    if (currentId === 0) {

      dispatch(createMatrix(matrixData));
      clear();
    } else {
      dispatch(updateMatrix(currentId, matrixData));
      clear();
    }

    history.push('/q2');
  };
/*  <FootnoteField id="1.6" variant="outlined" label="" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
*/
  return (
    <Box className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

      <Typography variant="h5">Education Level</Typography>

        
        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput1.2"><h4>Q 1.2</h4></label>
        
            <Typography variant="h5" align="left">
                PERSON's Years of Education, compared to Person's  <span style={{ textDecoration: 'underline' }}> LOCAL COMMUNITY today </span> 
            </Typography>
    
            <p>
                How would you rate the privilege of PERSON's level of education, as compared to everyone in PERSON's 
                <Box component="span" style={{ fontWeight: 600, textDecoration: 'underline' }}>local 
                community today</Box>? "1" = most privileged (most educated) and "7" = least privileged 
                (least educated).  
            </p>
            <p>
                (<Box component="span" style={{ fontWeight: 600, textDecoration: 'underline' }}>In 
                answering this question, consider both time and place.</Box> For instance, in the US in 
                2019, 88% of adults  have high school diplomas, but only 33% have bachelor's degree or 
                higher. Those numbers were much lower 50 years ago. In Mexico in 2019, 45% of adults have 
                finished high school and 8% have college degrees. Therefore, being a high school graduate 
                has different status in Mexico than in the US, and that status has changed over the 
                generations. <Box component="span" style={{ fontWeight: 600 }}>The numbers will differ 
                for different communities and different countries and for people born into different generations.) You can choose 
                  two responses if PERSON goes between communities (for instance, between college and a 
                home community). </Box>
            </p>
        
            <CheckboxField id="container1.2" />
        </Box>

        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput1.3"><h4>Q 1.3</h4></label>
     
            <p>
                How would you rate the privilege of PERSON's level of education, 
                as compared to everyone in PERSON's 
                <span style={{ fontWeight: 600, textDecoration: 'underline' }}> 
                local community today at an earlier time</span>? "1" = most privileged (most educated) 
                and "7" = least privileged (least educated).  
            </p>
            <p>
                (<Box component="span" style={{ fontWeight: 600, textDecoration: 'underline' }}>
                In answering this question, consider both time and place.</Box> For instance, in the 
                US in 2019, 88% of adults  have high school diplomas, but only 33% have bachelor's 
                degree or higher. Those numbers were much lower 50 years ago. In Mexico in 2019, 45% of 
                adults have finished high school and 8% have college degrees. Therefore, being a high 
                school graduate has different status in Mexico than in the US, and that status has changed 
                over the generations. <Box component="span" style={{ fontWeight: 600 }}>The numbers will 
                differ for different communities and different countries and for people born into different generations.) You can 
                choose two responses if PERSON goes between communities (for instance, between college 
                and a home community). </Box>
            </p>
      
            <Box component="div"><Box component="span" style={{ fontWeight: 600, textDecoration: 'underline' }}>
            Choose one</Box></Box>

            <CheckboxField id="container1.3" />
        </Box>

        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput1.4"><h4>Q 1.4</h4></label>
     
            <Typography variant="h5" align="left">
                PERSON's Years of Education, compared to Person's <Box component="span" style={{ textDecoration: 'underline' }}> COUNTRY as a whole, today.</Box>
            </Typography>
        
            <p>
                How would you rate PERSON's level of education, as compared to everyone in PERSON's 
                <Box component="span" style={{ fontWeight: 600, textDecoration: 'underline' }}> current 
                country of residence as a whole (which may differ from the local community)?</Box> ("1" = 
                most privileged or most educated) and "7" = least privileged or least educated)
                (In answering this question, consider both time and place. For instance, in the US in 2019,
                88% of Americans have high school diplomas, but only 33% have bachelor's degrees. In
                contrast, 45% of Mexicans finish high school and 8% have college degrees. Therefore, being a
                high school graduate has different status in Mexico than in the US. Also, for instance, having a
                high school diploma offered more occupational choice and income potential in the 1930s than it
                does today, so consider when PERSON's education was completed. ) <Box component="span" 
                style={{ fontWeight: 600 }}> You can choose two
                responses if PERSON goes between countries or lived transnationally.</Box>
            </p>
            <CheckboxField id="container1.4" />
        </Box>

        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput1.5"><h4>Q 1.5</h4></label>
  
            <p>
                How would you rate the privilege of PERSON's level of education, as compared to everyone in PERSON's <Box component="span" style={{ fontWeight: 600, textDecoration: 'underline' }}>country of residence at an earlier time?</Box>  
            </p>
            <p>
                (In answering this question, consider both time and place. For instance, a high school diploma
                provided more privilege 50 years ago than today and may be more privileged in those countries
                with less higher education than in the US.
                <Box component="span" style={{ fontWeight: 600 }}>You can choose two responses if PERSON went between countries or lived transnationally. </Box>
            </p>
            <CheckboxField id="container1.5" />
        </Box>

        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput1.6"><h4>Q 1.6</h4></label>
      
            <p>
                <b>Please give PERSON's highest level of education </b>(for example, "finished 9th grade,"
                "vocational degree as electrician," or "masters degree in education").<b>  Also give year,
                community, and country in which PERSON finished education.</b>
            </p>
            
            <FootnoteField id="1.6" />   
        </Box>

        <Link to="/q2"><Button onClick={handleSubmit} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Next</Button></Link>
      </form>

   
    </Box>
  );
};

export default EducLevel;
