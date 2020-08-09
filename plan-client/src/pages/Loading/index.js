import React from 'react';
import './index.css';

export default function (props) {
  return <section className="mkbug__loading">
    <div className="loading__icon">
      <img
        className="loading__img"
        src={process.env.PUBLIC_URL + '/assets/logo.png'}
        alt="ICON"
      />
      <div>Loading...</div>
    </div>
  </section>
}