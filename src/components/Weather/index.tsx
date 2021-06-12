import { useState } from "react";
import { api } from "../../services/api";
import SearchBar from "../SearchBar";

interface WeatherProps {
    sys: any;
    description: string,
    icon: string,
    main: {
        temp: number,
        humidity: number
    },
    wind: {
        speed: number
    },
    country: string,
    timestamp: number,
    name: string,
    weather: string,
};

const Weather: React.FC = () => {
    const [query, setQuery] = useState('');
    const [weathers, setWeathers] = useState<WeatherProps | null>(null);
    
      const search = async (e: { key: string}) => {
          if(e.key === 'Enter') {
              const data = await api(query);
    
              console.log(data)
              setWeathers(data);
              setQuery('');
          }
      }

    return (
        <>
        <input type="text"className="search"placeholder="Search..."value={query}onChange={(e) => setQuery(e.target.value)}onKeyPress={search}/>
        {weathers && (
            <div className="city"
                >
                <h2 className="city-name">
                    <span>{weathers.name}</span>
                    <sup>{weathers.sys.country}</sup>
                </h2>
                <div className="city-temp">
                    {Math.round(weathers.main.temp)}
                    <sup>&deg;C</sup>
                </div>
                <div className="info">
                    <img className="city-icon" src={`https://openweathermap.org/img/wn/${weathers.weather[0]}@2x.png`} alt={weathers.description} />
                    {/* <p>{weathers.weathers[0].description}</p> */}
                </div>
            </div>
        )} 
        </>
    )
}

export default Weather;