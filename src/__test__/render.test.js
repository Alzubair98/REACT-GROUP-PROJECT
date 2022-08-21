import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Rockets from '../components/Rockets';
import Profile from '../components/profile';
import store from '../redux/configureStore';

describe('Rockets & Profile renderer test', () => {
  it('match snapshot for Rockets', () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <Rockets />
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
