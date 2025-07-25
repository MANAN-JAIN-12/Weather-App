const apiKey="8997171ced092c106b8c9d00a1deb1b1";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const icon=document.querySelector(".weatherIcon");
async function checkWeather(city){
    const response=await fetch(apiUrl +city+`&appid=${apiKey}`);
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
    var data=await response.json();
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)  + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=Math.round((data.wind.speed))*3.6+" km/hr";

    if(data.weather[0].main=="Clear"){
        icon.src="images/clear.png";
    }
    else if(data.weather[0].main=="Clouds"){
        icon.src="images/clouds.png";
    }
    else if(data.weather[0].main=="Rain"){
        icon.src="images/rain.png";
    }
    else if(data.weather[0].main=="Mist"){
        icon.src="images/mist.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        icon.src="images/drizzle.png";
    }
    document.querySelector(".weather").style.display="block";
      document.querySelector(".error").style.display="none";
}
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
