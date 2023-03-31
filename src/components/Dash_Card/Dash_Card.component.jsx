import React, { useState } from "react";
import "./Dash_Card.styles.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimateSharedLayout } from "framer-motion";
// import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";
import "transition-style"
import { gql, useQuery } from "@apollo/client"


// parent DashCard

const DashCard = (props) => {
    const [expanded, setExpanded] = useState(false);
    return (
        <AnimateSharedLayout>
            {expanded ? (
                <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
            ) : (
                <CompactCard param={props} setExpanded={() => setExpanded(true)} />
            )}
        </AnimateSharedLayout>
    );
};

// Compact DashCard
function CompactCard({ param, setExpanded }) {
    const Png = param.png;
    return (
        <motion.div
            className="CompactCard"
            style={{
                background: param.color.backGround,
                boxShadow: param.color.boxShadow,
            }}
            layoutId="expandableCard"
            onClick={setExpanded}
        >

            <div className="radialBar">
                <CircularProgressbar
                    value={param.barValue}
                    text={`${param.barValue}%`}
                />
                <span>{param.title}</span>
            </div>
            <div className="detailss">
                {/* <Png /> */}
                <span>{Png}</span>
                <span>{param.value}</span>
                <span>Last 24 hours</span>
            </div>
        </motion.div>
    );
}

// Expanded DashCard
function ExpandedCard({ param, setExpanded }) {

    // console.log("object");
    let { loading, error, data } = useQuery(GET_USERS)
    // console.log(data.getusers[0].createdAt);
    // if (data) {
    //     data = data.getusers
    //     console.log(data);
    // }
    let created_at = []
    if (data) {
        for (let i = 0; i < data.getusers.length; i++) {
            created_at.push(data.getusers[i].createdAt);
        }
        console.log(created_at);
    }

    const dat = {
        options: {
            chart: {
                toolbar: {
                    tools: {
                        zoom: false,

                        //   zoomin:'<img src="https://cdn-icons-png.flaticon.com/512/61/61442.png" width="20">', 
                        //   zoomout: '<img src="https://cdn-icons-png.flaticon.com/512/61/61442.png" width="20">',
                        //   pan:'<img src="https://cdn-icons-png.flaticon.com/512/61/61442.png" width="20">',
                        //   reset: 0,
                        //   download: 0,
                        zoomin: false,
                        zoomout: false,
                        pan: false,
                        reset: 0,
                        download: 0,
                        Selection: 0,
                    }
                },
                type: "area",
                height: "auto",
                width: "auto%"
            },

            dropShadow: {
                enabled: false,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: 0.35,
            },

            fill: {
                colors: ["#fff"],
                type: "gradient",
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
                colors: ["white"],
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm",
                },
            },
            grid: {
                show: true,
            },
            xaxis: {
                type: "datetime",
                categories: created_at,
            },
        },
    };

    return (
        <motion.div
            className="ExpandedCard"
            style={{
                background: param.color.backGround,
                boxShadow: param.color.boxShadow,
                height: "75vh"
            }}
            layoutId="expandableCard"
        >
            <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white", }}>
                {/* <UilTimes onClick={setExpanded} /> */}
                <i class="fa fa-window-close" aria-hidden="true" onClick={setExpanded} style={{
                    position: "relative",
                    top: "20px"
                }}></i>

            </div>
            <span>{param.title}</span>
            <div className="chartContainer"
                style={{
                    marginRight: "27rem",
                    marginBottom: "3rem",
                    height: "100rem",
                }}
            >
                <Chart options={dat.options} series={param.series} type="area" />
            </div>
            <span>Last 24 hours</span>
        </motion.div>
    );
}

export default DashCard;


const GET_USERS = gql`
query Getusers {
  getusers {
    id
    email
    username
    createdAt
  }
}
`