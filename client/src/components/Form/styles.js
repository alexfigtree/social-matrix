/* eslint-disable */
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    marginLeft: '10%',
    marginRight: '10%',
    '& .MuiTextField-root': {
      margin: theme.spacing(1),

    },
  },
  Box: {
    paddingTop: theme.spacing(5),
    paddingLeft: theme.spacing(30),
    paddingRight: theme.spacing(30),

  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingTop: '40px',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
    marginTop: 20
  },
  questionLabel: {
    fontSize: '1.2em',
    textAlign: 'left',
    color: 'black'
  }

}));
