import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
  <article className="teacher-item">
    <header>
      <img src="https://avatars0.githubusercontent.com/u/49077396?s=460&u=ba40a7af59afb17b79b314fc817a65fa28c325e0&v=4" alt="Rodrigo Tadeu"/>
      <div>
        <strong>Rodrigo Tadeu</strong>
        <span>Matemática</span>
      </div>
    </header>

    <p>
      Entusias das melhores formulas de matemática avançada usando barbantes.
      <br /> <br />
      Desenhista profissional de círculos e linhas retas usando pregos e barbantes.
    </p>

    <footer>
      <p>
        Preço/hora
        <strong>R$ 100,00</strong>
      </p>
      <button>
        <img src={whatsappIcon} alt="Whatsapp"/>
        Entrar em contato
      </button>
    </footer>
  </article>
  );
}

export default TeacherItem;