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

  const contextValue = {
    data,
    filterName,
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
