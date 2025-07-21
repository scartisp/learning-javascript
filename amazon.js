
const basketBall = {
  name: 'basketball',
  price: 2095,
  shipping: 499
};

const shirt = {
  name: 'shirt',
  price: 799,
  shipping: 499
};

const toaster = {
  name: 'toaster',
  price: 1899,
  shipping: 499
};

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addItem(item) {
  if (cart.length < 10) {
    cart.push(item);
    saveCart();
  } else {
    console.log('the cart is full');
  }
}

function removeItem() {
  let itemToRemove = document.getElementById('itemToRemove').value;
  let amountToRemove =  document.getElementById('number').value;
  let numInCart = 0
  for (item of cart) {
    if (item.name === itemToRemove) {
      ++numInCart;
    }
  }
  if (numInCart >= amountToRemove) {
    let i = 0;
    while (amountToRemove > 0) {
      if (cart.at(i).name === itemToRemove) {
        cart.splice(i, 1);
        --amountToRemove;
      } else
        ++i;
    }
    saveCart();
  } else {
    console.log('not enough ' + itemToRemove + 's in the cart');
  }
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function clearCart() {
  cart = [];
  saveCart();
}


function show() {
  let totalNoTax = 0;
  let shipping = 0;
  let taxes = 0
  const diffItems = [];
  for (let item of cart) {
    totalNoTax += item.price;
    if (!diffItems.some(product => product.name === item.name)) { // must use 
                                                                  // .some because .includes checks if the specific instance of the 
                                                                  // object exists in the diffItems array, not just an instance
      diffItems.push(item);
      shipping += item.shipping;
    }
  }
  taxes = (shipping + totalNoTax) * .1;
  let total = Math.round(totalNoTax + shipping + taxes) / 100;

  cart.length != 0 ? console.log(`items: ${displayCart()}
shipping & handling: ${shipping /= 100}
                   --------
total before taxes: ${totalNoTax /= 100}
estimated taxes (10%): ${Math.round(taxes) / 100}
                   --------
ORDER TOTAL $${total}`) :
    console.log(`the cart is empty. the total price is $${total}`);
}

function displayCart() {
  const counts = {}; // counts is a plain object, and uses item names as the keys. 
  for (let item of cart) { // the keys are paired with the value (determined in the for loop)
    counts[item.name] = (counts[item.name] || 0) + 1;
  }

  return Object.entries(counts).map(([name, count]) => `${name} (${count})`)
    .join(', ');
} // .entries turns counts into a 2d array. the inner array contains the key, and then the name for 
// each key value pair that exists. .map iterates over the array and turns each pair into a string, with .join connecting each pair via the argument