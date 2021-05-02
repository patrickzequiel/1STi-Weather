import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { IconButton } from "@material-ui/core";
import {IconButtonStyle } from './styles';


export function SearchBar(){

    return (
        <>
        <IconButtonStyle>
            <IconButton type="submit"  aria-label="search">
                <SearchIcon className='iconButton'/>
            </IconButton>
            <InputBase
                placeholder="Search"
                inputProps={{ '': 'search google maps' }}
            />
        </IconButtonStyle>
            
        </>
    )
}

export default SearchBar;