import React from "react";
import "./DashBoard.css";
import profile from "../../images/property_img.jpg"

const Posted_property_card = (props) => {
    console.log(props.data)
    const{data} = props
    return (
        <div className="postedporpertycard_container">
            <img src={`${process.env.REACT_APP_BACKEND_URL}/` +data.imgname} alt="" className="posted_property_card_img" />
            <div className="pp_card_content">


                <div className="pp_card_mini_content_box">
                    <h4 className="pp_card_content_font">{data.title}</h4>
                    <h5 className="pp_card_content_font">{`${data.dimensions.bedrooms}BHK`}</h5>
                </div>
                <div className="pp_card_mini_content_box">
                    <h4 className="pp_card_content_font">{data.category}</h4>
                    <h5 className="pp_card_content_font">{`${data.price.value} Rs`}</h5>
                </div>
                <div className="pp_card_mini_content_box" style={{ "display": "flex", "justifyContent": "center", "alignItems": "center" }}>
                    <button type="button" class="btn btn-primary" style={{ "backgroundColor": "#886ce4", "border": "none" }} data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Edit Property </button>
                </div>

                {/* <p>Property Title</p>
                <p>location</p>
                <p>Residnetial</p>
                <p>Price</p> */}

            </div>
        </div>
    );
}

export default Posted_property_card;