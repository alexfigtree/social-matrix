import React, { useState, useEffect } from 'react';
import { FormGroup, FormGroupLabel, FormControlLabel, Checkbox, Typography } from '@material-ui/core';
import questionData from './QuestionData';


function CheckboxField5_12(props) {
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
    //return setCheckedArray(answersArray);
/*    setChecked(event.target.checked);
    //setIsChecked(checkedValues);
    //update data:
    if(event.target.checked){
        let temp = answersArray;
        console.log("TEMP", typeof temp);
        //let temp = []
        temp.push(parseInt(event.target.value));
        setAnswersArray(temp);
        console.log('temp answersArray NEW', temp);
        //let tempVal = answersArray;
        //data.value = tempVal;
        //console.log('tempVal', tempVal);                   // update the name property, assign a new value                 
        //return { data };
        return temp; 
      //save as first
      //setData({data[0].value: event.target.value});
      //console.log('data.value', data.value);
      //let newValue = ;

    }*/



    
    //return { isChecked: checkedValues };
/*    this.setState(() => {
      return { checked: checkedValues };
    });*/
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
    
    //isDisabled(event.target.value);
    //update data:
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

      <FormGroup style={{flexDirection: 'col'}} onChange={onGlobalChange(answersArray)}>
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
            label="1 = Many generations before PERSON in the country"
            labelPlacement="end"
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
            label="2 = Two to three generations before PERSON in the country"
            labelPlacement="end"
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
            label="3 = One generation before PERSON in the country"
            labelPlacement="end"
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
            label="4 = PERSON and parents/guardians immigrated to country"
            labelPlacement="end"
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
            label="5 = Person is an immigrant or has a visa allowing long-term stays in country"
            labelPlacement="end"
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
            label="6 = PERSON is an undocumented immigrant"
            labelPlacement="end"
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
            label="7 = PERSON is an undocumented immigrant who has been deported or detained"
            labelPlacement="end"
          />
          
        
        </FormGroup>
        
    );
};

export default CheckboxField5_12;