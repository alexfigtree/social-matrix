import React, { useState, useEffect } from 'react';
import { Box, TextField, FormGroup, FormGroupLabel, FormControlLabel, Checkbox, Typography, RadioGroup, Radio } from '@material-ui/core';
import questionData from './QuestionData';

function RadioFieldWithInput(props) {
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

	let itemName = questionNumber + '-yes';
	localStorage.setItem(itemName, '');

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

	function enableDisableTextBoxYes(id, isChecked) {
	    var yesBox = document.getElementById("yes");
	    yesBox.disabled = isChecked ? false : true;
	    if (!yesBox.disabled) {
	        yesBox.focus();
	    }
	}

	const handleRadioButtonYes = async(event) => {
		console.log('just clicked radio button and checked value is', event.target.checked);
		setChecked(event.target.checked);
		enableDisableTextBoxYes(event.target.id, event.target.checked);
		let itemName = event.target.name + '-1';

		console.log('what is item name in handle radio button', itemName); //4.22-1
		console.log('what is value in handle radio button', event.target.value); //yes
		if(event.target.checked === true){
			localStorage.setItem(itemName, "Yes");
		}
	};
	const handleYesInput = async(event) => {
		let itemName = questionNumber + '-1-' + event.target.id;
		console.log('itemName', itemName);
		console.log('testvalue in input bos', event.target.value);
		localStorage.setItem(itemName, event.target.value);
	};

	const handleChange = async (event) => {
		localStorage.setItem(event.target.name, event.target.value);
		console.log('what is evnet atre glaue', event.target.value);
		if(event.target.value === 'Yes'){
			handleRadioButtonYes(event);
		}
	}; 
/*  
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
  };*/

    return (

		<RadioGroup aria-label="gender" id={questionNumber} name={questionNumber} onChange={handleChange}>
				
				<FormControlLabel
					control={<Radio />}
				  	label="Yes"
					value="Yes"
					name={questionNumber}
					labelPlacement="end"
				/>
				<TextField
				    id="yes"
				    name="yes"
				    label=""
				    onChange={(event) => {
				        handleYesInput(event)
				    }}
				    variant="outlined" 
				    disabled="disabled"
				/>
			

				<FormControlLabel 
					name={questionNumber}  
					value="No" 
					control={<Radio />} 
					label="No" 
				/>
				<FormControlLabel 
					name={questionNumber}  
					value="Unsure" 
					control={<Radio />} 
					label="Unsure" 
				/>
        </RadioGroup>

        
    );
};

export default RadioFieldWithInput;



          