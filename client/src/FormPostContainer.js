/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, FormControlLabel, Checkbox } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import {
  Link,
  withRouter
} from "react-router-dom";

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';

const FormPostContainer = () => {
  const [currentId, setCurrentId] = useState(0);
  const [startVisible, setStartVisible] = useState(false);
  const [checked, setChecked] = useState(true);
  const dispatch = useDispatch();

  const handleChange = async(event) => {
    //setChecked(event.target.checked);

    if(event.target.checked){
        setStartVisible(true);

    }else{
      setStartVisible(false);
    } 
  };

  return (
      <Container maxWidth="lg">

        <Typography variant="h2" align="center" gutterBottom={true} style={{ paddingTop: '20px', paddingBottom: '10px'}}> Social Matrix Diagram - Survey</Typography>

        
            <Typography variant="h5" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
                Matrix of Intersectional Identity, Privilege and Marginalization: A Visual Tool Qualtrics Survey
            </Typography> 
           

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
              Please complete the entire survey in one sitting (pausing for more than a 
                few minutes or leaving this application open without working on it will 
                log you out of the survey and delete all your answers). Completing the 
              survey may take between 45 and 60 minutes, so be sure to allow enough time. 
              It is best done on a computer or tablet, rather than on a smartphone, for 
              better visibility.
            </Typography> 


            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
              Please fill out one survey for each Person for whom you want to build a Social 
              Matrix Diagram. Rate each of the aspect of identity on a scale of 1-7 for each 
              question. "1" is the most privileged position (meaning someone has the most 
              power and status, <b>not</b> that they are in the majority. "7" is the most oppressed 
              or marginalized position, but <b>not</b> that they are in the minority). For 
              instance, millionaires are a minority group but they are not oppressed or 
              marginalized. You can explain your choice for most questions. If you are 
              filling the matrix out for someone other than yourself, please try to answer 
              as you think that person would answer for him/her/themself.
            </Typography> 

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
              You will be asked about how you rate your (or another person’s) degree of 
              privilege <b>now</b>.  In most cases you will also be asked how you would rate 
              yourself (or the other person) <b>at an earlier time</b>. Doing this can show 
              change over time in an area of identity (for instance, a change in income 
              level, immigration status, or marital status). <b>Please choose no more than 
              two ratings for each question, except when the instructions say you can 
              choose all answers that apply.</b>
            </Typography> 



            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
              Please read the informed consent agreement below and then click 
              “I agree” in order to continue.
            </Typography>      


            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
              <b style={{ fontWeight: 600, textDecoration: 'underline' }}>Informed Consent</b>
            </Typography>           


            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
              Filling out this online survey will create a two copies of your Social Matrix Diagrams, one for your current intersectional areas of identity and one for you at an earlier time. The information in your survey and in your diagrams will not be traceable to you or to your computer, to protect your confidentiality. However, that that information may be used anonymously in future research by Jodie Kliman, PhD or her research assistants and colleagues, using a code number that is automatically generated when you click “I agree.” Such research may include testing the effectiveness of the Social Matrix survey and diagram and exploring the role of different aspects of privilege and marginalization on health, mental health, and wellbeing. 
            </Typography>


            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
              Filling out this online survey will create a two copies of your Social Matrix 
              Diagrams, one for your current intersectional areas of identity and one for you 
              at an earlier time. The information in your survey and in your diagrams will not 
              be traceable to you or to your computer, to protect your confidentiality. However, 
              that that information may be used anonymously in future research by Jodie Kliman, 
              PhD or her research assistants and colleagues, using a code number that is 
              automatically generated when you click “I agree.” Such research may include 
              testing the effectiveness of the Social Matrix survey and diagram and exploring 
              the role of different aspects of privilege and marginalization on health, mental 
              health, and wellbeing. 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
              The Social Matrix survey will ask you to rate your experience of relative 
              privilege or marginalization in 34 different areas of identity, and to briefly 
              explain your answer. There are no right or wrong answers – your own thinking 
              is what matters. The survey, which is anonymous, may take 45-60 minutes, so it 
              is best to wait to start it until you have time to complete it.  You will 
              receive your Social Matrix diagrams once you complete the survey and you will 
              be able to download or print it if you choose. While the Social Matrix Diagram 
              can’t be created and shared with you until you finish the survey,  there is no 
              other consequence if you stop without completing the survey.
            </Typography>
            
            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
              There is no more risk or discomfort involved in filling out the survey or to 
              its anonymous use in future research than there is in daily life. However, 
              participating by filling out the survey may add to social science understandings 
              about the effects of having privilege in some areas of identity and 
              marginalization in other areas, which may be helpful to therapists, 
              educators, health professionals, and others. While it will not provide 
              you any direct benefit, seeing and downloading my Social Matrix Diagrams 
              may help you to think in new ways about your relationships with people and 
              about your own identity. 
            </Typography>


            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
              There is no financial compensation for participating, but you will receive a copy of 
              your Social Matrix Diagrams at no cost. Your privacy will be protected in the online 
              anonymous survey, which will be linked to a code rather than to your name or other 
              identifying information. All of your anonymous online responses will be kept in 
              password-protected electronic files in cloud storage that can only be accessed by 
              Jodie Kliman, PhD and her research team. Any research findings published or presented 
              in professional settings in the future will be anonymous and untraceable to you.
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
              If you have any questions, you can contact the primary investigator, 
              Jodie Kliman, PhD, at <a href = "mailto: jodiekliman@socialmatrixdiagram.org">jodiekliman@socialmatrixdiagram.org</a> or at  
              <a href = "info@socialmatrixdiagram.org"> info@socialmatrixdiagram.org</a>.  
            </Typography>


              <div>
              <FormControlLabel
                style={{}}
                control={
                  <Checkbox 
                    id={"agree"}
                    //checked={-1} 
                    //checked={isChecked.indexOf(3) !== -1}
                    onChange={handleChange} 
                    value="agree"
                    name={"agree"} 
                    
                    iconstyle={{fill: '#000'}}
                  />
                }
                label="I agree"
                labelPlacement="right"
              />
              </div>

              <div variant="h3" align="" style={{ marginBottom: '40px', marginTop: '10px' }}>
             
                { 
                startVisible
                  ? 
                    <Link style={{ textDecoration: 'none', fontSize: '33px', paddingTop: '5px' }} to="/q1" className="notDisabled">START</Link>
                  : 
                    <Typography style={{ color: 'grey', fontSize: '32px'}} className="disabledCursor">START</Typography>
                }
              </div>

        
            
      
      
        
      </Container>

     
    


  );
};


export default withRouter(FormPostContainer);