import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Friends from './components/Friends';
import AddFriend from './components/AddFriend';

import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <Link className="link" to="/login">Login</Link>
            <Link className="link" to="/friends">Friends</Link>
            <Link className="link" to="/add">Add Friend</Link>
          </nav>
        </header>
        <section>
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/friends" component={Friends} />
          <PrivateRoute exact path="/add" component={AddFriend} />
        </section>
      </div>
    </Router>
  );
};

export default App;
