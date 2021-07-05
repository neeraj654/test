import React from 'react';
import { connect } from 'react-redux';
import SecondContainer from './SecondContainer';
import { display } from '../redux';
const FirstContainer = (props) => {
  return (
    <div>
      First Container
      <button onClick={props.display}>display</button>
      {console.log('props', props.displayData, typeof props.displayData)}
      <SecondContainer />
      {console.log('first')}
    </div>
  );
};
const mapStateToProps = (state) => {
  return { displayData: state.displayData };
};
const mapDispatchToProps = (dispatch) => {
  return {
    display: () => dispatch(display()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FirstContainer);
