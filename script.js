const options={
    method:"GET",
    headers:{
        'x-rapidapi-host': 'weather-api138.p.rapidapi.com',
        'x-rapidapi-key': 'b8df831963mshfef34d74b953283p1f8ea2jsne9a8ed300c43'
    }
}

const inputBox=document.querySelector('.input-box');
const searchBtn=document.getElementById('searchBtn');
const weather_img=document.querySelector('.weather-img');
const temperature=document.querySelector('.temperature');
const description =document.querySelector('.description');
const humidity=document.querySelector('#humidity');
const wind_speed=document.querySelector('#wind-speed');
const location_not_found=document.querySelector('.location-not-found');   
const weather_body=document.querySelector('.weather-body');

function checkWeather(city){

    const url= 'https://weather-api138.p.rapidapi.com/weather?city_name='+city
    fetch(url,options).then(res=>res.json()).then(res=>{

      if(res.cod==404) throw new Error("Not a valid city");

      weather_body.classList.remove('class');
      location_not_found.classList.add('class'); 

      temperature.innerHTML=(res.main.temp-273.15).toFixed(2);
      description.innerHTML=res.weather[0].description;
      humidity.innerHTML=res.main.humidity;
      wind_speed.innerHTML=res.wind.speed;

      switch(res.weather[0].main){
        case 'Clouds':
            weather_img.src='./assets/cloud.png'
            break;
        case 'Clear':
            weather_img.src='./assets/clear.png'
            break;
        case 'Mist':
            weather_img.src='./assets/mist.png'
            break;
        case 'Rain':
            weather_img.src='./assets/rain.png'
            break;
        case 'Snow':
            weather_img.src='./assets/snow.png'
            break;

      }

    }).catch(err=>{
        weather_body.classList.add('class');
        location_not_found.classList.remove('class');  
    })
}
searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value); 
})