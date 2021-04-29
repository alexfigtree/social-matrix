import React, { useState, useEffect } from 'react';
import { FormGroup, FormGroupLabel, FormControlLabel, Checkbox, Typography } from '@material-ui/core';
import questionData from './QuestionData';


function CheckboxField_RaisedBy(props) {
  const [currentData, setCurrentData] = React.useState([]);
  //const [limit, setLimit] = React.useState(2);
  const [data, setData] = React.useState(questionData[0][0]);
  const [checked, setChecked] = React.useState(true);
  //const [q1_2, setq1_2] = useState(null);
  //let answersArray = [];
  //const [answersArray, setAnswersArray] = useState(new Array(2));
  const [answersArray, setAnswersArray] = useState([]);
  //const { id } = props;

  const questionNumber = props.id;

  //const [isChecked, setIsChecked] = useState([1,2,3,4,5,6,7]);
  //const [isChecked, setIsChecked] = useState(new Array(2));
  const [checkedArray, setCheckedArray] = useState([1,2,3,4,5,6,7]);

  //working
  const onGlobalChange = (answersArray) => {
    let globalTemp = answersArray;
    console.log("onGlobalChange array for id", globalTemp, ' ', props.id);
  };

  const isDisabled = (value, idName) => {
    return (
      //this disables all checkboxes in group, even the ones that are selected
      //disable if:
      //1)answers array is too long
      answersArray.length > 1  && !answersArray.includes(value) && idName === questionNumber+'-'+value
    );

  };
  
  const handleChange = async(event) => {
    setChecked(event.target.checked);

    let temp = answersArray;
    if(event.target.checked){
        //if checking box, do the following:
        temp.push(parseInt(event.target.value));

        //call isDisabled
        isDisabled(event.target.value, event.target.id);

    }else{
      //WORKING:
      //if unchecking box, do the following:
      let toDelete = temp.indexOf(parseInt(event.target.value));
      temp.splice(toDelete, 1);
    }
    //save latest state and corresponding question number:
    let questionId = event.target.id.slice(0, event.target.id.lastIndexOf('-'));
    console.log('values to save: ID: ', questionId);
    console.log('with value: ', temp);
    localStorage.setItem(questionId, temp);
    return temp; 
  };

    return (

      <FormGroup style={{flexDirection: 'row'}} onChange={onGlobalChange(answersArray)}>
          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-1"}
                //key={index}
                //checked={-1} 
                value={1}
                //checked={isChecked.indexOf(1) !== -1}
                onChange={handleChange} 
                
                name={questionNumber+"-1"} 
                disabled={isDisabled(1, questionNumber+"-1")}
                iconstyle={{fill: '#000'}}

                //disabled={shouldDisableCheckbox(1)}
              />
            }
            label="1 = Birth parent who raised/is raising PERSON"
            labelPlacement="top"
          />

          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-2"}
               
                //checked={-1} 
                //checked={isChecked.indexOf(2) !== -1}
                value="2"
                onChange={handleChange} 
                name={questionNumber+"-2"}
                disabled={isDisabled(2, questionNumber+"-2")}
                //disabled={shouldDisableCheckbox(2)}
                iconstyle={{fill: '#000'}}
              />
            }
            label="2 = Adoptive parent who raised/is raising PERSON"
            labelPlacement="top"
          />

          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-3"}
                //checked={-1} 
                //checked={isChecked.indexOf(3) !== -1}
                onChange={handleChange} 
                value="3"
                name={questionNumber+"-3"} 
                disabled={isDisabled(3, questionNumber+"-3")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="3 = Stepparent involved in having raised/raising PERSON at least part- time"
            labelPlacement="top"
          />

          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-4"}
                value="4"
                //checked={-1} 
                onChange={handleChange} 
                name={questionNumber+"-4"}
                disabled={isDisabled(4, questionNumber+"-4")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="4 = Relative or Friend involved in having raised/is raising PERSON"
            labelPlacement="top"
          />


          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-5"}
                //checked={-1} 
                onChange={handleChange} 
                value="5"
                name={questionNumber+"-5"} 
                disabled={isDisabled(5, questionNumber+"-5")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="5 = Foster parent who raised/is raising PERSON at least part-time"
            labelPlacement="top"
          />

          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-6"}
                //checked={-1} 
                onChange={handleChange} 
                value="6"
                name={questionNumber+"-6"}
                disabled={isDisabled(6, questionNumber+"-6")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="6 = Birth parent not involved in PERSON's life for all or some of PERSON's childhood"
            labelPlacement="top"
          />

          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-7"}
             
                //checked={-1} 
                onChange={handleChange} 
                value="7"
                name={questionNumber+"-7"} 
                disabled={isDisabled(7, questionNumber+"-7")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="7 = Institutional or street setting or lived/is living outside of a home"
            labelPlacement="top"
          />
          
        
        </FormGroup>
        
    );
};

export default CheckboxField_RaisedBy;