let city = document.querySelector('#location-input');
let temp = document.querySelector('.temp');
document.getElementById('location-form').addEventListener('submit', getWeather);
let weatherElement = document.querySelector("#weather-data");

function getWeather(e) {
  e.preventDefault();   
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=3094aee575e46375c3eb2cff36e49dd4`)
    .then(response => response.json())
    .then(
        displayData)
    .catch(err => {
      let weatherContent = `
      <p><strong> Error: City not found</strong></p>` ;
    	weatherElement.innerHTML = weatherContent;
    });

}
   
 var displayData=(weather)=>{
  let weatherContent = `
 	<p><strong> ${city.value} </strong></p>
  <p> ${weather.weather[0].main} </p>
 	<h5> ${weather.main.temp}°C </h5>
 	`;
 	weatherElement.innerHTML = weatherContent;
  document.getElementById("location-form").reset();  //temp.innerText=`${weather.main.temp}°C`
   // console.log(temp.innerText);
    //desc.innerText=`${weather.weather[0].main}`

}