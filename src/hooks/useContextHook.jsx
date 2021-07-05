import { useContext, createContext } from 'react';
// import React from 'react';

// let MyContext;
// let { Provider } = (MyContext = createContext());
// export const useContextHook = () => useContext(MyContext);

// export default function DisplayProvider({ children }) {
//   return <Provider value={{ val: 'neeraj' }}>{children}</Provider>;
// }
export const myContext = createContext();
export const ContextHook = ({ state, children }) => {
  return <myContext.Provider value={{ state }}>{children}</myContext.Provider>;
};
export const useContextHook = () => useContext(myContext);
