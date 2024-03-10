const apiKey = "ca780d1c63744f86b08f7901477d5895";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=arecibo";

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`)
    var data = await response.json();
    console.log(data);
}
checkWeather();