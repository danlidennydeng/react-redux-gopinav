import React from 'react'
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store'
import UsersContainer from './components/UsersContainer';
// import CakeContainer from './components/CakeContainer';
// import HooksCakeContainer from './components/HooksCakeContainer';
// import IceCreamContainer from './components/IceCreamContainer';
// import NewCakeContainer from './components/NewCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UsersContainer />
        {/* <IceCreamContainer />
        <HooksCakeContainer />
        <CakeContainer />
        <NewCakeContainer /> */}
      </div>
    </Provider>
  );
}

export default App;
