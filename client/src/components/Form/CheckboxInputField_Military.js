import React, { useState, useEffect } from 'react';
import { Box, FormGroup, FormGroupLabel, FormControlLabel, Checkbox, Typograph, TextField } from '@material-ui/core';
import questionData from './QuestionData';


function CheckboxInputField_Military(props) {
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

	function enableDisableTextBoxMixed(id, isChecked) {
        var mixedRace = document.getElementById("mixedRace");
        mixedRace.disabled = isChecked ? false : true;
        if (!mixedRace.disable) {
            mixedRace.focus();
        }
    }

	function enableDisableTextBoxOther(id, isChecked) {
        var otherRace = document.getElementById("otherRace");
        otherRace.disabled = isChecked ? false : true;
        if (!otherRace.disabled) {
            otherRace.focus();
        }
    }
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
  
  const handleTextFieldChange = async(event) => {

  }

  const handleChange = async(event) => {
  	console.log('get right id only call when necessary', event.target.id);
  	console.log('what is checked value for target id?', event.target.value);

  	if(event.target.id == "5.1-5"){
  		enableDisableTextBoxMixed(event.target.id, event.target.checked);
  	}

  	if(event.target.id == "5.1-7"){
  		enableDisableTextBoxOther(event.target.id, event.target.checked);
  	}
  	
  	if(event.target.id == '5.1-5' || event.target.id == '5.1-7'){
  		handleTextFieldChange()
  	}
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


    //Same for checkboxes with input
    localStorage.setItem(questionNumber, event.target.value);


    return temp; 
  };

    return (

      <FormGroup style={{flexDirection: 'column'}} onChange={onGlobalChange(answersArray)}>
          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-1"}
                //key={index}
                //checked={-1} 
                value="Government-sponsored military group"
                //checked={isChecked.indexOf(1) !== -1}
                onChange={handleChange} 
                
                name={questionNumber+"-1"} 
                disabled={isDisabled(1, questionNumber+"-1")}
                iconstyle={{fill: '#000'}}

                //disabled={shouldDisableCheckbox(1)}
              />
            }
            label="Government-sponsored military group"
            labelPlacement="left"
          />

          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-2"}
               
                //checked={-1} 
                //checked={isChecked.indexOf(2) !== -1}
                value="Paramilitary or guerrilla military group"
                onChange={handleChange} 
                name={questionNumber+"-2"}
                disabled={isDisabled(2, questionNumber+"-2")}
                //disabled={shouldDisableCheckbox(2)}
                iconstyle={{fill: '#000'}}
              />
            }
            label="Paramilitary or guerrilla military group"
            labelPlacement="left"
          />

          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-3"}
                //checked={-1} 
                //checked={isChecked.indexOf(3) !== -1}
                onChange={handleChange} 
                value="Child soldier"
                name={questionNumber+"-3"} 
                disabled={isDisabled(3, questionNumber+"-3")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="Child soldier"
            labelPlacement="left"
          />

          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-4"}
                value="military sex slave"
                //checked={-1} 
                onChange={handleChange} 
                name={questionNumber+"-4"}
                disabled={isDisabled(4, questionNumber+"-4")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="military sex slave"
            labelPlacement="left"
          />

          <Box style={{flexDirection: 'row'}}>
	          <FormControlLabel
	            control={
	              <Checkbox 
	                id={questionNumber+"-5"}
	                //checked={-1} 
	                onChange={handleChange} 
	                value="Other - please specify"
	                name={questionNumber+"-5"} 
	                disabled={isDisabled(5, questionNumber+"-5")}
	                iconstyle={{fill: '#000'}}
	              />
	            }
	            label="Other - please specify or put N/A"
	            labelPlacement="left"
	            style={{float: 'left'}}
	          />
	          <TextField
		            id="other"
		            name="other"
		            //variant="outlined"
		            //margin="none"
		            label=""
		            onChange={(event) => {
		                handleChange(event)
		            }}
		            variant="outlined" 
		            fullWidth
		            disabled="disabled"
		            style={{float: 'right'}}
		        />
          </Box>


        </FormGroup>
        
    );
};

export default CheckboxInputField_Military;
