import { getBeef } from "./BeefStore.js"
import { getLamb } from "./LambStore.js"
import { getChicken } from "./ChickenStore.js"
import { getBarbecue } from "./BarbecueStore.js"
import { getFish } from "./FishStore.js"
import { getWine } from "./WineStore.js"
import { getFrozen } from "./FrozenStore.js"
import { getSpices } from "./SpiceStore.js"
import { getCans } from "./CansStore.js"

var products =
    [
        { itemName: "בקר & עגל", type: "beef", general:"meat", getItems: getBeef },
        { itemName: "כבש & טלה", type: "lamb", general:"meat", getItems: getLamb },
        { itemName: "עופות & אווז", type: "chicken", general:"meat", getItems: getChicken },
        { itemName: "על האש", type: "barbecue", general:"meat", getItems: getBarbecue },
        { itemName: "דגים", type: "fish", general:"market", getItems: getFish },
        { itemName: "יינות", type: "wine", general:"market", getItems: getWine },
        { itemName: "תבלינים", type: "spices", general:"market", getItems: getSpices },
        { itemName: "שימורים", type: "cans", general:"market", getItems: getCans },
        { itemName: "קפואים", type: "frozen", general:"market", getItems: getFrozen }
    ]

export function getAllProducts() {
    return products;
}

export function getAllItems() {
    let allItems = [];
    products.forEach(itemType => {
        allItems.push(...itemType.getItems());
    });

    return allItems;
}

export function getItemsOfType(type) {
    return products.find(itemType => itemType.type === type).getItems();
}