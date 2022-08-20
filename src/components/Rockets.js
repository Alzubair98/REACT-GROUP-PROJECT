import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RocketCard from './RocketCard';
import { loadRockets } from '../redux/Rockets/rockets';

const Rockets = () => {
  const state = useSelector((state) => state.storeSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRockets());
  }, []);

  return (
    <>
      <div>
        {state.map((rocket) => (
          <RocketCard
            key={rocket.id}
            name={rocket.name}
            src={rocket.img}
            desc={rocket.description}
          />
        ))}

      </div>
    </>
  );
};

export default Rockets;
