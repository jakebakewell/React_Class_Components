import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Sasuke" lastName="Uchiha" age="17" hairColor="Black"/>
      <PersonCard firstName="Naruto" lastName="Uzumaki" age="17" hairColor="Blonde"/>
      <PersonCard firstName="Kakashi" lastName="Hatake" age="28" hairColor="White"/>
      <PersonCard firstName="Sakura" lastName="Haruno" age="17" hairColor="Pink"/>
    </div>
  );
}

export default App;
