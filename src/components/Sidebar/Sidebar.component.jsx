import React, { useState } from "react";
import "./Sidebar.styles.css";
// import Logo from "../imgs/logo.png";
// import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../../data/Data";
// import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import "transition-style"
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [selected, setSelected] = useState(0);

    const [expanded, setExpaned] = useState(true)
    console.log(SidebarData)

    const sidebarVariants = {
        true: {
            left: '0'
        },
        false: {
            left: '-60%'
        }
    }
    console.log(window.innerWidth)
    return (
        <>
            {/* <div style={{color:"white"}}> djddhfduihf </div> */}
            <div className="bars" style={expanded ? { left: '60%' } : { left: '5%' }} onClick={() => setExpaned(!expanded)}>
                {/* <UilBars /> */}
            </div>
            <motion.div className='sidebar'
                variants={sidebarVariants}
                animate={window.innerWidth <= 768 ? `${expanded}` : ''}
            >
                {/* Logo */}
                <div className="Logo">
                    {/* <img src={Logo} alt="Logo" /> */}
                    <div transition-style="in:circle:bottom-right">
                        <span>
                            NoBr<span style={{ color: "pink" }}>O</span>ker
                        </span>
                    </div>
                </div>

                <div className="menu">
                    {SidebarData.map((item, index) => {
                        console.log(item.heading)
                        return (
                            <div
                                className={selected === index ? "menuItem active" : "menuItem"}
                                key={index}
                                onClick={() => setSelected(index)}
                            >
                                {/* <item.icon /> */}
                                <div style={{ color: "white" }}>{item.icon}</div>
                                {/* <div>{item.icon}</div> */}
                                <Link style={{textDecoration:"none"}} to={item.link}><div style={{ color: "white" }}>{item.heading}</div></Link>
                            </div>
                        );
                    })}
                    {/* signoutIcon */}
                    <div className="menuItem">
                        {/* <UilSignOutAlt /> */}
                    </div>
                </div>
            </motion.div>

        </>
    );
};

export default Sidebar;
