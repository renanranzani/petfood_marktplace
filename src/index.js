import React from 'react';
import ReactDOM from 'react-dom';

import Checkout from './pages/checkout'
import Cadastro from './pages/cadastro'
import Petshop from './pages/petshop'
import './styles/global.css'

ReactDOM.render(
  <React.StrictMode>
    <Checkout />
  </React.StrictMode>,
  document.getElementById('root')
);

