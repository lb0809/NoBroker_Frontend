import Admin_Navbar from "../Admin_Portal/Admin_requirements/Admin_Navbar";
import "./Admin_CSS/Admin_home.css";
import user1 from "../../images/user1.svg"
import user2 from "../../images/user2.svg"
import property from "../../images/property.svg"
import Admin_Portal_card from "./Admin_requirements/Admin_Portal_card";

const Admin_home = () => {

    return (
        <>
            <Admin_Navbar></Admin_Navbar>
            {/* <div className="Admin_portal_container">
                <h2 className="Admin_portal_text">Admin Portal</h2>
                <h2 className="Admin_portal_text">Admin Portal</h2>
            </div> */}
            <div className="new_Admin_portal_container">
                <div class="bg"></div>
                <div class="bg bg2"></div>
                <div class="bg bg3"></div>
                <div class="content">
                    <p className="Admin_portal_text">Admin Portal</p>
                </div>
            </div>


            <div className="admin_card_container">
                <div className="admin_card">
                    <div className="admin_minicard">
                        <img src={user1} alt="" className="admin_card_image" />
                    </div>
                    <h3>Users Visited</h3>
                    <div className="admin_minicard2">
                        <h3>45672</h3>
                    </div>
                </div>
                <div className="admin_card">
                    <div className="admin_minicard">
                        <img src={property} alt="" className="admin_card_image" />
                    </div>
                    <h3>Property Posted</h3>
                    <div className="admin_minicard2">
                        <h3>4521</h3>
                    </div>
                </div>
                <div className="admin_card">
                    <div className="admin_minicard">
                        <img src={user2} alt="" className="admin_card_image" />
                    </div>
                    <h3>Users Registered</h3>
                    <div className="admin_minicard2">
                        <h3>7843</h3>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Admin_home;