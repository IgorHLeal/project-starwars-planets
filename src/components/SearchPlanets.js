import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import '../styles/SearchPlanets.css';

function SearchPlanets() {
  const { filterName } = useContext(StarWarsContext);
  const [name, setName] = useState('');

  const handleChange = ({ target }) => {
    const inputValue = target.value;
    setName(inputValue);
    filterName(inputValue);
    /* setName(filterName(inputValue)); */
    // Dessa outra forma passa nos testes mas retorna um Warning
  };

  return (
    <div className="filter">
      <div className="filter-inputs">
        <h1>Project StarWars - Trybe</h1>
        <form>
          <input
            data-testid="name-filter"
            id="name-filter"
            type="text"
            name="name"
            value={ name }
            onChange={ handleChange }
          />
        </form>
      </div>
    </div>
  );
}

export default SearchPlanets;
