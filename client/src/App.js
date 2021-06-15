import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import ReactDOM from "react-dom";

import FormPostContainer from './FormPostContainer';
import Home from './components/Home'

import Form from './components/Form/Form';
//q1
import EducLevel from './components/Questions/EducLevel';
//q2
import GuardiansEduc from './components/Questions/GuardiansEduc';
//q3
import Occupation from './components/Questions/Occupation';
//q4
import GuardiansOccup from './components/Questions/GuardiansOccup';
//q5
import HouseholdIncome from './components/Questions/HouseholdIncome';
//q6
import ChildhoodIncome from './components/Questions/ChildhoodIncome';
//q7
import GuardiansChildHouseIncome from './components/Questions/GuardiansChildHouseIncome';
//q8
import Access from './components/Questions/Access';
//q9
import GuardiansAccess from './components/Questions/GuardiansAccess';
//q10
import Race from './components/Questions/Race';
//q11
import Ethnicity from './components/Questions/Ethnicity';
//q12
import NationOfOriginCitizenship from './components/Questions/NationOfOriginCitizenship';
//q13
import LanguageSpoken from './components/Questions/LanguageSpoken';
//q14
import FamilyReligion from './components/Questions/FamilyReligion';
//q15
import ChosenReligion from './components/Questions/ChosenReligion';
//q16
import Politics from './components/Questions/Politics';
//q17
import GeoRegion from './components/Questions/GeoRegion';
//q18
import ImpactHistTimes from './components/Questions/ImpactHistTimes';
//q19
import RelationToMilitary from './components/Questions/RelationToMilitary';
//q20
import RelationLegalSystem from './components/Questions/RelationLegalSystem';
//q21
import MHSubstUse from './components/Questions/MHSubstUse';
//q22
import CognitiveAbilityStyle from './components/Questions/CognitiveAbilityStyle';
//q23
import HealthAbility from './components/Questions/HealthAbility';
//q24
import Appearance from './components/Questions/Appearance';
//q25
import Age from './components/Questions/Age';
//q26
import RaisedBy from './components/Questions/RaisedBy';
//q27
import GuardiansMaritalStatus from './components/Questions/GuardiansMaritalStatus';
//q28
import ParentalStatus from './components/Questions/ParentalStatus';
//q29
import MaritalStatus from './components/Questions/MaritalStatus';
//q30
import SexualOrientation from './components/Questions/SexualOrientation';
//q31
import GenderID from './components/Questions/GenderID';
//q32
import GenderExpression from './components/Questions/GenderExpression';
//q33
import SexAtBirth from './components/Questions/SexAtBirth';
//q34
import UniqueHistory from './components/Questions/UniqueHistory';

import Results from './components/Results/Results';


const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/intro" component={FormPostContainer} />

      <Route path="/form" component={Form} />
      <Route path="/q1" component={EducLevel} />
      <Route path="/q2" component={GuardiansEduc} />
      <Route path="/q3" component={Occupation} />
      <Route path="/q4" component={GuardiansOccup} />
      <Route path="/q5" component={HouseholdIncome} />
      <Route path="/q6" component={ChildhoodIncome} />
      <Route path="/q7" component={GuardiansChildHouseIncome} />
      <Route path="/q8" component={Access} />
      <Route path="/q9" component={GuardiansAccess} />
      <Route path="/q10" component={Race} />
      <Route path="/q11" component={Ethnicity} />


      <Route path="/q12" component={NationOfOriginCitizenship} />
      <Route path="/q13" component={LanguageSpoken} />
      <Route path="/q14" component={FamilyReligion} />
      <Route path="/q15" component={ChosenReligion} />
      <Route path="/q16" component={Politics} />
      <Route path="/q17" component={GeoRegion} />
      <Route path="/q18" component={ImpactHistTimes} />
      <Route path="/q19" component={RelationToMilitary} />
      <Route path="/q20" component={RelationLegalSystem} />

      <Route path="/q21" component={MHSubstUse} />

      <Route path="/q22" component={CognitiveAbilityStyle} />
      <Route path="/q23" component={HealthAbility} />
      <Route path="/q24" component={Appearance} />
      <Route path="/q25" component={Age} />
      <Route path="/q26" component={RaisedBy} />
      <Route path="/q27" component={GuardiansMaritalStatus} />
      <Route path="/q28" component={ParentalStatus} />
      <Route path="/q29" component={MaritalStatus} />
      <Route path="/q30" component={SexualOrientation} />
      <Route path="/q31" component={GenderID} />
      <Route path="/q32" component={GenderExpression} />
      <Route path="/q33" component={SexAtBirth} />
      <Route path="/q34" component={UniqueHistory} />

      <Route path="/results" component={Results} />


    </Switch>
  )
  
};

export default App;

