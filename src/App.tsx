import { useState } from 'react';
import Header from './components/Header';
import { api } from './services/api';
import { GlobalStyle } from './styles/global';


interface WeatherProps {
  weather: string
  main: string;
  name: string;
  sys: string;
}

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
    
    const search = async (e: { key: string; }) => {
        if(e.key === 'Enter') {
            const data = await api(query);

            setWeather(data);
            setQuery('');
        }
    }

  return (
    <>
    <GlobalStyle />
    <Header />
    <h1>home</h1>
                <input type="text"className="search"placeholder="Search..."value={query}onChange={(e) => setQuery(e.target.value)}onKeyPress={search}/>
            {weather.main && (
                <div className="city">
                    <h2 className="city-name">
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                    <div className="city-temp">
                        {Math.round(weather.main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <div className="info">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                        <p>{weather.weather[0].description}</p>
                    </div>
                </div>
            )}
    </>
  );
}

export default App;
