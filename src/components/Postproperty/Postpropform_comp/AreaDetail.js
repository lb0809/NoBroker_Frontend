import React from 'react'
import "../postprop.css";
const AreaDetail = (props) => {
  const { fdata, handleChange } = props
  const { area, Area_Unit } = fdata
  return (
    <>
      <div className="postprop_subheader">
        <p className="italic_font" style={{ "textAlign": "center", "margin": "0px", "fontSize": "30px", "fontFamily": "monospace" }}>Add Area
          Details</p>
      </div>
      <div className="form_element_box" style={{ "margin": "20px", "padding": "20px" }}>

        <input type="text" className="textbox" style={{ "border": "1px solid black", "width": "100%", "height": "5vh" }} name="area" id="Carpet_Area" value={area} onChange={handleChange}
          placeholder="Carpet Area" />
        <label htmlFor="Carpet_Area"></label>
        <select className="textbox" style={{ "marginTop": "20px", "width": "100%", "height": "5vh" }} name="Area_Unit" id="Area_Unit" onChange={handleChange} value={Area_Unit} size="1">
          <option value="sq.ft">sq.ft</option>
          <option value="sq.yards">sq.yards</option>
          <option value="sq.m">sq.m</option>
          <option value="acres">acres</option>
          <option value="sq.km">sq.km</option>
          <option value="sq.hm">sq.hm</option>
          <option value="sq.cm">sq.cm</option>
        </select>
      </div>
    </>
  )
}

export default AreaDetail