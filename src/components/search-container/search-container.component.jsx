import "./search-container.styles.css"
import { Link } from "react-router-dom";

const SearchContainer = () => {
    return (
        <div className="search_container">
            <div className="searchbar">
                <div className="btn-group searchbarbtn" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-primary categories">Buy</button>
                    <button type="button" className="btn btn-primary categories">Rent</button>
                    <button type="button" className="btn btn-primary categories">PG</button>
                    <button type="button" className="btn btn-primary categories">Commercial</button>
                </div>
                <form className="d-flex submit " style={{ margin: "2vh" }} action="/search" method="post">
                    <div className="btn dropdown dropstart location">
                        <button className=" dropdown-toggle location_button_new" href="#" role="button" id="dropdownMenuLink"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Location
                        </button>

                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><a className="dropdown-item" href="#">Cities</a></li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li><a className="dropdown-item" href="#">Delhi</a></li>
                            <li><a className="dropdown-item" href="#">Chennai</a></li>
                            <li><a className="dropdown-item" href="#">Mumbai</a></li>
                            <li><a className="dropdown-item" href="#">Kolkata</a></li>
                            <li><a className="dropdown-item" href="#">Lucknow</a></li>
                            <li><a className="dropdown-item" href="#">Kanpur</a></li>
                        </ul>
                    </div>
                    <input className="form-control me-2 search-text" type="search" placeholder="Search" aria-label="Search" name="search" style={{ height: "43px" }} />
                    <button className="btn search" type="submit">Search</button>
                </form>
            </div>
        </div>
    )
}

export default SearchContainer;