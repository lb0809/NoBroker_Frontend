import React from 'react';
import { useState } from "react";
import "./DashBoard.css";

import DashboardNavbar from "./DashboardNavbar";
import EditProfile from "./EditProfile";
import EditProperty_modal from "./EditProperty_modal";
import Posted_property_card from './Posted_property_card';

import profile from "../../images/profile.png"

const DashBoard_User = () => {

    const [tabIndex, setTabIndex] = useState(1);

    return <div className="Dashboard_container">
        <div className="sidebar_container">
            <div className="user_profile_container">
                <img src={profile} alt="no" className='profile_image' />
                <div className="userdetail_text">
                    <h4>UserName</h4>
                    <h5>City</h5>

                </div>
            </div>
            <div className="dashboard_routes">
                <div className="sidebar_buttons_container">
                    <button className='sidebar_button' onClick={() => setTabIndex(1)}>
                        <span class="material-symbols-outlined sidebar_icon">
                            edit
                        </span>
                        Edit Profile</button>
                    <button className='sidebar_button' onClick={() => setTabIndex(2)}>
                        <span class="material-symbols-outlined sidebar_icon">
                            apartment
                        </span>
                        Posted Property</button>

                </div>
                <div className="logout_container">
                    <button className='logout_button'>
                        <span className="material-symbols-outlined logout_icon">
                            logout
                        </span>
                        Logout
                    </button>
                    <button className='logout_button'>
                        <span class="material-symbols-outlined logout_icon">
                            switch_account
                        </span>
                        Switch Account</button>
                </div>
            </div>
        </div>
        <div className="content_container">
            <DashboardNavbar></DashboardNavbar>

            {
                tabIndex === 1 && (
                    <EditProfile></EditProfile>
                )
            }
            {
                tabIndex === 2 && (
                    <div>
                        <Posted_property_card></Posted_property_card>
                        <Posted_property_card></Posted_property_card>
                        <Posted_property_card></Posted_property_card>
                        <Posted_property_card></Posted_property_card>
                        <Posted_property_card></Posted_property_card>
                        <Posted_property_card></Posted_property_card>

                    </div>
                )
            }


            <EditProperty_modal></EditProperty_modal>

        </div>
    </div>
}

export default DashBoard_User;