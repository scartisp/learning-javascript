
const basketBall = {
  name: 'basketball',
  price: 2095,
  shipping: 0
};

const shirt = {
  name: 'shirt',
  price: 799,
  shipping: 0
};

const toaster = {
  name: 'toaster',
  price: 1899,
  shipping: 499
};

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addItem(item) {
  cart.push(item);
  saveCart();
}

// function addShirt() {
//   cart.push(shirt);
//   saveCart();
// }

function clearCart() {
  cart = [];
  saveCart();
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function show() {
  let totalNoTax = 0;
  let shipping = 0;
  let taxes = 0
  for (let item of cart) {
    totalNoTax += item.price;
    shipping += item.shipping;
    taxes += item.price * .1;
  }
  let total = Math.round(totalNoTax + shipping + taxes) / 100;

  cart.length != 0 ? console.log(`the cart contains: ${displayCart()}\ntotal before taxes: ${totalNoTax /= 100}\nshipping and handiling: ${shipping /= 100}\ntaxes (10%): ${Math.round(taxes) / 100} \ntotal $${total}`) :
    console.log(`the cart is empty. the total price is $${total}`);
}

function displayCart() {
  const counts = {};
  for (let item of cart) {
    counts[item.name] = (counts[item.name] || 0) + 1;
  }

  return Object.entries(counts).map(([name, count]) => `${name} (${count})`)
    .join(', ');
}

// function getPrice() {
//   let total = 0;
//   for (let i = 0; i < cart.length; ++i) {
//     total += cart[i].price + cart[i].shipping;
//   }
//   return Math.round(total * .1 + total) / 100;
// }