import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchStarWarsPlanets from '../services/StarWarsAPI';

function StarWarsProvider({ children }) {
  const [data, setData] = useState({});

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
    <StarWarsContext.Provider value={ { contextValue } }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
}.isRequired;

export default StarWarsProvider;
