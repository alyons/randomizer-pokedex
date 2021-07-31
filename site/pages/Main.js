import React from 'react';
import { Link } from 'react-router-dom';

const Main = props => {
  return (
    <>
      <div>This is the main page</div>
      <Link to="/pokemon/1">Bulbasaur</Link>
    </>
  )
};

export default Main;
