import React, { useState } from 'react';
import './App.css';
import Gd from './Components/Grid';
import Bottom from './Components/Bottom';
import SearchAppBar from './Components/SearchAppBar'
function App() {
  const [country,setCountry]=useState("Global");
  return (
    <div>
      <SearchAppBar setCountry={setCountry}/>
      <Gd country={country}/>
      <Bottom />
    </div>
  );
}

export default App;
