function popUpCart() {
    const cartButton = document.querySelector('#cart-button');
    const cartPage = document.querySelector('#cart-page');

    cartButton.addEventListener('click', function (e) {
        e.preventDefault;
        cartPage.classList.toggle('active');
    });
}


// -------------------------- REMOVE BUTTON ----------------------------------
function removeBtn() {
    const cartRemoveBtn = document.querySelectorAll('.btn-danger');
    for (let i = 0; i < cartRemoveBtn.length; i++) {
        let button = cartRemoveBtn[i];
        button.addEventListener('click', function (e) {
            const buttonClicked = e.target;
            buttonClicked.parentElement.parentElement.remove();

            cartItem = document.querySelectorAll('.cart-item');
            const cartTitle = document.querySelector('#cart-title');
            const cartEmpty = document.querySelector('#cart-empty');
            const cartBtn = document.querySelector('.btn-warning');
            console.log(cartItem.length);
            if (cartItem.length <= 0) {
                console.log('empty');
                cartTitle.style.setProperty('display', 'none', 'important');
                cartBtn.style.setProperty('display', 'none', 'important');
                cartEmpty.style.display = "block";
            }
        })
    }
}
// ---------------------------------------------------------------------------


function addToCart() {
    const addToCartBtn = document.querySelectorAll('.btn-cart');
    const itemCart = document.querySelector('#item-cart');
    let cartItem = document.querySelectorAll('.cart-item')

    for (let i = 0; i < addToCartBtn.length; i++) {
        const button = addToCartBtn[i];
        button.addEventListener('click', function () {

            const itemProduct = button.parentElement;
            const title = itemProduct.querySelector('h5').innerText;
            const price = itemProduct.querySelector('p').innerText;
            const imgSrc = itemProduct.parentElement.querySelector('img').src;

            const newUL = document.createElement('ul');
            newUL.classList.add('d-flex', 'justify-content-between', 'cart-item', 'mx-3','p-0', 'border-bottom');
            let ULContent = `
            <li><img src="${imgSrc}"alt="" width="50" height="50"><span class="item-name">${title}</span></li>
            <li><p class="item-price mt-2">${price}</p></li>
            <li><button class="btn btn-danger">Remove</button></li>`;

            newUL.innerHTML = ULContent;
            itemCart.append(newUL);

            newUL.querySelector('.btn-danger').addEventListener('click', removeBtn());

            cartItem = document.querySelectorAll('.cart-item');
            console.log(cartItem.length);

            const cartTitle = document.querySelector('#cart-title');
            const cartBtn = document.querySelector('.btn-warning');
            const cartEmpty = document.querySelector('#cart-empty');
            if (cartItem.length >= 1) {
                console.log('display');
                cartTitle.style.display = "block";
                cartBtn.style.display = "none";
                cartEmpty.style.display = "none";
            }
        })
    }
    cartItem = document.querySelectorAll('.cart-item');


}









function emptyCart() {
    let cartItem = document.querySelectorAll('.cart-item');
    const itemCart = document.querySelector('#item-cart');
    let cartItemContent = `
    <p class="text-center mt-5">Your cart is still empty.</p>
    `;
    if (cartItem) {
        itemCart.innerHTML = cartItemContent;
        document.querySelector('.btn-warning').toggleAttribute('hidden');
    } else {
        itemCart.innerHTML = `<ul class="d-flex justify-content-between">
        <li>Item</li>
        <li>Price</li>
        <li>Quantity</li>
    </ul>
    `;
    }
}





popUpCart();
removeBtn();
addToCart();













// const checkOutBtn = document.querySelector('.btn-warning');

// checkOutBtn.addEventListener('click', function() {
//     alert('Thanks for purchasing');
// })
