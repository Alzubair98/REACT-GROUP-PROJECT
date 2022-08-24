import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMissions } from '../redux/Missions/missionsSlice';

const MissionItem = (props) => {
  const { mission } = props;
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(joinMissions({ id: e.target.id }));
  };

  return (
    <>
      <td className="mission-name">{mission.mission_name}</td>
      <td className="mission-desc">{mission.description}</td>
      <td className="t-align-center">
        {!mission.status && <span className="active-badge">NOT A MEMBER</span>}
        {mission.status && <span className="inactive-badge">Active Member</span>}
      </td>
      <td className="t-align-center">
        {!mission.status && <button id={mission.mission_id} onClick={handleClick} className="join-btn" type="button">Join Mission</button> }
        {mission.status && <button id={mission.mission_id} onClick={handleClick} className="leave-btn" type="button">Leave Mission</button>}
      </td>
    </>
  );
};

MissionItem.propTypes = {
  mission: PropTypes.shape({
    mission_name: PropTypes.string,
    description: PropTypes.string,
    status: PropTypes.bool,
    mission_id: PropTypes.string,
  }).isRequired,
};

export default MissionItem;
