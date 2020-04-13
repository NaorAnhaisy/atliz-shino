import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MainNavbar from './components/MainNavbar/MainNavbar'
import DownNavbar from './components/DownNavbar/DownNavbar'
import About from './components/About/About'
import Meats from './components/Meats/Meats'
import ItemsGallery from './components/ItemsGallery/ItemsGallery'
import { Route, Switch } from "react-router-dom";
import { getAllItems, getProductsOfType } from "./StoreDB/Store.js"
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

        {searchText === "" ? <Switch>
          <Route path="/atliz-shino" component={Meats} exact />
          <Route path="/atliz-shino/about" component={About} />
          <Route
            path="/atliz-shino/meat/beef"
            render={(props) => <ItemsGallery {...props} items={getProductsOfType("beef")} isPriceForKg={true} />}
          />
          <Route
            path="/atliz-shino/meat/lamb"
            render={(props) => <ItemsGallery {...props} items={getProductsOfType("lamb")} isPriceForKg={true} />}
          />
          <Route
            path="/atliz-shino/meat/chicken"
            render={(props) => <ItemsGallery {...props} items={getProductsOfType("chicken")} isPriceForKg={true} />}
          />
          <Route
            path="/atliz-shino/meat/barbecue"
            render={(props) => <ItemsGallery {...props} items={getProductsOfType("barbecue")} isPriceForKg={true} />}
          />
          <Route
            path="/atliz-shino/market/fish"
            render={(props) => <ItemsGallery {...props} items={getProductsOfType("fish")} isPriceForKg={true} />}
          />
          <Route
            path="/atliz-shino/market/wine"
            render={(props) => <ItemsGallery {...props} items={getProductsOfType("wine")} isPriceForKg={false} />}
          />
          <Route
            path="/atliz-shino/market/frozen"
            render={(props) => <ItemsGallery {...props} items={getProductsOfType("frozen")} isPriceForKg={false} />}
          />
          <Route
            path="/atliz-shino/market/spices"
            render={(props) => <ItemsGallery {...props} items={getProductsOfType("spices")} isPriceForKg={false} />}
          />

          <Route path="/atliz-shino/contact" component={Contact} />

          <Route path="/atliz-shino/terms" component={Terms} />
          <Route path="/atliz-shino/privacy" component={Privacy} />

        </Switch> : <ItemsGallery itemName={"חיפוש עבור - " + searchText} items={getItemsByText()} />}

      </Container>
      <div className="push"></div>
      <footer className="footer"><DownNavbar /></footer>
    </div>
  );
}

export default App;
