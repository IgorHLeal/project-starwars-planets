import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchStarWarsPlanets from '../services/StarWarsAPI';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  console.log(data);
  // O array vazio ao final da função é equivalente ao didMount; Sempre que o estado é alterado ele executa novamente o bloco de código.
  // useEffect controla o fluxo de dados, trata efeitos colaterais de outras funções
  useEffect(() => {
    const setPlanets = async () => {
      const response = await fetchStarWarsPlanets();
      setData(response);
    };
    setPlanets();
  }, []);

  const contextValue = {
    data,
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
