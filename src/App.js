import './App.css';
import React from 'react';
import Price from './Price';
import Nobel from './Nobel';
import Dropbox from './Dropbox';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Yeardropbox from './Yeardropbox';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Nobel">
            <Nobel />
          </Route>
          <Route exact path="/Yeardropbox">
            <Yeardropbox />
          </Route>
        </Switch>
        </div>
    </Router>
  );
}

export default App;
