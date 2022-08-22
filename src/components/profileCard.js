import React from 'react';

import propTypes from 'prop-types';

const ProfileCard = (props) => {
  const { name } = props;

  return (
    <div className="profile-card">
      <h3>{name}</h3>
    </div>
  );
};

export default ProfileCard;

ProfileCard.propTypes = {
  name: propTypes.string,
};

ProfileCard.defaultProps = {
  name: 'default',
};
