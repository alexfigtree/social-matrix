
import React from 'react';
import { Switch, Route } from 'react-router';
import ReactDOM from "react-dom";
import routes from './constants/routes.json';
import App from './containers/App';
import Home from './components/Home';
import FormPostContainer from './FormPostContainer';

import Form from './components/Form/Form';
import EducLevel from './components/Questions/EducLevel';
import GuardiansEduc from './components/Questions/GuardiansEduc';
import Occupation from './components/Questions/Occupation';
import GuardiansOccup from './components/Questions/GuardiansOccup';
import HouseholdIncome from './components/Questions/HouseholdIncome';
import ChildhoodIncome from './components/Questions/ChildhoodIncome';
import GuardiansChildHouseIncome from './components/Questions/GuardiansChildHouseIncome';
import Access from './components/Questions/Access';
import GuardiansAccess from './components/Questions/GuardiansAccess';
import Race from './components/Questions/Race';
import Ethnicity from './components/Questions/Ethnicity';
import NationOfOriginCitizenship from './components/Questions/NationOfOriginCitizenship';
import LanguageSpoken from './components/Questions/LanguageSpoken';
import FamilyReligion from './components/Questions/FamilyReligion';
import ChosenReligion from './components/Questions/ChosenReligion';
import Politics from './components/Questions/Politics';
import GeoRegion from './components/Questions/GeoRegion';
import ImpactHistTimes from './components/Questions/ImpactHistTimes';
import RelationToMilitary from './components/Questions/RelationToMilitary';
import RelationLegalSystem from './components/Questions/RelationLegalSystem';

import MHSubstUse from './components/Questions/MHSubstUse';

import CognitiveAbilityStyle from './components/Questions/CognitiveAbilityStyle';
import HealthAbility from './components/Questions/HealthAbility';
import Appearance from './components/Questions/Appearance';
import Age from './components/Questions/Age';
import RaisedBy from './components/Questions/RaisedBy';
import GuardiansMaritalStatus from './components/Questions/GuardiansMaritalStatus';
import ParentalStatus from './components/Questions/ParentalStatus';
import MaritalStatus from './components/Questions/MaritalStatus';
import SexualOrientation from './components/Questions/SexualOrientation';
import GenderID from './components/Questions/GenderID';
import GenderExpression from './components/Questions/GenderExpression';
import SexAtBirth from './components/Questions/SexAtBirth';
import UniqueHistory from './components/Questions/UniqueHistory';

import Results from './components/Results/Results';

export default () => (
  <App>
    <Switch>
      
      <Route path={routes.HOME} component={HomePage} />
	  <Route path={routes.INTRO} component={FormPostContainer} />

	  <Route path={routes.FORM} component={Form} />
      <Route path={routes.EDUCLEVEL} component={EducLevel} />
      <Route path={routes.GUARDIANSEDUC} component={GuardiansEduc} />
      <Route path={routes.OCCUPATION} component={Occupation} />
      <Route path={routes.GUARDIANSOCCUP} component={GuardiansOccup} />
      <Route path={routes.HOUSEHOLDINCOME} component={HouseholdIncome} />
      <Route path={routes.CHILDHOODINCOME} component={ChildhoodIncome} />
      <Route path={routes.GUARDIANSCHILDHOUSEINCOME} component={GuardiansChildHouseIncome} />
	  <Route path={routes.ACCESS} component={Access} />
	  <Route path={routes.GUARDIANSACCESS} component={GuardiansAccess} />
	  <Route path={routes.RACE} component={Race} />
	  <Route path={routes.ETHNICITY} component={Ethnicity} />
	  <Route path={routes.NATIONOFORIGINCITIZENSHIP} component={NationOfOriginCitizenship} />

	  <Route path={routes.LANGUAGESPOKEN} component={LanguageSpoken} />
	  <Route path={routes.FAMILYRELIGION} component={FamilyReligion} />
	  <Route path={routes.CHOSENRELIGION} component={ChosenReligion} />
	  <Route path={routes.POLITICS} component={Politics} />
	  <Route path={routes.GEOREGION} component={GeoRegion} />
	  <Route path={routes.IMPACTHISTTIMES} component={ImpactHistTimes} />
	  <Route path={routes.RELATIONTOMILITARY} component={RelationToMilitary} />
	  <Route path={routes.RELATIONLEGALSYSTEM} component={RelationLegalSystem} />

	  <Route path={routes.MHSUBSTUSE} component={MHSubstUse} />

      <Route path={routes.COGNITIVEABILITYSTYLE} component={CognitiveAbilityStyle} />
      <Route path={routes.HEALTHABILITY} component={HealthAbility} />
      <Route path={routes.APPEARANCE} component={Appearance} />
      <Route path={routes.AGE} component={Age} />
      <Route path={routes.RAISEDBY} component={RaisedBy} />
      <Route path={routes.GUARDIANSMARITALSTATUS} component={GuardiansMaritalStatus} />
      <Route path={routes.PARENTALSTATUS} component={ParentalStatus} />
      <Route path={routes.MARITALSTATUS} component={MaritalStatus} />
      <Route path={routes.SEXUALORIENTATION} component={SexualOrientation} />
      <Route path={routes.GENDERID} component={GenderID} />
      <Route path={routes.GENDEREXPRESSION} component={GenderExpression} />
      <Route path={routes.SEXATBIRTH} component={SexAtBirth} />
      <Route path={routes.UNIQUEHISTORY} component={UniqueHistory} />

	  <Route path={routes.RESULTS} component={Results} />
    </Switch>
  </App>
);

