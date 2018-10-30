import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom'

import Home from './components/layout/Home';
import UserLogin from './components/layout/Login'
import Register from './components/layout/Register'
import AddTrade from './components/layout/AddTrade';

import store from './store';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
       <Router>
          <div className="app">
           <Route path='/' exact component={Home}/>
           <Route path='/login' exact component={UserLogin}/>
           <Route path='/register' exact component={Register}/>
           <Route path='/addtrade' exact component={AddTrade}/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
