//DOM manipulation

const cityForm = document.querySelector('form');


const updateCity = async(city)=>{
    const cityDetails = await getCity(city);
    const weather = await getWeather(cityDetails[0].Key)

    return {
        cityDetails,
        weather,
    }
}


cityForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const city = cityForm.city.value.trim();
    cityForm.reset();

    updateCity(city)
        .then((data) => updateUI(data))
        .catch((err) => alert("Please enter correct city name."))
})


// update UI

const card = document.querySelector('.card');
const details = document.querySelector('.details')


const updateUI = (data) => {




    const {cityDetails, weather} = data;
     
    details.innerHTML = `
    <h5 class="my-5">${cityDetails[0].EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg</span>
    </div>`;

}
