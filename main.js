// Menu section
document.querySelector("#open-nav-menu").addEventListener("click", function(){
    document.querySelector("header nav .wrapper").classList.add("nav-open");
});

document.querySelector("#close-nav-menu").addEventListener("click", function(){
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
});

// Greeting section

const greetingText = "Good morning!"
const weatherCondition = "sunny"
const userLocation = "New York"
let temperature = 22.8673
let weatherText = "The weather is cloudy in London and it's 22°C outside."