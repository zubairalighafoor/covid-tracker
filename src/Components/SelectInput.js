import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },

}));

export default function SelectInput({setCountry}) {
  const classes = useStyles();
  const [globalData, setGlobalData] = useState({});
  useEffect(() => {
    async function getData() {
      const url = await fetch("https://corona.lmao.ninja/v2/countries?yesterday=&sort=");
      let data = await url.json();
      setGlobalData(data);
    }
    getData();
  }, []);
  

  return (
    <div>
      <FormControl className={classes.formControl}>
        <NativeSelect
          defaultValue={"Global"}
          inputProps={{
            name: 'name',
            id: 'uncontrolled-native',
          }}
          onChange={(event)=>{
            setCountry(event.target.value)
            }}
        >
          <option value={"Global"} >Global</option>
          {Object.keys(globalData).map((val,ind)=>{
            return(
              <option value={globalData[ind]["country"]} key={ind}>{globalData[ind]["country"]}</option>
            )
          })}
        </NativeSelect>
      </FormControl>
    </div>
  );
}
