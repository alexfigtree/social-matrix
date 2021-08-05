/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { 
    Box, 
    Container, 
    Divider, 
    Typography,
    AppBar,
    Toolbar,
    IconButton,
    Button
} from '@material-ui/core';
import { Link } from "react-router-dom";

import useStyles from '../styles';

import styles from '../style.css';
import NavBar from './NavBar.js';

const FAQ = () => {
    return (
        <div className="container">

            <NavBar />

            <Typography variant="h2" style={{ marginBottom: '20px', paddingTop: '50px' }} align="center">FAQ's</Typography>
      

            <Typography variant="h5" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
                The Social Matrix Diagram is a visual representation of intersectional social identity, including areas of privilege and marginalization. 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
                What is PRIVILEGE?
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
                PRIVILEGE involves advantages a person gains simply by virtue of having a particular 
                identity. For instance,  light-skinned people, people born into families with financial 
                security and comfort, cisgender people and people who are able-bodied all gain 
                advantages, regardless of whether they have earned them or not. These advantages are 
                often invisible to the person, or at least taken for granted. Privilege, and advantages 
                that come with it, are often so ingrained in social structure that it is not noticeable 
                to anyone who has that privilege.  For instance, someone whose parents are college-educated 
                may not even notice how difficult it can be for first-generation college students to apply 
                for, let alone pay for and complete, college.
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
                What is MARGINALIZATION?
            </Typography>

             <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
                MARGINALIZATION is the reverse of privilege; it involves the lack of access to the advantages 
                that privileged people can take for granted. It also involves being on the receiving end 
                of discrimination and prejudice on the basis of some aspect of your identity, such as race, 
                sexual orientation, or language. Like privilege, marginalization is “baked into” social 
                structures to the point that it may not even be immediately recognizable to some people 
                (including both privileged and marginalized people). Marginalization is sometimes 
                recognizable to people who are marginalized, for instance, when a person of color 
                recognizes a racist act or message. However, marginalization can also be internalized – 
                turned inward so that the person feels shame about “being less than” others, rather than 
                believing that the marginalization is a function of social inequities. For instance, in a 
                society in which wealth is seen as a product of hard work, people who are poor despite 
                working 60-70 hours a week may feel ashamed of being poor rather than perceiving their 
                poverty as a logical outcome of the economic system in which they live.
            </Typography>


            <Typography id="intersectionality" variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
                What is INTERSECTIONALITY?
            </Typography>
             <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
                INTERSECTIONALITY,  a term coined by Kimberlé Crenshaw, involves the interaction between 
                multiple aspects of identity that come together to increase the privilege or marginalization 
                of an individual. For instance, a working-class woman of color who is a lesbian is 
                likely to experience marginalization more intensely than someone who has only one of 
                those three marginalizing identities. If, in addition, she is an immigrant or has a 
                serious health condition, she will be even more marginalized than other working-class 
                lesbians of color. The interactions of privilege or marginalization are exponential 
                rather than merely additive. On the hand, having one area of great privilege when other 
                aspects of identity are marginalized can be protective, and having one area of great 
                marginalization can dramatically decrease the advantages and protections that other areas 
                of privilege provide. A change in one domain of identity can similarly shift the privilege 
                or marginalization in other areas. For instance, an accident that leaves a highly educated, 
                white, heterosexual man who was employed successfully in need of a wheelchair can render 
                that man invisible or a target of endless microaggressions. See more on intersectionality 
                in Bibliographical References/References to Intersectionality.

            </Typography>


            <Typography variant="h5" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
                WHY IS IT IMPORTANT TO PAY ATTENTION TO PRIVILEGE AND MARGINALIZATION AND TO INTERSECTIONALITY? 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
                When we have both areas of privilege and areas of marginalization, we can easily fall 
                into noticing only our areas of marginalization, yet we can act on our areas of privilege, 
                which is when we can do unintended harm to others. This is important in our personal lives, 
                but it can be even more important in our work lives. For instance, a doctor, therapist, 
                attorney, teacher, or police officer who doesn’t recognize their own privilege and who makes 
                rejudicial assumptions about a patient or client on the basis of a marginalized area of that 
                person’s identity can do even more harm.  
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
                For instance, many doctors incorrectly believe that Black people feel less pain than 
                others, and therefore underdiagnose serious problems and withhold needed treatments. 
                It is clearly established that Black, Brown, and Indigenous people in general, and Black 
                men in particular, are much more likely to die while unarmed in interactions with police 
                (of any race) and that Black, Brown, and Indigenous children are disciplined far more 
                severely and often than white children for the same infractions in school. Therapists 
                are more likely to diagnose both psychotic disorders and serious behavioral problems for 
                clients of color and more likely to diagnose ADHD or PTSD to white clients. Because we 
                tend to think about incidents like these on an individual basis, it is very easy not to 
                notice clear patterns of disparity on the basis of race, gender, gender identity, social 
                class, and other aspects of identity. 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
                The conclusions we draw about others, including others that we have potential power 
                over (as in medical, therapeutic, educational, or legal settings)  that lead to such 
                problems are often based on implicit bias  – conclusions we draw automatically and 
                usually outside of conscious awareness about the intrinsic value of another human 
                being, on the basis of some aspect of that person’s identity, such as race, gender, or 
                sexual orientation. The more we learn to recognize that we have implicit biases, the 
                more likely we are to override those biases with thoughtful reflection. 
            </Typography>

           
        </div>

  )
};

export default FAQ;