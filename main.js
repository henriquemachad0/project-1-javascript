const weatherAPIKey = "2481edcbe5f54911e3485fff8dd451ec"
const weatherAPIURL = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`


const galleryImages = [
    {
        "src": "./assets/gallery/image1.jpg",
        "alt": "Thumbnail Image 1"
    },
    {
        "src": "./assets/gallery/image2.jpg",
        "alt": "Thumbnail Image 2"
    },
    {
        "src": "./assets/gallery/image3.jpg",
        "alt": "Thumbnail Image 3"
    }
];

const products = [
    {
      title: "AstroFiction",
      author: "John Doe",
      price: 49.9,
      image: "./assets/products/img6.png"
    },
    {
      title: "Space Odissey",
      author: "Marie Anne",
      price: 35,
      image: "./assets/products/img1.png"
    },
    {
      title: "Doomed City",
      author: "Jason Cobert",
      price: 0,
      image: "./assets/products/img2.png"
    },
    {
      title: "Black Dog",
      author: "John Doe",
      price: 85.35,
      image: "./assets/products/img3.png"
    },
    {
      title: "My Little Robot",
      author: "Pedro Paulo",
      price: 0,
      image: "./assets/products/img5.png"
    },
    {
      title: "Garden Girl",
      author: "Ankit Patel",
      price: 45,
      image: "./assets/products/img4.png"
    }
  ];

// Menu section
function menuHandler(){
    document.querySelector("#open-nav-menu").addEventListener("click", function(){
        document.querySelector("header nav .wrapper").classList.add("nav-open");
    });
    
    document.querySelector("#close-nav-menu").addEventListener("click", function(){
        document.querySelector("header nav .wrapper").classList.remove("nav-open");
    });
};

// Temperature conversion
function celsiusToFahr(temperature){
    let fahr = (temperature * 9/5) + 32
    return fahr
};

// Greeting section
function greetingHandler(){

    let currentHour = new Date().getHours();
    let greetingText
    
    if(currentHour < 12){
        greetingText = "Good morning!";
    } else if (currentHour < 19) {
        greetingText = "Good afternoon!";
    } else if (currentHour < 24){
        greetingText = "Good evening!";
    } else {
        greetingText = "Welcome!";
    }
    
    const weatherCondition = "sunny"
    const userLocation = "New York"
    let temperature = 22.8673
    let celsiusText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toFixed(1)}°C outside.`
    let fahrText = `The weather is ${weatherCondition} in ${userLocation} and it's ${celsiusToFahr(temperature.toFixed(1))}°F outside.`
    
    document.querySelector("#greeting").innerHTML = greetingText;
    document.querySelector("p#weather").innerHTML = celsiusText;
    
    document.querySelector(".weather-group").addEventListener("click", function(event){
        if(event.target.id == "celsius"){
            document.querySelector("p#weather").innerHTML = celsiusText;
        } else if (event.target.id == "fahr" ){
            document.querySelector("p#weather").innerHTML = fahrText;
    
        }
    })
};

// Local time section
function clockHandler() {
    setInterval(function(){
        let localTime = new Date();
        document.querySelector("span[data-time=hours]").textContent = localTime.getHours().toString().padStart(2, "0");
        document.querySelector("span[data-time=minutes]").textContent = localTime.getMinutes().toString().padStart(2, "0");
        document.querySelector("span[data-time=seconds]").textContent = localTime.getSeconds().toString().padStart(2, "0");
    }, 1000)
};

// Gallery section
function galleryHandler(){

    let mainImage = document.querySelector("#gallery > img");
    let thumbnails = document.querySelector("#gallery > .thumbnails");
    
    mainImage.src = galleryImages[0].src
    mainImage.alt = galleryImages[0].alt
    
    galleryImages.forEach((image, index) => {
        let thumb = document.createElement("img");
        thumb.src = image.src;
        thumb.alt = image.alt;
        thumb.dataset.arrayIndex = index;
        thumb.dataset.selected = index === 0 ? true : false;
    
        thumb.addEventListener("click", function(event){
            let selectedIndex = event.target.dataset.arrayIndex;
            let selectedImage = galleryImages[selectedIndex]
            mainImage.src = selectedImage.src
            mainImage.alt = selectedImage.alt
    
            thumbnails.querySelectorAll("img").forEach( function(img){
                img.dataset.selected = false
            })
    
            event.target.dataset.selected = true;
        })
    
        thumbnails.appendChild(thumb)
    });
};

// Products section

function populateProducts(productList){
    let productsSection = document.querySelector(".products-area");
    productsSection.textContent = "";

    // Run a loop throught the products and crate an HTML element ("product-item") for each of them
    productList.forEach((product, index) => {
    // Create the HTML element for the individual product
    let productElm = document.createElement("div");
    productElm.classList.add("product-item");
    
    // Create the product image
    let productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.alt = `Image for ${product.title}`;

    // Create the product details section
    let productDetails = document.createElement("div");
    productDetails.classList.add("product-details");

    // Create product title, author, price-title and price
    let productTitle = document.createElement("h3");
    productTitle.classList.add("product-title");
    productTitle.textContent = product.title;

    let productAuthor = document.createElement("p");
    productAuthor.classList.add("product-author");
    productAuthor.textContent = product.author;

    let priceTitle = document.createElement("p");
    priceTitle.classList.add("price-title");
    priceTitle.textContent = "Price";

    let productPrice = document.createElement("p");
    productPrice.classList.add("product-price");
    productPrice.textContent = product.price > 0 ? `$${product.price.toFixed(2)}` : "Free";

    // Append the product details
    productDetails.append(productTitle);
    productDetails.append(productAuthor);
    productDetails.append(priceTitle);
    productDetails.append(productPrice);
    
    // Add all child HTML elements of the product
    productElm.append(productImage);
    productElm.append(productDetails);

    // Add complete individual product too the product section
    productsSection.append(productElm);
});
}

function productsHandler(){
    let freeProducts = products.filter(item => !item.price || item.price <= 0);
    let paidProducts = products.filter(item => item.price > 0);

    populateProducts(products);


    document.querySelector(".products-filter label[for=all] span.product-amount").textContent = products.length;
    document.querySelector(".products-filter label[for=paid] span.product-amount").textContent = paidProducts.length; 
    document.querySelector(".products-filter label[for=free] span.product-amount").textContent = freeProducts.length; 

    let productsFilter = document.querySelector(".products-filter");
    productsFilter.addEventListener("click", function(event){
        if(event.target.id === "all"){
            populateProducts(products)
        } else if (event.target.id === "paid") {
            populateProducts(paidProducts)
        } else if (event.target.id === "free") {
            populateProducts(freeProducts)
        }
    })
};

function footerHandler(){
    let currentYear = new Date().getFullYear();
    document.querySelector("footer").textContent = `© ${currentYear} - All righrs reserved`
}

navigator.geolocation.getCurrentPosition(position => {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let url = weatherAPIURL
    .replace("{lat}", latitude)
    .replace("{lon}", longitude)
    .replace("{API key}", weatherAPIKey);

    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
});

// Page load
menuHandler();
greetingHandler();
clockHandler();
galleryHandler();
productsHandler();
footerHandler();