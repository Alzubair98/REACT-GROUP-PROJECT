import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MissionItem from './MissionItem';
import '../CSS/Missions.css';
import { getMissions } from '../redux/Missions/missionsSlice';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!missions.length) {
      dispatch(getMissions());
    }
  }, []);

  return (
    <div className="main-sec">
      <table id="missions-table">
        <thead>
          <tr>
            <th id="mission-col">Mission</th>
            <th id="description-col">Description</th>
            <th id="status-col">Status</th>
            <th> </th>
          </tr>
        </thead>

        <tbody>
          {missions.map((mission) => (
            <tr className="mission-item" key={mission.mission_id}>
              <MissionItem mission={mission} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
