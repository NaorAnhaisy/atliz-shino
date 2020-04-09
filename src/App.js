import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MainNavbar from './components/MainNavbar/MainNavbar'
import SimpleSlider from './components/SimpleSlider/SimpleSlider'

function App() {

  return (
    <div className="App">
      <MainNavbar />
      <div className="container">
        <SimpleSlider className="content" type="beef"/>
        <br />
        <SimpleSlider className="content" type="lamp"/>
        <br />
        <SimpleSlider className="content" type="chicken"/>
        <br />
        <SimpleSlider className="content" type="barbecue"/>
      </div>
    </div>
  );
}

export default App;
