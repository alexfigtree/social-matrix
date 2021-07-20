
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

            <Typography variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '20px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Educational Level</p>
                <p>This area covers how many years of education you have and what your diplomas 
                  are, if any. How privileged a certain number of years of education would be depends 
                  largely on context. For instance, having a high school diploma only is somewhat 
                  marginalized in the US, but not in many developing countries with less access to 
                  higher education. It also varies with your age, since a high school diploma was 
                  enough to ensure a middle-class life until about 30 years ago. Education is also 
                  tied to occupation, since many jobs require certain degrees or certifications, and 
                  to income, as people with higher education make more money than those without. There 
                  are also disparities in both the quality of education and the level of education 
                  achieved on the basis of race, language(s) spoken, cognitive ability, health/ability, 
                  and community, as well as how much education one’s parents or guardians have.
                </p> 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Guardians’ Education</p>
                <p>This area addresses the educational level of your parents or guardians, to give an 
                  idea of your family’s educational history. Because your parents or guardians grew up in 
                  an earlier time when education was less widely accessible and perhaps in a different 
                  country, region, or community, their educational level may be considered differently 
                  from your own and may carry have a different impact on occupation and therefore on income. 
                </p> 
            </Typography>


            <Typography variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Occupation</p>
                <p>For your occupation, consider both the status of that education in your community 
                  and the country (the degree of respect it does or doesn’t get), the amount of control 
                  you have over your work life and schedule, and the income associated with that occupation. 
                  ome occupations are more secure than others, in that they provide reliable employment and 
                  physical safety, while other occupations may be prone to layoffs and exploitation, or to 
                  physical danger. The relative privilege or marginalization an occupation provides may vary 
                  greatly with historical period (since more work was agricultural or manual in the past) and 
                  with geographical region. 
                </p> 
            </Typography>


            <Typography variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Guardians’ Occupation</p>
                <p>Your parents’ or guardians’ occupation is a window into your family occupational 
                history. As with educational level, the amount of status or respect their occupation gets  
                or got) may vary with when they came of occupational age and the country, region, or 
                community where they did so. 
                </p> 
            </Typography>


            <Typography variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Household Income</p>
                <p>How privileged or marginalized your household income (your income plus the income 
                  of anyone else in your household, minus your expenses) is depends not only on what 
                your salary or other income is, but also on cost of living in your community and your 
                country. For instance, the same salary might allow you to buy a comfortable house in 
                urban Missouri or rural Arkansas, but only to rent a small apartment in New York City 
                or San Francisco, cities with dramatic income divides between rich and poor and 
                inadequate affordable housing. The same income might mean you are rich in the 
                Dominican Republic or Sri Lanka. It is also useful to think about assets as well 
                (savings, retirement and college funds, the value of one’s home, if you own it, help 
                  from family, etc., minus your debts) – do you have enough assets that you can live 
                comfortably and weather unexpected expenses, or are you living paycheck to paycheck or 
                dipping into savings or credit card debt to pay monthly expenses? Take major expenses 
                into consideration, such as major medical costs that are not covered by insurance or 
                high college tuition or debt, because a relatively high gross income might not be so 
                high after paying for those expenses.  
                </p> 

                <p>
                  Household income and wealth are strongly affected by race in many countries.  
                  or example, in the US, Black, Latinx, and Native American people, as well as 
                  those from some Asian countries, generally make significantly less money than 
                  White people, and have far less wealth.  In addition, prejudicial governmental, 
                  housing, and banking policies historically and in the present on the basis of race, 
                  ethnicity, and religion have systematically ensured that Black, Latino, and Native 
                  American people (and, previously, Jews and Catholics) were denied access to 
                  neighborhoods with high-quality schools, which maintains racial inequality. Similarly, 
                  veterans’ benefits between World War II and the end of the Vietnam War era ensured 
                  upward economic mobility to white veterans who received free higher education and 
                  subsidized home mortgages, but were denied to Black veterans.
                </p>

                <p>
                  Gender, gender identity, and educational level achieved all affect 
                  household income as well, with women making less than men (and Black, 
                    Indigenous, and Latinx women making much less and having less wealth 
                    than White men) and lesbian couples making less and having less wealth 
                  than heterosexual couples, while gay male couples make more and have more 
                  wealth. Transgender Black and Brown people generally make less and have 
                  less wealth than all other groups.
                </p>

                <p>
                  Finally, household income has a strong relationship with health and 
                  longevity; people with higher household incomes tend to be significantly 
                  healthier and longer-lived than poorer people, because they have better 
                  access to healthcare and healthy food,  and tend to live in neighborhoods 
                  with more trees (which decrease overheating and pollution), while poorer 
                  people tend to live in neighborhoods with little greenery and more 
                  unhealthful pollution-creating industries. 
                </p>
            </Typography>


            <Typography variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Childhood Household Income</p>
                <p>
                  Childhood household income is the income your family lived on when you were a 
                  child, which should also include household wealth or debt load. If you grew up 
                  in multiple households (because your parents or other guardians didn’t live 
                    together), you can answer this for as many households as you lived in. Keep in 
                  mind that a particular income then had more buying power than today if you are 
                  adult now, because of inflation. Also consider when and where you lived, since 
                  both historical period and geographical location influence the buying power of 
                  any particular income. In addition, some countries provide guaranteed minimum 
                  incomes for families with children, which considerably decreases poverty, as 
                  does universal health care in most countries in the developed world.
                </p> 
            </Typography>


            <Typography variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Guardians’ Childhood Household Income</p>
                <p>
                  Childhood household income is the income your parents or guardians lived on when they were 
                  children, together with household wealth or debt. If they grew up in multiple households 
                  (because their own parents or other guardians didn’t live together), you can answer this 
                  for as many households as they lived in. Keep in mind that a particular income then had more 
                    buying power than today or during your own childhood, because of inflation. Also consider 
                  when and where your parents or guardians lived, since both historical period and geographical 
                  ocation (country, region, or even which part of a city or town) influence the buying power of 
                  ny particular income. 
                </p> 
            </Typography>


            <Typography variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Access</p>
                <p>
                  This domain involves how much access you have to resources (for instance, to jobs, 
                    loans, gifts, or benefits, and such professional help as lawyers, and quality health 
                    care and education), information (for instance, knowing how to search for information 
                    online), and influence (political, professional, or otherwise). This access is especially 
                    affected by education, income, race, and language(s) spoken, as well as geographical 
                    region, which influences how close medical care is, how specialized the services, 
                    and even how inclusive local buildings, roads and transportation are to people with 
                    disabilities. 
                </p> 
            </Typography>


            <Typography variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Guardians’ Access</p>
                <p>
                  This domain involves how much access your parents or guardians have to resources, 
                  information, and influence. For more on how access relates to other 
                  aspects of identity, see “Access.”
                </p> 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Race</p>
                <p>
                  This domain relates to the race(s) you identify with and the race(s) that other 
                  people perceive you to have. Race is a socially constructed concept (going back 
                    a little over 500 years) and not a biological one, but it has major social 
                  impact. How privileged or marginalized you experience your racial identity to be 
                  may vary with where you live, and with other areas of relative privilege or 
                  marginalization, such as educational attainment, occupation, income, and citizenship 
                  status, as well as with your skin color and visible physical features. Historical 
                  era also makes a difference, as older people of color lived through institutionalized 
                  and legally-enforced segregation and discrimination (particularly for Black and 
                    Indigenous people) , as well as exclusion acts controlling immigration and, more 
                  recently, hate crimes, particularly against Asians). You may identify with more 
                  than one race, or as biracial or multiracial. Ethnicity and tribe are a different area of 
                  identity, even though they may have a relationship to race. 
                </p> 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Ethnicity/Tribe</p>
                <p>
                    Ethnicity or tribe is distinct from race. For instance, someone who is racially 
                    White might be ethnically Irish, German, Greek, Italian, or Jewish, while someone 
                    who is racially Black might be ethnically African American, Haitian, Jamaican, 
                    Ugandan, or Kenyan, etc. People from all racial groups may identify ethnically as 
                    Latino/a/Latinx/Hispanic or as Jewish. (Judaism is a religion but Jewishness has 
                      been considered an ethnicity, regardless of religious observance, since the 
                      Spanish Inquisition.) People who are African or MENA (Middle Eastern/North African) 
                      may identify racially as Black or Asian, or in some cases, White, but identify 
                      ethnically as Arab, Jewish, or Druze, etc.). Tribe may be most relevant for people 
                      of African, Middle Eastern, South, Central, or East Asian descent or for people 
                      indigenous to the Americas (First Nation Peoples, Native Americans, or 
                        American Indians) as well as to the Pacific Islands, Australia and New Zealand, 
                      and more significant than ethnicity for many of those groups. 
                </p> 
                <p>
                  How privileged or marginalized you experience your ethnicity/tribe to be may depend 
                  in part on what region of the world and what region of your country you live In. 
                  It may also depend on as well whether your ethnic/tribal group is persecuted, facing 
                  legal quotas on immigration into a country (as was the case for Chinese people, Jews, 
                    Southern Europeans and Arabs at different times) or otherwise marginalized in the 
                  country of residence. Educational level and occupation also can play a role in how 
                  marginalized one is ethnically, in that higher education and more prestigious 
                  occupations offer some modest protection against discrimination. Race and appearance 
                  also play a role here; for instance, lighter-skinned people who identify as 
                  indigenous/Native American/First Nations people or as Arab may be less marginalized 
                  in the US or in some postcolonial parts of Africa than those who are darker-skinned.  
                  Historically, and even into the present, some countries have deemed particular ethnic 
                  groups or tribes and not others as “foreign,” and targeted them for discrimination, 
                  persecution, and even ethnic cleansing or genocide. 
                </p>
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Nation of Origin/Citizenship  </p>
                <p>
                    This area of identity includes the country (or countries) where you have 
                    citizenship, as well as your family’s nation(s) of origin. It also includes 
                    how long you or your family members/ancestors have been in your country of 
                    residence, and with what citizenship status. In most cases, people whose 
                    families have been in their current country of residence for many generations 
                    may experience more privilege than immigrants or refugees to a new country 
                    and their children. There are exceptions, however. For example, in the US, 
                    Native Americans/indigenous people, people descended from forcibly enslaved 
                    Africans, and Latino/a/Latinx people near the Mexican border and in Puerto 
                    Rico, who have citizenship, often have less citizenship privilege (legal 
                      protection, etc.) than more recent white immigrants and their children. 
                    This is especially true for indigenous people (First Nation peoples or 
                      Native Americans) living on reservations that lack adequate healthcare, 
                    education, and basic utilities (water, electricity, and internet access). 
                    Some refugees may feel more privileged than those they left behind because 
                    they are out of a danger zone, even if they experience marginalization in 
                    the receiving country. The members of some ethnic groups born in their 
                    country of residence do not have citizenship by virtue of their ethnicity 
                    or tribe and are essentially stateless; this includes the Rohinge of 
                    Myanmar (Burma), Palestinians living in the West Bank and Gaza and in 
                    refugee camps elsewhere and, until into the 20th century, Jews in the 
                    former Soviet Union and many European states, and Romany people throughout Europe. 
                </p> 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Language(s)</p>
                <p>
                  This area of identity refers to your primary language and any 
                  additional languages you speak. While speaking more than one language 
                  can be an advantage (a source of privilege) in many ways, if you are 
                  not fully fluent in the language of the country or region where you 
                  live, or if you speak that language with an accent that identifies you 
                  as from another country, or even a different region of the country, you 
                  may be at a disadvantage (marginalized) as well. You may be at even 
                  greater disadvantage speaking with an accent if you are a Person of 
                  Color, as racism intersects with language discrimination, unless that 
                  accent marks you as from a wealthy or colonizing nation. Immigrants who 
                  do not speak the dominant language of their country of residence, or who 
                  speak that language with a heavy accent may be actively discriminated 
                  against in job applications or applications, looking for housing, in 
                  interactions with colleagues or clients, etc. They may also receive 
                  inadequate or even incorrect medical treatment because of language 
                  barriers. Even an accent identifying you as from a different region 
                  of the same country can be marginalizing, especially when there is 
                  political or civil conflict between regions or ethnic tension.   
                  Finally, the language you use can identify you with the colonizer or 
                  the colonized in colonial and postcolonial countries, with different 
                  ethnic or tribal groups of that country, or with how much and what 
                  quality education you have received. 
                </p> 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Family Religion</p>
                <p>
                  This area of identity refers to the religion of your parents/guardians 
                  and recent ancestors (which may differ from your current religious 
                    affiliation, if any). Many religions have sects, subgroups with 
                  their own unique beliefs and practices within a larger religion. 
                  For instance, Christianity, most broadly divided among Catholic, 
                  Protestant, and Eastern Orthodox faiths, is further divided into 
                  smaller sects.  Similarly, Islam includes Sunni, Shia, and Sufi 
                  sects, etc., and Judaism includes various Orthodox and Ultra-orthodox 
                  (Haredi) sects, along with Conservative, Reform, Reconstructionist, 
                  and Humanist sects. Most countries have a dominant religion, however 
                  unofficially, and some have an official religion. Affiliation with 
                  the dominant or official religion is therefore a source of privilege, 
                  while affiliation with a different religion can be  source of 
                    marginalization, or even persecution. Some countries officially 
                  prohibit the practice of any religion at all, while others prohibit 
                  particular religions. In addition, some regions of a particular 
                  country are predominantly one religion, while other regions are 
                  predominantly a different one. Depending on location, your religious 
                  affiliation can therefore be either a source of privilege or 
                  marginalization. Finally, not practicing or identifying with a 
                  religion can also be marginalizing in some countries or regions that 
                  privilege those who follow the dominant faith.
                </p> 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Chosen Religion</p>
                <p>
                  This area of identity refers to your own religious affiliation and practice, if any, 
                  which may (or ay not) differ from those of your family of origin. Unlike most of the 
                  world, in the US, about 40% of American adults identify with a different religion than 
                  the one in which they were raised. In some countries, converting to a new religion may 
                  be discouraged or in theocracies (national government run by a state religion), 
                  even forbidden, sometimes under penalty of death. This is particularly the case for 
                  converts to a marginalized or prohibited religion or whose racial appearance differs 
                  from that of most members of their new religion in their geographical region. 
                  Converts may also be rejected by family of origin and in some cases, not be welcomed 
                  as full members of their new religion. Choosing not to affiliate with any religion 
                  can be also marginalizing within the family and in larger society. (For more on 
                  religious affiliation, whether through birth or conversion, see Family Religion.) 
                </p> 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Politics</p>
                <p>
                  Political beliefs, political engagement, and party membership can be sources of privilege or marginalization, 
                  depending on country and region of country. For instance, in the US, being registered 
                  as a Democrat, or as the member of a left-wing party like the Socialists, 
                  would be highly marginalizing in parts of the Southern or Midwestern U.S., 
                  but more privileged (or at least not marginalized) in parts of the Northeast 
                  and West Coast. In addition, political affiliation and beliefs can be a 
                  source of polarization and even antagonism between people of different beliefs. 
                  In Communist-led countries, membership in the Communist party provides benefits 
                  and access to power, but membership in the Communist Party in the U.S. was 
                  proscribed starting in 1917 and explicitly illegal from 1954 until the late 
                  1960s. Being a dissident or the member of a party that opposes the ruling 
                  party is illegal and risks imprisonment, torture, or death in some 
                  dictatorships and authoritarian regimes around the world and in some cases 
                  is therefore a reason for seeking asylum in other countries.  Even being the 
                  child of a parent who participated in a banned political party can mean not 
                  getting jobs, housing, or benefits. In addition, the prevailing politics of a 
                  country affects what human rights and what health and educational resources 
                  are accessible to all residents.
                </p> 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Geographical Region</p>
                <p>
                  The region of the world you live in can affect your privilege or marginalization, 
                  in that some countries are affluent and others are poor. Some regions and 
                  countries are harshly affected by ethnic conflict, war, and/or a variety of 
                  environmental disasters and resultant displacement,  while others are relatively 
                  protected from those serious problems. The region you live in affects your access 
                  to resources, in that some regions have greater access than others to adequate 
                  healthcare and education (and the people in those regions are more likely to take 
                    advantage of those resources), as well as safe housing. Even within a country, 
                  some regions are poorer and/or more prone to natural disaster and less protected 
                  from human-made environmental health hazards than others, and the people in those 
                  regions may be less likely to access and utilize healthcare and educational 
                  resources. For instance, in the U.S., some inner-city and rural communities and 
                  regions areas are effectively food deserts and medical access deserts while others 
                  are more at risk environmentally. Institutional racism in housing policy and 
                  banking means that some areas have more substandard housing than others. From 
                  World War II until after the Vietnam War, the government subsidized mortgages 
                  and education for white veterans, but not for Black veterans; redlining (keeping 
                    Black people out of white neighborhoods was another institutionalized policy. 
                    Having less access to adequate housing, in turn, led to Black and Brown people 
                    have greater health risks. In addition, some countries in the developed world 
                    (but not the U.S.) guarantee paid parental leave, subsidies for children, and 
                    subsidized child and elder care, as well as universal health care and free or 
                    subsidized higher education, which means increased wealth for even poor people 
                    because they are not spending their own money for those essential needs.
                </p> 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Impact of Historical Era</p>
                <p>
                  Historical events such as wars, persecution, famines, epidemics and pandemics, 
                  and other kinds of social upheaval, as well as phenomena like social movements 
                  toward more or fewer human rights, can greatly affect the people who live through 
                  them, and can even affect their children and grandchildren. Growing up during such 
                  major events as a civil or international war or during a period of persecution or 
                  genocide, or during a time of major technological change or living through these 
                  events as an adult can shape how you view your world and live in it. It can even 
                  affect how your children and grandchildren view and live in their world. Similarly, 
                  surviving a severe natural or human-made disaster that affected many people in your 
                  community or region can affect the rest of your life, and even your children’s and 
                  grandchildren’s lives. In different ways, living through historical periods of 
                  repression like Jim Crow in the US, Apartheid in South Africa, or the aftermath of 
                  military coups in Chile, Libya, Myanmar, and other countries can affect the rest of 
                  your life. In contrast, living through a period of affluence, peace, universal 
                  education, and human rights also affects your lifetime. Finally, living through 
                  social movements can dramatically change the quality of many people’s lives and 
                  the privilege or marginalization they experience, and how they are perceived by 
                  others. Examples of such movements include the US Civil Rights Movement, the 
                  Women’s Rights Movement, and Rights for LGBTQ+ people, and Black Lives Matter 
                  in many countries and for documented and undocumented immigrants and Stop Asian 
                  Hate in the U.S., as well as nation-specific movements like the anti-Apartheid 
                  movement in South Africa. Other examples of major changes that differentially 
                  affect people’s access to information, education, healthcare, and even to 
                  geographically distant loved ones involve technological changes in computing. 
                  Because many older people do not have the skills and comfort level needed to use 
                  personal computers, tablets, and smart phones that most younger people do, they may 
                  be less able to take advantage of those technological advances. 
                </p> 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Relation to Military</p>
                <p>
                  Being in the military, or having a loved one in the military, can be experienced 
                  as privileging or marginalizing, based on many different issues. The same can 
                  apply to belonging to a paramilitary or guerrilla group. One issue involves 
                  how most people in the country perceived that war. Are returning veterans 
                  hailed as heroes, as happened for World War II, or as war criminals, as 
                  happened for many US soldiers returning from Vietnam, or did military 
                  service take place in peacetime? Did the service member come home from war 
                  with severe physical injuries or moral injuries, psychological trauma or 
                  cognitive problems caused by brain injury? These difficulties can also 
                  affect family relations, including parenting, as well as social relationships 
                  and may limit occupational opportunities. What rank did the service member 
                  hold and how respected did they feel in that position? 
                </p> 
                <p>
                  In some countries, military service is mandatory for men (and for women, 
                  in a few). In that case, is it marginalizing or a privilege not to have 
                  served?  In countries with paramilitary or guerrilla fighters, people 
                  are often forced into service, even as children, which can be highly 
                  traumatizing and marginalizing or a source of social status, 
                  depending on the politics of the home community. Many girls 
                  (and some boys) forced into such groups are also forced to serve as 
                  sex slaves and are ostracized if they are able to get back home, 
                  especially if they had children by their rapists. In countries 
                  like the U.S., which has not had a military draft since the 
                  Vietnam War, do you feel privileged by your (or your loved one’s) 
                  military service or marginalized by it? Do you feel privileged or 
                  marginalized as a civilian without a military record? 
                </p>
                <p>
                  The military in many countries have historically (and often still) 
                  engaged prejudicially on the basis of gender, race, sexual 
                  orientation, gender identity, and, in some countries, ethnicity. 
                  For instance, in the U.S., men were required to register for the 
                  draft (although there has not been a draft since 1973) and women 
                  were not. Women are still discriminated against within the military, 
                  and are far more likely to risk sexually assault and sexual harassment 
                  and being passed over for promotions than men. The U.S. military was 
                  racially segregated until after World War II and Black, Brown, and 
                  Native people were routinely sent to be “cannon fodder” or to menial 
                  labor in the military until quite recently. From World War II until 
                  after the Vietnam War, the government subsidized mortgages and 
                  education for white veterans, through the GI Bill, creating 
                  generations of upward mobility for white veterans, but not for 
                  Black veterans. It also denied openly LGBTQ people the right to 
                  serve in the military until quite recently as well, and until 
                  2021, even transgender service members were denied the right to 
                  needed hormonal treatments and gender confirming surgeries. 
                </p>
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Relation to Legal System</p>
                <p>
                  A person can get involved in the legal system because of arrest, 
                  conviction, and/or imprisonment in a criminal matter, because one 
                  is a victim in a criminal case, or through involvement in family court. 
                  In addition, one can be involved in civil lawsuits as defendant or 
                  plaintiff. Finally, attorneys, judges, jurors, bailiffs, probation 
                  officers, parole officials, and police officers are also involved 
                  in the legal system, as a part of their work, usually in a more 
                  privileged position. Being arrested, tried, and convicted (or 
                    even found not guilty), being a victim in a criminal case, and 
                  some family court cases can be highly marginalizing and often 
                  traumatizing. Even without imprisonment, an arrest record can mean 
                  being turned down for many jobs and educational possibilities. 
                  Time in prison makes later employment, housing, education, and 
                  receiving such benefits as food stamps impossible in many cases.  
                  In addition, imprisonment itself is often highly traumatizing, 
                  especially when solitary confinement or physical threat from either 
                  from other incarcerated people or from correctional officers, 
                  leading to life-long psychological difficulties. Being a victim 
                  or plaintiff in a criminal case can be traumatizing as well. 
                </p> 
                <p>
                  Poorer, less well-educated, and more unreliably employed people and 
                  People of Color, as well as people with histories of substance abuse
                  or certain mental illnesses are more likely to be arrested, and 
                  if arrested, to be convicted and imprisoned. At the same time, 
                    people in those groups are less likely to be believed as victims 
                  of violent crimes. Family members also often are often stigmatized 
                  when loved ones are arrested, tried, and/or imprisoned, and when 
                  courts decide custody arrangements. Family members can be evicted 
                  from public housing for letting a formerly incarcerated relative 
                  stay with them; they may also exclude relatives who have been 
                  incarcerated from family events. Entire communities that are 
                  poor and of color can be marginalized by aggressive, sometimes 
                  violent, policing, which means disproportionate arrests, 
                  incarcerations and deaths at the hands of the police. People 
                  with mental illness and substance abuse problems are also 
                  disproportionately arrested, tried, and incarcerated.  Finally, 
                  some jurors, attorneys, judges, courtroom staff, expert witnesses, 
                  and police officers, while privileged in their roles in the legal 
                  system, may feel traumatized by participating in particularly painful 
                  court cases.

                </p>
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Mental Health/Substance Use</p>
                <p>
                    Having difficulties with or mental illness a relationship with the mental 
                    health system can also be stigmatizing and therefore a source of 
                    marginalization, especially if that mental illness is apparent to others. 
                    So can having a substance use disorder like alcoholism or drug addiction, 
                    or relying on substances for managing your moods. Having a history of 
                    psychiatric hospitalization, and especially multiple or long or involuntary 
                    hospitalizations, being seen as having chronic mental health problems by 
                    the mental health system, or having undergone residential or inpatient 
                    rehabilitation for substances are all highly marginalizing as well. 
                    Having been labeled with mental illness and/or substance abuse can mean 
                    losing control over one’s choices (including through involuntary 
                      hospitalization), but also because of losing credibility with others. 
                    People with serious mental illnesses are more likely to be arrested and 
                    incarcerated, including time in Isolation while incarcerated, as well as 
                    to experience aggressive or violent policing, because they are seen as 
                    threatening. This is particularly true for men of color, who are more 
                    likely than others to be shot or arrested by police called in to help 
                    with a psychiatric crisis. 
                </p> 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
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
                  are institutionalized even as children, sometimes for life, and can be regularly 
                  abused in those settings. Different societies tend to prioritize different kinds 
                  of cognitive ability than others, so which cognitive skills are occupationally 
                  and educationally privileged depends partly on the social context of one’s 
                  geographical region. In addition, children of color are more likely to be 
                  incorrectly diagnosed with learning disabilities than white children, or 
                  have their learning disabilities misunderstood as lack of intelligence 
                  because of implicit bias. In addition, children with learning disabilities 
                  are often disciplined and seen as having behavioral problems rather than 
                  helped in school settings, with disproportionate school suspensions and 
                  expulsions, especially when they are of color. These disciplinary responses 
                  increase the likelihood of arrest and incarceration.
                </p> 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Health/Ability</p>
                <p>
                  Health problems and various kinds of physical disabilities are stigmatized and therefore 
                  marginalized in many societies. Many healthy, able-bodied people feel anxious around 
                  persons with significant and visible illness or disability, and may treat them as if 
                  they were invisible or completely incompetent. Some healthy, able-bodied people even 
                  blame people with illness or disabilities for their problems. Lack of inclusive 
                  community and regional planning, as well as lack of health care for all, can make it 
                  difficult to participate fully or at all in community activities like work, socializing, 
                  civic, political, and religious engagement, or even to use public transportation in the 
                  absence of accommodations for blindness, deafness, wheelchair use, and other disabilities. 
                  The Americans with Disabilities Act requires that all U.S. buildings, transportation, and 
                  streets be accessible to people with disabilities of all kinds, but lack of accessible 
                  housing, buildings, transportation, and sidewalks persists. Many countries do not even 
                  provide those protections.
                </p> 
                <p>
                  The problems created by illness and disability are worsened in impoverished communities, 
                  regions, and countries with limited access to healthcare, education, healthy food, 
                  transportation and sustainable work; the same communities are also most often the ones 
                  that are saddled with toxic waste and pollution. Highly marginalized diseases include 
                  HIV/AIDS (because of its association with gay men and IV-drug users), hepatitis (again, 
                    because of the association with drug users), and lung diseases (which are often blamed 
                    on smoking rather than environmental issues). In addition, clinician bias, 
                    institutional racism, and language barriers make the problems of access and inclusion 
                    all the greater for people of color and immigrants.  At the same time, lack of 
                    information and clinician bias, including homophobia, transphobia, and racism, limit 
                    or block access to needed health care (including hormone replacement therapy, 
                      gender-appropriate treatment planning, and gender confirmation surgeries, as well 
                      as needed sexual health care) to transgender and nonbinary individuals, especially 
                    those of color.
                </p>
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Appearance</p>
                <p>
                    Appearance can be a source of privilege if one is considered attractive or if 
                    one’s phenotype or dress is consistent with the dominant racial, ethnic/tribal,  
                    religious, or economic group. It can be marginalizing if not, especially in the 
                    case of disfigurement or visible disability. In many societies, being tall is 
                    privileging, as is looking lean and physically fit, and, in most western societies, 
                    youthful. In most western societies, being either obese or overly thin is marginalizing, 
                    although an overweight or even obese appearance is privileged as a mark of wealth in 
                    some cultures. Some societies, and more affluent (or sometimes even economically 
                      struggling) people in most societies emphasize appearance to the point that many 
                    people actively transform their appearance through expensive and time-consuming 
                    non-invasive cosmetic procedures, cosmetic surgeries, some of which are dangerous 
                    and distorting of the body, Botox, and the like.  Appearance consistent with being 
                    cisgender and gender conforming is privileging in most contexts, while appearing 
                    genderqueer, or transgender, or gender nonconforming or as gay or is marginalizing 
                    in most contexts. Dress, which is often a signal of class position and can be 
                    privileging or marginalizing. In addition, dressing and grooming oneself in a way 
                    that stands out as “different” or “odd (such as wearing shabby clothes and unkempt 
                      hair to an office, or the mismatched, gaudy clothing and makeup and unkempt hair 
                      and often seen when someone is in a psychiatric crisis) is marginalizing.
                </p> 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Age</p>
                <p>
                  The privilege or marginalization associated with different ages is very culture-specific. 
                  For instance, in many Asian, African, and indigenous societies, the older you are, 
                  the more respect and status you receive from others. Elders in those cultures tend to be 
                  seen as sources of wisdom to be respected and obeyed as a result, although that is 
                  changing somewhat with globalization. In the U.S. and other western societies, in 
                  contrast, youth is exalted and is generally privileged (with some exceptions), 
                  while old age is associated with being decrepit or senile and is often marginalized, 
                    especially occupationally. This is somewhat less the case in professional occupations 
                  that require higher education and that value experience over physical strength or 
                  technological savvy, while working-class occupations tend to require strength or 
                  speed and business job require speed and being up-to-date with technology. 
                  Once a person is well into old age, however, marginalization tends to set in for 
                  professionals as well. 
                </p> 
                <p>
                  Adult attitudes toward childhood and adolescence vary across different cultures 
                  and across wealthy, middle-income and wealthy countries, although minors are 
                  generally are more dependent and have fewer rights than adults. In poorer countries 
                  and communities, even families’ economic necessity may force even very young 
                  children to abandon – or never have the chance to attend – school – and into 
                  demanding and underpaid work or, for girls, marriage, even before puberty. 
                  In contrast, youth in wealthy nations, especially those in more class-privileged 
                  families, usually benefit from finishing secondary school and a large minority get 
                  higher education as well, which offers youth and the adults they become both 
                  economic and occupational protection.
                </p>
                <p>
                  Age or generation also has cultural implications in that different generations often 
                  trend differently in relation to attitudes about politics, race, gender and reproductive 
                  rights, sexual orientation, gender identity, gender expression, and immigration policy, 
                  and have different levels of skill and access to computers and smart phones, among other 
                  things. Finally, as life expectancy increases (however unequally among racial and 
                  economic groups,  with shorter life spans for poorer people worldwide and for 
                  Black and Native American and US-born Latinx people in the U.S.), how people can 
                  expect to live out their family and work lives have shifted.
                </p>
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Raised By</p>
                <p>
                  In most, but not all, societies, being raised, or having been raised by both birth parents who are in a 
                  heterosexual first marriage to each other is privileging, although that no longer 
                  describes the majority of households with children in most western societies. In recent 
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
                  that provide universal parental leave and subsidized childcare, and in some U.S. 
                  communities where single parent families are common. Being raised by adoptive parents 
                  (through formal or informal adoption) is still somewhat marginalizing (adoptive family 
                  members are often asked about their “real” parents or children, as if adoption did not 
                  create real families) in some societies but highly stigmatized in others. Being raised 
                  by a stepparent (or series of stepparents) can be marginalizing as well, although less 
                  so as divorce and remarriage has become the statistical norm in many communities. 
                  Being raised by foster parents, even when they are birth relatives, is highly 
                  marginalizing. In many countries, therefore, children who do not come from two-parent 
                  families are raised in orphanages (and infertile or single adults go involuntarily 
                  childless). Some children live apart from one or both parents because of parental 
                  death or abandonment, or court-decided custody arrangements, or parental imprisonment. 
                  Other children are kicked out of, or run away from, their homes because their parents 
                  respond abusively to their coming out as gay, transgender, or genderqueer. Still others 
                  lose their parents in war or refugee situations, or during a large-scale disaster or 
                  pandemic.
                </p> 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Guardians’ Marital Status</p>
                <p>
                  Being raised by parents who are married to each other is a privileged 
                  position. Although the stigma attached to families headed by single 
                  parents has greatly diminished in many countries in the world in 
                  recent decades and has largely disappeared in some European countries, 
                  it continues in countries and communities that are more religiously 
                  and culturally conservative. Even in communities that are fully 
                  accepting single parent families, however, household income is 
                  generally much lower in those families, especially the majority 
                  that are headed by women, than in families headed by single men or 
                  heterosexual or gay male couples because of income disparities 
                  between the genders. That income disparity is all the greater in 
                  poor communities and communities of color, although some countries 
                  provide enough universal financial support for families, including 
                  childcare and subsidies for children, that that disparity is blunted. 
                  In many societies, especially culturally and religiously conservative 
                  ones,  divorce is frowned upon at best and some countries (especially 
                    those that are predominantly Catholic) only made divorce legal in 
                  the late 20th century or early 21st century. 

                </p> 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Parental Status</p>
                <p>
                  Whether being a parent or guardian is privileged or marginalized depends on 
                  one’s age, marital status, sexual orientation,  and whether one (or one’s child) 
                  is cisgender, transgender, or genderqueer. Parental status is also affected by 
                  household income and geographical region, since some countries’ governments offer 
                  paid parental leave and subsidized childcare, as well as free primary, secondary, 
                  and in some cases, higher education, while others do not. In many communities or 
                  regions, becoming a parent or guardian before one’s 20s is marginalized, while in 
                  others, doing so is common; in most areas, not becoming a parent before one’s 40s 
                  is marginalized and a source of pity or moral judgment, even when that is a 
                  thought-out choice and not the unwelcome result of infertility or being single. 
                  Becoming a parent without being in a heterosexual marriage is marginalized in 
                  many or most communities and regions world-wide, especially those with a 
                  dominant religion that is socially conservative.
                </p> 

                <p>
                  It is increasingly common for committed lesbian couples to become parents, 
                  while gay male couples, who, as men tend to have higher incomes, may 
                    face opposing pressures to parent or to remain childfree, depending on 
                  their local and gay community. This marginalization is less prevalent in 
                  areas that are politically liberal, and that provide economic and child 
                  care support to families with children. 
                </p>

                <p>
                    Whether a person is a birthparent raising children, or an adoptive or 
                    stepparent, the partner of the birth or adoptive parent, or a foster 
                    parent or relative raising a child also affects relative privilege and 
                    marginalization, as does the sexual orientation and gender identity of 
                    the parent. In contrast, having given up custody of one’s child or 
                    children via adoption or abandonment or having lost custody in court 
                    is marginalizing, as, in most cases, being a surrogate mother. 
                    Having a child who is healthy and able bodied, who has a particular 
                    talent, and who does not have problems with mental health or substance 
                    abuse is privileging for parents, while having a child who has 
                    chronically illness or disability (especially if those are apparent to 
                    others) or who has problems with mental illness or substance abuse or 
                    limited cognitive ability is marginalizing, especially if the parent 
                    has limited access to needed health or mental health care or other 
                    services for the child. Being a parent with adequate personal or 
                    extended family assets and income or higher is privileging, while 
                    being a parent who is poor is marginalizing. Being a gay, lesbian, 
                    or a transgender, or genderqueer parent, or one with problems of 
                    chronic illness or disability or of mental illness or substance abuse 
                    is marginalizing in most communities. Finally, having aborted a 
                    pregnancy is often marginalized and is illegal in religiously and 
                    politically conservative regions and countries, while miscarrying 
                    or having a stillbirth are grievous losses that go widely 
                    unrecognized by others. 

                </p>
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Childhood Household Income</p>
                <p>
                </p> 
            </Typography>


            <Typography variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Childhood Household Income</p>
                <p>
                </p> 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Childhood Household Income</p>
                <p>
                </p> 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Childhood Household Income</p>
                <p>
                </p> 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Childhood Household Income</p>
                <p>
                </p> 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Childhood Household Income</p>
                <p>
                </p> 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Childhood Household Income</p>
                <p>
                </p> 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Childhood Household Income</p>
                <p>
                </p> 
            </Typography>

            <Typography variant="h6" align="left" style={{ marginLeft: '15%', marginRight: '15%', paddingBottom: '20px', paddingTop: '0px'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Childhood Household Income</p>
                <p>
                </p> 
            </Typography>

        </div>

  )
};

export default AreasOfIdentity;