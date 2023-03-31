import Sidebar from "../../components/Sidebar/Sidebar.component"
import MainDash from "../../components/MainDash/MainDash.component"
// import RightSide from "../components/RigtSide/RightSide"
import RightSide from "../../components/RigtSide/RightSide"
import "./Dash.css"

const Dash = () => {
    return (
        <div className="DashRoot">
            <div className="Dash">
                <div className="DashGlass">
                    {/* <h1>jhsdfhsikj</h1> */}
                    <Sidebar />
                    <MainDash />
                    {/* <RightSide /> */}
                </div>
            </div>
        </div>
    )
}

export default Dash