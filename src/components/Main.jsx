import React from 'react'
import ReactDOM from 'react-dom/client'
import Navigation from './Navigation.jsx'
import Body from './Body.jsx'
import Cards from './Cards.jsx'


import '../index.css'
import { Provider } from 'react-redux';
import store from '../redux/store';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
  <Navigation />
  <Body/>
  <Cards/>
  </Provider>
  </React.StrictMode>
)