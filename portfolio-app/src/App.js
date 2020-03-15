import React from 'react';
import './App.css';
import PersonalInfo from './components/personalInfo/PersonalInfo';
import WorkInfo from './components/workInfo/WorkInfo';

function App() {
  return (
    <div className='container'>
      <PersonalInfo/>
      <WorkInfo />
    </div>
  );
}

export default App;
