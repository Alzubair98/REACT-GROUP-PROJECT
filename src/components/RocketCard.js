import React from 'react';
import propTypes from 'prop-types';

const RocketCard = (props) => {
  const { name, desc, src } = props;

  return (
    <div className="rocket-continer">
      <div className="img-continer">
        <img className="image" alt="roket-img" src={src} />
      </div>
      <div className="text-continer">
        <h1>{name}</h1>
        <p>{desc}</p>
        <button className="card-button" type="button">Reserve Rocket</button>
      </div>
    </div>
  );
};

export default RocketCard;

RocketCard.propTypes = {
  name: propTypes.string,
  desc: propTypes.string,
  src: propTypes.string,
};

RocketCard.defaultProps = {
  name: 'default',
  desc: 'Non',
  src: 'no-img',
};
