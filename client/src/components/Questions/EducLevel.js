import React, { useState, useEffect } from 'react';
import { Box, InputLabel, TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { Link } from "react-router-dom";

import useStyles from '../Form/styles';
import { createPost, updatePost } from '../../actions/posts';
import CheckboxField from '../Form/CheckboxField';

const EducLevel = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '', footnotes: {}, matrixData: {} });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
  const [q1_2, setq1_2] = useState(null);
  const [q1_3, setq1_3] = useState(null);
  const [q1_4, setq1_4] = useState(null);
  const [q1_5, setq1_5] = useState(null);

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  useEffect(() => {
    //let q1_2 = localStorage.getItem("container1.2");

    setq1_2(localStorage.getItem("container1.2"));
    setq1_3(localStorage.getItem("container1.3"));
    setq1_4(localStorage.getItem("container1.4"));
    setq1_5(localStorage.getItem("container1.5"));
    console.log('1hey q12', q1_2);
    console.log('1hey q13', q1_3);
    console.log('1hey q14', q1_4);

  }, []);

  const clear = () => {
    //setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '', footnotes: {}, matrixData: {} });
  };

  const handleSubmit = async (e) => {
/*    console.log('hey q12', q1_2);
    console.log('hey q13', q1_3);
    console.log('hey q14', q1_4);
    console.log('hey q15', q1_5);
    e.preventDefault();*/

/*    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }*/
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

      <Typography variant="h5">Education Level</Typography>

        
        <Box component="div">
            <label htmlFor="formGroupExampleInput1.2"><h4>Q 1.2</h4></label>
            <br/>
            <Typography variant="h5" align="left">
                PERSON's Years of Education, compared to Person's  <Box component="span" style={{ textDecoration: 'underline' }}> LOCAL COMMUNITY today </Box> 
            </Typography>
            <br/>
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
                for different countries and for people born into different generations.) You can choose 
                  two responses if PERSON goes between communities (for instance, between college and a 
                home community). </Box>
            </p>
            <br/><br/>
            <CheckboxField id="container1.2" />


        </Box>


     
        <hr/><br/>
        <Box component="div">
            <label htmlFor="formGroupExampleInput1.3"><h4>Q 1.3</h4></label>
            <br/>
            <br/>
            <p>
                How would you rate the privilege of PERSON's level of education, 
                as compared to everyone in PERSON's 
                <Box component="span" style={{ fontWeight: 600, textDecoration: 'underline' }}>
                local community today at an earlier time</Box>? "1" = most privileged (most educated) 
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
                differ for different countries and for people born into different generations.) You can 
                choose two responses if PERSON goes between communities (for instance, between college 
                and a home community). </Box>
            </p>
            <br/>
            <Box component="div"><Box component="span" style={{ fontWeight: 600, textDecoration: 'underline' }}>
            Choose one</Box></Box>

            <br/>
            <br/>
            <CheckboxField id="container1.3" />

        </Box>



         
        <hr/><br/>
        <Box component="div">
            <label htmlFor="formGroupExampleInput1.4"><h4>Q 1.4</h4></label>
            <br/>
            <Typography variant="h5" align="left">
                PERSON's Years of Education, compared to Person's <Box component="span" style={{ textDecoration: 'underline' }}> COUNTRY as a whole, today.</Box>
            </Typography>
            <br/>
            <p>
                How would you rate PERSON's level of education, as compared to everyone in PERSON's 
                <Box component="span" style={{ fontWeight: 600, textDecoration: 'underline' }}>current 
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
            <br/>


            <CheckboxField id="container1.4" />
        </Box>


        //Q1.5
        <hr/><br/>
        <Box component="div"

  
>
            <label htmlFor="formGroupExampleInput1.5"><h4>Q 1.5</h4></label>
            <br/>
            <p>
                How would you rate the privilege of PERSON's level of education, as compared to everyone in PERSON's <Box component="span" style={{ fontWeight: 600, textDecoration: 'underline' }}>country of residence at an earlier time?</Box>  
            </p>
            <p>
                (In answering this question, consider both time and place. For instance, a high school diploma
                provided more privilege 50 years ago than today and may be more privileged in those countries
                with less higher education than in the US.
                <Box component="span" style={{ fontWeight: 600 }}>You can choose two responses if PERSON went between countries or lived transnationally. </Box>
            </p>
            <br/>
            <br/>

            <CheckboxField id="container1.5" />
        </Box>


        //Q1.6
        <hr/><br/>
        <Box component="div">
            <label htmlFor="formGroupExampleInput1.6"><h4>Q 1.6</h4></label>
            <br/>
            <p>
                <Box component="span" style={{ fontWeight: 600 }}>Please give PERSON's highest level of education</Box>(for example, "finished 9th grade,"
                "vocational degree as electrician," or "masters degree in education").<Box component="span" style={{ fontWeight: 600 }}>  Also give year,
                community, and country in which PERSON finished education.</Box>
            </p>
            <br/>
            <TextField id="container1.6" name="exampleInputEmail1.6" variant="outlined" label="" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />


        </Box>




<Typography variant="h5">{currentId ? `Editing EDUC "${post.title}"` : 'Q2'}</Typography>
        <TextField name="creator" variant="outlined" label="Subject" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="message" variant="outlined" label="Answer" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />


        
        <Link to="/q2"><Button onClick={handleSubmit} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Next</Button></Link>
      </form>

   
    </Paper>
  );
};

export default EducLevel;
