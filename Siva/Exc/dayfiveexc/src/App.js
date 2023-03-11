import React from 'react';
import DeStruct from './DeStruct';
import ArrayMothods from './ArrayMothods';
import RefsExc from './RefExc';
import './App.css';

function App() {
  return (
    <div className="App">
      <DeStruct />
      <p>--------------------------</p>
      <ArrayMothods />
      <p>--------------------------</p>
      <RefsExc />
    </div>
  );
}

export default App;
