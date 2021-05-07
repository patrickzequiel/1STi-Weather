import { useState } from "react";
import { api } from "../../services/api";

interface WeatherProps {
    name: string;
    description: string;
}

const Weather = (): JSX.Element => {

const [query, setQuery] = useState('');
const [weathers, setWeathers] = useState<WeatherProps[]>([]);
  
  const search = async (e: { key: string; }) => {
      if(e.key === 'Enter') {
          const data = await api(query);

          setWeathers(data);
          setQuery('');
      }
  }

    return (
        <>
        <input type="text"className="search"placeholder="Search..."value={query}onChange={(e) => setQuery(e.target.value)}onKeyPress={search}/>
        {weathers.map(weather => (
            <div className="city">
                <h2 className="city-name">
                    <span>{weather.name}</span>
                    {/* <sup>{weather.sys.country}</sup> */}
                </h2>
                <div className="city-temp">
                    {/* {Math.round(weather.main.temp)} */}
                    <sup>&deg;C</sup>
                </div>
                <div className="info">
                    {/* <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather[0].description} /> */}
                    {/* <p>{weather.weather[0].description}</p> */}
                </div>
            </div>
        ))}
        </>
    )
}

export default Weather;