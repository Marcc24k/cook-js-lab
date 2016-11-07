// EMPTY SHOPPING LIST

var shoppingList = [];

//THIS IS AN OBJECT THAT HOLDS THE DATA OF EACH ITEM
var Item = function (name, price, count) {
    this.name = name
    this.price = price
    this.count = count
};

//THIS FUCTION WILL RUN AN IF ELSE STATMENT TO CHECK IF SHOPPINGLIST IS EQUAL TO NAME AND IF SO WILL ADD ANOTHER ITEM ON AS IT GOES UNTIL TRUE. 
function addItemToCart(name, price, count) {

    for (var i in shoppingList) {
        if (shoppingList[i].name === name) {
            shoppingList[i].count += count;
            return;
        }
    }
    //THIS WILL ADD ITEM TO ARRAY
    var item = new Item(name, price, count);
    shoppingList.push(item);
}

//THIS CONTAINS THE ITEMS IN YOUT INVENTORY
addItemToCart("Dwarvin Helmet", 234.89, 1);
addItemToCart("Dwarvin Bow", 2324.89, 1);
addItemToCart("Elven Helmet", 3234.89, 1);
addItemToCart("Elven Helmet", 3234.89, 2);
addItemToCart("Elven Helmet", 3234.89, 2);


//THIS FUNCTION WILL REMOVE AND ITEM FROM THE SHOPPINGLIST

function removeItemFromCartAll(name) {
    for (var i in shoppingList) {
        if (shoppingList[i].name === name){
            shoppingList[i].count--;
            if(shoppingList[i] === 0){
                shoppingList.splice(i, 1);
            }
        break;
    }
}
}
console.log(shoppingList[2].count);
removeItemFromCartAll("Elven Helmet");
removeItemFromCartAll("Elven Helmet");
removeItemFromCartAll("Elven Helmet");
removeItemFromCartAll("Elven Helmet");
removeItemFromCartAll("Elven Helmet");
console.log(shoppingList);






//console.log(shoppingList);
//console.log(shoppingList[0]);
//console.log(shoppingList[0].name);