import React from 'react';
import { NavLink } from 'react-router-dom';
import { GiSpaceShuttle } from 'react-icons/gi';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/Missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: 'MyProfile',
      text: 'MyProfile',
    },
  ];

  return (
    <nav className="Nav-bar">
      <div className="icon-continer">
        <img src="../images/planet.png" alt="icon-img" />
        <GiSpaceShuttle className="icon" />
        <h1 className="nav-text">Space Tracelers&apos; Hub</h1>
      </div>

      <div className="options-continer">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink className="Nav-bar-element" to={link.path}>{link.text}</NavLink>
          </li>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
