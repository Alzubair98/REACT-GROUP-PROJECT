import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from './components/navbar';
import Rockets from './components/Rockets';
import Profile from './components/profile';
import { loadRockets } from './redux/Rockets/rockets';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRockets());
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/MyProfile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
