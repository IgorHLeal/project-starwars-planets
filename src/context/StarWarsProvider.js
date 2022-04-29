import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchStarWarsPlanets from '../services/StarWarsAPI';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterPlanets, setFilterPlanets] = useState({
    filterByName: {
      name: '',
    },
  });
  // Estado para os inputs
  const [filterByNumericValues, setFilterByNumericValues] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });
  // Estado para o array de filtros
  const [selectedFilters, setSelectedFilters] = useState([]);

  useEffect(() => {
    console.log(selectedFilters);
  }, [selectedFilters]);

  // O array vazio ao final da função é equivalente ao didMount; Sempre que o estado é alterado ele executa novamente o bloco de código.
  // useEffect controla o fluxo de dados, trata efeitos colaterais de outras funções
  useEffect(() => {
    const setPlanets = async () => {
      const response = await fetchStarWarsPlanets();
      setData(response);
      setFilterPlanets(response);
    };
    setPlanets();
  }, []);

  const filterName = (value) => {
    value = value.toLowerCase();
    const newPlanet = filterPlanets.filter((name) => name.name
      .toLowerCase()
      .includes(value));
    setData(newPlanet);
  };

  const handleFilteredData = (line) => {
    const rowsData = [];

    selectedFilters.forEach((element) => {
      switch (element.comparison) {
      case 'maior que':
        rowsData.push(Number(line[element.column]) > Number(element.value));
        break;

      case 'menor que':
        rowsData.push(Number(line[element.column]) < Number(element.value));
        break;

      case 'igual a':
        rowsData.push((line[element.column]) === element.value);
        break;

      default:
        return true;
      }
    });

    // Retorna o resultado das comparações
    return rowsData.every((element) => element);
  };

  const handleClick = () => {
    setSelectedFilters([
      ...selectedFilters, filterByNumericValues,
    ]);
    setFilterByNumericValues({
      column: '',
      comparison: '',
      value: '',
    });
  };

  const contextValue = {
    data,
    filterName,
    filterByNumericValues,
    setFilterByNumericValues,
    handleFilteredData,
    handleClick,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
}.isRequired;

export default StarWarsProvider;

// ---------- REFERÊNCIAS ----------
// Para resolver o requisito 2 utilizei o link abaixo:
// https://pt.stackoverflow.com/questions/456689/filtro-de-tabela-pelo-nome-em-react
