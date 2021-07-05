import React, { createContext, useReducer } from 'react';
import SecondComponent from './SecondComponent';
const initialState = false;
const reducer = (state, action) => {
  switch (action) {
    case 'DISPLAY': {
      return !state;
    }
    default:
      return state;
  }
};
export const DisplayContext = createContext();
const FirstComponent = () => {
  const [display, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <DisplayContext.Provider value={display}>
        <button onClick={() => dispatch('DISPLAY')}>display</button>

        <SecondComponent />
      </DisplayContext.Provider>
    </div>
  );
};

export default FirstComponent;
