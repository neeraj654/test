import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useContextHook } from '../hooks/useContextHook';
const ComponentFive = () => {
  const [data, setdata] = useState('');
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const { state } = useContextHook();
  return (
    <div>
      {state ? data.title : null}
      {console.log('componenet 5')}
    </div>
  );
};

export default ComponentFive;
