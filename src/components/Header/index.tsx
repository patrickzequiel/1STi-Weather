import Container from "./styles"
import SearchBar from "../SearchBar";

export function Header(){
    // const [searchBar, setSearchBar] = useState('')

    return (
        <Container>
            <div className="logo">WEATHER</div>
            <h2>City</h2>
        <SearchBar />
        </Container>
    )
}

export default Header;