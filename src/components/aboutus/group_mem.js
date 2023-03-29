import React from "react";

function Group_Mem(props) {

    return (
        <div class="col">
            <div class="our-team-block-wrap">
                <div class={props.orient ? "box-ourteam" : "box-ourteam d-flex flex-sm-column-reverse flex-column"}>
                    <div class="avarta-team">
                        <img class="img-fluid" style={{ "borderRadius": "50%" }} src={props.img} alt="" />
                    </div>
                    <div class="content-team">
                        <h3 class="person-name" style={{ "marginTop": "40px", "textAlign": "center" }}>{props.name}</h3>
                        <span class="job" style={{ "textAlign": "center" }}> Indian Institute of Information Technology Sricity</span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Group_Mem