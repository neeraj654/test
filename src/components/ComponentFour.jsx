import React from 'react';
import ComponentFive from './ComponentFive';
const ComponentFour = () => {
  return (
    <div>
      {console.log('component 4')}
      <ComponentFive />
    </div>
  );
};
export default ComponentFour;
