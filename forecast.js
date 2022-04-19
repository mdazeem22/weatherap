//api call


// add api key

const key = "5EvhMmuc7PZvANVqzvt8SqG3jHujdL6A";


const getCity =  async (city) =>{
    const baseURL = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(baseURL+query);
    const data = response.json();

    return data;

}

const getWeather = async (id) => {
    const baseURL = "http://dataservice.accuweather.com/currentconditions/v1/";
    const query = `${id}?apikey=${key}`;
    const response = await fetch(baseURL+query);
    const data = await response.json();

    return data[0];

}



getCity("lahore")
    .then((data)=>{
        return getWeather(data[0].Key);

        })
        .then((data)=>{
            console.log(data);
        })
        .catch((err)=>console.log(err))