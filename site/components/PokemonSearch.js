import React from 'react';

import {
  TextField
} from '@material-ui/core';

import {
  Autocomplete
} from '@material-ui/lab';

import POKEMON_LIST from '../pokemonList';

const optionObjects = POKEMON_LIST.map((p, i) => {
  return {
    dexNumber: i + 1,
    name: p
  }
});

const PokemonSearch = props => {
  let {
    id,
    value,
    onChange,
    label
  } = props;
  return (
    <Autocomplete
      id={id}
      options={optionObjects}
      value={value}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => <TextField {...params} label={label} />}
      onChange={onChange}
    />
  );
};

export default PokemonSearch;
