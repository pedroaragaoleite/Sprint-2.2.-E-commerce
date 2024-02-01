

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

const myCart = document.getElementById('cart_list');
const totalPrice = document.getElementById('total_price');
const cart_list = document.getElementById('cart_list');
const count = document.getElementById('count_product');

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array

    // get the producxt from array by id
    const productFound = products.find(products => products.id === id);
    console.log(productFound);

    // search in cart array if product already in the cart by id
    const findCart = cart.find(product => product.id === productFound.id);

    // if found push to cart and add quantity key and value 
    if (!findCart) {
        cart.push({ ...productFound, quantity: 1 });
        count.innerHTML++;
        // if in cart sum quantity by in the product cart
    } else {
        console.log(productFound);
        findCart.quantity += 1;
        count.innerHTML++;
    }

    console.log(cart);

}

// Exercise 2
function cleanCart() {
    cart = [];
    myCart.innerHTML = "";
    totalPrice.innerHTML = 0;
    count.innerHTML = 0;
}

// Exercise 3
function calculateTotal() {
    total = 0;
    // Calculate total price of the cart using the "cartList" array
    for (let i = 0; i < cart.length; i++) {
        // use the subTotal key created in the applyPromotionsCart() to calculate the total
        total += cart[i].subTotal;
    }
    return total;
}

// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"

    for (let item of cart) {
        // created a subTotal to calculate price * quantity
        item.subTotal = item.price * item.quantity;
        if (item.id === 3 && item.quantity >= 10) {
            // calculate the subTotal with the discount
            item.subTotal = item.subTotal - ((item.price * item.offer.percent) / 100 * item.quantity);
        } else if (item.id === 1 && item.quantity >= 3) {
            item.subTotal = item.subTotal - ((item.price * item.offer.percent) / 100 * item.quantity);
        }
    }
}

// Exercise 5
function printCart() {
    applyPromotionsCart();
    // Fill the shopping cart modal manipulating the shopping cart dom
    totalPrice.innerHTML = 0;
    cart_list.innerHTML = '';
    cart.forEach(item => {
        cart_list.innerHTML += `<tr>
    <th scope="row">${item.name}</th>
    <td class="price">${item.price}</td>
    <td class="qty">${item.quantity}</td>
    <td>$ ${item.subTotal}</td>
    <td><button class="btn btn-outline-dark" onclick="removeFromCart(${item.id})"><i class="fa fa-trash-can"></i></button></td>
    </tr>`
    })
    totalPrice.innerHTML = calculateTotal().toFixed(2);
}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {
    // check for the id index in the cart array of objs / will return -1 the item doesnt exist or will return the index
    const findIndex = cart.findIndex(product => product.id === id);

    // if the product quantity its equal to 1 will remove it from the array
    // i call the printCart() to update the prices
    if (cart[findIndex].quantity === 1) {
        cart.splice(cart[findIndex], 1);
        count.innerHTML--;
        // printCart();

        // if the quantity its greater than 1 will reduce by 1 the quantity until its equal to 1
        // i call the printCart() to update the prices
    } else if (cart[findIndex].quantity > 1) {
        cart[findIndex].quantity -= 1;
        count.innerHTML--;
        // printCart()
    }
    printCart();
}

function open_modal() {
    printCart();
}