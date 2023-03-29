import React from "react";
import { Link } from "react-router-dom";
import '../Footer/footer.css'
// import 'font-awesome/css/font-awesome.min.css'

function Footer() {

    return (
        <div>
            <footer class="site-footer">
                <div class="section-1 text-center">
                    <div>
                        <h3 class="text-uppercase">PRICE IS WHAT YOU</h3><h3 class="text-uppercase" style={{ fontStyle: "italic", color: '#cabe9f' }}> PAY</h3><br />
                        <h3 class="text-uppercase">VALUE IS WHAT YOU</h3><h3 class="text-uppercase" style={{ fontStyle: "italic", color: '#cabe9f' }}> GET</h3>
                    </div>
                </div>
                <div class="section-2">
                    <div>
                        <div class="">
                            <div  >
                                <h6 class="title" style={{ "textAlign": "center", "marginLeft": "0px" }}>BUILDING LOCATION</h6>
                                <p style={{ "textAlign": "center" }}>Motivation can take you far, but it can take you even further if you first find your vision. Your vision will motivate and guide you on</p>
                                <div class="icon-list footer-address foot_con"  >
                                    <ul >
                                        <li>
                                            <span class="icon-list-icon" style={{ "textAlign": "center" }}>ADDRESS:</span>
                                            <span class="icon-list-text" style={{ "textAlign": "center" }}>Logan Barker, 865 Oak Boulevard, Elk Grove, Vermont 95184</span>
                                        </li>
                                        <li>
                                            <span class="icon-list-icon" style={{ "textAlign": "center" }}>PHONE:</span>
                                            <span class="icon-list-text" style={{ "textAlign": "center" }}>012-123-2345</span>
                                        </li>
                                        <li><span class="icon-list-icon" style={{ "textAlign": "center" }}>E-MAIL:</span>
                                            <span class="icon-list-text" style={{ "textAlign": "center" }}>email.support@perfectview.com</span>
                                        </li>
                                        <br />
                                        <li><Link to="/contact" class="icon-list-icon" style={{ "textAlign": "center", fontSize: "20px", textDecoration: "none", marginLeft: "12vw", fontWeight: "" }}>Contact Us</Link>

                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="section-3">
                            <div class="text-center">
                                <div class="rowf">
                                    <div class="col-sm-12">
                                        <div class="copyright">
                                            <p>Copyright © 2022 <a href="#">No Broker</a>. All Rights Reserved.</p>
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="social">
                                            <a href="#"><span class="screen-reader-text"></span><i class="fa fa-facebook"></i></a><span>&nbsp;&nbsp;&nbsp;</span>
                                            <a href="#"><span class="screen-reader-text"></span><i class="fa fa-twitter"></i></a><span>&nbsp;&nbsp;&nbsp;</span>
                                            <a href="#"><span class="screen-reader-text"></span><i class="fa fa-youtube"></i></a><span>&nbsp;&nbsp;&nbsp;</span>
                                            <a href="#"><span class="screen-reader-text"></span><i class="fa fa-google-plus"></i></a><span>&nbsp;&nbsp;&nbsp;</span>
                                            <a href="#"><span class="screen-reader-text"></span><i class="fa fa-pinterest"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;