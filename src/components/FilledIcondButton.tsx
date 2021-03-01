import React from 'react';
import { Button, createMuiTheme, makeStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import AddRoundedIcon from '@material-ui/icons/AddRounded';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#794BFF',
    },
  },
});

const useStyles = makeStyles({
  button: {
    background: '#EAE8FE',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '46.68px',
    maxHeight: '44px',
    minWidth: '46.68px',
    minHeight: '44px',
  },
})

const FilledIcondButton: React.FC = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
    <Button variant="outlined" color="primary" className={classes.button}>
      <AddRoundedIcon />
    </Button>
    </ThemeProvider>
  )
}


export default FilledIcondButton;