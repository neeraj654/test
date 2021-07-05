import React, { useContext, useEffect, useState } from 'react';

import axios from 'axios';
import { DisplayContext } from './FirstComponent';
const FifthComponent = () => {
  const displayContext = useContext(DisplayContext);
  const [data, setData] = useState('');
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1').then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div>
      {displayContext ? data.title : null}
      {console.log(data)}
    </div>
  );
};

export default FifthComponent;
