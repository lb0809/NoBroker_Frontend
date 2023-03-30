import React from 'react'
import "../postprop.css";
const LocationDetails = (props) => {
    const { fdata, handleChange } = props;
    const { city, Apartment_society, Locality, sublocality, houseno } = fdata
    return (
        <>
            <div className="postprop_subheader" >
                <p className="italic_font" style={{ "textAlign": "center", "margin": "0px", "fontSize": "30px", "fontFamily": "monospace" }}>Location Details</p>
            </div>
            <div className="form_element_box">
                <input type="text" className="form-control textbox" name="city" id="city" placeholder="City*" value={city} onChange={handleChange} required /><br />

                <input type="text" className="form-control textbox" name="Apartment_society" id="Apartment\society"
                    placeholder="Apartment\society*" value={Apartment_society} onChange={handleChange} required /><br />

                <input type="text" className="form-control textbox" name="Locality" id="Locality" placeholder="Locality*" value={Locality} onChange={handleChange}
                    required /><br />

                <input type="text" className="form-control textbox" name="sublocality" id="sublocality"
                    placeholder="Sub locality(Optional)" value={sublocality} onChange={handleChange} /><br />

                <input type="text" className="form-control textbox" name="houseno" id="houseno"
                    placeholder="House no.(Optional)" value={houseno} onChange={handleChange} />
            </div>
        </>
    )
}

export default LocationDetails