import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height:'10px'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    justifyContent:'center',
    textAlign:'center',
    fontSize:'35px',
  },
  name:{
      color:'black'
  }
}));

export default function Bottom() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Developed by :: <span className={classes.name}>Zubair Ali Ghafoor</span>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}