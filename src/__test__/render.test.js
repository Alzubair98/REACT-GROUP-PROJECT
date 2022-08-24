import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Rockets from '../components/Rockets';
import RocketCard from '../components/RocketCard';
import Profile from '../components/profile';
import ProfileCard from '../components/profileCard';
import Missions from '../components/Missions'
import MissionItem from '../components/MissionItem'
import store from '../redux/configureStore';

describe('Space App components rendering test', () => {
  it('match snapshot for Rockets', () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('match snapshot for the Missions', () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <Missions />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('match snapshot for the Profile', () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <Profile />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
