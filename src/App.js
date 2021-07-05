import FirstContainer from './components/FirstContainer.jsx';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <FirstContainer />
      </div>
    </Provider>
  );
}

export default App;
