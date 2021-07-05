import React from 'react';
import useDisplayHook from '../hooks/useDisplayHook';
import ComponentTwo from './ComponentTwo';
import { ContextHook } from '../hooks/useContextHook';
const initialState = false;
const reducer = (state, action) => {
  switch (action.type) {
    case 'DISPLAY':
      return !state;

    default:
      return state;
  }
};
const ComponentOne = () => {
  const [state, dispatch] = useDisplayHook(reducer, initialState);
  return (
    <div>
      <button onClick={() => dispatch({ type: 'DISPLAY' })}>display</button>
      {console.log('current', state)}
      <ContextHook state={state}>
        <ComponentTwo />
      </ContextHook>
    </div>
  );
};

export default ComponentOne;
