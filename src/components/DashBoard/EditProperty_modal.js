import React from "react";
import "./DashBoard.css";

const EditProperty_modal = () => {

    return (
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header modal_header_container" >
                        <h5 class="modal-title" id="exampleModalLabel" style={{ "marginLeft": "25.5vw" }}>Edit Property</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="modal-body">
                        <div class="modal-header modal_header_container_small" >
                            <h5 class="modal-title" >Basic Details</h5>
                        </div>

                        <div className="modal_mini_container">

                            {/*----------- Purpose----------- */}

                            <label className="modal_label_font" htmlFor="Purpose">Purpose</label>
                            <br />
                            <input type="radio" name="purpose" value="sell" />
                            <label className="modal_radio_label" htmlFor="">Sell</label>
                            <br />
                            <input type="radio" name="purpose" value="rent" />
                            <label className="modal_radio_label" htmlFor="">Rent</label>
                            <br />
                            <input type="radio" name="purpose" value="PG" />
                            <label className="modal_radio_label" htmlFor="">PG</label>
                            <br />

                            {/*-------- Prpoerty Category ----------*/}
                            <label className="modal_label_font" htmlFor="PropertyCategory">Proeprty Category</label>
                            <br />
                            <input type="radio" name="prop_cat" value="Residential" />
                            <label className="modal_radio_label" htmlFor="">Residential</label>
                            <br />

                            <input type="radio" name="prop_cat" value="Residential" />
                            <label className="modal_radio_label" htmlFor="">Commercial</label>
                            <br />

                            <input type="radio" name="prop_cat" value="Residential" />
                            <label className="modal_radio_label" htmlFor="">Apartment</label>
                            <br />

                            <input type="radio" name="prop_cat" value="Residential" />
                            <label className="modal_radio_label" htmlFor="">House</label>
                            <br />

                            <input type="radio" name="prop_cat" value="Residential" />
                            <label className="modal_radio_label" htmlFor="">Land</label>
                            <br />

                        </div>

                        {/*-------------- Location ----------------*/}

                        <div className="modal-header modal_header_container_small">
                            <h5 className="modal-title ">Location Details</h5>
                        </div>

                        <div className="modal_mini_container">

                            <label className="modal_label_font" htmlFor="city">city</label>
                            <br />
                            <input type="text" name="city" id="city" className="modal_input_box" />
                            <br />
                            <label className="modal_label_font" htmlFor="Apartment\society">Apartment\society</label>
                            <br />
                            <input type="text" name="Apartment_society" id="Apartment\society" className="modal_input_box" />
                            <br />
                            <label className="modal_label_font" htmlFor="Locality">Locality</label>
                            <br />
                            <input type="text" name="Locality" id="Locality" className="modal_input_box" />
                            <br />
                            <label className="modal_label_font" htmlFor="sublocality">sublocality</label>
                            <br />
                            <input type="text" name="sublocality" id="sublocality" className="modal_input_box" />
                            <br />
                            <label className="modal_label_font" htmlFor="houseno">houseno</label>
                            <br />
                            <input type="text" name="houseno" id="houseno" className="modal_input_box" />
                            <br />
                        </div>



                        {/*------------ Room Details ----------------*/}

                        <div class="modal-header modal_header_container_small">
                            <h5 class="modal-title">Room Details</h5>
                        </div>


                        <div className="modal_mini_container">

                            <label className="modal_label_font" htmlFor="bedrooms">Bedroom Count</label>
                            <br />
                            <input className="modal_input_box" type="number" name="bedrooms" id="bedrooms" />
                            <br />

                            <label className="modal_label_font" htmlFor="bedrooms" >Bathroom Count</label>
                            <br />
                            <input className="modal_input_box" type="number" name="Bathrooms" id="Bathrooms" />
                            <br />

                            <label className="modal_label_font" htmlFor="bedrooms" >Balcony Count</label>
                            <br />
                            <input className="modal_input_box" type="number" name="Balconies" id="Balconies" />
                            <br />

                            <label className="modal_label_font" htmlFor="bedrooms" >Floor Count</label>
                            <br />
                            <input className="modal_input_box" type="number" name="floorno" id="floorno" />
                            <br />

                        </div>

                        {/*----------- Area Details --------------*/}

                        <div class="modal-header modal_header_container_small">
                            <h5 class="modal-title">Area Details</h5>
                        </div>
                        <div className="modal_mini_container">
                            <label className="modal_label_font" htmlFor="area">Area</label>
                            <br />
                            <input type="number" className="modal_input_box" name="area" id="Carpet_Area" />
                            <br />
                            <label className="modal_label_font" htmlFor="Carpet_Area"></label>
                            <select className="textbox modal_input_box" name="Area_Unit" id="Area_Unit" size="1">
                                <option value="sq.ft">sq.ft</option>
                                <option value="sq.yards">sq.yards</option>
                                <option value="sq.m">sq.m</option>
                                <option value="acres">acres</option>
                                <option value="sq.km">sq.km</option>
                                <option value="sq.hm">sq.hm</option>
                                <option value="sq.cm">sq.cm</option>
                            </select>
                            <br />
                        </div>


                        {/*---------- Tell us about your property -------------*/}

                        <div class="modal-header modal_header_container_small">
                            <h5 class="modal-title">Tell Us About Your Property</h5>
                        </div>


                        <div className="modal_mini_container">
                            <label className="modal_label_font" htmlFor="PropertyTitle">Property Title</label>
                            <br />
                            <input className="modal_input_box" type="text" name="property_title" id="property_title" />
                            <br />
                            <label className="modal_label_font" htmlFor="AboutProperty">About Property</label>
                            <br />
                            <input className="modal_input_box" type="text" name="abt_property" id="abt_property" />
                            <br />
                            <label className="modal_label_font" htmlFor="Property Age">Property Age</label>
                            <br />
                            <input className="modal_input_box" type="number" name="property_age" id="property_age" />
                            <br />
                        </div>


                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" style={{ "backgroundColor": "#886ce4" }}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default EditProperty_modal;

