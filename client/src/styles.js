import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  heading: {
    color: 'rgba(0,0,0, 1)',
  },
  image: {
    marginLeft: '15px',
  },
  //From Phase 1

  tooltip: {
  	fill: 'blue',
  	'& .hidden': {
  		display: 'none'
  	},
  	'& .text': {
  		fill: 'red'
  	}
  },
  tooltipTest:{
  	fill: 'purple'
  },
  test: {
  	color: 'black'
  },
  text: {
  	'& .tooltip': {
  		fill: 'red !important'
  	},
  },
  div: {
  	'& .tooltip': {

		  position: 'absolute',		
		  width: '60px',	
		  height: '28px',		
		  padding: '2px',	
		  background: 'white',
		  border: '1px',					
		  borderRadius: '8px'
		 /*  pointer-events: none;	This line needs to be removed */

  	}
  }
  //End of Phase 1 styles
}));
