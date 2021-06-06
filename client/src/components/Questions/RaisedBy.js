import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

import useStyles from '../Form/styles';
import { createPost, updatePost } from '../../actions/posts';
import CheckboxField_RaisedBy from '../Form/CheckboxField_RaisedBy';
import CheckboxField from '../Form/CheckboxField';
import FootnoteField from '../Form/FootnoteField';
import RadioFieldWithInput4_22 from '../Form/RadioFieldWithInput4_22';
import RadioFieldWithInput4_23 from '../Form/RadioFieldWithInput4_23';

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
      console.log('retrievedObject', JSON.parse(retrievedObject));

      var retrievedFootnotes = localStorage.getItem('footnotes');
      console.log('retrievedFootnotes', JSON.parse(retrievedFootnotes));

      localStorage.setItem('4.3', '');
      localStorage.setItem('4.16.1', '');
      localStorage.setItem('4.16.2', '');
      localStorage.setItem('4.16.3', '');
      localStorage.setItem('4.16.4', '');
      localStorage.setItem('4.16.5', '');

      localStorage.setItem('4.18.1', '');
      localStorage.setItem('4.18.2', '');
      localStorage.setItem('4.18.3', '');
      localStorage.setItem('4.18.4', '');
      localStorage.setItem('4.18.5', '');

      localStorage.setItem('4.20.1', '');
      localStorage.setItem('4.20.2', '');
      localStorage.setItem('4.20.3', '');
      localStorage.setItem('4.20.4', '');
      localStorage.setItem('4.20.5', '');

      localStorage.setItem('4.22', '');
      localStorage.setItem('4.22-1-yes', '');

      localStorage.setItem('4.23', '');
      localStorage.setItem('4.23-1-yes', '');

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
    ].filter(Boolean);

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
    ].filter(Boolean);

    let domain26_post_small = Math.min(...domain26_post);
    let domain26_post_large = Math.max(...domain26_post);

    tempData[0][9].value = domain26_pre_small;
    tempData[1][9].value = domain26_pre_large;
    tempData[2][9].value = domain26_post_small;
    tempData[3][9].value = domain26_post_large;

    localStorage.setItem('matrixData', JSON.stringify(tempData));
    setMatrixData(tempData);


    //PROCESS FOOTNOTE DATA:
    let tempFootnotes =JSON.parse(localStorage.getItem('footnotes'));

    const f4_3 = localStorage.getItem("4.3");

    const f4_16_1 = localStorage.getItem("4.16.1");
    const f4_16_2 = localStorage.getItem("4.16.2");
    const f4_16_3 = localStorage.getItem("4.16.3");
    const f4_16_4 = localStorage.getItem("4.16.4");
    const f4_16_5 = localStorage.getItem("4.16.5");

    console.log('test for footnoets f4_16_1', f4_16_1);
    const f4_18_1 = localStorage.getItem("4.18.1");
    const f4_18_2 = localStorage.getItem("4.18.2");
    const f4_18_3 = localStorage.getItem("4.18.3");
    const f4_18_4 = localStorage.getItem("4.18.4");
    const f4_18_5 = localStorage.getItem("4.18.5");

    const f4_20_1 = localStorage.getItem("4.20.1");
    const f4_20_2 = localStorage.getItem("4.20.2");
    const f4_20_3 = localStorage.getItem("4.20.3");
    const f4_20_4 = localStorage.getItem("4.20.4");
    const f4_20_5 = localStorage.getItem("4.20.5");

    const f4_22 = localStorage.getItem("4.22");
    const f4_22_1_yes = localStorage.getItem("4.22-1-yes");
    const concatString4_22 = [f4_22, f4_22_1_yes].filter(Boolean).join(": ");
    
    const f4_23 = localStorage.getItem("4.23");
    const f4_23_1_yes = localStorage.getItem("4.23-1-yes");
    const concatString4_23 = [f4_23, f4_23_1_yes].filter(Boolean).join(": ");

    //generate concatentated string
    let concatString = 
      [f4_3, f4_16_1, f4_16_2, f4_16_3, f4_16_4, f4_16_5, f4_18_1, f4_18_2, f4_18_3, f4_18_4, f4_18_5, f4_20_1, f4_20_2, f4_20_3, f4_20_4, f4_20_5, concatString4_22, concatString4_23].filter(Boolean).join("; ");
    tempFootnotes[0][9].value = concatString;
    localStorage.setItem('footnotes', JSON.stringify(tempFootnotes));



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

          <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput4.1"><h4>Q 4.1</h4></label>
     
            <p>
                These questions are about ALL the parents or parenting figures 
                who raised PERSON <b>during the PERSON's growing up.</b>
            </p>

            <p>Only answer for 
                those parents or parenting figures who were actively involved 
                in raising PERSON while Person was growing up.
            </p>
            <p>This question relates 
                to the parents or parenting figures who cared for PERSON in 
                earlier childhood. You may choose up to two answers per 
                parent/parenting figure.
            </p>
            
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

          <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput4.2"><h4>Q 4.2</h4></label>
        
            <p>
                <b>Parent/Guardian Status - Later</b>
            </p>
            <p>
                If the role of any parent/parenting figure changed in relation 
                to PERSON during PERSON's childhood, you can answer for each of 
                them here, reflecting that later period.
            </p>

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

          <Box component="div" style={{ width: '100%' }}>
              <label className={classes.questionLabel} htmlFor="formGroupExampleInput4.3"><h4>Q 4.3</h4></label>
           
              <p>
                  Please describe any change in parenting role for each Parent/Parenting 
                  Figure in relation to PERSON. For instance, did this Parent/Parental 
                  Figure stay, leave or join the PERSON's household, give up a parental 
                  role, move repeatedly in and out of PERSON's household or life, change 
                  from being a stepparent or foster parent to adopting PERSON, kick 
                  PERSON out of the childhood home or get kicked out, or did Parent/Parenting 
                  Figure get incarcerated, go missing, or die? If so, how old was PERSON at 
                  the time of any changes.
              </p>
             
              <p>
                  (If no changes, please type in "N/A.") Please specify:
              </p>

              <FootnoteField id="4.3" />
          </Box>

          <Box component="div" style={{ width: '100%' }}>
              <label className={classes.questionLabel} htmlFor="formGroupExampleInput4.16"><h4>Q 4.16</h4></label>
           
              <p>
                  Parent/Guardians' Sexual Orientation while raising Person
              </p>       
              <p>
                  Sexual orientation involves whether one is attracted to the 
                  opposite sex, same sex, both sexes, or one is asexual.
              </p>
              <p>
                  Describe each Parent/Guardian's sexual orientation, and 
                  whether that orientation changed over time, and if so, 
                  how old PERSON was at the time. (For instance, "Mother came 
                  out as lesbian when PERSON was 12").
              </p>       
              <p>
                  Also describe how Parent/Guardian's community responds to 
                  his/her/their sexual orientation and whether that response 
                  changed, either over time or because of Parent/Guardian's move 
                  to a new community or country.
              </p>
              <p>
                  Please only answer for relevant number of parents/parenting figures.
              </p>       
          
              <p>
                  Parent/Figure 1
              </p>
              <FootnoteField id="4.16.1" />

              <p>
                  Parent/Figure 2
              </p>
              <FootnoteField id="4.16.2" />

              <p>
                  Parent/Figure 3
              </p>
              <FootnoteField id="4.16.3" />

              <p>
                  Parent/Figure 4
              </p>
              <FootnoteField id="4.16.4" />

              <p>
                  Additional Parent/Figure
              </p>
              <FootnoteField id="4.16.5" />
          </Box>

          <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput4.17"><h4>Q 4.17</h4></label>
          
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

          <Box component="div" style={{ width: '100%' }}>
              <label className={classes.questionLabel} htmlFor="formGroupExampleInput4.18"><h4>Q 4.18</h4></label>
           
              <p>
                  Parent/Guardians' Gender Identity
              </p>       
              <p>
                  Gender identity involves whether one's assigned sex at birth 
                  matches or diverges from one's gender identity
              </p>
              <p>
                  Note whether each Parent/Guardian's gender identity is/was cis-gender 
                  (identifying with the gender assigned at birth), transgender 
                  (identifying with a different gender than the one assigned at birth) 
                  or else genderqueer, nonbinary, gender fluid, gender nonconforming, 
                  agender, pangender, two-spirit, etc.
              </p>       
              <p>
                  If Parent/Guardian's gender identity changed while Parent/Guardian 
                  was raising person, say how old Person was at the time. (For instance, 
                  "Mother began to transition when PERSON was 12").
              </p>
              <p>
                If relevant, also note if immigration or a change in community affected 
                how Parent/Guardian's gender identity is/was received.

              </p>
              <p>
                  Please only answer for relevant number of parents/parenting figures.
              </p>       
          
              <p>
                  Parent/Figure 1
              </p>
              <FootnoteField id="4.18.1" />

              <p>
                  Parent/Figure 2
              </p>
              <FootnoteField id="4.18.2" />

              <p>
                  Parent/Figure 3
              </p>
              <FootnoteField id="4.18.3" />

              <p>
                  Parent/Figure 4
              </p>
              <FootnoteField id="4.18.4" />

              <p>
                  Additional Parent/Figure
              </p>
              <FootnoteField id="4.18.5" />
          </Box>

          <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput4.19"><h4>Q 4.19</h4></label>
            <p>
                How would you rate each Parent/Guardian's relative privilege 
                in relation to gender identity? (Give 2 answers if there is a 
                change in status because of a change in gender identity or 
                change in community.)
            </p>
            <p>
                Please only answer for relevant number of parents/parenting figures.
            </p>
            
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

          <Box component="div" style={{ width: '100%' }}>
              <label className={classes.questionLabel} htmlFor="formGroupExampleInput4.20"><h4>Q 4.20</h4></label>
           
              <p>
                  <b>Parent/Guardians' Age on becoming PERSON's parent/guardian.</b>
              </p>       
              <p>
                  How old was each Parent/Guardian when PERSON was born? If PERSON 
                  was adopted, how old was PERSON at the time of adoption and how 
                  old was each Parent/Guardian? if a Parent/Guardian is a stepparent, 
                  how old was PERSON and how old was the stepparent when they joined 
                  families? If Parent/Guardian is a foster parent, how old was PERSON 
                  during the fostering? (If PERSON was not raised by parents or 
                  guardians, explain.)
              </p>
              <p>
                  Also, if Parent/Guardian's age at the time of having, adopting, or 
                  otherwise parenting PERSON was unusual in any way, please say why.
              </p>       
              <p>
                  Please only answer for relevant number of parents/parenting figures.
              </p>       
          
              <p>
                  Parent/Figure 1
              </p>
              <FootnoteField id="4.20.1" />

              <p>
                  Parent/Figure 2
              </p>
              <FootnoteField id="4.20.2" />

              <p>
                  Parent/Figure 3
              </p>
              <FootnoteField id="4.20.3" />

              <p>
                  Parent/Figure 4
              </p>
              <FootnoteField id="4.20.4" />

              <p>
                  Additional Parent/Figure
              </p>
              <FootnoteField id="4.20.5" />
          </Box>

          <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput4.21"><h4>Q 4.21</h4></label>

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

          <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput4.22"><h4>Q 4.22</h4></label>

            <p>Has PERSON ever lived for an extended period of time apart from parents 
            or guardians while growing up?</p>
            
            <p>Some examples include living in foster care, an orphanage, or 
            institutional care like juvenile hall or in a psychiatric hospital), been a 
            refugee on one's own, or in an immigration detention center, in a homeless 
            shelter, or on the streets without familiar parenting figures.</p>

            <RadioFieldWithInput4_22 id="4.22" />
          </Box>

          <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput4.23"><h4>Q 4.23</h4></label>

            <p>Has PERSON ever lived for an extended period of time apart from parents 
            or guardians while growing up?</p>
            
            <p>Some examples include living in foster care, an orphanage, or 
            institutional care like juvenile hall or in a psychiatric hospital), been a 
            refugee on one's own, or in an immigration detention center, in a homeless 
            shelter, or on the streets without familiar parenting figures.</p>

            <RadioFieldWithInput4_23 id="4.23" />
          </Box>

        <Link to="/q27"><Button onClick={handleSubmit} style={{ marginTop: '20px' }} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Next</Button></Link>

      </form>

   
    </Box>
  );
};

export default RaisedBy;
