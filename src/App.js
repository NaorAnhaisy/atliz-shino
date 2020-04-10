import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MainNavbar from './components/MainNavbar/MainNavbar'
import About from './components/About/About'
import Meats from './components/Meats/Meats'
import MeatGallery from './components/MeatGallery/MeatGallery'
import { Route, Switch } from "react-router-dom";
import { getBeef } from "./StoreDB/BeefStore.js"
import { getLamb } from "./StoreDB/LambStore.js"
import { getChicken } from "./StoreDB/ChickenStore.js"
import { getBarbecue } from "./StoreDB/BarbecueStore.js"
import { getFish } from "./StoreDB/FishStore.js"
import { getWine } from "./StoreDB/WineStore.js"
import { getFrozen } from "./StoreDB/FrozenStore.js"
import { getSpices } from "./StoreDB/SpiceStore.js"
import { getCans } from "./StoreDB/CansStore.js"
import Contact from './components/Contact/Contact'

function App() {

  const [searchText, setSearchText] = useState("");

  const getItemsOfMeat = (type) => {
    let items = [];
    switch (type) {
      case "beef":
        items = getBeef();
        break;
      case "lamb":
        items = getLamb();
        break;
      case "chicken":
        items = getChicken();
        break;
      case "barbecue":
        items = getBarbecue();
        break;
      case "fish":
        items = getFish();
        break;
      case "wine":
        items = getWine();
        break;
      case "frozen":
        items = getFrozen();
        break;
      case "spices":
        items = getSpices();
        break;
      case "cans":
        items = getCans();
        break;
      default:
        break;
    }

    return items;
  }

  const getItemsOfText = () => {
    let allItemsInStore = []
    allItemsInStore.push(...getItemsOfMeat("beef"));
    allItemsInStore.push(...getItemsOfMeat("lamb"));
    allItemsInStore.push(...getItemsOfMeat("chicken"));
    allItemsInStore.push(...getItemsOfMeat("barbecue"));
    allItemsInStore.push(...getItemsOfMeat("fish"));
    allItemsInStore.push(...getItemsOfMeat("wine"));
    allItemsInStore.push(...getItemsOfMeat("frozen"));
    allItemsInStore.push(...getItemsOfMeat("spices"));
    allItemsInStore.push(...getItemsOfMeat("cans"));
    const filteredItems = allItemsInStore.filter(item => item.name.includes(searchText));

    return filteredItems
  }

  return (
    <div className="App">
      <MainNavbar setSearchText={setSearchText} />
      <div className="container">
        <div className="sorry-div">
          <h1>שלום רב לכולם. האתר עוד בבנייה, והמוצרים בו אינם אמיתיים.</h1>
          <h3>עימכם הסליחה ותודה על ההבנה :)</h3>
        </div>

        {searchText === "" ? <Switch>
          <Route path="/atliz-shino" component={Meats} exact />
          <Route path="/atliz-shino/about" component={About} />
          <Route
            path="/atliz-shino/meat/beef"
            render={(props) => <MeatGallery {...props} items={getItemsOfMeat("beef")} isPriceForKg={true} />}
          />
          <Route
            path="/atliz-shino/meat/lamb"
            render={(props) => <MeatGallery {...props} items={getItemsOfMeat("lamb")} isPriceForKg={true} />}
          />
          <Route
            path="/atliz-shino/meat/chicken"
            render={(props) => <MeatGallery {...props} items={getItemsOfMeat("chicken")} isPriceForKg={true} />}
          />
          <Route
            path="/atliz-shino/meat/barbecue"
            render={(props) => <MeatGallery {...props} items={getItemsOfMeat("barbecue")} isPriceForKg={true} />}
          />
          <Route
            path="/atliz-shino/market/fish"
            render={(props) => <MeatGallery {...props} items={getItemsOfMeat("fish")} isPriceForKg={true} />}
          />
          <Route
            path="/atliz-shino/market/wine"
            render={(props) => <MeatGallery {...props} items={getItemsOfMeat("wine")} isPriceForKg={false} />}
          />
          <Route
            path="/atliz-shino/market/frozen"
            render={(props) => <MeatGallery {...props} items={getItemsOfMeat("frozen")} isPriceForKg={false} />}
          />
          <Route
            path="/atliz-shino/market/spices"
            render={(props) => <MeatGallery {...props} items={getItemsOfMeat("spices")} isPriceForKg={false} />}
          />
          <Route
            path="/atliz-shino/market/cans"
            render={(props) => <MeatGallery {...props} items={getItemsOfMeat("cans")} isPriceForKg={false} />}
          />

          <Route path="/atliz-shino/contact" component={Contact} />

        </Switch> : <MeatGallery items={getItemsOfText()} />}
      </div>
    </div>
  );
}

export default App;
