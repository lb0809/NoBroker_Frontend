import "./location-card.styles.css"

const LocationCard = (props) => {
    const{data}=props
    const{property_title,city,Locality,price,area,bedrooms,Bathrooms,image}=data
    return (
        <div id="cardHover">
            <div className="location-card-div">
                <img className="location-card-img" src={`${process.env.REACT_APP_BACKEND_URL}/` +image} alt="" id="imageProfile"/>
                    <span>
                        <div id="userNameCard">{property_title}</div>
                        <div className="containBox">
                            <p className="btn-message" >{`${Locality} - ${city}, India`}</p>
                            <p className="btn-follow">{`₹${price}`}</p>
                        </div>
                    </span>
            </div>
        </div>
    )
}

export default LocationCard