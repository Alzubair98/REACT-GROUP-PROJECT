import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { joinMissions } from '../redux/Missions/missionsSlice';
import { rocketAction } from '../redux/Rockets/rockets';

const ProfileCard = (props) => {
  const {
    name, id, className, text, link
  } = props;

  const dispatch = useDispatch();

  const handleClick = (e) => {
    if (e.target.className === 'leave-btn') {
      dispatch(joinMissions({ id: e.target.id }));
    } else {
      const { id } = e.target;
      dispatch(rocketAction.rocketReserve({ id }));
    }
  };

  return (
    <div className="profile-card">
      <h3>{name}</h3>
      <div className="btn-container">
        <button
          type="button"
          id={id}
          className={className}
          onClick={handleClick}
        >
          {text}
        </button>
        <a className="learn-more" href={link}>Learn more <span className="arrow-more">&#10145;</span></a>
      </div>
    </div>
  );
};

export default ProfileCard;

ProfileCard.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string
}.isRequired;

ProfileCard.defaultProps = {
  name: 'default',
};
