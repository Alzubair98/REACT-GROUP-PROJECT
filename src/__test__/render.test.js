import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Rockets from '../components/Rockets';
import Profile from '../components/profile';
import Missions from '../components/Missions';
import store from '../redux/configureStore';
import MissionItem from '../components/MissionItem';
import RocketCard from '../components/RocketCard';
import Navbar from '../components/navbar';
import ProfileCard from '../components/profileCard';
import Footer from '../components/Footer';

describe('Space App components rendering test', () => {
  it('match snapshot for NavBar', () => {
    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('match snapshot for Rockets', () => {
    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <Rockets />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('match snapshot for Rocket Card', () => {
    const rocket = {
      id: "Rocket 1",
      name: 'Rocket 1',
      description: 'This is the description for mission 1',
      img: "a link",
      value: false,
    };

    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <RocketCard
          key={rocket.id}
          id={rocket.id}
          name={rocket.name}
          src={rocket.img}
          desc={rocket.description}
          value={rocket.value}/>
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('match snapshot for the Missions', () => {
    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <Missions />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('match snapshot for the Mission Item', () => {
    const mission = {
      mission_name: 'Mission 1',
      description: 'This is the description for mission 1',
      more: 'A link',
      status: false,
    };

    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <MissionItem mission={mission} />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('match snapshot for the Profile', () => {
    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <Profile />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('match snapshot for the Profile List', () => {
    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <ProfileCard />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('match snapshot for the Footer', () => {
    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <Footer />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
