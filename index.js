// variables and constants


const productContainer = document.getElementById("product-container")
//const productList= document.querySelector(".product -list")
//console.log(productContainer)

//load books content from JSON file 


   
fetch('http://localhost:5500/books.json')
    .then(response => response.json())
    .then(data => {
        let html = '';
        data.forEach(books => {
            html += `

            <div class = "product-item">
            <div class = "product-img">
            <img src = "${books.image}" alt = "books image">
            <button type = "button" class = "add-to-cart-btn">
                <i class = "fas fa-shopping-cart"></i>Add To Cart
                </button>
            </div>

            <div class = "product-content">
            <h3 class = "product-name">${books.title}</h3>
            <h3 class = "product-author">${books.author}</h3>
            <span class = "product-category">${books.genre}</span>
            <p class = "product-price">$${books.price}</p>

            </div>
            </div>


        
         `
        })

        productContainer.innerHTML = html
    })
    .catch(error => {
        alert(`User live server or local server`);
        //URL scheme must be "http" or "https" for CORS request. You need to be serving your index.html locally or have your site hosted on a live server somewhere for the Fetch API to work properly.
    })

    function purchaseProduct(e){
        if(e.target.classList.contains('add-to-cart-btn')){
            let product = e.target.parentElement.parentElement;
            getProductInfo(product);
        }
    }




