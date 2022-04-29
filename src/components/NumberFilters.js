import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function NumberFilters() {
  const {
    filterByNumericValues,
    setFilterByNumericValues,
    handleClick,
  } = useContext(StarWarsContext);

  /* const handleChange = ({ target }) => {
    const change = target.value;
    setFilter(change);
  }; */

  return (
    <div>
      <select
        data-testid="column-filter"
        name="column"
        value={ filterByNumericValues.column }
        onChange={ ({ target }) => setFilterByNumericValues({
          ...filterByNumericValues,
          column: target.value,
        }) }
      >
        {
          ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water']
            .map((col) => (
              <option
                key={ col }
                value={ col }
              >
                { col }
              </option>
            ))
        }
        {/* <option value="population">Population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option> */}
      </select>

      <select
        data-testid="comparison-filter"
        name="comparison"
        value={ filterByNumericValues.comparison }
        onChange={ ({ target }) => setFilterByNumericValues({
          ...filterByNumericValues,
          comparison: target.value,
        }) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        data-testid="value-filter"
        type="number"
        name="value"
        value={ filterByNumericValues.value }
        onChange={ ({ target }) => setFilterByNumericValues({
          ...filterByNumericValues,
          value: target.value,
        }) }
      />

      <button
        data-testid="button-filter"
        type="button"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </div>
  );
}

export default NumberFilters;
