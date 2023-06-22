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