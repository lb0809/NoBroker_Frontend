import React from 'react'
import "../postprop.css";
const TellAboutProp = (props) => {
  const { fdata, handleChange } = props
  const { property_title, abt_property, property_age } = fdata
  return (
    <>
      <div className="postprop_subheader" >
        <p className="italic_font" style={{ "textAlign": "center", "margin": "0px", "fontSize": "30px", "fontFamily": "monospace" }}>Tell Us about your property</p>
      </div>
      <div class="form_element_box" style={{ "margin": "20px", "padding": "20px" }}>

        <input type="text" class="form-control textbox" name="property_title" id="property_title" style={{ "marginBottom": "20px", "height": "5vh", "border": "1px solid black", "borderRadius": "0px" }} value={property_title} onChange={handleChange}
          placeholder="Property Title" />

        <input type="text" class="form-control textbox" name="abt_property" id="abt_property" style={{ "marginBottom": "20px", "height": "5vh", "border": "1px solid black", "borderRadius": "0px" }} value={abt_property} onChange={handleChange}
          placeholder="About Property" />

        <input type="number" class="form-control textbox" name="property_age" id="property_age" style={{ "height": "5vh", "border": "1px solid black", "borderRadius": "0px" }} value={property_age} onChange={handleChange}
          placeholder="property_age" />

      </div>
    </>
  )
}

export default TellAboutProp