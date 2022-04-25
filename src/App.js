import React from 'react';
import './App.css';
import StarWarsProvider from './context/StarWarsProvider';
import Table from './components/Table';
import SearchPlanets from './components/SearchPlanets';
import NumberFilters from './components/NumberFilters';

function App() {
  return (
    <StarWarsProvider>
      <div className="main">
        <SearchPlanets />
        <NumberFilters />
        <Table />
      </div>
    </StarWarsProvider>
  );
}

export default App;
