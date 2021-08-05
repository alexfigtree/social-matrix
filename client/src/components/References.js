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

const References = () => {

    return (
        <div className="container">

            <NavBar />

            <Typography variant="h2" style={{ marginBottom: '20px', paddingTop: '50px' }} align="center">References</Typography>
            <Typography id="refIntersect" variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px', fontStyle: 'italic', fontWeight: 'bold' }}>
                REFERENCES FOR INTERSECTIONALITY
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
                Adames, H. Y., Chavez-Dueñas, N. Y., Sharma, S., & La Roche, M. J. (2018). 
                Intersectionality in psychotherapy: The experiences of an AfroLatinx queer 
                immigrant. <i>Psychotherapy, 55</i>(1), 73–79.  
                Retrieved from https://psycnet.apa.org/record/2018-11631-009 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
                Boston Institute for Culturally Affirming Practices (2017). 
                Deconstructing power to build connection: The importance of dialogue. 
                In E. Pinderhughes, V. Jackson & P. Romney (Eds.) <i>Understanding power: An 
                imperative for human services</i> (pp.195-218). Washington, DC: NASW Press. 
                Retrieved from 
                https://www.academia.edu/31868980/Deconstructing_Power_to_Build_Connection_The_Importance_of_Dialogue_1 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
                DeBlaere, C., Watson, L. B., & Langrehr, K. J. (2018). Intersectionality 
                applied: Intersectionality is as intersectionality does. In C. B. Travis, J. W. 
                White, A. Rutherford, W. S. Williams, S. L. Cook, & K. F. Wyche (Eds.), APA 
                handbooks in psychology®. <i>APA handbook of the psychology of women: History, 
                theory, and battlegrounds</i> (pp. 567–584). American Psychological Association. 
                https://doi.org/10.1037/0000059-029
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
                Chavez-Dueñas, N. Y., & Adames, H. Y. (2020). Intersectionality awakening model 
                of womanista: A transnational treatment approach for Latinx women. <i>Women & Therapy, 
                44 </i>(1/2), 83-100.  Retrieved from 
                https://www.tandfonline.com/doi/abs/10.1080/02703149.2020.1775022?journalCode=wwat20 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
                Cole, E. (2009) Intersectionality and research in psychology. <i>American Psychologist, 64</i> (3), 170-180. Retrieved from https://www.researchgate.net/publication/24259595_Intersectionality_and_Research_in_Psychology
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
                Collins, P. & Blige, S. (2020). <i>Intersectionality: Key concepts </i>(2nd edit.) Polity.
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
                Combahee River Collective Statement. (1974). Author. Retrieved from https://americanstudies.yale.edu/sites/default/files/files/Keyword%20Coalition_Readings.pdf 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
                Crenshaw, K. (1989). Demarginalizing the intersection of race and sex: 
                A black feminist critique of antidiscrimination doctrine, feminist theory, 
                and antiracist politics. <i>University of Chicago Legal Forum, 140</i>, 139-167. 
                Retrieved from   https://chicagounbound.uchicago.edu/cgi/viewcontent.cgi?article=1052&context=uclf
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
                Crenshaw, K. (1991). Mapping the margins: Intersectionality, identity 
                politics, and violence against women of color. <i>Stanford Law Review, 43</i>(6), 
                1241-1299. Retrieved from https://www.jstor.org/stable/1229039 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
                Crenshaw, K. (2017). <i>On intersectionality: Essential writings.</i> New Press.
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
                Hardy, K.V. (2016). <i>Anti-racist approaches to shaping theoretical and practice 
                paradigms. In M. Pendergreen & A. Siskin (Eds.) Anti-racist strategies for the 
                health and human services.</i> Oxford University Press. Retrieved from 
                https://irp-cdn.multiscreensite.com/226e693c/files/uploaded/Ken%20Hardy%20PAST%20Model%20article%20-%20Anti-Racist%20Approaches%20%281%29%20%281%29.pdf
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
                Kliman, J. (in press). Whiteness, Intersectionality, and the Contradictions 
                of White Jewish Identity. In K.V. Hardy (Ed.) <i>The enduring, invisible, and 
                ubiquitous centrality of Whiteness: Implications for clinical practice and 
                beyond.</i>  W.W. Norton & Company.
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
                Kliman, J., Winawer, H., & Trimble, D. (2019). The inevitable whiteness of 
                being (white): Whiteness and intersectionality in family therapy practice and 
                raining. In M. McGoldrick & K.V. Hardy (Eds.). <i>Re-visioning family therapy: 
                Addressing diversity in clinical practice</i> (3rd edition) (pp. 236-250). 
                New York: Guilford. Retrieved from https://www.academia.edu/49671864/Kliman_Winawer_Trimble_2019_The_Inevitable_Whiteness_of_Being_White 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
              Kliman, J. (2015). Social class and the family life cycle.  In M. McGoldrick, 
              B. Carter, & N. García-Preto (Eds.). <i>The expanded family life cycle</i> (5th edition). (pp. 74-81). Boston: Pearson. Retrieved from: https://www.academia.edu/17120275/Kliman_2015_Social_Class_and_the_Life_Cycle 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>           
              Mena, J. & Quina, K. (2019). <i>Integrating multiculturalism and intersectionality 
              into the psychology curriculum: Strategies for instructors.</i> American 
              Psychological Association.
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
              Watts-Jones, T.D. (2016). Location of self in training and supervision. In K.V. Hardy & T. Bobes (Eds.) Culturally 
              sensitive supervision and training, Routledge. 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
              Watts-Jones, T.D. (2010). Location of Self: Opening the Door to Dialogue on 
              intersectionality in the therapy process. <i>Family Process, 49</i>(3), 405-420.  
              Retrieved from https://www.ackerman.org/wp-content/uploads/2015/12/Watts-Jones-Dee-Location_of_Self.pdf 
            </Typography>


            <Typography id="refSMD" variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px', fontStyle: 'italic', fontWeight: 'bold' }}>
                REFERENCES ON THE SOCIAL MATRIX DIAGRAM
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
              Atlas. (2020). A tool for understanding privilege and racism in your company: 
              Integrative leadership; Build a strong company culture using intersectionality. 
              Retrieved from https://www.atlasq.com/journal/a-tool-for-understanding-privilege-and-racism-in-your-company 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
              Binkley, J. (2014). Mapping intersectionality: A practical approach to 
              contextualizing multiple sociocultural identities. <i>The Oregon Psychologist 
              (3rd quarter)</i>, 7-8. Retrieved from https://www.opa.org/assets/docs/Newsletters/2014/opanlq32014.pdf 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
              Crenshaw, K. (2016). The urgency of intersectionality: TED Talk (video). 
              Retrieved from https://www.ted.com/talks/kimberle_crenshaw_the_urgency_of_intersectionality?language=en 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
              Crenshaw, K. (1989). Demarginalizing the intersection of race and class: 
              A black feminist critique of antidiscrimination doctrine, feminist theory and 
              anti-racist politics. <i>University of Chicago Legal Forum, 1989 (1, 139-167). 
              Retrieved from</i> https://chicagounbound.uchicago.edu/cgi/viewcontent.cgi?article=1052&context=uclf 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
              Felman, S. & Mathai, C. (2018). NYAPRS Annual Conference, Rochester, NY. 
              Retrieved from https://static1.squarespace.com/static/58739f64e6f2e14a3527a002/t/5ba91bc0652dea767598a6f1/1537809346727/AddressingIntersectionalityChackuSarah8.31.18.pdf 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
              Kliman, J. (Winter, 2010). Intersections of social privilege and 
              marginalization: A visual teaching tool. In <i>Expanding our social justice 
              practices: Advances in theory and training. [special issue.]. 
              AFTA Monograph Series: A Publication of the American Family Therapy Academy, 
              6</i>(39-48). https://www.academia.edu/1072952/Intersections_of_social_privilege_and_marginalization_a_visual_teaching_tool 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
              Kliman, J., Moní, Y., Dzilala, F., & Eisner, M. (2020, October). 
              <i>The Social Matrix: Intersectional identity, Racism, and COVID-19.</i> (video). Presented at the New England Psychological Association Annual Conference (virtual). Retrieved from   https://vimeo.com/473516661 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
              Moní, Y. & Kliman, J. (2021, July 9). Exploring Latino Clinicians’ 
              Social Location Using the Social Matrix. (Paper). Presented at the 
              Division 45 Ethnic and Minority Psychology Division of the American 
              Psychological Association. (Virtual). Retrieved from (to fill in). 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
              National Empowerment Center. (n.d.) Five SAMHSA funded national consumer/consumer supporter technical assistant centers present: The peer-run organizational learning collaborative webinar series. Washington, DC. Retrieved from https://power2u.org/wp-content/uploads/2020/05/Equity-Webinar.pdf  
            </Typography>

            <Typography id="refImpBias" variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px', fontStyle: 'italic', fontWeight: 'bold' }}>
                REFERENCES ON IMPLICIT BIAS
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
              Adichie, Chimamanda Ngozi (2009) The danger of a single story (TED Talk) (video). Retrieved from http://www.ted.com/talks/chimamanda_adichie_the_danger_of_a_single_story?language=en
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
              Anderson, M. (2016, September 28). Even black preschool teachers are biased.  
              <i>The Atlantic.</i> Retrieved from https://www.theatlantic.com/education/archive/2016/09/the-high-standard-set-by-black-teachers-for-black-students/501989/ 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
              Greenwald, A.G. (2015). [Video]. <i>Implicit bias: How should psychological 
              science inform the law?</i> Pt. I. Retrieved from: https://www.youtube.com/watch?v=PIuF2WluqYE
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
              Greenwald, A.G. & Banaji, M.R. (2017). The implicit revolution: Reconceiving 
              the relation between conscious and unconscious. <i>American Psychologist, 72</i>(9), 861-871. Retrieved from https://www.people.fas.harvard.edu/~banaji/research/publications/articles/2017_Greenwald_AP.pdf
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
              Greenwald, A. G., & Pettigrew, T. F. (2014).  With malice toward none and 
              charity for some:  Ingroup favoritism enables discrimination.  
              <i>American Psychologist, 69</i>, 669–684.
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
              Implicit Bias Test, Project Implicit, Harvard University. Retrieved from https://implicit.harvard.edu/implicit/takeatest.html 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
              Kang, J., Bennett, M. W., Carbado, D. W., Casey, P., Dasgupta, N., 
              Faigman, D. L., Godsil, R. D., Greenwald, A. G. , Levinson, J. D., & 
              Mnookin, J. L. (2012).  Implicit bias in the courtroom. <i>UCLA Law Review, 59</i>, 1124–1186. 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
              Project Implicit, Harvard University -   https://implicit.harvard.edu/implicit/aboutus.html 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
              Rae, J. R., & Greenwald, A. G. (2017). Persons or situations? Individual differences 
              explain variance in aggregated implicit race attitudes. <i>Psychological Inquiry, 28</i>, 297–300.
            </Typography>



            <Typography id="refRaceDisp" variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px', fontStyle: 'italic', fontWeight: 'bold' }}>
                REFERENCES ON RACIAL DISPARITIES IN INCOME, EDUCATION, AND HEALTH
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
              Abraído-Lanza, A., et al. (1999) The Latino Mortality Paradox - A test of 
              the "Salmon Bias" and healthy migrant hypotheses. <i>American Journal of Public 
              Health,89</i>(10), 1543-1548. Retrieved from https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1508801/ 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
              Agency for Health Care Research and Quality (2019). <i>2019 national healthcare 
              quality and disparities report. U.S. Department of Health and Human Services.  
              Retrieved from</i> https://www.ahrq.gov/research/findings/nhqrdr/nhqdr19/index.html 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
              American Forests (n.d.). Restoring America’s large forest landscapes. Author. Retrieved from https://www.americanforests.org/our-work/restoring-americas-forests/ 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
              Bowleg, The problem with the phrase <i>women and minorities</i>: Intersectionality: 
              An important theoretical framework for public health. <i>American Journal of 
              Public Health, 102</i>(7), 1267-1263. doi: 10.2105/AJPH.2012.300750 . Retrieved 
              from https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3477987/
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
              Burton, L. &  Cherlin, A. (2009). Trust is like Jell-O: Forms of trust in 
              low-income mothers’ romantic unions. <i>NCFR Monthly Report</i> (December). 
              National Council for Family Relations. 
              Retrieved from https://www.ncfr.org/ncfr-report/focus/poverty/trust-jell-o-forms-trust-low-income-mothers-romantic-unions 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
              Centers for Disease Control and Prevention (CDC) (2017).  <i>Racial/ethnic 
              health disparities  among rural adults – United States 2012-2015.</i> Retrieved 
              from https://www.cdc.gov/mmwr/volumes/66/ss/ss6623a1.htm
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
              Duru, O.K., et al. (2012) Allostatic load burden and racial disparities in 
              mortality. <i>National Medical Association, 104</i>(1/2), 89-95.  Retrieved from 
              https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3417124/ 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
              Hall, J. & Fields, B. (2015). “It’s killing us!” Narratives of black adults about 
              microaggression experiences and related health stress.  <i>Glob. Qual. Nurs. Res., 2015 (July 9).</i> Retrieved from https://pubmed.ncbi.nlm.nih.gov/28462310/
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
              Kelly, U. A. (2009). Integrating intersectionality and biomedicine in 
              health disparities research. ANS. Advances in Nursing Science, 32(2), E42–E56. https://doi-org.williamjames.idm.oclc.org/10.1097/ANS.0b013e3181a3b3fc             
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
              U.S. Bureau of Labor Statistics (2021, April 21). Employment characteristics 
              of families news release. Author. Retrieved from https://www.bls.gov/news.release/famee.htm
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
              U.S. Census Bureau (2020a). Educational attainment in the United States: 2019. Author.  Retrieved from https://www.census.gov/content/census/en/data/tables/2019/demo/educational-attainment/cps-detailed-tables.html 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
              U.S. Census Bureau (2020b). Income and poverty in the United States: 2019. Author. Retrieved from https://www.census.gov/library/publications/2020/demo/p60-270.html 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
              Villarosa, L. (2018). Why America’s Black mothers and babies are in a 
              life-or-death crisis. <i>The New York Times Magazine (April 11).</i> 
              Retrieved from https://www.nytimes.com/2018/04/11/magazine/black-mothers-babies-death-maternal-mortality.html
            </Typography>





            <Typography id="refLGBTQ" variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px', fontStyle: 'italic', fontWeight: 'bold' }}>
                REFERENCES ON LGBTQ+  INTERSECTIONALITY AND DISPARITIES
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
              Centers for Disease Control and Prevention (2019).  Health disparities among LGBTQ youth. Author. Retrieved from https://www.cdc.gov/healthyyouth/disparities/health-disparities-among-lgbtq-youth.htm 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
              Daniels, H. & Butkus, R., et al. (2015). Lesbian, gay, bisexual, and transgender 
              health disparities: Executive summary of a policy position paper From the American 
              College of Physicians. <i>Annals of Internal Medicine (July 21).</i> Retrieved from https://www.acpjournals.org/doi/10.7326/m14-2482
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
              Emlet, C. (2017). Social economic, and health disparities among LGBT older adults.  
              <i>Generations. PubMed Central, 40</i>(2), 16-22.  Retrieved from https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5373809/ 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
              Human Rights Campaign (n.d.) <i>Glossary of terms.</i> Retrieved from https://www.hrc.org/resources/glossary-of-terms 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
              Korschak, L., et al. (2020). Health disparities among LGBT veterans.  U.S. Department of Veterans Affairs, Office of Health Equity.  Retrieved from https://www.va.gov/HEALTHEQUITY/Health_Disparities_Among_LGBT_Veterans.asp 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
              Su, D. et al. (2016). Mental health disparities within the LGBY community: A comparison between transgender and non-transgender individuals. (2016). <i>Transgender Health, 1</i>(1).  Retrieved from https://www.liebertpub.com/doi/full/10.1089/trgh.2015.0001 
            </Typography>


        </div>

  )
};

export default References;