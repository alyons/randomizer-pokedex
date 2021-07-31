import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Router from './Router';

const App = props => {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Router />
      </>
    </BrowserRouter>
  )
};

export default App;