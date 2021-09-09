
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

const AreasOfIdentity = () => {

    return (
        <div className="container">

            <NavBar />

            <Typography variant="h2" style={{ marginBottom: '20px', paddingTop: '50px' }} align="center">Areas of Identity</Typography>
     
            <Typography variant="h6" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
                The Social Matrix has 34 different areas of identity, each of which is on its 
                own axis, like the spokes of a wheel, with a scale going from the most 
                privileged position at “1” to the most marginalized position at “7.”  
                Each area of identity on the Social Matrix is determined by the answers you 
                give to the survey questions (see <Link to="/intro" style={{ fontSize: '20px'}}>TAKE SURVEY</Link>).  The areas of identity, which 
                are also called domains of identity, are: 
            </Typography>

            <Typography name="education" id="education" variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '20px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Educational Level</p>
                <p>This area covers how many years of education you have and what your diplomas 
                  are, if any. How privileged a certain number of years of education would be depends 
                  largely on context. For instance, having a high school diploma only is somewhat 
                  marginalized in the <a href="/identity#geoRegion" style={{ fontSize: '20px', textDecoration: 'none' }}>US, but not in many developing countries</a> with less access to 
                  higher education. It also varies with your <a href="/identity#age" style={{ fontSize: '20px', textDecoration: 'none' }}>age</a>, since a high school diploma was 
                  enough to ensure a middle-class life <a href="/identity#impactHistTimes" style={{ fontSize: '20px', textDecoration: 'none' }}>until about 30 years ago</a>. Education is also 
                  tied to <a href="/identity#occupation" style={{ fontSize: '20px', textDecoration: 'none' }}>occupation</a>, since many jobs require certain degrees or certifications, and 
                  to <a href="/identity#householdIncome" style={{ fontSize: '20px', textDecoration: 'none' }}>income</a>, as people with higher education make more money than those without. There 
                  are also disparities in both the quality of education and the level of education 
                  achieved on the basis of <a href="/identity#race" style={{ fontSize: '20px', textDecoration: 'none' }}>race</a>, <a href="/identity#language" style={{ fontSize: '20px', textDecoration: 'none' }}>language(s) spoken</a>, <a href="/identity#race" style={{ fontSize: '20px', textDecoration: 'none' }}>race</a>, <a href="/identity#language" style={{ fontSize: '20px', textDecoration: 'none' }}>cognitive ability</a>, <a href="/identity#health" style={{ fontSize: '20px', textDecoration: 'none' }}>health/ability</a>, 
                  and <a href="/identity#geoRegion" style={{ fontSize: '20px', textDecoration: 'none' }}>community</a>, as well as how much <a href="/identity#guardiansEducation" style={{ fontSize: '20px', textDecoration: 'none' }}>education one’s parents or guardians have.</a>
                </p> 
            </Typography>

            <Typography name="guardiansEducation" id="guardiansEducation" variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Guardians’ Education</p>
                <p>This area addresses the <a href="/identity#education" style={{ fontSize: '20px', textDecoration: 'none' }}>educational level</a> of your <a href="/identity#raisedBy" style={{ fontSize: '20px', textDecoration: 'none' }}>parents or guardians</a>, to give an 
                  idea of your family’s educational history. Because your parents or guardians grew up <a href="/identity#impactHistTimes" style={{ fontSize: '20px', textDecoration: 'none' }}>in 
                  an earlier time</a> when education was <a href="/identity#access" style={{ fontSize: '20px', textDecoration: 'none' }}>less widely accessible</a> and perhaps in a <a href="/identity#geoRegion" style={{ fontSize: '20px', textDecoration: 'none' }}>different 
                  country, region, or community</a>, their educational level may be considered differently 
                  from your own and may carry have a different impact on <a href="/identity#occupation" style={{ fontSize: '20px', textDecoration: 'none' }}>occupation</a> and therefore on <a href="/identity#householdIncome" style={{ fontSize: '20px', textDecoration: 'none' }}>income</a>. 
                </p> 
            </Typography>


            <Typography name="occupation" id="occupation" variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Occupation</p>
                <p>For your occupation, consider both the status of that 
                <a href="/identity#education" style={{ fontSize: '20px', textDecoration: 'none' }}> education </a> 
                in your <a href="/identity#geoRegion" style={{ fontSize: '20px', textDecoration: 'none' }}>community and the country</a> (the degree of respect it does or doesn’t get), the amount of control 
                  you have over your work life and schedule, and the <a href="/identity#householdIncome" style={{ fontSize: '20px', textDecoration: 'none' }}>income</a> associated with that occupation. 
                  ome occupations are more secure than others, in that they provide reliable employment and 
                  physical safety, while other occupations may be prone to layoffs and exploitation, or to 
                  physical danger. The relative privilege or marginalization an occupation provides may vary 
                  greatly with <a href="/identity#impactHistTimes" style={{ fontSize: '20px', textDecoration: 'none' }}>historical period</a> (since more work was agricultural or manual in the past) and 
                  with <a href="/identity#geoRegion" style={{ fontSize: '20px', textDecoration: 'none' }}>geographical region</a>. 
                </p> 
            </Typography>


            <Typography name="guardiansOccupation" id="guardiansOccupation" variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Guardians’ Occupation</p>
                <p>Your <a href="/identity#raisedBy" style={{ fontSize: '20px', textDecoration: 'none' }}>parents’ or guardians’</a>


                 <a href="/identity#occupation" style={{ fontSize: '20px', textDecoration: 'none' }}>occupation</a> is a window into your family occupational 
                history. As with <a href="/identity#education" style={{ fontSize: '20px', textDecoration: 'none' }}>educational level</a>, the amount of status or respect their occupation gets  
                or got) may vary with <a href="/identity#impactHistTimes" style={{ fontSize: '20px', textDecoration: 'none' }}>when they came of occupational age</a> and <a href="/identity#geoRegion" style={{ fontSize: '20px', textDecoration: 'none' }}> 
                  the country, region, or community</a> where they did so. 
                </p> 
            </Typography>


            <Typography name="householdIncome" id="householdIncome" variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Household Income</p>
                <p>How privileged or marginalized your household income (your income plus the income 
                  of anyone else in your household, minus your expenses) is depends not only on what 
                your salary or other income is, but also on cost of living in your community and your 
                country. For instance, the same salary might allow you to buy a comfortable house in 
                <a href="/identity#access" style={{ fontSize: '20px', textDecoration: 'none' }}> urban Missouri or rural Arkansas, but only to rent a small apartment in New York City 
                or San Francisco, cities with dramatic income divides between rich and poor and 
                inadequate affordable housing.</a>
                 <a href="/identity#geoRegion" 
                style={{ fontSize: '20px', textDecoration: 'none' }}>The same income might mean you are rich in the 
                Dominican Republic or Sri Lanka.</a> It is also useful to think about assets as well 
                (savings, retirement and college funds, the value of one’s home, if you own it, help 
                  from family, etc., minus your debts) – do you have enough assets that you can live 
                comfortably and weather unexpected expenses, or are you living paycheck to paycheck or 
                dipping into savings or credit card debt to pay monthly expenses? Take major expenses 
                into consideration, such as <a href="/identity#health" style={{ fontSize: '20px', textDecoration: 'none' }}>major medical costs</a> that are not covered by insurance or 
                <a href="/identity#education" style={{ fontSize: '20px', textDecoration: 'none' }}> high college tuition or debt</a>, because a relatively high gross income might not be so 
                high after paying for those expenses.  
                </p> 

                <p>
                  Household income and wealth are strongly affected by <a href="/identity#race" style={{ fontSize: '20px', textDecoration: 'none' }}>race</a> in many <a href="/identity#geoRegion" 
                style={{ fontSize: '20px', textDecoration: 'none' }}>countries.</a>.  
                  or example, in the US, Black, Latinx, and Native American people, as well as 
                  those from some Asian countries, generally make significantly less money than 
                  White people, and have far less wealth.  In addition, 
                  <a href="/identity#politics" style={{ fontSize: '20px', textDecoration: 'none' }}>prejudicial governmental, 
                  housing, and banking policies</a>
                   historically and in the present on the basis of race, 
                  ethnicity, and religion have systematically ensured that <a href="/identity#race" style={{ fontSize: '20px', textDecoration: 'none' }}>Black, Native 
                  American,</a> and <a href="/identity#ethnicity" style={{ fontSize: '20px', textDecoration: 'none' }}>Latino</a> people (and, <a href="/identity#religion" style={{ fontSize: '20px', textDecoration: 'none' }}>previously, Jews and Catholics</a>) were denied <a href="/identity#access" style={{ fontSize: '20px', textDecoration: 'none' }}> access </a> to 
                  neighborhoods with <a href="/identity#education" style={{ fontSize: '20px', textDecoration: 'none' }}>high-quality schools</a>, which maintains <a href="/identity#race" style={{ fontSize: '20px', textDecoration: 'none' }}>racial inequality.</a> Similarly, 
                  <a href="/identity#relationToMilitary" style={{ fontSize: '20px', textDecoration: 'none' }}>veterans’ benefits</a>
                   <a href="/identity#impactHistTimes" style={{ fontSize: '20px', textDecoration: 'none' }}>between World War II and the end of the Vietnam War era</a> ensured 
                  upward economic mobility to <a href="/identity#race" style={{ fontSize: '20px', textDecoration: 'none' }}>white</a> <a href="/identity#relationToMilitary" style={{ fontSize: '20px', textDecoration: 'none' }}>veterans</a> who <a href="/identity#access" style={{ fontSize: '20px', textDecoration: 'none' }}> received </a> <a href="/identity#education" style={{ fontSize: '20px', textDecoration: 'none' }}>free higher education</a> and 
                  subsidized home mortgages, but were <a href="/identity#access" style={{ fontSize: '20px', textDecoration: 'none' }}>denied</a> to <a href="/identity#race" style={{ fontSize: '20px', textDecoration: 'none' }}>Black</a> <a href="/identity#race" style={{ fontSize: '20px', textDecoration: 'none' }}>veterans.</a>
                </p>

                <p>
                  Gender, gender identity, and <a href="/identity#education" style={{ fontSize: '20px', textDecoration: 'none' }}>educational level</a> achieved all affect 
                  household income as well, with women making less than men (and <a href="/identity#race" style={{ fontSize: '20px', textDecoration: 'none' }}>Black, 
                    Indigenous,</a> and <a href="/identity#ethnicity" style={{ fontSize: '20px', textDecoration: 'none' }}>Latinx</a> women making much less and having less wealth 
                    than White men) and lesbian couples making less and having less wealth 
                  than heterosexual couples, while gay male couples make more and have more 
                  wealth. Transgender <a href="/identity#race" style={{ fontSize: '20px', textDecoration: 'none' }}>Black and Brown people</a> generally make less and have 
                  less wealth than all other groups.
                </p>

                <p>
                  Finally, household income has a strong relationship with health and 
                  longevity; people with higher household incomes tend to be significantly 
                  <a href="/identity#health" style={{ fontSize: '20px', textDecoration: 'none' }}>healthier</a> and <a href="/identity#age" style={{ fontSize: '20px', textDecoration: 'none' }}>longer-lived</a> than poorer people, because they have better 
                  <a href="/identity#access" style={{ fontSize: '20px', textDecoration: 'none' }}>access</a> to <a href="/identity#health" style={{ fontSize: '20px', textDecoration: 'none' }}>healthcare and healthy food</a>,  and tend to live in <a href="/identity#geoRegion" 
                style={{ fontSize: '20px', textDecoration: 'none' }}>neighborhoods</a> 
                  with more trees (which decrease overheating and pollution), while poorer 
                  people tend to live in <a href="/identity#geoRegion" 
                style={{ fontSize: '20px', textDecoration: 'none' }}>neighborhoods</a> with little greenery and more 
                  <a href="/identity#health" style={{ fontSize: '20px', textDecoration: 'none' }}>unhealthful</a> pollution-creating industries. 
                </p>
            </Typography>


            <Typography id="childhoodHouseholdIncome" variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Childhood Household Income</p>
                <p>
                  Childhood household income is the income your family lived on when you were a 
                  child, which should also include household wealth or debt load. If you grew up 
                  in multiple households (
                    <a href="/identity#raisedBy" style={{ fontSize: '20px', textDecoration: 'none' }}>because your parents or other guardians</a> didn’t live 
                    together), you can answer this for as many households as you lived in. Keep in 
                  mind that a particular income then had more <a href="/identity#impactHistTimes" style={{ fontSize: '20px', textDecoration: 'none' }}>buying power than today</a> if you are 
                  adult now, because of inflation. Also consider when and where you lived, since 
                  both <a href="/identity#impactHistTimes" style={{ fontSize: '20px', textDecoration: 'none' }}>historical period</a> and <a href="/identity#geoRegion" 
                style={{ fontSize: '20px', textDecoration: 'none' }}>geographical location</a>  influence the buying power of 
                  any particular income. In addition, <a href="/identity#geoRegion" 
                style={{ fontSize: '20px', textDecoration: 'none' }}>some countries</a>  provide guaranteed minimum 
                  incomes for families with children, which considerably decreases poverty, as 
                  does <a href="/identity#politics" style={{ fontSize: '20px', textDecoration: 'none' }}>universal health care</a> in most countries in the developed world.
                </p> 
            </Typography>


            <Typography id="guardiansChildhoodIncome" variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Guardians’ Childhood Household Income</p>
                <p>
                  Childhood household income is the income your <a href="/identity#raisedBy" style={{ fontSize: '20px', textDecoration: 'none' }}>parents or guardians</a> lived on when they were 
                  children, together with household wealth or debt. If they grew up in multiple households 
                  (<a href="/identity#raisedBy" style={{ fontSize: '20px', textDecoration: 'none' }}>because their own parents or guardians</a> didn’t live together), you can answer this 
                  for as many households as they lived in. Keep in mind that <a href="/identity#impactHistTimes" style={{ fontSize: '20px', textDecoration: 'none' }}>a particular income then had more 
                    buying power than today</a> or during your own childhood, because of inflation. Also consider 
                  when and where your parents or guardians lived, since both <a href="/identity#impactHistTimes" style={{ fontSize: '20px', textDecoration: 'none' }}>historical period</a> and <a href="/identity#geoRegion" 
                style={{ fontSize: '20px', textDecoration: 'none' }}>geographical location</a> (country, region, or even which part of a city or town) influence the buying power of 
                  ny particular income. 
                </p> 
            </Typography>


            <Typography id="access" variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Access</p>
                <p>
                  This domain involves how much access you have to resources (for instance, to jobs, 
                    loans, gifts, or benefits, and such professional help as lawyers, and quality health 
                    care and education), information (for instance, knowing how to search for information 
                    online), and influence (political, professional, or otherwise). This access is especially 
                    affected by <a href="/identity#education" style={{ fontSize: '20px', textDecoration: 'none' }}>education</a>, 
                    <a href="/identity#householdIncome" style={{ fontSize: '20px', textDecoration: 'none' }}>income,</a> <a href="/identity#race" style={{ fontSize: '20px', textDecoration: 'none' }}>race,</a> and language(s) spoken, as well as <a href="/identity#geoRegion" 
                style={{ fontSize: '20px', textDecoration: 'none' }}>geographical region</a> , which influences how close <a href="/identity#health" style={{ fontSize: '20px', textDecoration: 'none' }}>medical care</a> is, how specialized the services, 
                    and even how inclusive local buildings, roads and transportation are to <a href="/identity#health" style={{ fontSize: '20px', textDecoration: 'none' }}>people with disabilities</a>. 
                </p> 
            </Typography>


            <Typography id="guardiansAccess" variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}><a href="/identity#raisedBy" style={{ fontSize: '20px', textDecoration: 'none' }}>Guardians' Access</a></p>
                <p>
                  This domain involves how much <a href="/identity#access" style={{ fontSize: '20px', textDecoration: 'none' }}>access</a> your <a href="/identity#raisedBy" style={{ fontSize: '20px', textDecoration: 'none' }}>parents or guardians</a> have to resources, 
                  information, and influence. For more on how access relates to other 
                  aspects of identity, see “Access.”
                </p> 
            </Typography>

            <Typography id="race" variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Race</p>
                <p>
                  This domain relates to the race(s) you identify with and the race(s) that other 
                  people perceive you to have. Race is a socially constructed concept (going back 
                    a little over 500 years) and not a biological one, but it has major social 
                  impact. How privileged or marginalized you experience your racial identity to be 
                  may vary with <a href="/identity#geoRegion" 
                style={{ fontSize: '20px', textDecoration: 'none' }}>where you live</a>, and with other areas of relative privilege or 
                  marginalization, such as <a href="/identity#education" style={{ fontSize: '20px', textDecoration: 'none' }}>educational attainment</a>, <a href="/identity#occupation" style={{ fontSize: '20px', textDecoration: 'none' }}>occupation</a>, <a href="/identity#householdIncome" style={{ fontSize: '20px', textDecoration: 'none' }}>income,</a> and citizenship 
                  status, as well as with your skin color and visible physical features. <a href="/identity#impactHistTimes" style={{ fontSize: '20px', textDecoration: 'none' }}>Historical 
                  era</a> also makes a difference, as older people of color lived through institutionalized 
                  and legally-enforced segregation and discrimination (particularly for Black and 
                    Indigenous people) , as well as <a href="/identity#politics" style={{ fontSize: '20px', textDecoration: 'none' }}>exclusion acts controlling immigration</a> and, more 
                  recently, hate crimes, particularly against Asians). You may identify with more 
                  than one race, or as biracial or multiracial. <a href="/identity#ethnicity" style={{ fontSize: '20px', textDecoration: 'none' }}>Ethnicity and tribe</a> are a different area of 
                  identity, even though they may have a relationship to race. 
                </p> 
            </Typography>

            <Typography id="ethnicity" variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Ethnicity/Tribe</p>
                <p>
                    Ethnicity or tribe is distinct from <a href="/identity#race" style={{ fontSize: '20px', textDecoration: 'none' }}>race.</a> For instance, someone who is racially 
                    White might be ethnically Irish, German, Greek, Italian, or Jewish, while someone 
                    who is racially Black might be ethnically African American, Haitian, Jamaican, 
                    Ugandan, or Kenyan, etc. People from all racial groups may identify ethnically as 
                    Latino/a/Latinx/Hispanic or as Jewish. (<a href="/identity#religion" style={{ fontSize: '20px', textDecoration: 'none' }}>Judaisim is a religion</a> but Jewishness has 
                      been considered an ethnicity, regardless of religious observance, <a href="/identity#impactHistTimes" style={{ fontSize: '20px', textDecoration: 'none' }}>since the 
                      Spanish Inquisition.)</a> People who are African or MENA (Middle Eastern/North African) 
                      may identify racially as Black or Asian, or in some cases, White, but identify 
                      ethnically as Arab, Jewish, or Druze, etc.). Tribe may be most relevant for people 
                      of African, Middle Eastern, South, Central, or East Asian descent or for people 
                      indigenous to the Americas (First Nation Peoples, Native Americans, or 
                        American Indians) as well as to the Pacific Islands, Australia and New Zealand, 
                      and more significant than ethnicity for many of those groups. 
                </p> 
                <p>
                  How privileged or marginalized you experience your ethnicity/tribe to be may depend 
                  in part on what <a href="/identity#geoRegion" 
                style={{ fontSize: '20px', textDecoration: 'none' }}>region of the world and what region</a> of your country you live In. 
                  It may also depend on as well whether your ethnic/tribal group is <a href="/identity#politics" style={{ fontSize: '20px', textDecoration: 'none' }}>persecuted</a>, facing 
                  <a href="/identity#politics" style={{ fontSize: '20px', textDecoration: 'none' }}>legal quotas on immigration</a> into a country (as was the case for Chinese people, Jews, 
                    Southern Europeans and Arabs and for <a href="/identity#religion" style={{ fontSize: '20px', textDecoration: 'none' }}>Jews</a> at different times) or otherwise marginalized in the 
                  <a href="/identity#geoRegion" 
                style={{ fontSize: '20px', textDecoration: 'none' }}> country of residence</a>. <a href="/identity#education" style={{ fontSize: '20px', textDecoration: 'none' }}>Educational level</a> and <a href="/identity#occupation" style={{ fontSize: '20px', textDecoration: 'none' }}>occupation</a> also can play a role in how 
                  marginalized one is ethnically, in that higher education and more prestigious 
                  occupations offer some modest protection against discrimination. <a href="/identity#race" style={{ fontSize: '20px', textDecoration: 'none' }}>Race</a> and appearance 
                  also play a role here; for instance, lighter-skinned people who identify as 
                  indigenous/Native American/First Nations people or as Arab may be less marginalized 
                  in the <a href="/identity#geoRegion" 
                style={{ fontSize: '20px', textDecoration: 'none' }}>US or in some postcolonial parts of Africa</a> than those who are darker-skinned.  
                  Historically, and even into the present, some countries have deemed particular ethnic 
                  groups or tribes and not others as “foreign,” and targeted them for <a href="/identity#impactHistTimes" style={{ fontSize: '20px', textDecoration: 'none' }}>discrimination, 
                  persecution, and even ethnic cleansing or genocide.</a>
                </p>
            </Typography>

            <Typography id="nationOfOrigin" variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Nation of Origin/Citizenship  </p>
                <p>
                    This area of identity includes the <a href="/identity#geoRegion" 
                style={{ fontSize: '20px', textDecoration: 'none' }}>country (or countries)</a> where you have 
                    citizenship, as well as your family’s nation(s) of origin. It also includes 
                    how long you or your family members/ancestors have been in your country of 
                    residence, and with what citizenship status. In most cases, people whose 
                    families have been in their current country of residence for many generations 
                    may experience more privilege than immigrants or refugees to a new country 
                    and their children. There are exceptions, however. For example, in the US, 
                    <a href="/identity#race" style={{ fontSize: '20px', textDecoration: 'none' }}>Native Americans/indigenous people, people descended from forcibly enslaved 
                    Africans, and Latino/a/Latinx people near the Mexican border and in Puerto 
                    Rico,</a> who have citizenship, often have less citizenship privilege (legal 
                      protection, etc.) than more recent white immigrants and their children. 
                    This is especially true for <a href="/identity#race" style={{ fontSize: '20px', textDecoration: 'none' }}>indigenous people (First Nation peoples or 
                      Native Americans)</a> <a href="/identity#geoRegion" 
                style={{ fontSize: '20px', textDecoration: 'none' }}>living on reservations</a> that 
                    <a href="/identity#access" style={{ fontSize: '20px', textDecoration: 'none' }}>lack adequate healthcare, 
                    education, and basic utilities (water, electricity, and internet access).</a>
                    Some refugees may feel more privileged than those they left behind because 
                    they are out of a danger zone, even if they experience marginalization in 
                    the receiving country. The members of some <a href="/identity#ethnicity" style={{ fontSize: '20px', textDecoration: 'none' }}>ethnic groups</a> born in their 
                    country of residence do not have citizenship by virtue of their <a href="/identity#ethnicity" style={{ fontSize: '20px', textDecoration: 'none' }}>ethnicity or tribe</a> and are essentially stateless; this includes the Rohinge of 
                    Myanmar (Burma), Palestinians living in the West Bank and Gaza and in 
                    refugee camps elsewhere and, <a href="/identity#impactHistTimes" style={{ fontSize: '20px', textDecoration: 'none' }}>until into the 20th century</a>, <a href="/identity#religion" style={{ fontSize: '20px', textDecoration: 'none' }}>Jews</a> in the 
                    former Soviet Union and many European states, and <a href="/identity#ethnicity" style={{ fontSize: '20px', textDecoration: 'none' }}>Romany people</a> throughout Europe. 
                </p> 
            </Typography>

            <Typography id="language" variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Language(s)</p>
                <p>
                  This area of identity refers to your primary language and any 
                  additional languages you speak. While speaking more than one language 
                  can be an advantage (a source of privilege) in many ways, if you are 
                  not fully fluent in the language of the <a href="/identity#geoRegion" 
                style={{ fontSize: '20px', textDecoration: 'none' }}>country or region</a> where you 
                  live, or if you speak that language with an accent that identifies you 
                  as from another <a href="/identity#geoRegion" 
                style={{ fontSize: '20px', textDecoration: 'none' }}>country, or even a different region of the country,</a> you 
                  may be at a disadvantage (marginalized) as well. You may be at even 
                  greater disadvantage speaking with an accent if you are a <a href="/identity#race" style={{ fontSize: '20px', textDecoration: 'none' }}>Person of 
                  Color,</a> as racism intersects with language discrimination, unless that 
                  accent marks you as from a <a href="/identity#geoRegion" 
                style={{ fontSize: '20px', textDecoration: 'none' }}>wealthy or colonizing nation</a>. Immigrants who 
                  do not speak the dominant language of their country of residence, or who 
                  speak that language with a heavy accent may be actively discriminated 
                  against in <a href="/identity#occupation" style={{ fontSize: '20px', textDecoration: 'none' }}>job applications or applications,</a> <a href="/identity#access" style={{ fontSize: '20px', textDecoration: 'none' }}>looking for housing</a>, in 
                  interactions with <a href="/identity#occupation" style={{ fontSize: '20px', textDecoration: 'none' }}>colleagues or clients,</a> etc. They may also receive 
<a href="/identity#access" style={{ fontSize: '20px', textDecoration: 'none' }}>inadequate or even incorrect medical treatment</a>
                   because of language 
                  barriers. Even an accent identifying you as from a <a href="/identity#geoRegion" 
                style={{ fontSize: '20px', textDecoration: 'none' }}>different region of the same country</a> can be marginalizing, especially when there is 
                  <a href="/identity#politics" style={{ fontSize: '20px', textDecoration: 'none' }}>political or civil conflict</a> between <a href="/identity#geoRegion" 
                style={{ fontSize: '20px', textDecoration: 'none' }}>regions</a> or <a href="/identity#ethnicity" style={{ fontSize: '20px', textDecoration: 'none' }}>ethnic tension</a>.   
                  Finally, the language you use can identify you with the <a href="/identity#politics" style={{ fontSize: '20px', textDecoration: 'none' }}>colonizer or the colonized</a> in <a href="/identity#geoRegion" 
                style={{ fontSize: '20px', textDecoration: 'none' }}>colonial and postcolonial countries</a>, with <a href="/identity#ethnicity" style={{ fontSize: '20px', textDecoration: 'none' }}>different ethnic or tribal groups</a> of that country, or with how much and what 
                  quality <a href="/identity#education" style={{ fontSize: '20px', textDecoration: 'none' }}>education</a> you have received. 
                </p> 
            </Typography>

            <Typography id="familyReligion" variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Family Religion</p>
                <p>
                  This area of identity refers to the religion of your <a href="/identity#raisedBy" style={{ fontSize: '20px', textDecoration: 'none' }}>parents/guardians </a> 
                  and recent ancestors (which may differ from your <a href="/identity#chosenReligion" style={{ fontSize: '20px', textDecoration: 'none' }}>current religious affiliation</a>, if any). Many religions have sects, subgroups with 
                  their own unique beliefs and practices within a larger religion. 
                  For instance, Christianity, most broadly divided among Catholic, 
                  Protestant, and Eastern Orthodox faiths, is further divided into 
                  smaller sects.  Similarly, Islam includes Sunni, Shia, and Sufi 
                  sects, etc., and Judaism includes various Orthodox and Ultra-orthodox 
                  (Haredi) sects, along with Conservative, Reform, Reconstructionist, 
                  and Humanist sects. Most <a href="/identity#geoRegion" 
                style={{ fontSize: '20px', textDecoration: 'none' }}>countries</a> have a dominant religion, however 
                  unofficially, and some have an official religion. Affiliation with 
                  the dominant or official religion is therefore a source of privilege, 
                  while affiliation with a different religion can be  source of 
                    marginalization, or even <a href="/identity#politics" style={{ fontSize: '20px', textDecoration: 'none' }}>persecution</a>. Some countries officially 
                  prohibit the practice of any religion at all, while others prohibit 
                  particular religions. In addition, some regions of a particular 
                  country are predominantly one religion, while other regions are 
                  predominantly a different one. Depending on <a href="/identity#geoRegion" 
                style={{ fontSize: '20px', textDecoration: 'none' }}>location</a>, your religious 
                  affiliation can therefore be either a source of privilege or 
                  marginalization. Finally, not practicing or identifying with a 
                  religion can also be marginalizing in some <a href="/identity#geoRegion" 
                style={{ fontSize: '20px', textDecoration: 'none' }}>countries or regions</a> that 
                  privilege those who follow the dominant faith.
                </p> 
            </Typography>

            <Typography id="chosenReligion" variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Chosen Religion</p>
                <p>
                  This area of identity refers to your own religious affiliation and practice, if any, 
                  which may (or ay not) differ from those of your <a href="/identity#religion" style={{ fontSize: '20px', textDecoration: 'none' }}>family of origin</a>. Unlike <a href="/identity#geoRegion" 
                style={{ fontSize: '20px', textDecoration: 'none' }}>most of the world, in the US</a>, about 40% of American adults identify with a different religion than 
                  the one in which they were raised. In <a href="/identity#geoRegion" 
                style={{ fontSize: '20px', textDecoration: 'none' }}>some countries</a>, converting to a new religion may 
                  be discouraged or in <a href="/identity#politics" style={{ fontSize: '20px', textDecoration: 'none' }}>theocracies</a> (national government run by a state religion), 
                  even forbidden, sometimes under penalty of death. This is particularly the case for 
                  converts to a marginalized or <a href="/identity#politics" style={{ fontSize: '20px', textDecoration: 'none' }}>prohibited religiion</a> or whose <a href="/identity#race" style={{ fontSize: '20px', textDecoration: 'none' }}>racial</a> appearance differs 
                  from that of most members of their new religion in their <a href="/identity#geoRegion" 
                style={{ fontSize: '20px', textDecoration: 'none' }}>geographical region</a>. 
                  Converts may also be rejected by <a href="/identity#raisedBy" style={{ fontSize: '20px', textDecoration: 'none' }}>family of origin</a> and in some cases, not be welcomed 
                  as full members of their new religion. Choosing not to affiliate with any religion 
                  can be also marginalizing within the family and in larger society. (For more on 
                  religious affiliation, whether through birth or conversion, see <a href="/identity#religion" style={{ fontSize: '20px', textDecoration: 'none' }}>Family Religion</a>.) 
                </p> 
            </Typography>

            <Typography id="politics" variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Politics</p>
                <p>
                  Political beliefs, political engagement, and party membership can be sources of privilege or marginalization, 
                  depending on <a href="/identity#geoRegion" 
                style={{ fontSize: '20px', textDecoration: 'none' }}>country and region of country</a>. For instance, in the US, being registered 
                  as a Democrat, or as the member of a left-wing party like the Socialists, 
                  would be highly marginalizing in parts of the Southern or Midwestern U.S., 
                  but more privileged (or at least not marginalized) in parts of the Northeast 
                  and West Coast. In addition, political affiliation and beliefs can be a 
                  source of polarization and even antagonism between people of different beliefs. 
                  In Communist-led countries, membership in the Communist party provides benefits 
                  and <a href="/identity#access" style={{ fontSize: '20px', textDecoration: 'none' }}>access to power</a>, but membership in the Communist Party in the U.S. was 
                  proscribed starting in <a href="/identity#impactHistTimes" style={{ fontSize: '20px', textDecoration: 'none' }}>1917 and explicitly illegal from 1954 until the late 
                  1960s.</a> Being a dissident or the member of a party that opposes the ruling 
                  party is illegal and risks imprisonment, torture, or death in some 
                  dictatorships and authoritarian regimes <a href="/identity#geoRegion" 
                style={{ fontSize: '20px', textDecoration: 'none' }}>around the world</a> and in some cases 
                  is therefore a reason for seeking asylum in other countries.  Even being <a href="/identity#raisedBy" style={{ fontSize: '20px', textDecoration: 'none' }}>the child of a parent</a> who participated in a banned political party can mean <a href="/identity#occupation" style={{ fontSize: '20px', textDecoration: 'none' }}>not 
                  getting jobs,</a> <a href="/identity#access" style={{ fontSize: '20px', textDecoration: 'none' }}>housing, or benefits.</a> In addition, the prevailing politics of a 
                  country affects what human rights and what <a href="/identity#health" style={{ fontSize: '20px', textDecoration: 'none' }}>health</a> and <a href="/identity#education" style={{ fontSize: '20px', textDecoration: 'none' }}>educational resources</a> 
                  are <a href="/identity#access" style={{ fontSize: '20px', textDecoration: 'none' }}>accessible</a> to all residents.
                </p> 
            </Typography>

            <Typography id="geoRegion" variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Geographical Region</p>
                <p>
                  The region of the world you live in can affect your privilege or marginalization, 
                  in that some countries are affluent and others are poor. Some regions and 
                  countries are harshly affected by <a href="/identity#ethnicity" style={{ fontSize: '20px', textDecoration: 'none' }}>ethnic</a> <a href="/identity#impactHistTimes" style={{ fontSize: '20px', textDecoration: 'none' }}>conflict, war, and/or a variety of 
                  environmental disasters and resultant displacement</a>,  while others are relatively 
                  protected from those serious problems. The region you live in affects your <a href="/identity#access" style={{ fontSize: '20px', textDecoration: 'none' }}>access to resources</a>, in that some regions have greater access than others to adequate 
                  <a href="/identity#health" style={{ fontSize: '20px', textDecoration: 'none' }}>healthcare</a> and <a href="/identity#education" style={{ fontSize: '20px', textDecoration: 'none' }}>education</a> (and the people in those regions are more likely to take 
                    advantage of those resources), as well as safe housing. Even within a country, 
                  some regions are poorer and/or more prone to natural disaster and less protected 
                  from <a href="/identity#health" style={{ fontSize: '20px', textDecoration: 'none' }}>human-made environmental health hazards</a> than others, and the people in those 
                  regions may be less likely to <a href="/identity#access" style={{ fontSize: '20px', textDecoration: 'none' }}>access</a> and utilize healthcare and educational 
                  resources. For instance, in the U.S., some inner-city and rural communities and 
                  regions areas are <a href="/identity#access" style={{ fontSize: '20px', textDecoration: 'none' }}>effectively food deserts and medical access deserts</a>
                   while others 
                  are more at risk environmentally. <a href="/identity#race" style={{ fontSize: '20px', textDecoration: 'none' }}>Institutional racism</a> in <a href="/identity#access" style={{ fontSize: '20px', textDecoration: 'none' }}>housing policy and banking</a> means that some areas have more substandard housing than others. <a href="/identity#impactHistTimes" style={{ fontSize: '20px', textDecoration: 'none' }}>From 
                  World War II until after the Vietnam War,</a> the 
                  
                  <a href="/identity#access" style={{ fontSize: '20px', textDecoration: 'none' }}>government subsidized mortgages 
                  and education</a>
                   for <a href="/identity#race" style={{ fontSize: '20px', textDecoration: 'none' }}>white</a> <a href="/identity#relationToMilitary" style={{ fontSize: '20px', textDecoration: 'none' }}>veterans</a>, but not for <a href="/identity#race" style={{ fontSize: '20px', textDecoration: 'none' }}>Black</a> <a href="/identity#relationToMilitary" style={{ fontSize: '20px', textDecoration: 'none' }}>veterans</a>; redlining (keeping 
                    Black people out of white neighborhoods was another institutionalized policy. 
                    <a href="/identity#access" style={{ fontSize: '20px', textDecoration: 'none' }}> Having less access</a> to adequate housing, in turn, led to <a href="/identity#race" style={{ fontSize: '20px', textDecoration: 'none' }}>Black and Brown</a> people 
                    have greater <a href="/identity#health" style={{ fontSize: '20px', textDecoration: 'none' }}>health risks</a>. In addition, some countries in the developed world 
                    (but not the U.S.) guarantee paid parental leave, subsidies for children, and 
                    subsidized child and elder care, as well as universal health care and free or 
                    subsidized <a href="/identity#education" style={{ fontSize: '20px', textDecoration: 'none' }}>higher education</a>, which means increased wealth for even poor people 
                    because they are not spending their own money for those essential needs.
                </p> 
            </Typography>

            <Typography id="impactHistTimes" variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Impact of Historical Era</p>
                <p>
                  Historical events such as <a href="/identity#politics" style={{ fontSize: '20px', textDecoration: 'none' }}>wars, persecution</a>, famines, <a href="/identity#health" style={{ fontSize: '20px', textDecoration: 'none' }}>epidemics and pandemics</a>, 
                  and other kinds of social upheaval, as well as phenomena like social movements 
                  toward more or fewer human rights, can greatly affect the people who live through 
                  them, and can even affect their children and grandchildren. Growing up during such 
                  major events as a civil or international war or during a period of 
                  <a href="/identity#ethnicity" style={{ fontSize: '20px', textDecoration: 'none' }}>persecution or 
                  genocide on the basis of ethnicity/tribe</a>
                  , <a href="/identity#religion" style={{ fontSize: '20px', textDecoration: 'none' }}>religion</a>, or <a href="/identity#politics" style={{ fontSize: '20px', textDecoration: 'none' }}>politics</a>, or during a time 
                  of major technological change or living through these events as an adult can shape 
                  how you view your world and live in it. It can even affect how your <a href="/identity#raisedBy" style={{ fontSize: '20px', textDecoration: 'none' }}>children and grandchildren</a> view and live in their world. Similarly, surviving a severe natural 
                  or human-made disaster that affected many people in your <a href="/identity#geoRegion" 
                style={{ fontSize: '20px', textDecoration: 'none' }}>community or region</a> can 
                  affect the rest of your life, and even your children’s and grandchildren’s lives. 
                  In different ways, living through historical periods of <a href="/identity#politics" style={{ fontSize: '20px', textDecoration: 'none' }}>repression</a> like 
                  <a href="/identity#politics" style={{ fontSize: '20px', textDecoration: 'none' }}>Jim Crow 
                  in the US, Apartheid in South Africa, or the aftermath of military coups</a>
                   in <a href="/identity#geoRegion" 
                style={{ fontSize: '20px', textDecoration: 'none' }}>Chile, 
                  Libya, Myanmar, and other countries</a> can affect the rest of your life. In contrast, 
                  living through a period of affluence, peace, <a href="/identity#access" style={{ fontSize: '20px', textDecoration: 'none' }}>universal education, and human rights </a> 
                  also affects your lifetime. Finally, living through social and <a href="/identity#politics" style={{ fontSize: '20px', textDecoration: 'none' }}>political</a> movements 
                  can dramatically change the quality of many people’s lives and the privilege or 
                  marginalization they experience, and how they are perceived by others. Examples 
                  of such movements include the <a href="/identity#race" style={{ fontSize: '20px', textDecoration: 'none' }}>US Civil Rights Movement</a>;the Women’s Rights Movement; 
                  and Rights for gays and lesbians,  trans people, and gender non-conforming people; 
                  and <a href="/identity#race" style={{ fontSize: '20px', textDecoration: 'none' }}>Black Lives Matter</a> in many countries; and for documented and undocumented 
                  immigrants and <a href="/identity#race" style={{ fontSize: '20px', textDecoration: 'none' }}>Stop Asian Hate</a> in the U.S., as well as nation-specific movements 
                  like the <a href="/identity#race" style={{ fontSize: '20px', textDecoration: 'none' }}>anti-Apartheid movement in South Africa.</a> Other examples of major changes 
                  that differentially affect people’s <a href="/identity#access" style={{ fontSize: '20px', textDecoration: 'none' }}>access</a> to information, education, healthcare, 
                  and even to geographically distant loved ones involve technological changes in 
                  computing. Because many <a href="/identity#age" style={{ fontSize: '20px', textDecoration: 'none' }}>older people</a> do not have <a href="/identity#access" style={{ fontSize: '20px', textDecoration: 'none' }}>the skills and comfort level neeeded to use </a> personal computers, tablets, and smartphones that most younger 
                  people do, they may be less able to take advantage of those technological advances.
                </p> 
            </Typography>

            <Typography id="relationToMilitary" variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Relation to Military</p>
                <p>
                  Being in the military, or having a loved one in the military, can be experienced 
                  as privileging or marginalizing, based on many different issues. The same can 
                  apply to belonging to a <a href="/identity#politics" style={{ fontSize: '20px', textDecoration: 'none' }}>paramilitary or guerrilla group</a>. One issue involves 
                  how most people in the country perceived that war. Are returning veterans 
                  hailed as <a href="/identity#impactHistTimes" style={{ fontSize: '20px', textDecoration: 'none' }}>heroes, as happened for World War II, or as war criminals, as 
                  happened for many US soldiers returning from Vietnam, or did military 
                  service take place in peacetime?</a> Did the service member come home from war 
                  with severe <a href="/identity#health" style={{ fontSize: '20px', textDecoration: 'none' }}>physical injuries</a> or moral injuries, psychological trauma or 
                  cognitive problems caused by brain injury? These difficulties can also 
                  affect family relations, including <a href="/identity#raisedBy" style={{ fontSize: '20px', textDecoration: 'none' }}>parenting</a>, as well as social relationships 
                  and may limit <a href="/identity#occupation" style={{ fontSize: '20px', textDecoration: 'none' }}>occupational opportunities. What rank did the service member 
                  hold and how respected did they feel in that position?</a>
                </p> 
                <p>
                  In some <a href="/identity#geoRegion" 
                style={{ fontSize: '20px', textDecoration: 'none' }}>countries</a>, military service is mandatory for men (and for women, 
                  in a few). In that case, is it marginalizing or a privilege not to have 
                  served?  In countries with <a href="/identity#politics" style={{ fontSize: '20px', textDecoration: 'none' }}>paramilitary or guerilla fighters</a>, people 
                  are often forced into service, even as <a href="/identity#age" style={{ fontSize: '20px', textDecoration: 'none' }}>children</a>, which can be highly 
                  traumatizing and marginalizing or a source of social status, 
                  depending on the politics of the home community. Many girls 
                  (and some boys) forced into such groups are also forced to serve as 
                  sex slaves and are ostracized if they are able to get back home, 
                  especially if they had children by their rapists. In countries 
                  like <a href="/identity#geoRegion" 
                style={{ fontSize: '20px', textDecoration: 'none' }}>the U.S.</a>, which has not had a military draft <a href="/identity#impactHistTimes" style={{ fontSize: '20px', textDecoration: 'none' }}>since the 
                  Vietnam War,</a> do you feel privileged by your (or your loved one’s) 
                  military service or marginalized by it? Do you feel privileged or 
                  marginalized as a civilian without a military record? 
                </p>
                <p>
                  The military in many countries have historically (and often still) 
                  engaged prejudicially on the basis of gender, <a href="/identity#race" style={{ fontSize: '20px', textDecoration: 'none' }}>race,</a> sexual 
                  orientation, gender identity, and, in some countries, <a href="/identity#ethnicity" style={{ fontSize: '20px', textDecoration: 'none' }}>ethnicity</a>. 
                  For instance, in the U.S., men were required to register for the 
                  draft (although there has not been a draft since 1973) and women 
                  were not. Women are still discriminated against within the military, 
                  and are far more likely to risk sexually assault and sexual harassment 
                  and being passed over for promotions than men. The U.S. military was <a href="/identity#race" style={{ fontSize: '20px', textDecoration: 'none' }}>
                  <a href="/identity#race" style={{ fontSize: '20px', textDecoration: 'none' }}>racially segregated</a> until after World War II and Black, Brown, and 
                  Native people</a> were routinely sent to be “cannon fodder” or to menial 
                  labor in the military until quite recently. From <a href="/identity#impactHistTimes" style={{ fontSize: '20px', textDecoration: 'none' }}>World War II until 
                  after the Vietnam War,</a> the <a href="/identity#access" style={{ fontSize: '20px', textDecoration: 'none' }}>government subsidized mortgages and education</a> for <a href="/identity#race" style={{ fontSize: '20px', textDecoration: 'none' }}>white</a> veterans, through the GI Bill, creating 
                  generations of upward mobility for <a href="/identity#race" style={{ fontSize: '20px', textDecoration: 'none' }}>white</a> veterans, but not for 
                  <a href="/identity#race" style={{ fontSize: '20px', textDecoration: 'none' }}> Black</a> veterans. It also denied openly LGBTQ people the right to 
                  serve in the military until quite recently as well, and until 
                  2021, even transgender service members were <a href="/identity#access" style={{ fontSize: '20px', textDecoration: 'none' }}>denied the right</a> 
                  <a href="/identity#health" style={{ fontSize: '20px', textDecoration: 'none' }}>to 
                  needed hormonal treatments and gender confirming surgeries. </a>

                </p>
            </Typography>

            <Typography id="relationToLegalSystem" variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Relation to Legal System</p>
                <p>
                  A person can get involved in the legal system because of arrest, 
                  conviction, and/or imprisonment in a criminal matter, because one 
                  is a victim in a criminal case, or through involvement in family court 
                  that can award or remove from parents the custody <a href="/identity#raisedBy" style={{ fontSize: '20px', textDecoration: 'none' }}>of children</a> and 
                  visitation , as well as deciding on adoption, divorce or alimony decrees. 
                  In addition, one can be involved in civil lawsuits as defendant or 
                  plaintiff. Finally, attorneys, judges, jurors, bailiffs, probation 
                  officers, parole officials, and police officers are also involved 
                  in the legal system, <a href="/identity#occupation" style={{ fontSize: '20px', textDecoration: 'none' }}>as a part of their work,</a> usually in a more 
                  privileged position. Being arrested, tried, and convicted (or 
                    even found not guilty), being a victim in a criminal case, and 
                  some family court cases can be highly marginalizing and often 
                  traumatizing. Even without imprisonment, an arrest record can mean 
                  being <a href="/identity#access" style={{ fontSize: '20px', textDecoration: 'none' }}>turned down</a> for many <a href="/identity#occupation" style={{ fontSize: '20px', textDecoration: 'none' }}>jobs</a> and <a href="/identity#education" style={{ fontSize: '20px', textDecoration: 'none' }}>educational</a> <a href="/identity#access" style={{ fontSize: '20px', textDecoration: 'none' }}>possibilities</a>. 
                  Time in prison makes later employment, housing, education, and 
                  receiving such benefits as food stamps impossible in many cases.  
                  In addition, imprisonment itself is often highly traumatizing, 
                  especially when solitary confinement or physical threat from either 
                  from other incarcerated people or from correctional officers, 
                  leading to life-long psychological difficulties. Being a victim 
                  or plaintiff in a criminal case can be traumatizing as well. 
                </p> 
                <p>
                  Poorer, <a href="/identity#education" style={{ fontSize: '20px', textDecoration: 'none' }}>less well-educated</a>, and more <a href="/identity#occupation" style={{ fontSize: '20px', textDecoration: 'none' }}>unreliably employed</a> people and 
                  <a href="/identity#race" style={{ fontSize: '20px', textDecoration: 'none' }}> People of Color,</a> as well as people with histories of substance abuse
                  or certain mental illnesses are more likely to be arrested, and 
                  if arrested, to be convicted and imprisoned. At the same time, 
                    people in those groups are less likely to be believed as victims 
                  of violent crimes. Parents, partners, <a href="/identity#raisedBy" style={{ fontSize: '20px', textDecoration: 'none' }}>children</a> and other loved ones 
                  also often are often stigmatized 
                  when loved ones are arrested, tried, and/or imprisoned, and when 
                  courts decide <a href="/identity#raisedBy" style={{ fontSize: '20px', textDecoration: 'none' }}>custody arrangements</a>. Family members can be <a href="/identity#access" style={{ fontSize: '20px', textDecoration: 'none' }}>evicted from public housing</a> for letting a formerly incarcerated relative 
                  stay with them; they may also exclude relatives who have been 
                  incarcerated from family events. Entire communities that are 
                  poor and of <a href="/identity#race" style={{ fontSize: '20px', textDecoration: 'none' }}>color can be marginalized by aggressive, sometimes 
                  violent, policing, which means disproportionate arrests, 
                  incarcerations and even deaths at the hands of the police.</a> People 
                  with mental illness and substance abuse problems are also 
                  disproportionately arrested, tried, and incarcerated.  Finally, 
                  some jurors, <a href="/identity#occupation" style={{ fontSize: '20px', textDecoration: 'none' }}>attorneys, judges, courtroom staff, expert witnesses, 
                  and police officers,</a> while privileged in their roles in the legal 
                  system, may feel traumatized by participating in particularly painful 
                  court cases.

                </p>
            </Typography>

            <Typography id="mentalHealth" variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Mental Health/Substance Use</p>
                <p>
                    Having difficulties with or mental illness or a relationship with the mental 
                    health system can also be stigmatizing and therefore a source of 
                    marginalization, especially if that mental illness is apparent to others. 
                    So can having a substance use disorder like alcoholism or drug addiction, 
                    or relying on substances for managing your moods. Having a history of 
                    psychiatric hospitalization, and especially multiple or long or involuntary 
                    hospitalizations, being seen as having chronic mental health problems by 
                    the mental health system, or having undergone residential or inpatient 
                    rehabilitation for substances are all highly marginalizing as well. 
                    Having been labeled with mental illness and/or substance abuse can mean 
                    <a href="/identity#access" style={{ fontSize: '20px', textDecoration: 'none' }}>losing control over one's choices</a> (including through involuntary 
                      hospitalization), but also because of losing credibility with others. 
                    People with serious mental illnesses are more likely to be arrested and 
                    incarcerated, including time in Isolation while incarcerated, as well as 
                    to experience aggressive or violent policing, because they are seen as 
                    threatening. This is particularly true for men <a href="/identity#race" style={{ fontSize: '20px', textDecoration: 'none' }}>of color,</a> who are more 
                    likely than others to be shot or arrested by police called in to help 
                    with a psychiatric crisis. 
                </p> 
            </Typography>

            <Typography id="cognitiveAbility" variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Cognitive Ability/Style</p>
                <p>
                  Most often, higher intelligence and particular cognitive talents 
                  (such as artistic or mechanical ability) offer privilege, while lower 
                  intelligence and cognitive ability is marginalizing. However, high 
                  intelligence doesn’t necessarily go along with particular cognitive abilities. 
                  In addition, the usual profile for learning disabilities (as opposed to 
                  developmental delays/cognitive limitations) is that the person has a wide 
                  range of abilities. For instance, someone with learning disabilities may have 
                  trouble reading or calculating, but have great strengths in the area of visual 
                  or mechanical thinking. Such a person might be marginalized on the basis of 
                  overall intellectual functioning as measured on school tests but have important 
                  talents that may privilege them  in some ways. Some people with major cognitive 
                  limitations, including those with developmental delays and severe brain injury, 
                  are <a href="/identity#raisedBy" style={{ fontSize: '20px', textDecoration: 'none' }}>institutionalized even as children</a>, sometimes for life, and can be regularly 
                  abused in those settings. Different societies tend to prioritize different kinds 
                  of cognitive ability than others, so which cognitive skills are <a href="/identity#occupation" style={{ fontSize: '20px', textDecoration: 'none' }}>occupationally</a> 
                  and <a href="/identity#education" style={{ fontSize: '20px', textDecoration: 'none' }}>educationally</a> privileged depends partly on the social context of one’s 
                  <a href="/identity#geoRegion" style={{ fontSize: '20px', textDecoration: 'none' }}>geographical region</a>. In addition, <a href="/identity#race" style={{ fontSize: '20px', textDecoration: 'none' }}>children of color</a> are more likely to be 
                  incorrectly diagnosed with learning disabilities than white children, or 
                  have their learning disabilities misunderstood as lack of intelligence 
                  because of implicit bias. In addition, children with learning disabilities 
                  are often disciplined and seen as having behavioral problems rather than 
                  helped in school settings, with disproportionate school suspensions and 
                  expulsions, especially when they are <a href="/identity#race" style={{ fontSize: '20px', textDecoration: 'none' }}>of color.</a> These disciplinary responses 
                  increase the likelihood of arrest and incarceration.
                </p> 
            </Typography>

            <Typography id="health" variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Health/Ability</p>
                <p>
                  Health problems and various kinds of physical disabilities are stigmatized and therefore 
                  marginalized in many societies. Many healthy, able-bodied people feel anxious around 
                  persons with significant and visible illness or disability, and may treat them as if 
                  they were invisible or completely incompetent. Some healthy, able-bodied people even 
                  blame people with illness or disabilities for their problems. Lack of inclusive 
                  community and regional planning, as well as lack of health care for all, can make it 
                  difficult to participate fully or at all in community activities like <a href="/identity#occupation" style={{ fontSize: '20px', textDecoration: 'none' }}>work,</a> socializing, 
                  civic, political, and religious engagement, or even to use public transportation in the 
                  <a href="/identity#access" style={{ fontSize: '20px', textDecoration: 'none' }}>absence of accomodations</a> for blindness, deafness, wheelchair use, and other disabilities. 
                  The Americans with Disabilities Act requires that all U.S. buildings, transportation, and 
                  streets be accessible to people with disabilities of all kinds, but lack of accessible 
                  housing, buildings, transportation, and sidewalks persists. Many countries do not even 
                  provide those protections.
                </p> 
                <p>
                  The problems created by illness and disability are worsened in impoverished <a href="/identity#geoRegion" style={{ fontSize: '20px', textDecoration: 'none' }}>communities, regions, and countries</a> with 
                  
                  <a href="/identity#access" style={{ fontSize: '20px', textDecoration: 'none' }}>limited access to healthcare, education, healthy food, 
                  transportation and sustainable work;</a>
                   the same <a href="/identity#geoRegion" style={{ fontSize: '20px', textDecoration: 'none' }}>communities are also most often the ones 
                  that are saddled with toxic waste and pollution</a>. Highly marginalized diseases include 
                  HIV/AIDS (because of its association with gay men and IV-drug users), hepatitis (again, 
                    because of the association with drug users), and lung diseases (which are often blamed 
                    on smoking rather than <a href="/identity#geoRegion" style={{ fontSize: '20px', textDecoration: 'none' }}>environmental issues</a>). In addition, clinician bias, 
                    institutional racism, and language barriers make the problems of <a href="/identity#access" style={{ fontSize: '20px', textDecoration: 'none' }}>access</a> and inclusion 
                    all the greater for people of color and immigrants.  At the same time, lack of 
                    information and clinician bias, including homophobia, transphobia, and racism, <a href="/identity#access" style={{ fontSize: '20px', textDecoration: 'none' }}>limit or block access</a> to needed health care (including hormone replacement therapy, 
                      gender-appropriate treatment planning, and gender confirmation surgeries, as well 
                      as needed sexual health care) to transgender and nonbinary individuals, especially 
                    those <a href="/identity#race" style={{ fontSize: '20px', textDecoration: 'none' }}>of color.</a>
                </p>
            </Typography>

            <Typography id="appearance" variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Appearance</p>
                <p>
                    Appearance can be a source of privilege if one is considered attractive or if 
                    one’s phenotype or dress is consistent with the <a href="/identity#race" style={{ fontSize: '20px', textDecoration: 'none' }}>dominant racial,</a> <a href="/identity#ethnicity" style={{ fontSize: '20px', textDecoration: 'none' }}>ethnic/tribal</a>,  
                    <a href="/identity#chosenReligion" style={{ fontSize: '20px', textDecoration: 'none' }}>religious</a>, or economic group. It can be marginalizing if not, especially in the 
                    case of disfigurement or <a href="/identity#health" style={{ fontSize: '20px', textDecoration: 'none' }}>visible disability</a>. In many societies, being tall is 
                    privileging, as is looking <a href="/identity#health" style={{ fontSize: '20px', textDecoration: 'none' }}>lean and physically fit</a>, and, in most western societies, 
                    <a href="/identity#age" style={{ fontSize: '20px', textDecoration: 'none' }}>youthful</a>. In <a href="/identity#geoRegion" style={{ fontSize: '20px', textDecoration: 'none' }}>most western societies</a>, being either obese or overly thin is marginalizing, 
                    although an overweight or even obese appearance is privileged as a mark of <a href="/identity#householdIncome" style={{ fontSize: '20px', textDecoration: 'none' }}>wealth</a> 
                    in 
                    <a href="/identity#ethnicity" style={{ fontSize: '20px', textDecoration: 'none' }}>some cultures</a>
                    . Some <a href="/identity#geoRegion" style={{ fontSize: '20px', textDecoration: 'none' }}>societies</a>, and more affluent (or sometimes even economically 
                      struggling) people in most societies emphasize appearance to the point that many 
                    people actively transform their appearance through expensive and time-consuming 
                    non-invasive cosmetic procedures, 
                    <a href="/identity#health" style={{ fontSize: '20px', textDecoration: 'none' }}>cosmetic surgeries, some of which are dangerous 
                    and distorting of the body, Botox,</a>
                     and the like.  Appearance consistent with being 
                    cisgender and gender conforming is privileging in most contexts, while appearing 
                    genderqueer, or transgender, or gender nonconforming or as gay or is marginalizing 
                    in most contexts. Dress is often a signal of income,  and occupation, which can be either 
                    privileging or marginalizing. In addition, dressing and grooming oneself in a way 
                    that stands out as “different” or “odd (such as wearing shabby clothes and unkempt 
                      hair to an office, or the mismatched, gaudy clothing and makeup and unkempt hair 
                      and often seen when someone is in a psychiatric crisis) is marginalizing.
                </p> 
            </Typography>

            <Typography id="age" variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Age</p>
                <p>
                  The privilege or marginalization associated with different ages is very 
                  <a href="/identity#ethnicity" style={{ fontSize: '20px', textDecoration: 'none' }}>specific to 
                  particular ethnic or tribal groups</a>
                   <a href="/identity#geoRegion" style={{ fontSize: '20px', textDecoration: 'none' }}>and to particular regions. </a>
                  For instance, in many 
                  <a href="/identity#ethnicity" style={{ fontSize: '20px', textDecoration: 'none' }}>Asian, African, and indigenous societies,</a>
                   the older you are, 
                  the more respect and status you receive from others. Elders in those cultures tend to be 
                  seen as sources of wisdom to be respected and obeyed as a result, although that is 
                  changing somewhat with globalization. In the U.S. and other western societies, in 
                  contrast, youth is exalted and is generally privileged (with some exceptions), 
                  while old age is associated with being <a href="/identity#health" style={{ fontSize: '20px', textDecoration: 'none' }}>decrepit</a> or senile and is often marginalized, 
                    especially occupationally. This is somewhat less the case in professional <a href="/identity#occupation" style={{ fontSize: '20px', textDecoration: 'none' }}>occupations </a> 
                  that require <a href="/identity#education" style={{ fontSize: '20px', textDecoration: 'none' }}>higher education</a> and that value experience over physical strength or 
                  technological savvy, while working-class occupations tend to require strength or 
                  speed and business job require speed and being up-to-date with technology. 
                  Once a person is well into old age, however, marginalization tends to set in for 
                  professionals as well. 
                </p> 
                <p>
                  Adult attitudes toward childhood and adolescence vary across different <a href="/identity#ethnicity" style={{ fontSize: '20px', textDecoration: 'none' }}>cultures</a> 
                  and across <a href="/identity#geoRegion" style={{ fontSize: '20px', textDecoration: 'none' }}>wealthy, middle-income and wealthy countries</a>, although minors are 
                  generally are more dependent and have fewer rights than adults. In poorer <a href="/identity#geoRegion" style={{ fontSize: '20px', textDecoration: 'none' }}>countries and communities</a>, even <a href="/identity#raisedBy" style={{ fontSize: '20px', textDecoration: 'none' }}>families'</a> economic necessity may force even very young 
                  children to <a href="/identity#access" style={{ fontSize: '20px', textDecoration: 'none' }}>abandon - or never have the chance</a> <a href="/identity#education" style={{ fontSize: '20px', textDecoration: 'none' }}>to attend – school</a> – and into 
                  demanding and underpaid <a href="/identity#occupation" style={{ fontSize: '20px', textDecoration: 'none' }}>work</a> or, for girls, marriage, even before puberty. 
                  In contrast, youth in <a href="/identity#geoRegion" style={{ fontSize: '20px', textDecoration: 'none' }}>wealthy nations</a>, especially those in more class-privileged 
                  families, usually benefit from <a href="/identity#education" style={{ fontSize: '20px', textDecoration: 'none' }}>finishing secondary school and a large minority get 
                  higher education</a> as well, which offers youth and the adults they become both 
                  economic and <a href="/identity#occupation" style={{ fontSize: '20px', textDecoration: 'none' }}>occupational</a> protection.
                </p>
                <p>
                  Age or generation also has cultural implications in that different generations often 
                  trend differently in relation to attitudes about <a href="/identity#politics" style={{ fontSize: '20px', textDecoration: 'none' }}>politics</a>, <a href="/identity#race" style={{ fontSize: '20px', textDecoration: 'none' }}>race,</a> gender and reproductive 
                  rights, sexual orientation, gender identity, gender expression, and <a href="/identity#politics" style={{ fontSize: '20px', textDecoration: 'none' }}>immigration policy</a>, 
                  and have different levels of skill and <a href="/identity#access" style={{ fontSize: '20px', textDecoration: 'none' }}>access</a> to computers and smart phones, among other 
                  things. Finally, as life expectancy increases (however unequally among <a href="/identity#race" style={{ fontSize: '20px', textDecoration: 'none' }}>racial</a> and 
                  economic groups,  with shorter life spans for poorer people <a href="/identity#geoRegion" style={{ fontSize: '20px', textDecoration: 'none' }}>worldwide</a> and for 
                  <a href="/identity#race" style={{ fontSize: '20px', textDecoration: 'none' }}> Black and Native American</a> <a href="/identity#ethnicity" style={{ fontSize: '20px', textDecoration: 'none' }}>and US-born Latinx</a> people in <a href="/identity#geoRegion" style={{ fontSize: '20px', textDecoration: 'none' }}>the U.S.</a>), how people can 
                  expect to live out their family and work lives have shifted.
                </p>
            </Typography>


            <Typography id="raisedBy" variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Raised By</p>
                <p>
                  In most, but not all, societies, being raised, or having been raised by both birth parents who are in a 
                  heterosexual first marriage to each other is privileging, although that no longer 
                  describes the majority of households with children in most <a href="/identity#geoRegion" style={{ fontSize: '20px', textDecoration: 'none' }}>western societies</a>. In recent 
                  years, many western countries have legalized same-sex marriage and have recognized the 
                  gay and lesbian partners of birth parents as adoptive and stepparents. Those family 
                  constellations are still somewhat to very marginalized, especially in some religious 
                  communities, some of which see same-sex relationships as sinful and as bad for 
                  children (which research does not bear out). Two-parent families are still more 
                  privileged in most countries, regardless of sexual orientation and whether those 
                  parents are birth parents, adoptive parents, or stepparents. 
                </p> 
                <p>
                  However, single parents face little to no marginalization in some European countries 
                  that provide universal parental leave and subsidized childcare, and in <a href="/identity#geoRegion" style={{ fontSize: '20px', textDecoration: 'none' }}>some U.S. communities</a> where single parent families are common. Being raised by adoptive parents 
                  (through formal or informal adoption) is still somewhat marginalizing (adoptive family 
                  members are often asked about their “real” parents or children, as if adoption did not 
                  create real families) in <a href="/identity#geoRegion" style={{ fontSize: '20px', textDecoration: 'none' }}>some societies</a> but highly stigmatized in others. Being raised 
                  by a stepparent (or series of stepparents) can be marginalizing as well, although less 
                  so as divorce and remarriage has become the statistical norm in many <a href="/identity#geoRegion" style={{ fontSize: '20px', textDecoration: 'none' }}>communities</a>. 
                  Being raised by foster parents, even when they are birth relatives, is highly 
                  marginalizing. In many countries, therefore, children who do not come from two-parent 
                  families are raised in orphanages (and infertile or single adults go involuntarily 
                  childless). Some children live apart from one or both parents because of parental 
                  death or abandonment, or court-decided custody arrangements, or parental imprisonment. 
                  Other children are kicked out of, or run away from, their homes because their parents 
                  respond abusively to their coming out as gay or lesbian, or as transgender, or genderqueer. Still others 
                  lose their parents in <a href="/identity#impactHistTimes" style={{ fontSize: '20px', textDecoration: 'none' }}>war or refugee situations, or during a large-scale disaster or 
                  pandemic.</a>
                </p> 
            </Typography>

            <Typography id="guardiansMaritalStatus" variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Guardians’ Marital Status</p>
                <p>
                  Being raised by parents who are married to each other is a privileged 
                  position. Although the stigma attached to families headed by single 
                  parents has greatly diminished in <a href="/identity#geoRegion" style={{ fontSize: '20px', textDecoration: 'none' }}>many countries in the world</a> in 
                  recent decades and has largely disappeared in some European countries, 
                  it continues in <a href="/identity#geoRegion" style={{ fontSize: '20px', textDecoration: 'none' }}>countries and communities</a> that are more <a href="/identity#religion" style={{ fontSize: '20px', textDecoration: 'none' }}>religiously</a> 
                  and <a href="/identity#ethnicity" style={{ fontSize: '20px', textDecoration: 'none' }}>culturally</a> conservative. Even in communities that are fully 
                  accepting single parent families, however, household income is 
                  generally much lower in those families, especially the majority 
                  that are headed by women, than in families headed by single men or 
                  heterosexual or gay male couples because of income disparities 
                  between the genders. That income disparity is all the greater in 
                  <a href="/identity#geoRegion" style={{ fontSize: '20px', textDecoration: 'none' }}>poor communities</a> and communities of color, although some <a href="/identity#geoRegion" style={{ fontSize: '20px', textDecoration: 'none' }}>countries</a> 
                  provide enough <a href="/identity#politics" style={{ fontSize: '20px', textDecoration: 'none' }}>universal financial support for families</a>, including 
                  childcare and subsidies for children, that that disparity is blunted. 
                  In many societies, especially <a href="/identity#ethnicity" style={{ fontSize: '20px', textDecoration: 'none' }}>culturally</a> and <a href="/identity#religion" style={{ fontSize: '20px', textDecoration: 'none' }}>religiously</a> conservative 
                  ones,  divorce is frowned upon at best and some countries (especially 
                    those that are predominantly <a href="/identity#religion" style={{ fontSize: '20px', textDecoration: 'none' }}>Catholic</a>) only made divorce legal <a href="/identity#impactHistTimes" style={{ fontSize: '20px', textDecoration: 'none' }}>in 
                  the late 20th century or early 21st century.</a>

                </p> 
            </Typography>

            <Typography id="parentalStatus" variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Parental Status</p>
                <p>
                  Whether being a parent or guardian is privileged or marginalized depends on 
                  one’s <a href="/identity#age" style={{ fontSize: '20px', textDecoration: 'none' }}>age</a>, marital status, sexual orientation,  and whether one (or one’s child) 
                  is cisgender, transgender, or genderqueer. Parental status is also affected by 
                  household income and <a href="/identity#geoRegion" style={{ fontSize: '20px', textDecoration: 'none' }}>geographical region</a>, since some countries’ governments offer 
                  paid parental leave and subsidized childcare, <a href="/identity#education" style={{ fontSize: '20px', textDecoration: 'none' }}>as well as free primary, secondary, 
                  and in some cases, higher education,</a> while others do not. In many <a href="/identity#geoRegion" style={{ fontSize: '20px', textDecoration: 'none' }}>communities or regions</a>, becoming a parent or guardian <a href="/identity#age" style={{ fontSize: '20px', textDecoration: 'none' }}>before one's 20s</a> is marginalized, while in 
                  others, doing so is common; in most areas, not becoming a parent before one’s 40s 
                  is marginalized and a source of pity or moral judgment, even when that is a 
                  thought-out choice and not the unwelcome result of <a href="/identity#health" style={{ fontSize: '20px', textDecoration: 'none' }}>infertility</a> or being single. 
                  Becoming a parent without being in a heterosexual marriage is marginalized in 
                  many or most <a href="/identity#geoRegion" style={{ fontSize: '20px', textDecoration: 'none' }}>communities and regions world-wide</a>, especially those with a 
                  dominant <a href="/identity#chosenReligion" style={{ fontSize: '20px', textDecoration: 'none' }}>religion</a> that is socially conservative.
                </p> 

                <p>
                  It is increasingly common for women in committed lesbian couples to 
                  become parents, while gay male couples, who, as men tend to have higher 
                  incomes, may face opposing pressures to parent or to remain childfree, 
                  depending on their local and gay community. This marginalization is less 
                  prevalent in areas that are <a href="/identity#politics" style={{ fontSize: '20px', textDecoration: 'none' }}>politically liberal</a>, and that provide 
                  economic and child care support to families with children. 
                </p>

                <p>
                    Whether a person is a birthparent raising children, or an adoptive or 
                    stepparent, the partner of the birth or adoptive parent, or a foster 
                    parent or relative raising a child also affects relative privilege and 
                    marginalization, as does the sexual orientation and gender identity of 
                    the parent. In contrast, having given up custody of one’s child or 
                    children via adoption or abandonment or having lost custody in court 
                    is marginalizing, as, in most cases, being a surrogate mother. 
                    Having a child who is <a href="/identity#health" style={{ fontSize: '20px', textDecoration: 'none' }}>healthy and able bodied</a>, who has a particular 
                    talent, and who does not have problems with mental health or substance 
                    abuse is privileging for parents, while having a child who has 
                    <a href="/identity#health" style={{ fontSize: '20px', textDecoration: 'none' }}>chronically illness or disability</a> (especially if those are apparent to 
                    others) or who has problems with mental illness or substance abuse or 
                    limited cognitive ability is marginalizing, especially if the parent 
                    has limited <a href="/identity#access" style={{ fontSize: '20px', textDecoration: 'none' }}>access</a> to needed health or mental health care or other 
                    services for the child. Being a parent with adequate personal or 
                    extended family assets and income or higher is privileging, while 
                    being a parent who is poor is marginalizing. Being a gay, lesbian, 
                    or a transgender, or genderqueer parent, or one with problems of 
                    <a href="/identity#health" style={{ fontSize: '20px', textDecoration: 'none' }}>chronic illness or disability</a> or of mental illness or substance abuse 
                    is marginalizing in most <a href="/identity#geoRegion" style={{ fontSize: '20px', textDecoration: 'none' }}>communities</a>. Finally, having aborted a 
                    pregnancy is often marginalized and is illegal in religiously and 
                    <a href="/identity#politics" style={{ fontSize: '20px', textDecoration: 'none' }}>politically conservative</a> <a href="/identity#geoRegion" style={{ fontSize: '20px', textDecoration: 'none' }}>regions and countries</a>, while miscarrying 
                    or having a stillbirth are grievous losses that go widely 
                    unrecognized by others. 

                </p>
            </Typography>

            <Typography id="maritalStatus" variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Marital Status</p>
                <p>
                In most <a href="/identity#geoRegion" style={{ fontSize: '20px', textDecoration: 'none' }}>societies and communities</a>,  being married is privileged over being single, 
                divorced, or widowed, especially for people who are parenting children, except among 
                those generally considered too <a href="/identity#age" style={{ fontSize: '20px', textDecoration: 'none' }}>young</a> to marry. Some communities and 
                <a href="/identity#politics" style={{ fontSize: '20px', textDecoration: 'none' }}>some social welfare states</a>may be somewhat indifferent to marital status, however. The age at which one is 
                considered marriageable varies across <a href="/identity#geoRegion" style={{ fontSize: '20px', textDecoration: 'none' }}>communities and societies</a>, with more <a href="/identity#chosenReligion" style={{ fontSize: '20px', textDecoration: 'none' }}>religiously</a> 
                <a href="/identity#politics" style={{ fontSize: '20px', textDecoration: 'none' }}>conservative</a> regions often accepting <a href="/identity#age" style={{ fontSize: '20px', textDecoration: 'none' }}>earlier marriage, in some cases even before puberty,</a> 
                especially for girls. The same societies and communities are more likely than secular ones 
                to marginalize or even prohibit divorce. In some countries, marriage is a 
                
                <a href="/identity#chosenReligion" style={{ fontSize: '20px', textDecoration: 'none' }}>religious 
                contract controlled by religious </a>
                
                <a href="/identity#politics" style={{ fontSize: '20px', textDecoration: 'none' }}>leaders</a>, but in most countries it is a civil contract 
                controlled by the state. Until recently, marriage was only legal between one man and one 
                woman in most countries, although some societies allow men to marry more than one woman 
                at a time and some <a href="/identity#ethnicity" style={{ fontSize: '20px', textDecoration: 'none' }}>indigenous cultures</a> have allowed same-sex marriage and marriage of 
                both gay and genderqueer (both of whom those cultures call “two-spirit” people) to 
                each other or to straight people for centuries. Otherwise, same-sex couples have only 
                been allowed to have civil or religious marriages in recent years, and only in more 
                <a href="/identity#politics" style={{ fontSize: '20px', textDecoration: 'none' }}>politically</a> and <a href="/identity#chosenReligion" style={{ fontSize: '20px', textDecoration: 'none' }}>religiously</a> liberal <a href="/identity#geoRegion" style={{ fontSize: '20px', textDecoration: 'none' }}>countries or states</a>. While being widowed is the 
                statistical norm for <a href="/identity#age" style={{ fontSize: '20px', textDecoration: 'none' }}>people in their 70s</a> and older, it is still marginalizing in 
                societies that privilege marriage and it is especially so among <a href="/identity#age" style={{ fontSize: '20px', textDecoration: 'none' }}>young people</a>. 
                </p> 
            </Typography>


            <Typography id="sexOrientation" variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Sexual Orientation</p>
                <p>
                  Sexual orientation involves one’s sexual and romantic attraction to people of the same sex 
                  (in which case one may identify as gay or lesbian or queer), opposite sex (heterosexual or 
                  straight), both sexes (bisexual), or to people across a continuum of genders (pansexual). 
                  Some people are attracted to neither sex and are called asexual, while someone who falls 
                  between asexual and sexual is called graysexual or demisexual. Sexual orientation is 
                  distinct from gender identity, gender expression, or the sex assigned at birth. For 
                  instance, a nonbinary or genderqueer person (who identifies with both genders or neither) 
                  may identify as straight, gay, lesbian, or bisexual, or as pansexual. 
                </p> 

                <p>
                  A person’s relative privilege or marginalization on the basis of sexual orientation 
                  varies considerably with the <a href="/identity#politics" style={{ fontSize: '20px', textDecoration: 'none' }}>politics</a> and prevailing <a href="/identity#religion" style={{ fontSize: '20px', textDecoration: 'none' }}>religion</a> of their <a href="/identity#geoRegion" style={{ fontSize: '20px', textDecoration: 'none' }}>community or region</a>. In some countries, especially (but not only) those led by theocracies, any 
                  sexual behavior other than heterosexual behavior within marriage is illegal; in some 
                  extreme cases, homosexuality is legally punishable by death. In contrast, some 
                  indigenous cultures, including many <a href="/identity#ethnicity" style={{ fontSize: '20px', textDecoration: 'none' }}>Native American nations</a>, embrace gays and 
                  lesbians (as well as genderqueer people) as two-spirit people with special roles in 
                  society. The degree to which any sexual orientation other than heterosexual is 
                  marginalized is also influenced by the person’s <a href="/identity#ethnicity" style={{ fontSize: '20px', textDecoration: 'none' }}>race, ethnicity, or tribe</a>, class 
                  privilege (household income, <a href="/identity#occupation" style={{ fontSize: '20px', textDecoration: 'none' }}>occupation,</a> and <a href="/identity#education" 
                    style={{ fontSize: '20px', textDecoration: 'none' }}>educational level</a>), 
                    and <a href="/identity#religion" style={{ fontSize: '20px', textDecoration: 'none' }}>family religion</a> 
                  and <a href="/identity#chosenReligion" style={{ fontSize: '20px', textDecoration: 'none' }}>chosen religion</a>, in that those aspects of identity 
                  can influence how the person’s immediate reference group perceives their sexual orientation. 
                </p> 

                <p>
                  The <a href="/identity#health" style={{ fontSize: '20px', textDecoration: 'none' }}>HIV/AIDS epidemic</a>, which disproportionately hit gay men (as well as IV drug users) 
                  and their sex partners, from the late <a href="/identity#impactHistTimes" style={{ fontSize: '20px', textDecoration: 'none' }}>1970s until the 1990s</a> was highly marginalizing 
                  specifically because of its association to gay men at time when homophobia was the norm. 
                  Even today, in a time when 
                  <a href="/identity#health" style={{ fontSize: '20px', textDecoration: 'none' }}>life-saving treatment is available for what is now usually a 
                  chronic rather than fatal condition, an HIV/AIDS diagnosis</a>
                   is still highly stigmatized, 
                  again because of its association with <a href="/identity#race" style={{ fontSize: '20px', textDecoration: 'none' }}>Black</a> and bisexual gay men and IV drug users, 
                  and all their partners, of either gender, <a href="/identity#geoRegion" style={{ fontSize: '20px', textDecoration: 'none' }}>in the US. it is also prevalent in several 
                  African and Caribbean nations</a> that <a href="/identity#access" style={{ fontSize: '20px', textDecoration: 'none' }}>have far fewer resources</a> for treating it than in 
                  the US and Europe. 
                </p> 

                <p>
                  Having a sexual orientation that is marginalized in one’s <a href="/identity#geoRegion" style={{ fontSize: '20px', textDecoration: 'none' }}>community</a> can limit 
                  one’s <a href="/identity#access" style={{ fontSize: '20px', textDecoration: 'none' }}>access</a> to resources, influence and  housing, as well as to <a href="/identity#occupation" style={{ fontSize: '20px', textDecoration: 'none' }}>jobs,</a> 
                  <a href="/identity#education" style={{ fontSize: '20px', textDecoration: 'none' }}>
                  educational</a> (and therefore, <a href="/identity#householdIncome" style={{ fontSize: '20px', textDecoration: 'none' }}>financial</a>), and
                  volunteering opportunities, and, until very recently in the U.S, <a href="/identity#relationToMilitary" style={{ fontSize: '20px', textDecoration: 'none' }}>military service</a>. 
                  For that reason, some people even today “pass” as straight. Even such fundamental 
                  human rights as the right to marriage, and to adopt children or even keep custody 
                  of birth children are denied in many countries, as they were in most states in the 
                  U.S until a Supreme Court ruling protecting those rights in 2015. In <a href="/identity#religion" style={{ fontSize: '20px', textDecoration: 'none' }}>religiously</a> 
                  or <a href="/identity#politics" style={{ fontSize: '20px', textDecoration: 'none' }}>politically conservative</a> <a href="/identity#raisedBy" style={{ fontSize: '20px', textDecoration: 'none' }}>families</a>, people who identify as anything other than 
                  straight (that is, as LGBTQ+) may also be abused and/or rejected or even murdered 
                  by their families and others in their personal lives. For this reason, many people 
                  who were other than straight hid their sexuality, or stayed in the closet, <a href="/identity#age" style={{ fontSize: '20px', textDecoration: 'none' }}>in earlier generations</a>. The need to do that continues in many <a href="/identity#politics" style={{ fontSize: '20px', textDecoration: 'none' }}>politically</a> and <a href="/identity#religion" style={{ fontSize: '20px', textDecoration: 'none' }}>religiously</a> 
                  conservative <a href="/identity#geoRegion" style={{ fontSize: '20px', textDecoration: 'none' }}>countries and regions</a> today. Some youth are physically abused by 
                  parents, peers, or strangers because of their sexuality. Of note, LGBTQ+ youth 
                  are more likely than straight youth to <a href="/identity#raisedBy" style={{ fontSize: '20px', textDecoration: 'none' }}>run away or from or be kicked out of their homes</a> and, without financial support from family, to become <a href="/identity#access" style={{ fontSize: '20px', textDecoration: 'none' }}>homeless</a> and at 
                  risk of physical and sexual exploitation as a result. 

                </p> 
            </Typography>

            <Typography id="genderID" variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Gender ID</p>
                <p>
                  Gender identity involves one’s identification as a woman, man, or as both or neither. 
                  Gender is a social construct involving what gender(s) people identify with and how 
                  they are perceived, unlike sex, which is assigned at birth based on genitals. 
                  Cisgender people identify with the gender that is consistent with the sex they 
                  were assigned at birth and adhere to a gender binary. However, increasing numbers 
                  of people, especially in <a href="/identity#age" style={{ fontSize: '20px', textDecoration: 'none' }}>younger generations</a>, perceive themselves on a non-binary 
                  gender continuum and call themselves non-binary, genderqueer or queer, gender 
                  non-conforming, gender fluid, or gender-expansive. These terms all mean that they 
                  do not experience themselves as being entirely male or entirely female, but 
                  rather a blend of the two, although in the case of gender fluidity, they may 
                  experience themselves as oscillating between being male and female.
                </p>

                <p>
                  In addition, some people identify as transgender, meaning they experience 
                  themselves as having the gender identity opposite to the one assigned at birth. 
                  People who identify as female but were assigned a male sex at birth are transwomen 
                  and those who who identify as  male but were assigned a female sex at birth are 
                  transmen regardless of whether they have used hormonal  interventions. Transgender 
                  people usually, but not always, utilize <a href="/identity#health" style={{ fontSize: '20px', textDecoration: 'none' }}>hormonal treatment</a> in order to live 
                  congruently with their gender identity, and some also choose to undergo 
                  <a href="/identity#health" style={{ fontSize: '20px', textDecoration: 'none' }}>gender 
                  confirmation surgery</a>
                  , also known as gender affirming surgery. These surgeries 
                  include a range of procedures: breast reduction or augmentation, removal of 
                  facial and body hair, facial reconstruction to attain a jawline consistent with 
                  their chosen gender identity, and finally, removal of original reproductive 
                  organs and replacement with those of their chosen gender identity). (Note to 
                  cisgender people: it is hurtful and at least microaggressive to ask about these 
                  medical procedures without express permission from the transgender person, just 
                  as one is expected not to ask about the sex organs of anyone else.)
                </p>

                <p>
                  These medical treatments can be hard to come by for economic and societal reasons, 
                  including clinician bias and <a href="/identity#politics" style={{ fontSize: '20px', textDecoration: 'none' }}>prejudicial</a> <a href="/identity#access" style={{ fontSize: '20px', textDecoration: 'none' }}>insurance policies</a>, such as requiring a 
                  psychiatric diagnosis of “gender dysphoria” (which refers to distress over one’s 
                  assigned gender contradicting one’s experienced gender). In addition, many prisons 
                  and jails deny such treatments, as the <a href="/identity#relationToMilitary" style={{ fontSize: '20px', textDecoration: 'none' }}>U.S. military</a> did until 2021. Finally, 
                  transgender people, particularly transgender women <a href="/identity#race" style={{ fontSize: '20px', textDecoration: 'none' }}>of Color,</a> are extremely 
                  vulnerable to violent assault and murder because of a combination of transphobia, 
                  homophobia, and <a href="/identity#race" style={{ fontSize: '20px', textDecoration: 'none' }}>racism.</a> They are also vulnerable to suicidality because of the 
                  extreme stigma they face and the lack of emotional support and affirmation from 
                  <a href="/identity#raisedBy" style={{ fontSize: '20px', textDecoration: 'none' }}>family</a> and the cisgender community.
                </p>

                <p>
                  Trans people can identify as heterosexual, gay or lesbian, or more broadly, as 
                  genderqueer. they may be attracted to people of a different gender, or multiple 
                  genders, after transitioning than they were before, or their attractions may 
                  remain unchanged. Thus, a transman who previously was attracted to women while 
                  living as a lesbian may still keep those attractions, and be perceived as 
                  heterosexual. Or, he might find his attractions shifting to men, or to both genders. 
                  His gender expression, which had originally been gender-nonconforming, may remain 
                  gender-non-conforming, but it may become traditionally masculine. 

                </p> 
            </Typography>

            <Typography id="genderExpression" variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Gender Expression</p>
                <p>
                  Gender expression refers not to internal experience of gender identity or sexual 
                  orientation, but rather how one expresses one’s gender identity through appearance, 
                  including one’s choice of clothes, hair, body art, and jewelry, as well as behavior 
                  and the pitch of one’s voice. In recent years, <a href="/identity#age" style={{ fontSize: '20px', textDecoration: 'none' }}>younger people</a> in particular have 
                  distinguished gender expression from gender identity and sexual orientation.  However, 
                  any appearance that does not conform to sex assigned at birth can be marginalizing, 
                  especially by <a href="/identity#age" style={{ fontSize: '20px', textDecoration: 'none' }}>older generations</a> who are unfamiliar or uncomfortable with younger 
                  people’s broader and more playful expressions of masculinity and femininity, and in 
                  <a href="/identity#religion" style={{ fontSize: '20px', textDecoration: 'none' }}>religiously</a> and <a href="/identity#politics" style={{ fontSize: '20px', textDecoration: 'none' }}>politically conservative</a> <a href="/identity#geoRegion" style={{ fontSize: '20px', textDecoration: 'none' }}>communities and regions</a>. LGBTQ+ people and 
                  straight people alike who present with gender nonconforming expressions are at risk 
                  of violence from homophobic and transphobic <a href="/identity#raisedBy" style={{ fontSize: '20px', textDecoration: 'none' }}>family</a> and <a href="/identity#geoRegion" style={{ fontSize: '20px', textDecoration: 'none' }}>community members</a>.  
                </p> 
            </Typography>

            <Typography id="sexAtBirth" variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Sex Assigned at Birth</p>
                <p>
                  Most people are born with either male reproductive organs and are assigned male sex at 
                  birth, or they are born with female reproductive organs and are assigned female sex and 
                  are therefore perceived by <a href="/identity#raisedBy" style={{ fontSize: '20px', textDecoration: 'none' }}>family</a> and others as boys or girls, respectively. However, 
                  some children experience and declare themselves as identifying with the opposite sex 
                  to the one they were assigned and therefore want to express their gender accordingly. 
                  In many societies, such declarations and gender expressions are met with resistance, 
                  and sometimes with abuse at home and at school because of transphobia.  Others 
                  identify as outside the gender binary – they may identify as genderqueer or as nonbinary.  
                </p>

                <p>
                  In many cases, the person’s recognition of the incongruity between their experienced 
                  gender and assigned sex emerges later, in adolescence or even well into <a href="/identity#age" style={{ fontSize: '20px', textDecoration: 'none' }}>adulthood</a>. 
                  Some <a href="/identity#age" style={{ fontSize: '20px', textDecoration: 'none' }}>older adults</a> who ultimately come out as transgender had trouble making sense of 
                  their experience in their youth, because people <a href="/identity#impactHistTimes" style={{ fontSize: '20px', textDecoration: 'none' }}>of their generation</a> or in their <a href="/identity#geoRegion" style={{ fontSize: '20px', textDecoration: 'none' }}>part of the world</a> may not have had any language to express that experience and/or are 
                  unaware that anyone else shares their experience. With the evolution of language, 
                  individuals in older generations may use an overarching term of “gay” to mean lesbian, 
                  bisexual, or queer. They may also identify as gay or lesbian before identifying and 
                  understanding transgender identity. Appearing congruent with one’s chosen sex provides 
                  privilege (for instance, transmen, once they have been on male hormones long enough, 
                    appear male and carry privilege, while transwomen, even after years on 
                   
                    <a href="/identity#health" style={{ fontSize: '20px', textDecoration: 'none' }}>female hormones 
                    and even after breast reduction surgeryy</a>
                    , may still have visibly male features and are 
                    at risk of violence).
                </p>

                <p>
                  In about one case in 2,000, babies are born with the sexual organs of both sexes; they are 
                  intersex people (historically called hermaphrodites), a group so marginalized that their 
                  existence is barely known. <a href="/identity#impactHistTimes" style={{ fontSize: '20px', textDecoration: 'none' }}>Historically,</a> 
                   
                    <a href="/identity#health" style={{ fontSize: '20px', textDecoration: 'none' }}>doctors would remove all or most of one set of 
                  sexual organs</a>
                     and declare the baby to have the sex congruent with the remaining sexual 
                  organs. These babies, on growing up, however, often experienced what is officially 
                  diagnosed as gender dysphoria (but which would be better described as understandable 
                  distress over the incongruity between their experienced and assigned sex), even when 
                  they did not know their medical history.  <a href="/identity#impactHistTimes" style={{ fontSize: '20px', textDecoration: 'none' }}>In recent years,</a> doctors have been less eager 
                  to “correct” intersex conditions, so as to allow intersex people time to <a href="/identity#age" style={{ fontSize: '20px', textDecoration: 'none' }}>mature</a> and make 
                  their own decisions about whether to remain intersex, to have gender confirmation surgery 
                  congruent with their chosen gender, or, in more recent years, to identify as genderqueer.
                </p>
            </Typography>

            <Typography id="uniqueHistory" variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Unique History</p>
                <p>
                  Unique history involves any events or situations in the life of an individual or <a href="/identity#raisedBy" style={{ fontSize: '20px', textDecoration: 'none' }}>family </a> 
                   that does not fall under any of the other areas of identity in the Social Matrix Diagram.  
                  Examples might include having suffered severe physical, sexual, or emotional abuse at the 
                  hands of family members or others, having lived in many countries or regions, having been 
                  victimized by human trafficking, or living through an individual, family, or collective 
                  disaster. Unique history can also include being famous (or infamous) or in the family of 
                  someone famous (or infamous), or in a leadership position in a tribe or clan or in politics, 
                  all of which offer greater access to influence and resources.    
                  It might also involve something like being a twin or triplet, which is a unique relationship 
                  and which has special status in some ethnic and tribal groups. In addition, having an unusual 
                  talent, having a sibling who is or was very ill, or having been bereaved of a close family 
                  member in childhood. Unique history is included in the Social Matrix Diagram in order to 
                  ensure that any circumstances that are not addressed elsewhere in the diagram, but that 
                  are defining of experience and identity in some important way, can be included. In 
                  filling out the Social Matrix survey, this area of identity gives you the opportunity 
                  to see yourself (and, if you share your diagram with others, to be seen) more fully.
                </p> 
            </Typography>


        </div>

  )
};

export default AreasOfIdentity;