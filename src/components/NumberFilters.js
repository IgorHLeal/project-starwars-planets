import React, { useState } from 'react';
/* import StarWarsContext from '../context/StarWarsContext'; */

function NumberFilters() {
  /* const { data } = useContext(StarWarsContext); */

  const [filter, setFilter] = useState({
    column: '',
    comparison: '',
    value: '',
  });

  const [addFilters, setAddFilters] = useState([]);

  /* const handleChange = ({ target }) => {
    const change = target.value;
    setFilter(change);
  }; */

  return (
    <div>
      <select
        data-testid="column-filter"
        name="column"
        value={ filter.column }
        onChange={ ({ target }) => setFilter({
          ...filter,
          column: target.value,
        }) }
      >
        <option value="population">Population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>

      <select
        data-testid="comparison-filter"
        name="comparison"
        value={ filter.comparison }
        onChange={ ({ target }) => setFilter({
          ...filter,
          comparison: target.value,
        }) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        testid="value-filter"
        type="number"
        name="value"
        value={ filter.value }
        onChange={ ({ target }) => setFilter({
          ...filter,
          value: target.value,
        }) }
      />

      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => {
          setAddFilters([
            ...addFilters, filter,
          ]);
          setFilter({
            column: '',
            comparison: '',
            value: '',
          });
        } }
      >
        Adicionar
      </button>
    </div>
  );
}

export default NumberFilters;
