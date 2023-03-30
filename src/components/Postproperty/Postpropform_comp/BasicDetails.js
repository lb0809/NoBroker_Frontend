import React from "react";
import "../postprop.css";
const BasicDetails = (props) => {
  const { fdata, handleChange } = props
  const { purpose, prop_cat } = fdata
  return (
    <>
      <div className="postprop_subheader" >
        <p
          className="italic_font"
          style={{ "textAlign": "center", "margin": "0px", "fontSize": "30px", "fontFamily": "monospace" }}
        >
          {" "}
          Basic Details{" "}
        </p>
      </div>
      <div className="form_element_box">
        <label
          htmlFor="Purpose"
          className="form-label"
          style={{ margin: "0px", fontSize: "20px", "fontFamily": "'Barlow', sans-serif" }}

        >
          Purpose (you're looking to...){" "}
          <hr style={{ "margin": "0px", "height": "2px", "width": "40vw", "borderWidth": "0", "color": "black", "backgroundColor": "black" }}></hr>
        </label>
        <div className="form-check" style={{ "margin": "0px" }}>
          <input
            className="form-check-input radio_color"
            value="sell"
            onChange={handleChange}
            type="radio"
            name="purpose"
            id=""
            checked={purpose === "sell"}
          />
          <label className="form-check-label small_font" htmlFor="">
            Sell
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input radio_color"
            value="Rent"
            type="radio"
            name="purpose"
            onChange={handleChange}
            id=""
            checked={purpose === "Rent"}
          />
          <label className="form-check-label small_font" htmlFor="">
            Rent
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input radio_color"
            value="PG"
            type="radio"
            name="purpose"
            onChange={handleChange}
            id=""
            checked={purpose === "PG"}
          />
          <label className="form-check-label small_font" htmlFor="">
            PG
          </label>
        </div>
      </div>
      <div className="form_element_box">
        <label
          htmlFor="PropertyCategory"
          className="form-label"
          style={{ margin: "0px", fontSize: "20px", "fontFamily": "'Barlow', sans-serif" }}
        >
          {" "}
          Property's Category{" "}
          <hr style={{ "margin": "0px", "height": "2px", "width": "40vw", "borderWidth": "0", "color": "black", "backgroundColor": "black" }}></hr>
        </label>
        <div className="form-check">
          <input
            className="form-check-input radio_color"
            value="Residential"
            type="radio"
            name="prop_cat"
            onChange={handleChange}
            id=""
            checked={prop_cat === "Residential"}
          />
          <label className="form-check-label small_font" htmlFor="">
            Residential
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input radio_color"
            value="Commercial"
            type="radio"
            name="prop_cat"
            onChange={handleChange}
            id=""
            checked={prop_cat === "Commercial"}
          />
          <label className="form-check-label small_font" htmlFor="">
            Commercial
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input radio_color"
            value="Apartment"
            type="radio"
            name="prop_cat"
            onChange={handleChange}
            id=""
            checked={prop_cat === "Apartment"}
          />
          <label className="form-check-label small_font" htmlFor="">
            Apartment
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input radio_color"
            value="House"
            type="radio"
            name="prop_cat"
            onChange={handleChange}
            id=""
            checked={prop_cat === "House"}
          />
          <label className="form-check-label small_font" htmlFor="">
            House
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input radio_color"
            value="Land"
            type="radio"
            name="prop_cat"
            onChange={handleChange}
            id=""
            checked={prop_cat === "Land"}
          />
          <label className="form-check-label small_font" htmlFor="">
            Land
          </label>
        </div>
      </div>
    </>
  );
};

export default BasicDetails;
