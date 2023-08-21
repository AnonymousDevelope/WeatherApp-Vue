import axios from "axios";

const WeatherService = {
    getData(city = "tashkent") {
        return axios.get(`https://api.weatherapi.com/v1/forecast.json?key=d17440e76748470b893125348231908&q=${city}&days=7`)
    }
}
export default WeatherService;