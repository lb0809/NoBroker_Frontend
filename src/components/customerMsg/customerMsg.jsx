import "./customerMsg.css"
import Sidebar from "../../components/Sidebar/Sidebar.component"

// import PropertyTable from "../posted_table/posted_table"
import CustomerMsgTable from "./customerMsgTable"



const CustomerMsg = () => {
    return (
        <div className="DashRoot">
            <div className="Dash">
                <div className="DashGlass">
                    <h1>dksj</h1>
                    {/* <h1>jhsdfhsikj</h1> */}
                    <Sidebar />
                    <CustomerMsgTable />
                    {/* <PropertyTable /> */}
                    {/* <MainDash />
                    <RightSide /> */}
                </div>
            </div>
        </div>
    )
}

export default CustomerMsg

