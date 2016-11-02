// THIS IS MY SHOPPING LIST
var groceryList =[ 
    {            
    name: "Cheerios", // THIS IS THE ITEM WITHIN THE ARRAY
    price: 2.55,
  },
   {
    name: "Beer",
    price: 7.99,
  },
   {
    name: "Milk",
    price: 4.99,
  },
   {
    name: "Eggs",
    price: 2.99,
  },
  ]; 

groceryList.forEach(function(item){               //THIS IS A LOOP WITH A FUNCTION THAT CYCLES THROUGH THE groceryList AND PULLS THE ITEM AND PRICE
  document.getElementById("background").innerHTML = (item.name + " - " + item.price);
});
//                    
var total = 0;   // THIS IS A SET VARIABLE FOR THE TOTAL- TOTAL START AT ZERO

for ( var i = 0; i < groceryList.length; i++){ // THIS FOR LOOP CYCLES THROUGH groceryList GRABBING THE LENGTH AND WRITING THE TOTAL
  total += groceryList[i].price;
}
  document.getElementById("background").innerHTML = ( " Total $ " + total  ); //THIS IS THE STRING THE WRITES THE MESSAGE TO THE DOCUMENT