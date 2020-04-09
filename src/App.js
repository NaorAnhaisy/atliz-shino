import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MainNavbar from './components/MainNavbar/MainNavbar'
import About from './components/About/About'
import Meats from './components/Meats/Meats'
import MeatGallery from './components/MeatGallery/MeatGallery'
import { Route, Switch } from "react-router-dom";

function App() {

  const getItemsOfMeat = (type) => {
    let items = [];
    return items;
  }

  return (
    <div className="App">
      <MainNavbar />
      <div className="container">
        <div className="sorry-div">
          <h1>שלום רב לכולם. האתר עוד בבנייה, והמוצרים בו אינם אמיתיים.</h1>
          <h3>עימכם הסליחה ותודה על ההבנה :)</h3>
        </div>

        <Switch>
          <Route path="/atliz-shino" component={Meats} exact />
          <Route path="/atliz-shino/about" component={About} />
          <Route path="/atliz-shino/meat/beef" component={MeatGallery} items={getItemsOfMeat("beef")} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
