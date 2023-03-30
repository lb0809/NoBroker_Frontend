import React from 'react'
// import "./DashBoard.css";
const DashboardNavbar = () => {
    return (
        <div className="navbar_content_container">
            <a href="/"><button className="dashboard_navbar_button">Home</button></a>
            <a href="/postyourproperty"><button className="dashboard_navbar_button">Post Property</button></a>
            <a href="/aboutus"><button className="dashboard_navbar_button">About Us</button></a>
            <a href="/search"><button className="dashboard_navbar_button">Search</button></a>



        </div>
    );
}

export default DashboardNavbar;