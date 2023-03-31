import React from "react";
import DashCards from "../Dash_Cards/Dash_Cards.component";
import BasicTable from "../Table/Table.component"
import "./MainDash.styles.css";
const MainDash = () => {
    return (
        <div className="MainDash">
            {/* <h1>Dashboard</h1> */}
            <DashCards />
            <BasicTable />
        </div>
    );
};

export default MainDash;
