import React from 'react';

const RocketCard = () => (
  <div className="rocket-continer">
    <div className="img-continer">
      <img className="image" alt="rokect-img" src="https://reactjs.org/logo-og.png" />
    </div>
    <div className="text-continer">
      <h1>Rocketname</h1>
      <p>Rocket title</p>
      <button className="card-button" type="button">Reserve Rocket</button>
    </div>
  </div>
);

export default RocketCard;
