import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

import logo from '../../assets/logo.svg';

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="Ecoleta" />
        </header>

        <main>
          <h1>Seu marketplace de coleta de resíduos.</h1>
          <p>
            Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.
          </p>

          <a href="/">
            <span>
              <FiLogIn />
            </span>
            <strong>Cadastre um pronto de coleta</strong>
          </a>
        </main>
      </div>
    </div>
  );
};

export default Home;
