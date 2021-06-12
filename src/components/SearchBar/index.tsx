import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { IconButton } from "@material-ui/core";
import {IconButtonStyle } from './styles';
import { useState } from 'react';
import { api } from '../../services/api';

interface WeatherProps {
    description: string,
    icon: number,
    main: {
        temp: number,
        humidity: number
    },
    wind: {
        speed: number
    },
    country: string,
    timestamp: number,
    name: string
};

const SearchBar= (): JSX.Element => {
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
        <IconButtonStyle>       
            <IconButton 
            type="submit"   
            aria-label="search">
                <SearchIcon             
                // value={query}  
                // onChange={(e) => 
                // setQuery(e.target.value)} 
                // onKeyPress={search}
                className='iconButton'/>
            </IconButton>
            <InputBase
                value={query}
                placeholder="Search..."
                onKeyPress={search}
                onChange={(e) => 
                setQuery(e.target.value)} 
            />
        </IconButtonStyle>
            
        </>
    )
}

export default SearchBar;