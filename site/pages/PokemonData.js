import React from 'react';
import { useParams } from 'react-router';

const PokemonData = props => {

  let { dexNumber } = useParams();

  return (
    <div>This is the PokemonData Page: {dexNumber}</div>
  )
};

export default PokemonData;
