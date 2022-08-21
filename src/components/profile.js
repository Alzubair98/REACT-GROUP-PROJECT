import React from 'react';
import { useSelector } from 'react-redux';
import ProfileCard from './profileCard';

const Profile = () => {
  const state = useSelector((state) => state.storeSlice);
  const newState = state.filter((rocket) => rocket.value === true);

  return (
    <div className="profile-cont">
      <div>
        mission
      </div>

      <div className="rockets-profile">
        <h1>My Rockets</h1>
        {newState.map((rocket) => (
          <ProfileCard key={rocket.id} name={rocket.name} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
