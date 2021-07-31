import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import PokemonSearch from './PokemonSearch';

const Header = props => {
  const history = useHistory();

  const onChange = (event, newValue) => {
    if (!!newValue) {
      history.push(`/pokemon/${newValue.dexNumber}`);
    }
  }

  return (
    <>
      <div>I am the header...</div>
      <PokemonSearch 
        {...{ id: 'search-bar', label: 'Search for a Poekmon...', onChange: onChange }}
      />
    </>
  )
};

export default Header;
