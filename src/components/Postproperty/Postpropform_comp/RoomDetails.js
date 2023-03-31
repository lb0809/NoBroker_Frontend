import React from 'react'
import "../postprop.css";
const RoomDetails = (props) => {
  const { fdata, handleChange } = props;
  console.log(fdata)
  const { bedrooms, Bathrooms, Balconies, floorno } = fdata;
  return (
    <>
      <div className="postprop_subheader" >
        <p className="italic_font" style={{ "textAlign": "center", "margin": "0px", "fontSize": "30px", "fontFamily": "monospace" }}>Add Room
          Details</p>
      </div>
      <div className="form_element_box">
        <label htmlFor="bedrooms" style={{ "fontSize": "18px" }}>Bedroom Count</label><br />
        <input type="number" name="bedrooms" id="bedrooms" className="form-select selectbox textbox" value={bedrooms} onChange={handleChange} />

        <label htmlFor="bedrooms" style={{ "fontSize": "18px" }}>Bathroom Count</label><br />
        <input type="number" name="Bathrooms" id="Bathrooms" className="form-select selectbox textbox" onChange={handleChange} value={Bathrooms} />


        <label htmlFor="bedrooms" style={{ "fontSize": "18px" }}>Balcony Count</label><br />

        <input type="number" name="Balconies" id="Balconies" className="form-select selectbox textbox" onChange={handleChange} value={Balconies} />


        <label htmlFor="bedrooms" style={{ "fontSize": "18px" }}>Floor Count</label><br />

        <input type="number" name="floorno" id="floorno" className="form-select selectbox textbox" onChange={handleChange} value={floorno} required />
        <br />
      </div>
    </>
  )
}

export default RoomDetails