import React, { useState, useEffect } from 'react';
import { Box, InputLabel, TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { Link, useHistory } from "react-router-dom";

import useStyles from '../Form/styles';
import { createPost, updatePost } from '../../actions/posts';
import CheckboxField from '../Form/CheckboxField';

const GuardiansOccup = () => {
  const history = useHistory();
  const [currentId, setCurrentId] = useState(0);
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  const [q1_2, setq1_2] = useState(localStorage.getItem("container1.2"));
  const [q1_3, setq1_3] = useState(localStorage.getItem("container1.3"));
  const [q1_4, setq1_4] = useState(localStorage.getItem("container1.4"));
  const [q1_5, setq1_5] = useState(localStorage.getItem("container1.5"));

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);


  useEffect(() => {
    //let q1_2 = localStorage.getItem("container1.2");

    setq1_2(localStorage.getItem("container1.2"));
    setq1_3(localStorage.getItem("container1.3"));
    setq1_4(localStorage.getItem("container1.4"));
    setq1_5(localStorage.getItem("container1.5"));
    console.log('OCCUP q12', typeof q1_2);
    console.log('OCCUP q13', q1_3);
    console.log('OCCUP q14', q1_4);
    console.log('OCCUP q14', q1_5);

  }, []);

  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
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
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

        <Typography variant="h5">Guardian's Occupation</Typography>
        
        <Box component="div">
            <label htmlFor="formGroupExampleInput2.1"><h4>Q 2.1</h4></label>
            <br/>
            <Typography variant="h5" align="left">
                PERSON'S Current Occupation(s)
            </Typography>
            <br/>
            <p>
                Include all <b style={{ textDecoration: 'underline' }}>current</b> jobs or occupations (for example, secretary, doctor, homemaker, student, unemployed, on disability).
            </p>
            <br/>
           
            <TextField id="container2.1" name="exampleInputEmail2.1" variant="outlined" label="" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
          
        </Box>


        <hr/><br/>
        <Box component="div">
            <label htmlFor="formGroupExampleInput2.2"><h4>Q 2.2</h4></label>
            <br/>
            <p>
                <b>Please rate current occupation(s):</b> (relative to PERSON's <b>current community</b>). (You may choose up to two responses)
            </p>
            <br/>
            <CheckboxField id="container2.2" />
        </Box>


        <hr/><br/>
        <Box component="div">
            <label htmlFor="formGroupExampleInput2.1"><h4>Q 2.3</h4></label>
            <br/>
            <Typography variant="h5" align="left">
                PERSON'S Previous Occupation(s)
            </Typography>
            <br/>
            <p>
                Include previous long-term jobs or occupations (for example, secretary, doctor,
                homemaker, student, unemployed, on disability).
            </p>
            <br/>
          
            <TextField id="container2.3" name="exampleInputEmail2.3"  variant="outlined" label="" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
         
        </Box>


        <hr/><br/>
        <Box component="div">
            <label htmlFor="formGroupExampleInput2.4"><h4>Q 2.4</h4></label>
            <br/>
            <p>
                <b>Please rate occupation:</b> (relative to PERSON's <b>community at the time Person had this
                occupation</b>). (You may choose up to two responses)
            </p>
            <br/>
            <CheckboxField id="container2.4" />
        </Box>


        <hr/><br/>
        <Box component="div">
            <label htmlFor="formGroupExampleInput2.5"><h4>Q 2.5</h4></label>
            <br/>
            <Typography variant="h5" align="left">
                Briefly explain your answer(s) on occupation, including any changes because of job
                change or community/country change:
            </Typography>
            <br/>

      
            <TextField id="container2.5" name="exampleInputEmail2.5" variant="outlined" label="" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
      
        </Box>
        
        <Link to="/q5"><Button onClick={handleSubmit} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Next</Button></Link>

      </form>

   
    </Paper>
  );
};

export default GuardiansOccup;
