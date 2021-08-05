// variables and constants

const cartContainer = document.querySelector('.cart-container');
const productList = document.querySelector('.product-list');



eventListeners();

function eventListeners(){
    window.addEventListener('DOMContentLoaded', () =>{ //The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
        loadJSON()
    });


document.querySelector('.navbar-toggler').addEventListener('click',() =>{
    document.querySelector('.navbar-collapse').classList.toggle('show-navbar');

});

//show/hide cart container

document.getElementById('cart-btn').addEventListener('click',() => {
    cartContainer.classList.toggle('show-cart-container');
});

}

// var myInit = {method: 'GET',
// headers: {
//     'Content-Type': 'application/json'
// },
// mode: 'cors',
// cache: 'default'};

// let myRequest = new Request("./data_class.json", myInit);



function loadJSON(){
    fetch('http://localhost:5500/books.json')
    .then(response => response.json())
    .then(data => {
        let html = ' ';
        data.forEach(product => {
            html += `
            <div class = "product-item">
                <div class = "product-img">
                    <img src = "${product.image}" alt = "product image">
                    <button type = "button" class = "add-to-cart-btn">
                        <i class = "fas fa-shopping-cart"></i>Add To Cart
                    </button>
                </div>
                <div class = "product-content">
                    <h3 class = "product-name">${product.title}</h3>
                    <span class = "product-category">${product.genre}</span>
                    <p class = "product-price">$${product.price}</p>
                </div>
            </div>
        `;
    });
    productList.innerHTML = html;
})
    
}


