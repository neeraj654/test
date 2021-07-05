import React from 'react';
import ComponentThree from './ComponentThree';
const ComponentTwo = () => {
  return (
    <div>
      <ComponentThree />
      {console.log('component 2')}
    </div>
  );
};

export default ComponentTwo;
