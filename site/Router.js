import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import PokemonData from './pages/PokemonData';

const Router = props => {
  return (
    <Switch>
      <Route path='/pokemon/:dexNumber' component={PokemonData}/>
      <Route exact path='*' component={Main} />
    </Switch>
  );
};

export default Router;
