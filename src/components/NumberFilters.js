import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import '../styles/NumberFilters.css';

function NumberFilters() {
  const {
    filterByNumericValues,
    setFilterByNumericValues,
    selectedFilters,
    setSelectedFilters,
    handleOptions,
    handleClick,
  } = useContext(StarWarsContext);

  return (
    <div>
      <header>

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
            ['population', 'orbital_period', 'diameter',
              'rotation_period', 'surface_water']
              .filter(handleOptions).map((col) => (
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
      </header>
      {/* Exibir os filtros aplicados e o botão para remover */}
      {
        selectedFilters.map((filter, index) => (
          <div
            data-testid="filter"
            className="applied-filters"
            key={ index }
          >
            <button
              data-testid="button-remove-filters"
              type="button"
              className="remover"
              onClick={ () => {
                const newArraySelectedFilters = [...selectedFilters]
                  .splice(index, 1);
                setSelectedFilters(newArraySelectedFilters);
              } }
            >
              X
            </button>
            {`${filter.column} ${filter.comparison} ${filter.value}`}
          </div>
        ))
      }
    </div>

  );
}

export default NumberFilters;
