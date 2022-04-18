const STARWARS_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function fetchStarWarsPlanets() {
  const response = await fetch(STARWARS_API);
  const data = await response.json();

  return data.results;
}

export default fetchStarWarsPlanets;
