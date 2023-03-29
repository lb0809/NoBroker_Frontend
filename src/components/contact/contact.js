import React from "react";
import bgimg4 from "../contact/img/bgimg4.jpg";
import phone from "../contact/img/phone.png";
import address from "../contact/img/address.png";
import email from "../contact/img/email.png";
import "./contact.css"


const Contact = () => {
    return (
    <>
      {/* here navbar comes and the below image will touch it */}
        <div classNmae="contact_page_wrap">
            <div className="bg_section">
               <img src={bgimg4} className="bg_img" alt="#" />
               <div class="content">
                    <div class="page-title">
                        <h2>Contact Us</h2>
                    </div>
               </div>

            </div>
            <div className="contact_info">
            <div className="container-fluid">
                <div className="row mt-5">
                    <div className="col-md-8 offset-md-2 d-flex justify-content-between">
                        {/* phone number */}
                        <div className="contact_info_item d-flex justify-content-start align-items-center">
                            <img src={phone} alt="#" className="contact_info_item_iconimage" />
                            <div className="contact_info_content">
                                <div className="contact_info_title">
                                    Phone :
                                </div>
                                <div className="contact_info_text">
                                    +91 9848024638
                                </div>
                            </div>
                        </div>

                        {/* address */}
                        <div className="contact_info_item d-flex justify-content-start align-items-center">
                            <img src={address} alt="#" className="contact_info_item_iconimage" />
                            <div className="contact_info_content">
                                <div className="contact_info_title">
                                    Address :
                                </div>
                                <div className="contact_info_text">
                                    Wall Street, New York
                                </div>
                            </div>
                        </div>
                        
                        {/* Email */}
                        <div className="contact_info_item d-flex justify-content-start align-items-center">
                            <img src={email} alt="#" className="contact_info_item_iconimage" />
                            <div className="contact_info_content">
                                <div className="contact_info_title">
                                    Email :
                                </div>
                                <div className="contact_info_text">
                                    support@nobroker.com
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>


            {/* contact us form */}

            <div className="contact-form">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-8 offset-md-2">
                            <div className="contact_form_container py-5">
                                <div className="contact_form_title">
                                    Get in touch !
                                </div>
                                <div class="mt-4 row">
                                    <div class="col-12 mb-3">
                                        <textarea id="textareaComment" class="form-control"
                                        placeholder="*Your Message" rows="3"></textarea>
                                    </div>
                                    <div class="col-6 mb-3">
                                        <input type="text" class="form-control" id="exampleInputName" placeholder="*Your Name"></input>
                                    </div>
                                    <div class="col-6 mb-3">
                                        <input type="email" class="form-control" id="exampleInputEmail" placeholder="*Your Email"></input>
                                    </div>
                                    <div class="col-12">
                                        <button type="submit" class="submit_button w-100">LEAVE A MESSAGE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default Contact