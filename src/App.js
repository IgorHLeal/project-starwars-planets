import React from 'react';
import './App.css';
import StarWarsProvider from './context/StarWarsProvider';
import Table from './components/Table';
import SearchPlanets from './components/SearchPlanets';

function App() {
  return (
    <StarWarsProvider>
      <div className="main">
        <SearchPlanets />
        <Table />
      </div>
    </StarWarsProvider>
  );
}

export default App;
