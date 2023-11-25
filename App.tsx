/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import Routes from './src/navigations/Routes';
import 'react-native-gesture-handler'

function App(): JSX.Element {


  
  return (

   <Provider store={store}>
      <Routes/>
   </Provider>

  );
}


export default App;
