import React, { useEffect, useState } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  confirm: {
    minWidth: 275,
    margin: 10,
    borderBottom: '10px solid blue',
  },
  recover: {
    minWidth: 275,
    margin: 10,
    borderBottom: '10px solid green',
  },
  death: {
    minWidth: 275,
    margin: 10,
    borderBottom: '10px solid red',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  pos: {
    marginBottom: 12,
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    height: '78vh',
    display: 'flex',
    flexDirection: 'column',
    color: theme.palette.text.secondary,
  },
  paper1: {
    padding: theme.spacing(0),
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    color: theme.palette.text.secondary,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));

export default function Gd({ country }) {
  const classes = useStyles();
  const [globalData, setGlobalData] = useState({});

  let url = (!country || country==='Global')?'https://corona.lmao.ninja/v2/all?yesterday=':`https://corona.lmao.ninja/v2/countries/${country}?yesterday=true&strict=true&query%20=`;
  useEffect(() => {
    async function getData() {
      const response = await fetch(url);
      let data = await response.json();
      setGlobalData(data);
    }
    getData();
  },[url]);
  const data1 = {
    labels: [
      'Total Cases',
      'Recovered',
      'Deaths'
    ],
    datasets: [
      {
        label: ['Total Cases',
          'Recovered',
          'Deaths'],
        backgroundColor: ['lightblue', 'lightgreen', 'pink'],
        borderColor: ['blue', 'green', 'red'],
        borderWidth: 1,
        hoverBackgroundColor: ['blue', 'green', 'red'],
        hoverBorderColor: ['blue', 'green', 'red'],
        data: [globalData.cases,globalData.recovered,globalData.deaths]
      }
    ]
  };
  const data = {
    labels: [
      'Cases',
      'Recovered',
      'Deaths'
    ],
    datasets: [{
      label: 'Bar Chart',
      data: [globalData.cases,globalData.recovered,globalData.deaths],
      backgroundColor: [
        'lightblue',
        'lightgreen',
        'pink'
      ],
      borderColor: ['blue', 'green', 'red'],
      borderWidth: 1,
      hoverBackgroundColor: ['blue', 'green', 'red'],
    }]
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper1}>
            <h1>{country}</h1>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <Card className={classes.confirm}>
              <CardContent>
                <Typography className={classes.title} variant="h5" color="textSecondary" gutterBottom>
                  CONFIRMED CASES
                </Typography>
                <Typography variant="h4" component="h2">
                  {globalData.cases}
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.recover}>
              <CardContent>
                <Typography className={classes.title} variant="h5" color="textSecondary" gutterBottom>
                  RECOVERED
                </Typography>
                <Typography variant="h4" component="h2">
                  {globalData.recovered}
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.death}>
              <CardContent>
                <Typography className={classes.title} variant="h5" color="textSecondary" gutterBottom>
                  DEATHS
                </Typography>
                <Typography variant="h4" component="h2">
                  {globalData.deaths}
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <Bar
              data={data1}
              width={100}
              height={50}
              options={{
                maintainAspectRatio: false
              }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <Doughnut marginTop={'100px'} data={data} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
