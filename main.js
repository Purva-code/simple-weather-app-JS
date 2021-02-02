//Get All Values
const inputText = document.querySelector('.inputText');
const showData = document.querySelector('.showData');

//Get API Key By Logging In To OpenWeatherMap
const API_Key = "a0e78d3b449db7059df0a38abd3952f8";

function getWeather(){

    //Get Input Value
    const cityInput = inputText.value;

    //Now Fetch Through Get API 
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&APPID=${API_Key}`)
    
        .then(function(res){ 
            return res.json()
        })
        .then(function(data) {

            //When Input Field is filled Then Clear Input Field
            inputText.value = " ";

            if(data.message=="city not found"){
                showData.innerHTML = `<p class="warning">Enter a valid city</p>`;
            } else {
                //Now Show the  Data Values
                showData.innerHTML = `
                                <ul>
                                    <li class="desc">${data.weather[0].description}</li>
                                    <li class="city">${data.name}</li>
                                    <li class="temp">${data.main.temp}°c</li>
                                    <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
                                </ul>
                                `; 
                    }

        });

};

