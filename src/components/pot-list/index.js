import React from 'react';
import moment from 'moment';
import './pot-list.css';

export default function PotList(props) {
  const dateFormat = 'DD.MMMM YYYY';
  return (
    <div className="pot-list">
      {
        props.pots.map(pot => (
          <div className="pot" key={pot.gameId}>
            <div className="inner">
              <h3>{pot.gameName}</h3>
              <p>Frist: {moment(pot.date).format(dateFormat)}</p>
              <p>Pott: {pot.description}</p>
            </div>
          </div>
        ))
      }
    </div>
  );
}