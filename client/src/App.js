import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

import FormPostContainer from './FormPostContainer';
import Home from './Home'

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

/*

import RaisedBy from './components/Questions/RaisedBy';



import GuardiansAccess from './components/Questions/GuardiansAccess';
import GuardiansMaritalStatus from './components/Questions/GuardiansMaritalStatus';
import Race from './components/Questions/Race';
import Ethnicity from './components/Questions/Ethnicity';
import NationOfOrigin from './components/Questions/NationOfOrigin';
import CitizenshipStatus from './components/Questions/CitizenshipStatus';
import GenerationsInCountry from './components/Questions/GenerationsInCountry';
import LanguageSpoken from './components/Questions/LanguageSpoken';
import FamilyReligion from './components/Questions/FamilyReligion';
import ChosenReligion from './components/Questions/ChosenReligion';
import Politics from './components/Questions/Politics';
import GeoRegion from './components/Questions/GeoRegion';
import ImpactHistTimes from './components/Questions/ImpactHistTimes';
import RelationToMilitary from './components/Questions/RelationToMilitary';
import RelationLegalSystem from './components/Questions/RelationLegalSystem';
import RelationMHSystem from './components/Questions/RelationMHSystem';
import MHSubstAbuse from './components/Questions/MHSubstAbuse';
import CognitiveAbilityStyle from './components/Questions/CognitiveAbilityStyle';
import HealthAbility from './components/Questions/HealthAbility';
import Appearance from './components/Questions/Appearance';
import Age from './components/Questions/Age';
import ParentalStatus from './components/Questions/ParentalStatus';
import MaritalStatus from './components/Questions/MaritalStatus';
import SexualOrientation from './components/Questions/SexualOrientation';
import GenderID from './components/Questions/GenderID';
import GenderExpression from './components/Questions/GenderExpression';
import SexAtBirth from './components/Questions/SexAtBirth';
import UniqueHistory from './components/Questions/UniqueHistory';*/

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
    
    </Switch>
  )
  
};

export default App;

