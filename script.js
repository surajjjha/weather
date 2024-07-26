const apikey="84f86ef2fbfb74e844fe17b2e976e61b";
const url="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const city=document.querySelector(".city")
const temp=document.querySelector(".temp");
const humidity=document.querySelector(".humidity");
const wind=document.querySelector(".wind");
const weather_icon = document.querySelector(".weathericon");

const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");

async function getdata(city){
    const response= await fetch(url+city+ `&appid=${apikey}`)
    if(response.status==404){
        document.querySelector(".error").style.display="block"
        document.querySelector(".weather").style.display="none"
    }else if(response.status==200){
        document.querySelector(".error").style.display="none"

    }
    var data=await response.json();
    city.innerHTML=data.name;
    temp.innerHTML=Math.round(data.main.temp )+"°C";
    humidity.innerHTML=data.main.humidity +"%";
    wind.innerHTML=data.wind.speed +"km/h";
    if(data.weather[0].main=="Clouds"){
        weather_icon.src="images/clouds.png"

    } else if(data.weather[0].main=="Mist"){
        weather_icon.src="images/mist.png"

    }else if(data.weather[0].main=="Clear"){
        weather_icon.src="images/clear.png"

    }else if(data.weather[0].main=="Drizzle"){
        weather_icon.src="images/drizzle.png"

    }else if(data.weather[0].main=="Rain"){
        weather_icon.src="images/rain.png"

    }else {
        weather_icon.src="images/snow.png"
    }
    console.log(data)

    document.querySelector(".weather").style.display="block";
    // images\wind.png
}
searchbtn.addEventListener("click",()=>{
    getdata(searchbox.value)
})
