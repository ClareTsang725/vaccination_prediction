// modules
import { useState } from 'react';
// css
import './App.css';
// components
import DatasetPreviewer from './components/DatasetPreviewer';

function App() {
  // metadata
  const countryList = ['Australia', 'America', 'Taiwan', 'China', 'Hong Kong']
  const vaccinationList = ['Pfiza', 'Moderna']
  // selections
  const [selectedCountry, setSelectedCountry] = useState('')
  const [selectedVaccination, setSelectedVaccination] = useState('')

  const handleCountrySelectionChange = (value) => {
    setSelectedCountry(value)
  }
  const handleVaccinationSelectionChange = (value) => {
    setSelectedVaccination(value)
  }

  return (
    <div className="app-container">
      <div className='app-header'>
        <h1>Vaccination Forcast</h1>
      </div>
      <div className='app-body'>   
      {/* Selections */}
        <div className='selection-section'>
          <div className='selection-item'>
            <label>Country :{" "}</label>
            <select 
              value={selectedCountry} 
              onChange={(e) => handleCountrySelectionChange(e.target.value)}
            >
              {countryList.map((country) => {
                return(
                  <option key={country} value={country}>{country}</option>
                )
              })}
            </select>
          </div>
          <div className='selection-item'>
            <label>Vaccination : {" "}</label>
            <select 
              value={selectedVaccination} 
              onChange={(e) => handleVaccinationSelectionChange(e.target.value)}
            >
              {vaccinationList.map((vaccination) => {
                return(
                  <option key={vaccination} value={vaccination}>{vaccination}</option>
                )
              })}
            </select>
          </div>
        </div>
        {/* result */}
        <div className='result-section'>
          <div className='result-item' style={{textAlign:'right'}}>
            <h3>Result:{" "}</h3>
          </div>
          <div className='result-item' style={{textAlign:'left'}}>
            <h3>total vaccine needed</h3>
            <div>
              <label>1 months:{" "}</label>
              <input />
            </div>
            <div >
              <label>6 months:{" "}</label>
              <input />
            </div>
            <div>
              <label>12 months:{" "}</label>
              <input />
            </div>
          </div>
        </div>
        <div>
          <DatasetPreviewer />
        </div>
      </div>
    </div>
  );
}

export default App;
