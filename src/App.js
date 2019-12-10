import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './layouts/Header';
import PageHome from './pages/PageHome';
import PageAbout from './pages/PageAbout';
import PageAuth from './pages/PageAuth';

import './App.css';


function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path='/' component={ PageHome } />
          <Route path='/about' component={ PageAbout } />
          <Route path='/auth' component={ PageAuth } />
        </Switch>
      </main>
      <footer>
        footer
      </footer>
    </Router>
  )
}

export default App;
