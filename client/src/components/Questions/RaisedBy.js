import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

import useStyles from '../Form/styles';
import { createPost, updatePost } from '../../actions/posts';
import CheckboxField_RaisedBy from '../Form/CheckboxField_RaisedBy';
import CheckboxField from '../Form/CheckboxField';

//q26
const RaisedBy = () => {
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
      console.log('retrievedObject: Age', JSON.parse(retrievedObject));
  }, []);

  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let tempData = matrixData;

    let q4_1_1 = localStorage.getItem("container4.1.1"); //pre and post
    let q4_1_2 = localStorage.getItem("container4.1.2"); //pre and post
    let q4_1_3 = localStorage.getItem("container4.1.3"); //pre and post
    let q4_1_4 = localStorage.getItem("container4.1.4"); //pre and post
    let q4_1_5 = localStorage.getItem("container4.1.5"); //pre and post

    let q4_2_1 = localStorage.getItem("container4.2.1"); //pre and post
    let q4_2_2 = localStorage.getItem("container4.2.2"); //pre and post
    let q4_2_3 = localStorage.getItem("container4.2.3"); //pre and post
    let q4_2_4 = localStorage.getItem("container4.2.4"); //pre and post
    let q4_2_5 = localStorage.getItem("container4.2.5"); //pre and post


    let q4_17_1 = localStorage.getItem("container4.17.1"); //pre and post
    let q4_17_2 = localStorage.getItem("container4.17.2"); //pre and post
    let q4_17_3 = localStorage.getItem("container4.17.3"); //pre and post
    let q4_17_4 = localStorage.getItem("container4.17.4"); //pre and post
    let q4_17_5 = localStorage.getItem("container4.17.5"); //pre and post

    let q4_19_1 = localStorage.getItem("container4.19.1"); //pre and post
    let q4_19_2 = localStorage.getItem("container4.19.2"); //pre and post
    let q4_19_3 = localStorage.getItem("container4.19.3"); //pre and post
    let q4_19_4 = localStorage.getItem("container4.19.4"); //pre and post
    let q4_19_5 = localStorage.getItem("container4.19.5"); //pre and post


    let q4_21_1 = localStorage.getItem("container4.21.1"); //pre and post
    let q4_21_2 = localStorage.getItem("container4.21.2"); //pre and post
    let q4_21_3 = localStorage.getItem("container4.21.3"); //pre and post
    let q4_21_4 = localStorage.getItem("container4.21.4"); //pre and post
    let q4_21_5 = localStorage.getItem("container4.21.5"); //pre and post


    //console.log('domain26_pre_post', domain26_pre_post);
    let domain26_pre = [
      ...q4_1_1.split(','),
      ...q4_1_2.split(','),
      ...q4_1_3.split(','),
      ...q4_1_4.split(','),
      ...q4_1_5.split(','),
      ...q4_17_1.split(','),
      ...q4_17_2.split(','),
      ...q4_17_3.split(','),
      ...q4_17_4.split(','),
      ...q4_17_5.split(','),
      ...q4_19_1.split(','),
      ...q4_19_2.split(','),
      ...q4_19_3.split(','),
      ...q4_19_4.split(','),
      ...q4_19_5.split(','),
      ...q4_21_1.split(','),
      ...q4_21_2.split(','),
      ...q4_21_3.split(','),
      ...q4_21_4.split(','),
      ...q4_21_5.split(','),
    ];
    let domain26_pre_small = Math.min(...domain26_pre);
    let domain26_pre_large = Math.max(...domain26_pre);

    let domain26_post = [
      ...q4_2_1.split(','),
      ...q4_2_2.split(','),
      ...q4_2_3.split(','),
      ...q4_2_4.split(','),
      ...q4_2_5.split(','),
      ...q4_17_1.split(','),
      ...q4_17_2.split(','),
      ...q4_17_3.split(','),
      ...q4_17_4.split(','),
      ...q4_17_5.split(','),
      ...q4_19_1.split(','),
      ...q4_19_2.split(','),
      ...q4_19_3.split(','),
      ...q4_19_4.split(','),
      ...q4_19_5.split(','),
      ...q4_21_1.split(','),
      ...q4_21_2.split(','),
      ...q4_21_3.split(','),
      ...q4_21_4.split(','),
      ...q4_21_5.split(','),
    ];
    let domain26_post_small = Math.min(...domain26_post);
    let domain26_post_large = Math.max(...domain26_post);

    tempData[0][9].value = domain26_pre_small;
    tempData[1][9].value = domain26_pre_large;
    tempData[2][9].value = domain26_post_small;
    tempData[3][9].value = domain26_post_large;

    localStorage.setItem('matrixData', JSON.stringify(tempData));
    setMatrixData(tempData);

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
    history.push('/q27');
  };

  return (
    <Box className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

        <Typography variant="h5">Rasied By</Typography>

          <Box component="div">
            <label htmlFor="formGroupExampleInput4.1"><h4>Q 4.1</h4></label>
            <br/>
            <p>
                These questions are about ALL the parents or parenting figures 
                who raised PERSON <b>during the PERSON's growing up.</b>
            </p>

            <Typography variant="h5" align="left">
                <span style={{ textDecoration: 'italic' }}>Only answer for 
                those parents or parenting figures who were actively involved 
                in raising PERSON while Person was growing up.</span> 
            </Typography>
            <Typography variant="h5" align="left">
                <span style={{ textDecoration: 'italic' }}>This question relates 
                to the parents or parenting figures who cared for PERSON in 
                earlier childhood. You may choose up to two answers per 
                parent/parenting figure.</span> 
            </Typography>
            
            <p>
              <b>If your answer for this figure changed while PERSON was being 
              raised (for instance, if a parenting figure left the home or died 
              or if a a new figure began parenting PERSON at some point), the 
              next two questions (Q4.2 and 4.3) will ask about those changes.</b>
            </p>

            <p style={{ textDecoration: 'underline' }}>
                During the time PERSON was being raised early on, was/were 
                Parent/Parenting Figure(s):
            </p>
            <br/><br/>
            <p>
                Parent/Parenting Figure 1
            </p>
            <CheckboxField_RaisedBy id="container4.1.1" />

            <p>
                Parent/Parenting Figure 2
            </p>
            <CheckboxField_RaisedBy id="container4.1.2" />

            <p>
                Parent/Parenting Figure 3
            </p>
            <CheckboxField_RaisedBy id="container4.1.3" />

            <p>
                Parent/Parenting Figure 4
            </p>
            <CheckboxField_RaisedBy id="container4.1.4" />

            <p>
                Additional Parenting Figure(s)
            </p>
            <CheckboxField_RaisedBy id="container4.1.5" />
          </Box>

          <Box component="div">
            <label htmlFor="formGroupExampleInput4.2"><h4>Q 4.2</h4></label>
            <br/>
            <p>
                Parent/Guardian Status - Later
            </p>
            <p>
                If the role of any parent/parenting figure changed in relation 
                to PERSON during PERSON's childhood, you can answer for each of 
                them here, reflecting that later period.
            </p>

            <br/><br/>
            <p>
                Parent/Parenting Figure 1
            </p>
            <CheckboxField_RaisedBy id="container4.2.1" />

            <p>
                Parent/Parenting Figure 2
            </p>
            <CheckboxField_RaisedBy id="container4.2.2" />

            <p>
                Parent/Parenting Figure 3
            </p>
            <CheckboxField_RaisedBy id="container4.2.3" />

            <p>
                Parent/Parenting Figure 4
            </p>
            <CheckboxField_RaisedBy id="container4.2.4" />

            <p>
                Additional Parenting Figure(s)
            </p>
            <CheckboxField_RaisedBy id="container4.2.5" />
          </Box>


          <Box component="div">
            <label htmlFor="formGroupExampleInput4.17"><h4>Q 4.17</h4></label>
            <br/>
            <p>
                How would you rate the relative privilege or marginalization of 
                each Parent/Guardian's sexual orientation while raising PERSON?
            </p>
            <p>
                You may choose two answers if that status changed because of a 
                change in sexual orientation or a change in how that sexual 
                orientation is received over time or in a new community or country.
            </p>
            <p>
                Please only answer for relevant number of parents/parenting figures.
            </p>
            
            <br/><br/>
            <p>
                Parent/Figure 1
            </p>
            <CheckboxField id="container4.17.1" />

            <p>
                Parent/Figure 2
            </p>
            <CheckboxField id="container4.17.2" />

            <p>
                Parent/Figure 3
            </p>
            <CheckboxField id="container4.17.3" />

            <p>
                Parent/Figure 4
            </p>
            <CheckboxField id="container4.17.4" />

            <p>
                Additional Parent/ Parenting Figure
            </p>
            <CheckboxField id="container4.17.5" />
          </Box>


          <Box component="div">
            <label htmlFor="formGroupExampleInput4.19"><h4>Q 4.19</h4></label>
            <br/>
            <p>
                How would you rate each Parent/Guardian's relative privilege 
                in relation to gender identity? (Give 2 answers if there is a 
                change in status because of a change in gender identity or 
                change in community.)
            </p>
            <p>
                Please only answer for relevant number of parents/parenting figures.
            </p>
            
            <br/><br/>
            <p>
                Parent/Figure 1
            </p>
            <CheckboxField id="container4.19.1" />

            <p>
                Parent/Figure 2
            </p>
            <CheckboxField id="container4.19.2" />

            <p>
                Parent/Figure 3
            </p>
            <CheckboxField id="container4.19.3" />

            <p>
                Parent/Figure 4
            </p>
            <CheckboxField id="container4.19.4" />

            <p>
                Additional Parent/ Parenting Figure
            </p>
            <CheckboxField id="container4.19.5" />
          </Box>



          <Box component="div">
            <label htmlFor="formGroupExampleInput4.21"><h4>Q 4.21</h4></label>
            <br/>

            <p><b>Please rate Parent/Guardians’ Age on becoming PERSON’s parents/guardians.</b></p>
            <p>How would you rate each Parent/Guardian's age at the time of first 
            becoming a Parent?</p>
            
            <p>For instance, in some communities, 25 is late to have a first child, 
            while in some communities, it is not unusual to first become a parent at 
            age 16 or at 36, and in others, a first child may come in one's 30s.)
            You may give two answers if the Parent/Guardian changed communities in 
            a way that affected community response to Parent/Guardian's parental 
            status.</p>

            <p>
                Please only answer for relevant number of parents/parenting figures.
            </p>
            
            <br/><br/>
            <p>
                Parent/Figure 1
            </p>
            <CheckboxField id="container4.21.1" />

            <p>
                Parent/Figure 2
            </p>
            <CheckboxField id="container4.21.2" />

            <p>
                Parent/Figure 3
            </p>
            <CheckboxField id="container4.21.3" />

            <p>
                Parent/Figure 4
            </p>
            <CheckboxField id="container4.21.4" />

            <p>
                Additional Parent/ Parenting Figure
            </p>
            <CheckboxField id="container4.21.5" />
          </Box>

        <Link to="/q27"><Button onClick={handleSubmit} style={{ marginTop: '20px' }} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Next</Button></Link>

      </form>

   
    </Box>
  );
};

export default RaisedBy;
