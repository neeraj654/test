import React from 'react';
import ComponentFour from './ComponentFour';
const ComponentThree = () => {
  return (
    <div>
      {console.log('component 3')}
      <ComponentFour />
    </div>
  );
};

export default ComponentThree;
