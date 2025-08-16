
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

const removeOrAdd = document.getElementById('removeOrAdd');
const removeOrAddButton = document.querySelector('.js-remove-add-button');

removeOrAddButton.addEventListener('click', function () {
  if (removeOrAdd.value === 'remove items') {
    removeItem();
  } else {
    addItem();
  }
})

removeOrAdd.addEventListener('change', function () {
  if (this.value === 'remove items') { // using the function () syntax creates a "this" binding, can also use a () => and will not create a "this" binding
    removeOrAddButton.innerHTML = 'Remove from cart';
  } else
    removeOrAddButton.innerHTML = 'Add to cart';
  removeOrAddButton.classList.toggle('remove');
  })

function addItem(item) {
  if (cart.length < 10) {
    cart.push(item);
    saveCart();
    show();
  } else {
    alert('the cart is full');
  }
}

function addItem() {
  let itemToAdd = document.getElementById('itemToChange').value;
  let amountToAdd = document.getElementById('number').value;
  const products = {
    basketball: basketBall,
    shirt: shirt,
    toaster: toaster
  };
  if (cart.length + Number(amountToAdd) <= 10) {
    for (i = 0; i < amountToAdd; ++i) {
      cart.push(products[itemToAdd]);
    }
    saveCart();
    show();
  } else {
    alert('you cannot add ' + amountToAdd + ' ' + itemToAdd + 's');
  }
}

function removeItem() {
  let itemToRemove = document.getElementById('itemToChange').value;
  let amountToRemove = document.getElementById('number').value;
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
    show();
  } else {
    alert('not enough ' + itemToRemove + 's in the cart');
  }
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function clearCart() {
  cart = [];
  show();
  saveCart();
}


function show() {
  const outputElement = document.querySelector('.js-output');
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

  cart.length != 0 ? outputElement.innerHTML = (`items: ${displayCart()} <br>
shipping & handling: ${shipping /= 100} <br>
                   -------- <br>
total before taxes: ${totalNoTax /= 100} <br>
estimated taxes (10%): ${Math.round(taxes) / 100} <br>
                   --------<br>
ORDER TOTAL $${total}`) :
    outputElement.innerHTML = (`the cart is empty. the total price is $${total}`);
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