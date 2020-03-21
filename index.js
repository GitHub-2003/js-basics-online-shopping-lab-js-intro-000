var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

// accepts one argument, the name of an item
// create an "item" object consist of two key-value pairs:  itemName, itemPrice
// the price of each item is a randomly-generated integer between 1 and 100.
function addToCart(item) {
  var anItem = new Object({'itemName':  item, 'itemPrice': Math.floor((Math.random() * 100) + 1)})
  cart.push(newItem)
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
