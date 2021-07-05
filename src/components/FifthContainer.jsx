import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
const FifthContainer = (props) => {
  const [data, setData] = useState('hello');
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <>{props.displayData ? data.id : null}</>;
};
const mapStateToProps = (state) => {
  return { displayData: state.displayData };
};
export default connect(mapStateToProps)(FifthContainer);
