import React from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { rocketAction } from '../redux/Rockets/rockets';

const RocketCard = (props) => {
  const dispatch = useDispatch();

  const {
    name, desc, src, value, id,
  } = props;

  const handler = (e) => {
    const { id } = e.target;
    dispatch(rocketAction.rocketReserve({ id }));
  };

  return (
    <div className="rocket-continer">
      <div className="img-continer">
        <img className="image" alt="roket-img" src={src} />
      </div>
      <div className="text-continer">
        <h1 className="rocket-name">{name}</h1>
        <div className="paragraph-cont">
          <p className="rocket-des">
            {' '}
            <span style={{ display: value ? 'inline' : 'none' }} className="reserved-button">Reserved</span>
            {' '}
            {desc}
          </p>
        </div>
        {!value && <button id={id} onClick={handler} className="card-button" type="button">Reserve Rocket</button> }
        {value && <button id={id} onClick={handler} className="cancel-button" type="button">Cancel Reservation</button>}
      </div>
    </div>
  );
};

export default RocketCard;

RocketCard.propTypes = {
  name: propTypes.string.isRequired,
  desc: propTypes.string.isRequired,
  src: propTypes.string.isRequired,
  value: propTypes.bool.isRequired,
  id: propTypes.string.isRequired,
};
