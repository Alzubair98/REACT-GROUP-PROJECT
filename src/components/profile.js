import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileCard from './profileCard';

const Profile = () => {
  const rockets = useSelector((state) => state.storeSlice);
  const reservedRockets = rockets.filter((rocket) => rocket.value === true);
  const missions = useSelector((state) => state.missions);
  const joinedMissions = missions.filter((mission) => mission.status === true);

  return (
    <div className="profile-cont">
      <div className="user-reserved">
        <h2>
          My Missions
          <span>&#128377;</span>
        </h2>
        {joinedMissions.length === 0 ? (
          <>
            <div id="empty-msg">
              <span>No missions joined</span>
            </div>
            <Link to="/Missions">
              <button type="button" className="join-reserv-profile">
                Join a Mission
              </button>
            </Link>
          </>
        ) : (
          joinedMissions.map((mission) => (
            <ProfileCard
              key={mission.mission_id}
              mission={mission}
              id={mission.mission_id}
              name={mission.mission_name}
              className="leave-btn"
              text="Leave Mission"
              link={mission.more}
            />
          ))
        )}
      </div>

      <div className="user-reserved">
        <h2>
          My Rockets
          {' '}
          <span>&#128640;</span>
        </h2>
        {reservedRockets.length === 0 ? (
          <>
            <div id="empty-msg">
              <span>No rockets reserved</span>
            </div>
            <Link to="/">
              <button type="button" className="join-reserv-profile">
                Reserve a rocket
              </button>
            </Link>
          </>
        ) : (
          reservedRockets.map((rocket) => (
            <ProfileCard
              key={rocket.id}
              id={rocket.id}
              name={rocket.name}
              className="cancel-button"
              text="Cancel Reservation"
              link={rocket.more}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Profile;
