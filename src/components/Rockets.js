import React from 'react';
import { useSelector } from 'react-redux';
import RocketCard from './RocketCard';

const Rockets = () => {
  const state = useSelector((state) => state.storeSlice);

  return (
    <>
      <div>
        {state.map((rocket) => (
          <RocketCard
            key={rocket.id}
            id={rocket.id}
            name={rocket.name}
            src={rocket.img}
            desc={rocket.description}
            value={rocket.value}
          />
        ))}

      </div>
    </>
  );
};

export default Rockets;
