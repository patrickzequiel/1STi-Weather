import axios from 'axios';

export const api = axios.create({
    baseURL: 'api.openweathermap.org/data/2.5/weather?q={city name}&appid={3eb2e75941c6df4c25d84c52b8098be1}'
})