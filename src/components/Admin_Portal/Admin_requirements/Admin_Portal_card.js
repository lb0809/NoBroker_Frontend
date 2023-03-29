import "../Admin_CSS/Admin_home.css"
import user1 from "../../../images/user1.svg"

const Admin_Portal_card = () => {
    return (
        <>
            <div className="admin_card">
                <div className="admin_minicard">
                    <img src={user1} alt="" className="Admin_logo" />
                </div>
                <h3>Users Visited</h3>
                <div className="admin_minicard2">
                    <h3>45672</h3>
                </div>
            </div>
        </>
    );

}

export default Admin_Portal_card;
