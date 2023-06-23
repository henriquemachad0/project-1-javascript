// Menu section
document.querySelector("#open-nav-menu").addEventListener("click", function(){
    document.querySelector("header nav .wrapper").classList.add("nav-open");
});

document.querySelector("#close-nav-menu").addEventListener("click", function(){
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
});

// Greeting section

function celsiusToFahr(temperature){
 let fahr = (temperature * 9/5) + 32
 return fahr
}

celsiusToFahr(25)

const greetingText = "Good morning!"
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

setInterval(function(){
    let localTime = new Date();

    document.querySelector("span[data-time=hours]").textContent = localTime.getHours().toString().padStart(2, "0");
    document.querySelector("span[data-time=minutes]").textContent = localTime.getMinutes().toString().padStart(2, "0");
    document.querySelector("span[data-time=seconds]").textContent = localTime.getSeconds().toString().padStart(2, "0");
}, 1000)

// Gallert Section

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
]


let mainImage = document.querySelector("#gallery > img");
let thumbnails = document.querySelector("#gallery > .thumbnails");

mainImage.src = galleryImages[0].src
mainImage.alt = galleryImages[0].alt

galleryImages.forEach((image, index) => {
    let thumb = document.createElement("img");
    thumb.src = image.src;
    thumb.alt = image.alt;
    thumb.dataset.arrayIndex = index;
    thumb.dataset.selected = index == 0 ? true : false;
    thumbnails.appendChild(thumb)
});