import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MainNavbar from './components/MainNavbar/MainNavbar'
import DownNavbar from './components/DownNavbar/DownNavbar'
import About from './components/About/About'
import Meats from './components/Meats/Meats'
import ItemsGallery from './components/ItemsGallery/ItemsGallery'
import { Route, Switch } from "react-router-dom";
import { getAllItems, getItemsOfType } from "./StoreDB/Store.js"
import Contact from './components/Contact/Contact'
import { Container } from 'react-bootstrap';
import Terms from './components/Terms/Terms'
import Privacy from './components/Privacy/Privacy'

function App() {

  const [searchText, setSearchText] = useState("");

  const getItemsByText = () => {
    return getAllItems().filter(item => item.name.includes(searchText));
  }

  return (
    <div className="App">
      <MainNavbar setSearchText={setSearchText} />
      <Container>
        <div className="kosher-div">
          <h1 style={{textDecoration: "underline"}}>אטליז שינו ובניו - מרכז הבשר החלק</h1>
          <br />
          <h2>כשרויות מהודרות בהשגחת הרב מחפוד יורה דעה, עטרה בית יוסף והרב רובין.</h2>
          <h3>בהשגחת רבנות בת-ים</h3>
          <img className="kosher-img" src="/atliz-shino/images/robin-kosher.png" alt="..." />
          <img className="kosher-img" src="/atliz-shino/images/atara-kosher.png" alt="..." />
          <img className="kosher-img" src="/atliz-shino/images/mahfod-kosher2.png" alt="..." />
        </div>

        {searchText === "" ? <Switch>
          <Route path="/atliz-shino" component={Meats} exact />
          <Route path="/atliz-shino/about" component={About} />
          <Route
            path="/atliz-shino/meat/beef"
            render={(props) => <ItemsGallery {...props} itemName="בקר" items={getItemsOfType("beef")} isPriceForKg={true} />}
          />
          <Route
            path="/atliz-shino/meat/lamb"
            render={(props) => <ItemsGallery {...props} itemName="כבש" items={getItemsOfType("lamb")} isPriceForKg={true} />}
          />
          <Route
            path="/atliz-shino/meat/chicken"
            render={(props) => <ItemsGallery {...props} itemName="עופות" items={getItemsOfType("chicken")} isPriceForKg={true} />}
          />
          <Route
            path="/atliz-shino/meat/barbecue"
            render={(props) => <ItemsGallery {...props} itemName="על האש" items={getItemsOfType("barbecue")} isPriceForKg={true} />}
          />
          <Route
            path="/atliz-shino/market/fish"
            render={(props) => <ItemsGallery {...props} itemName="דגים" items={getItemsOfType("fish")} isPriceForKg={true} />}
          />
          <Route
            path="/atliz-shino/market/wine"
            render={(props) => <ItemsGallery {...props} itemName="יינות" items={getItemsOfType("wine")} isPriceForKg={false} />}
          />
          <Route
            path="/atliz-shino/market/frozen"
            render={(props) => <ItemsGallery {...props} itemName="קפואים" items={getItemsOfType("frozen")} isPriceForKg={false} />}
          />
          <Route
            path="/atliz-shino/market/spices"
            render={(props) => <ItemsGallery {...props} itemName="תבלינים" items={getItemsOfType("spices")} isPriceForKg={false} />}
          />
          {/* <Route
            path="/atliz-shino/market/cans"
            render={(props) => <ItemsGallery {...props} itemName="שימורים" items={getItemsOfType("cans")} isPriceForKg={false} />}
          /> */}

          <Route path="/atliz-shino/contact" component={Contact} />

        </Switch> : <ItemsGallery itemName={"חיפוש עבור - " + searchText} items={getItemsByText()} />}

        <Switch>
          <Route path="/atliz-shino/terms" component={Terms} />
          <Route path="/atliz-shino/privacy" component={Privacy} />
        </Switch>

      </Container>
      <div className="push"></div>
      <footer className="footer"><DownNavbar /></footer>
    </div>
  );
}

export default App;
