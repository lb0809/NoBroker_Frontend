import React from "react";
import { Link } from "react-router-dom";
import real_estate_agent from "../../../images/real_estate_agent.svg"
import "../Admin_CSS/Admin_home.css"
const Admin_Navbar = () => {

    return (
        <>
            <div className="Navbar_container_A">
                {/* <div className="admin_logo"><img src={logo_new} alt="" className="new_logo" /></div> */}
                <div className="logo_container"><img src={real_estate_agent} alt="" className="logo_image" /> <p className="admin_logo_messed_up"> 𝒩𝑜 ℬ𝓇𝑜𝓀𝑒𝓇 </p> </div>
                <ul>
                    <li className="Navbar_li">
                        <Link to="/Admin_home" className="Navbar_link"><button className="Navbar_link_button fromleft">Dashboard</button></Link>
                    </li>
                    <li className="Navbar_li">
                        <Link to="/Admin_user" className="Navbar_link"><button className="Navbar_link_button fromleft">User</button></Link>
                    </li>
                    <li className="Navbar_li">
                        <Link to="/Admin_property" className="Navbar_link"><button className="Navbar_link_button fromleft">Property</button></Link>
                    </li>
                    <li className="Navbar_li">
                        <Link to="/Admin_contactUs" className="Navbar_link"><button className="Navbar_link_button fromleft">Contact Us</button></Link>
                    </li>

                </ul>
            </div>


        </>
    );
}

export default Admin_Navbar;