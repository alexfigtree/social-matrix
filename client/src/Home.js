import React from 'react';
import { Container, Divider, Typography} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

//import data from './data/data.js';
//import * as d3 from "d3";
//import * as AllMain from './scripts/main.js';
//import * as AllRequire from './scripts/require.js'
//import { RadarChart } from './scripts/RadarChart.js'

//import FormPostContainer from './FormPostContainer';
import useStyles from './styles';

import styles from './style.css';

const Home = () => {
  return (
    <div className="container">
        <Typography variant="h2" align="center">Social Matrix Project</Typography>
        <Link to="/form">Take the survey here</Link>


      <Container>
        <Container id="body">
          <div id="chart" className="svg-align"><div className="matrix-header">Subject 1 - Earlier Matrix</div></div>
        </Container>

        <Container id="body2">
          <div id="chart2" className="svg-align"><div className="matrix-header">Subject 1 - Current Matrix</div></div>
        </Container>
        <Container className="footnotes-bottom">
          <Typography variant="h5" align="left">Footnotes:</Typography>
            <Typography variant="h6" align="left">1) <i>Educ. Level:</i> PhD Social-Clinical Psychology, 1979, US
            </Typography>
            <Typography variant="h6" align="left">2) <i>Guardians’ Educ:</i> Parent 1: Mo in college when I was born, BA when I was 13, MA when I was 15/ Parent 2: Fa got MD when I was 1
            </Typography>
            <Typography variant="h6" align="left">3) <i>Occupation(s):</i> Professor, Clinical Psychologist; More highly privileged in country than community
            </Typography>
            <Typography variant="h6" align="left">4) <i>Guardians’ Occupation:</i> Mother homemaker till I was 7-8, then student, then master's level psychologist/ Father psychiatrist
            </Typography>
            <Typography variant="h6" align="left">7) <i>Guardian’s Childhood House. Income:</i> Mo. w/ more wealth in her father's home till age 12, then no contact/ Father's family working poor, then upper-middle- income
            </Typography>
            <Typography variant="h6" align="left">8) <i>Access:</i>  Very high access to info, influence (as professor), good access to $ resources 
            </Typography>
            <Typography variant="h6" align="left">9) <i>Guardians’ Access:</i>  Mother not Internet savvy, but good access to $, info Father very internet-savvy, influential, high access to resources
            </Typography>
            <Typography variant="h6" align="left">10) <i>Race(s):</i>  White; European Jews not fully white in my childhood, esp. in south. > privilege now, but also >antisemitism. I raised multiracial children.
            </Typography>
            <Typography variant="h6" align="left">11) <i>Ethnicity / Tribe:</i>  Jewish (Ashkenazi & Sephardi)
            </Typography>
            <Typography variant="h6" align="left">12) <i>Person's Nation of Origin:</i>  US
            </Typography>
            <Typography variant="h6" align="left">13) <i>Citizenship Status. Income:</i>  US; B. US
            </Typography>
            <Typography variant="h6" align="left">15) <i>Language(s) Spoken:</i>  English; Spanish, French, a little Hebrew and Yiddish
            </Typography>
            <Typography variant="h6" align="left">16) <i>Family Religion:</i> Judaism (reform); More acceptance of non-Christian religions, except by the radical right
            </Typography>
            <Typography variant="h6" align="left">17) <i>Chosen Religion:</i> Judaism (reform); Less antisemitism, more religious inclusion (except for radical right)
            </Typography>
            <Typography variant="h6" align="left">18) <i>Politics:</i> progressive/socialist; Somewhat marginalized, less so in my community
            </Typography>
            <Typography variant="h6" align="left">19) <i>Geo. Region:</i> Grew up in NY, now in MA 
            </Typography>
            <Typography variant="h6" align="left">20) <i>Impact of Historical Times:</i> I grew up during a more antisemitic time, post-WWII. I've gained privilege b/c my interracial, multi-faith family is less marginalized now. Feminism is more accepted. Importance of medical advances
            </Typography>
            <Typography variant="h6" align="left">21) <i>Relation to Military:</i> Father drafted into Navy as a lieutenant (doctor) when I was 3-5; Father was in US Navy
            </Typography>
            <Typography variant="h6" align="left">22) <i>Relation to Legal System:</i> had a close family member involved in legal system as a defendant
            </Typography>
            <Typography variant="h6" align="left">23) <i>Relation to MH System:</i> Currently or previously in short-term outtpatient psychiatric treatment or psychotherapy
            </Typography>
            <Typography variant="h6" align="left">24) <i>MH/Subst. Abuse:</i> Family issues, death of son with Mental Illness, close relative of someone with SA
            </Typography>
            <Typography variant="h6" align="left">25) <i>Cognitive Ability/Style:</i> Very intelligent, 2 TBIs left minor difficulties w/ executive functioning
            </Typography>
            <Typography variant="h6" align="left">26) <i>Health/Ability:</i> chronic asthma, GERD, controlled hypertension, arthritis, allergies ?> life-threatening heart condition @68
            </Typography>
            <Typography variant="h6" align="left">27) <i>Appearance:</i> Attractive, gray hair, short
            </Typography>
            <Typography variant="h6" align="left">28) <i>Age:</i> 68 (b. 1952)
            </Typography>
            <Typography variant="h6" align="left">29) <i>Raised By:</i> Raised by Mo & Fa; Parent 1: Straight, Parent 2: Straight; Parent 1: cis-gender woman/Parent 2: cis-gender man; Mother 19, Father 22; No; No
            </Typography>
            <Typography variant="h6" align="left">30) <i>Guardians’ Marital Status:</i> Birth parents married till I was 25; N/A
            </Typography>
            <Typography variant="h6" align="left">31) <i>Parental Status:</i> Adoptive parent of child w/ serious mental illness who died, stepparent of multiracial grown children; Gained stepchildren at age 29; adoptive mother at 34, child died when I was 53; Adoptive child had mental illness, died at 19; stepchildren are multiracial
            </Typography>
            <Typography variant="h6" align="left">32) <i>Marital Status:</i> in 2nd marriage; LT @ 18, m. at 21, Div. @ 26; LT @ 29, m. @ 30; Opposite sex
            </Typography>
            <Typography variant="h6" align="left">33) <i>Sexual Orientation:</i> Straight
            </Typography>
            <Typography variant="h6" align="left">34) <i>Gender ID:</i> Cis-gender woman
            </Typography>
            <Typography variant="h6" align="left">35) <i>Gender Expression:</i> Feminine-looking woman
            </Typography>
            <Typography variant="h6" align="left">36) <i>Sex Assigned at Birth:</i> Female
            </Typography>
            <Typography variant="h6" align="left">37) <i>Unique History:</i> Son?s death; in multiracial, multifaith family, grew up with very sick brother, family Hx of refugee experience, rare, life-threatening illness
            </Typography>
        </Container>

      </Container>

/*
      <Container className="after-one">
     
        <Container id="body3">
          <Container id="chart3"><Container className="matrix-header-bottom">Subject 2 - Earlier Matrix</Container></Container>
        </Container> 
    
        <Container id="body4">
          <Container id="chart4"><Container className="matrix-header-bottom">Subject 2 - Current Matrix</Container></Container>
        </Container>
        <Container className="footnotes-bottom-after-one">
          <Container className="footnotes-header">Footnotes:</Container>
            <Typography variant="h6" align="left">
            1) <i>Educ. Level:</i> Masters, Clinical Psych, 2019
            </Typography>
            <Typography variant="h6" align="left">
            2) <i>Guardians’ Educ:</i> Par 1: Doctor of Medicine in Dentistry 1989, US DMD certificate when I was 8-10 after immigration / Par 2: Doctor of Pharmacy when I was 14 b/c pharmacy tech degree w/ less status in US than in Botswana
            </Typography>
            <Typography variant="h6" align="left">
            3) <i>Occupation(s):</i> Grad Student; No changes in occupation
            </Typography>
            <Typography variant="h6" align="left"> 
            4) <i>Guardians’ Occupation:</i> Parent 1: Rating of 1 for DMD, rating of 6 after having to return to school/ Parent 2: Pharm D=1,pharmacy tech, student=6
            </Typography>
            <Typography variant="h6" align="left">
            7) <i>Guardian’s Childhood House. Income:</i> No changes in Parent's childhood household income
            </Typography>
            <Typography variant="h6" align="left"> 
            8) <i>Access:</i>  Resources and information, but not influence, are pretty accessible, as a black woman
            </Typography>
            <Typography variant="h6" align="left">
            9) <i>Guardians’ Access:</i>  access to influence lower than access to information and resources
            </Typography>
            <Typography variant="h6" align="left">
            10) <i>Race(s):</i>  Black; Most marginalized
            </Typography>
            <Typography variant="h6" align="left">
            11) <i>Ethnicity / Tribe:</i>  Digo (tribe), Kimvita (clan), Kenyan (Mijikenda - 9-tribe subgroup) (consider putting clan, subgroup into additional axis, w/explanation)
            </Typography>
            <Typography variant="h6" align="left"> 
            12) <i>Person's Nation of Origin:</i>  N/A-Skip logic
            </Typography>
            <Typography variant="h6" align="left">
            13) <i>Citizenship Status. Income:</i>  United States, Kenya; Naturalized citizen
            </Typography>
            <Typography variant="h6" align="left"> 
            15) <i>Language(s) Spoken:</i>  English and Swahili; No additional language
            </Typography>
            <Typography variant="h6" align="left">
            16) <i>Family Religion:</i> Muslim and Christian; Mo b. Christian, became Muslim; Fa Muslim
            </Typography>
            <Typography variant="h6" align="left"> 
            17) <i>Chosen Religion:</i> Muslim; Islam most marginalized religion in US
            </Typography>
            <Typography variant="h6" align="left">
            18) <i>Politics:</i> Progressive; More marginalized than privileged
            </Typography>
            <Typography variant="h6" align="left"> 
            19) <i>Geo. Region:</i> Not war torn, but not peaceful
            </Typography>
            <Typography variant="h6" align="left">
            20) <i>Impact of Historical Times:</i> Islam more marginalized since 9/11
            </Typography>
            <Typography variant="h6" align="left">
            21) <i>Relation to Military:</i> N/A- skip logic: No relationship to military; N/A- skip logic: No relationship to military
            </Typography>
            <Typography variant="h6" align="left">
            22) <i>Relation to Legal System:</i> No contact with system
            </Typography>
            <Typography variant="h6" align="left"> 
            23) <i>Relation to MH System:</i> No relationship with mental health system, except as a mental health professional
            </Typography>
            <Typography variant="h6" align="left">
            24) <i>MH/Subst. Abuse:</i> Close relative of someone with significant substance abuse problem
            </Typography>
            <Typography variant="h6" align="left"> 
            25) <i>Cognitive Ability/Style:</i> No special abilities or disabilities
            </Typography>
            <Typography variant="h6" align="left">
            26) <i>Health/Ability:</i> No illnesses or abilities
            </Typography>
            <Typography variant="h6" align="left"> 
            27) <i>Appearance:</i> N/A
            </Typography>
            <Typography variant="h6" align="left">
            28) <i>Age:</i> 26
            </Typography>
            <Typography variant="h6" align="left"> 
            29) <i>Raised By:</i> Raised by Mo & Fa; Heterosexual; Parent 1: cis-gender woman/Parent 2: cis-gender man; Par 1: 34/ Par 2:26; No, never lived apart from parents; No, never lived in boarding school
            </Typography>
            <Typography variant="h6" align="left">
            30) <i>Guardians’ Marital Status:</i> Married to my other parent; No changes in marital status
            </Typography>
            <Typography variant="h6" align="left">
            31) <i>Parental Status:</i> Not a parent, guardian, or other parenting figure; N/A-Skip logic; N/A-Skip logic
            </Typography>
            <Typography variant="h6" align="left">
            32) <i>Marital Status:</i> Single; single at 26; opposite-sex
            </Typography>
            <Typography variant="h6" align="left"> 
            33) <i>Sexual Orientation:</i> Straight
            </Typography>
            <Typography variant="h6" align="left">
            34) <i>Gender ID:</i> cis-gender
            </Typography>
            <Typography variant="h6" align="left"> 
            35) <i>Gender Expression:</i> Gender-normative
            </Typography>
            <Typography variant="h6" align="left">
            36) <i>Sex Assigned at Birth:</i> Female
            </Typography>
            <Typography variant="h6" align="left"> 
            37) <i>Unique History:</i> prominent chiefs and founder of village from family, some family in poverty
            </Typography>
           
        </Container>
      </Container>



        
      <Container className="after-one">
       
        <Container id="body5">
          <Container id="chart5"><Container className="matrix-header-bottom">Subject 3 - Earlier Matrix</Container></Container>
        </Container>

        
        <Container id="body6">
          <Container id="chart6"><Container className="matrix-header-bottom">Subject 3 - Current Matrix</Container></Container>
        </Container>
        <Container className="footnotes-bottom-after-one">
          <Container className="footnotes-header">Footnotes:</Container>
            <Typography variant="h6" align="left">
            1) <i>Educ. Level:</i> MA
            </Typography>
            <Typography variant="h6" align="left">
            2) <i>Guardians’ Educ:</i> Father completed 6 grade and mother completed 10 grade
            </Typography>
            <Typography variant="h6" align="left">
            3) <i>Occupation(s):</i> CNA, cashier then. Now researcher/student; Changed career approximately 6 years ago
            </Typography>
            <Typography variant="h6" align="left"> 
            4) <i>Guardians’ Occupation:</i> mother CNA and father motorcycle mechanic
            </Typography>
            <Typography variant="h6" align="left">
            7) <i>Guardian’s Childhood House. Income:</i> both low income
            </Typography>
            <Typography variant="h6" align="left"> 
            8) <i>Access:</i>  mother has very limited access; father deceased
            </Typography>
            <Typography variant="h6" align="left">
            9) <i>Guardians’ Access:</i>  both limited access to resources
            </Typography>
            <Typography variant="h6" align="left">
            10) <i>Race(s):</i>  black/brown; black/brown
            </Typography>
            <Typography variant="h6" align="left">
            11) <i>Ethnicity / Tribe:</i>  Dominican
            </Typography>
            <Typography variant="h6" align="left"> 
            12) <i>Person's Nation of Origin:</i>  Dominican
            </Typography>
            <Typography variant="h6" align="left">
            13) <i>Citizenship Status. Income:</i>  DR and USA; Naturalized citizen of the country of residence
            </Typography>
            <Typography variant="h6" align="left"> 
            15) <i>Language(s) Spoken:</i>  Spanish; English
            </Typography>
            <Typography variant="h6" align="left">
            16) <i>Family Religion:</i> Christian; born Christian which is practiced by approx 98% of DR
            </Typography>
            <Typography variant="h6" align="left"> 
            17) <i>Chosen Religion:</i> Atheist; born Christian which is practiced by approx 98% of DR
            </Typography>
            <Typography variant="h6" align="left">
            18) <i>Politics:</i> Progressive; I can be a little radical at times
            </Typography>
            <Typography variant="h6" align="left"> 
            19) <i>Geo. Region:</i> born and raised in the DR; now live in CT, USA
            </Typography>
            <Typography variant="h6" align="left">
            20) <i>Impact of Historical Times:</i> none
            </Typography>
            <Typography variant="h6" align="left">
            21) <i>Relation to Military:</i> no relationship with the military; no relationship with the military
            </Typography>
            <Typography variant="h6" align="left">
            22) <i>Relation to Legal System:</i> no relationship with the legal system
            </Typography>
            <Typography variant="h6" align="left"> 
            23) <i>Relation to MH System:</i> no relationship with the MH
            </Typography>
            <Typography variant="h6" align="left">
            24) <i>MH/Subst. Abuse:</i> no history with mental health problems
            </Typography>
            <Typography variant="h6" align="left"> 
            25) <i>Cognitive Ability/Style:</i> Average
            </Typography>
            <Typography variant="h6" align="left">
            26) <i>Health/Ability:</i> Average
            </Typography>
            <Typography variant="h6" align="left"> 
            27) <i>Appearance:</i> average
            </Typography>
            <Typography variant="h6" align="left">
            28) <i>Age:</i> 45
            </Typography>
            <Typography variant="h6" align="left"> 
            29) <i>Raised By:</i> raised by mother, father, and other immediate relatives; straight; both parents are straight; mother was about 23 and father about 25 average; no; no
            </Typography>
            <Typography variant="h6" align="left">
            30) <i>Guardians’ Marital Status:</i> parents separated when I was approximately 4 years old; mother divorced and father deceased
            </Typography>
            <Typography variant="h6" align="left">
            31) <i>Parental Status:</i> have two biological daughters; 18 and 15; none
            </Typography>
            <Typography variant="h6" align="left">
            32) <i>Marital Status:</i> divorced; married at 25 and divorced at 33; opposite sex
            </Typography>
            <Typography variant="h6" align="left"> 
            33) <i>Sexual Orientation:</i> straight
            </Typography>
            <Typography variant="h6" align="left">
            34) <i>Gender ID:</i> cisgender
            </Typography>
            <Typography variant="h6" align="left"> 
            35) <i>Gender Expression:</i> I don't wear make up but I don?t wear ties either
            </Typography>
            <Typography variant="h6" align="left">
            36) <i>Sex Assigned at Birth:</i> female
            </Typography>
            <Typography variant="h6" align="left"> 
            37) <i>Unique History:</i> N/A
            </Typography>
        </Container>
      </Container>

     
      <Container className="after-one">
        //Pre
        <Container id="body7">
          <Container id="chart7"><Container className="matrix-header-bottom">Subject 4 - Earlier Matrix</Container></Container>
        </Container>

        //Post
        <Container id="body8">
          <Container id="chart8"><Container className="matrix-header-bottom">Subject 4 - Current Matrix</Container></Container>
        </Container>
        <Container className="footnotes-bottom-after-one">
          <Container className="footnotes-header">Footnotes:</Container>
            
            <Typography variant="h6" align="left">1) <i>Educ. Level:</i> Masters of Science in Education for Clinical Mental Health Counseling, 2019, USA 
            </Typography>
            <Typography variant="h6" align="left">
            2) <i>Guardians’ Educ:</i> Par 1: Masters degree of education. Education ended in 2005. Parent?s education changed due to going back to school for a masters degree. Par 2: Bachelors degree of science. Education ended in 2009. 
            </Typography>
            <Typography variant="h6" align="left">
            3) <i>Occupation(s):</i> Community Support Specialist, Research Assistant, Clinical Intern, and Graduate Student; Currently, I am classified as a "professional," holding the title of a community support specialist. Compared with the current economic climate within the United States, I have a lot of privilege with being employed during a pandemic.   
            </Typography>
            <Typography variant="h6" align="left">
            4) <i>Guardians’ Occupation:</i> Par 1: mother was stay at home. Went back to school at night when other parent was laid off. Worked full time and went to school at night to obtain Masters degree. Par 2: Father was laid off due to onset of physical disability. Held infrequent low paying jobs throughout my childhood. 
            </Typography>
            <Typography variant="h6" align="left">
            7) <i>Guardian’s Childhood House. Income:</i> Par 1: Parent?s childhood had little money, single income household. Par 2: Parent?s childhood had little money and single income household.  
            </Typography>
            <Typography variant="h6" align="left">
            8) <i>Access:</i>  I have the ability to advocate for myself, as well as, obtain medical care and obtain a job. Additionally, I have a Euro-centric name that would assist me in getting a job/loan/etc., if needed 
            </Typography>
            <Typography variant="h6" align="left">
            9) <i>Guardians’ Access:</i>  Par 1: Parent has been able to advocate for assistance. Has the ability to advocate and will be taken seriously. Par 2: has had difficulty in advocated for themself due to cognitive impairment. Has the ability to advocate and will taken seriously, when they want to.  
            </Typography>
            <Typography variant="h6" align="left">
            10) <i>Race(s):</i>  White; Most privileged. They identify and have always identified as white and lived in majority white-identifying places.  
            </Typography>
            <Typography variant="h6" align="left">
            11) <i>Ethnicity / Tribe:</i>  Jewish
            </Typography>
            <Typography variant="h6" align="left"> 
            12) <i>Person's Nation of Origin:</i>  Born in County of residence with generations spanning 4+ 
            </Typography>
            <Typography variant="h6" align="left">
            13) <i>Citizenship Status. Income:</i>  United States; Naturalized Citizen  
            </Typography>
            <Typography variant="h6" align="left"> 
            15) <i>Language(s) Spoken:</i>  English; No additional language 
            </Typography>
            <Typography variant="h6" align="left">
            16) <i>Family Religion:</i> Jewish; My family?s experience with identifying as Jewish have remained consistent over their lifespan due to living in areas where they are accepted.  
            </Typography>
            <Typography variant="h6" align="left"> 
            17) <i>Chosen Religion:</i> Athiest/Areligious; Born Jewish 
            </Typography>
            <Typography variant="h6" align="left">
            18) <i>Politics:</i> Democratic Socialist; Socialism and socialist-identity have been incredibly marginalized and persecuted in the US. More understanding of the construct has come to light in recent years and is becoming more acceptable, albeit still marginalized. 
            </Typography>
            <Typography variant="h6" align="left"> 
            19) <i>Geo. Region:</i> Geographically, I have lived in privileged spaces. Mostly economically thriving and safe from war, most disasters and within a democratically leaning country. The region is well off with power, influence, and wealth comparatively with other countries. 
            </Typography>
            <Typography variant="h6" align="left">
            20) <i>Impact of Historical Times:</i> Historically, I have held privilege as a cisgender, white man. However, I lose privilege in other domains such as identifying as LGBTQ and nonbinary.  
            </Typography>
            <Typography variant="h6" align="left">
            21) <i>Relation to Military:</i> No relationship with military  ; No relationship with military 
            </Typography>
            <Typography variant="h6" align="left">
            22) <i>Relation to Legal System:</i> No relationship with legal system  
            </Typography>
            <Typography variant="h6" align="left"> 
            23) <i>Relation to MH System:</i> Currently or previously in short term outpatient psychiatric treatment or psychotherapy.  
            </Typography>
            <Typography variant="h6" align="left">
            24) <i>MH/Subst. Abuse:</i> In recovery from addiction to alcohol 
            </Typography>
            <Typography variant="h6" align="left"> 
            25) <i>Cognitive Ability/Style:</i> No major cognitive disability or learning styles that impedes day to day functioning  
            </Typography>
            <Typography variant="h6" align="left">
            26) <i>Health/Ability:</i> Previous history of asthma and currently lives with Crohn?s Disease and Ulcerative Colitis.  
            </Typography>
            <Typography variant="h6" align="left"> 
            27) <i>Appearance:</i> Blank
            </Typography>
            <Typography variant="h6" align="left">
            28) <i>Age:</i> 25 and 1995 
            </Typography>
            <Typography variant="h6" align="left"> 
            29) <i>Raised By:</i> Blank; Par 1: Heterosexual Par 2: Heterosexual; Both parents are cisgender and heterosexual; Par 1: 33/ Par 2:36; No, never lived apart from parents; No, never lived in boarding school  
            </Typography>
            <Typography variant="h6" align="left">
            30) <i>Guardians’ Marital Status:</i> Par 1: Monogamous and married once. Par 2: Monogamous and married once.; Par 1: Monogamous and married once. Par 2: Monogamous and married once. 
            </Typography>
            <Typography variant="h6" align="left">
            31) <i>Parental Status:</i> Not a parent, guardian, or other parenting figure; blank; blank
            </Typography>
            <Typography variant="h6" align="left">
            32) <i>Marital Status:</i> Coupled but unmarried; 18 when first seriously coupled, singled at 21, coupled at 22, singled at 23, coupled at 24.; Same Sex
            </Typography>
            <Typography variant="h6" align="left"> 
            33) <i>Sexual Orientation:</i> Gay
            </Typography>
            <Typography variant="h6" align="left">
            34) <i>Gender ID:</i> Nonbinary
            </Typography>
            <Typography variant="h6" align="left"> 
            35) <i>Gender Expression:</i> Gender non-binary wears clothing that could be construed as feminine or masculine 
            </Typography>
            <Typography variant="h6" align="left">
            36) <i>Sex Assigned at Birth:</i> Male
            </Typography>
            <Typography variant="h6" align="left"> 
            37) <i>Unique History:</i> Personal history of trauma/abuse
            </Typography>
          
        </Container>
      </Container>*/

    </div>


  )
};

export default Home;