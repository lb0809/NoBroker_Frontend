import Sidebar from "../../components/Sidebar/Sidebar.component"
import MainDash from "../../components/MainDash/MainDash.component"
// import RightSide from "../components/RigtSide/RightSide"
import RightSide from "../../components/RigtSide/RightSide"
import "./posted_property.css"
import PropertyTable from "../posted_table/posted_table"

const PostedProperties = () => {
    return (
        <div className="DashRoot">
            <div className="Dash">
                <div className="DashGlass">
                    {/* <h1>jhsdfhsikj</h1> */}
                    <Sidebar />
                    <PropertyTable />
                    {/* <MainDash />
                    <RightSide /> */}
                </div>
            </div>
        </div>
    )
}

export default PostedProperties