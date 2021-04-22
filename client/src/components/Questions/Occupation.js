import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

import useStyles from '../Form/styles';
import { createPost, updatePost } from '../../actions/posts';
import CheckboxField from '../Form/CheckboxField';

//q3
const Occupation = () => {
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
      console.log('retrievedObject: during Occupation', JSON.parse(retrievedObject));
  //let q1_2 = localStorage.getItem("container1.2");

  }, []);

  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {

    let tempData = matrixData;
    //console.log('random value tests',tempData[0][0]);
    //define each subObject:
/*    let educPreSmall = tempData[0];
    let educPreLarge = tempData[1];
    let educPostSmall = tempData[2];
    let educPostLarge = tempData[3];*/

    //pre: 2.4

    //post: 2.2



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

    //console.log('educPreSmall[0]', tempData[0][0].value);
    let domain3_pre = [...q2_4.split(',')];
    let domain3_post = [...q2_2.split(',')];

    console.log('domain3_pre', domain3_pre);
    console.log('domain3_pre', domain3_post);

    let domain3_pre_small = Math.min(...domain3_pre);
    let domain3_pre_large = Math.max(...domain3_pre);

    let domain3_post_small = Math.min(...domain3_post);
    let domain3_post_large = Math.max(...domain3_post);

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

        <Typography variant="h5">Occupation</Typography>
        
        <Box component="div">
            <label htmlFor="formGroupExampleInput2.1"><h4>Q 2.1</h4></label>
         
            <Typography variant="h5" align="left">
                PERSON'S Current Occupation(s)
            </Typography>
      
            <p>
                Include all <b style={{ textDecoration: 'underline' }}>current</b> jobs or occupations (for example, secretary, doctor, homemaker, student, unemployed, on disability).
            </p>
       
           
            <TextField id="container2.1" name="exampleInputEmail2.1" variant="outlined" label="" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
          
        </Box>


        <Box component="div">
            <label htmlFor="formGroupExampleInput2.2"><h4>Q 2.2</h4></label>
          
            <p>
                <b>Please rate current occupation(s):</b> (relative to PERSON's <b>current community</b>). (You may choose up to two responses)
            </p>
            
            <CheckboxField id="container2.2" />
        </Box>



        <Box component="div">
            <label htmlFor="formGroupExampleInput2.1"><h4>Q 2.3</h4></label>
          
            <Typography variant="h5" align="left">
                PERSON'S Previous Occupation(s)
            </Typography>
        
            <p>
                Include previous long-term jobs or occupations (for example, secretary, doctor,
                homemaker, student, unemployed, on disability).
            </p>
            
          
            <TextField id="container2.3" name="exampleInputEmail2.3"  variant="outlined" label="" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
         
        </Box>

        
        <Box component="div">
            <label htmlFor="formGroupExampleInput2.4"><h4>Q 2.4</h4></label>
            
            <p>
                <b>Please rate occupation:</b> (relative to PERSON's <b>community at the time Person had this
                occupation</b>). (You may choose up to two responses)
            </p>
            <br/>
            <CheckboxField id="container2.4" />
        </Box>


       
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
        
        <Link to="/q4"><Button onClick={handleSubmit} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Next</Button></Link>

      </form>

   
    </Box>
  );
};

export default Occupation;
