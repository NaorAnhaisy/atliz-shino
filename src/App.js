import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MainNavbar from './components/MainNavbar/MainNavbar'
import About from './components/About/About'
import Meats from './components/Meats/Meats'
import { Route, Switch } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <MainNavbar />
      <div className="container">
        <Switch>
          <Route path="/" component={Meats} exact></Route>
          <Route path="/about" component={About}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
