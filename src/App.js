import './App.css';
import { useState, useEffect } from 'react';
import Country from './Componnents/Country/Country';

function App() {

  const[countries,setCountries] = useState([])
  
  useEffect(() => {
      fetch('https://restcountries.com/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data));
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <h1> Hi i am country! {countries.length}</h1>
          {
            countries.map(country => <Country country={country} key={country.alpha3Code}></Country>)
          }
       
      </header>
    </div>
  );
}

export default App;
