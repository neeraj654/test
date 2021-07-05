import React from 'react';
import ThirdContainer from './ThirdContainer';
const secondContainer = () => {
  return (
    <div>
      <ThirdContainer />
      {console.log('second')}
    </div>
  );
};

export default secondContainer;
