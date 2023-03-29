import './dashboard.styles.css'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actioncreators } from '../../state/actioncreators'
const DashBoard = () => {
  const users=useSelector(state=>state.user_func)
  const login_id=useSelector(state=>state.login_id)
  const dispatch=useDispatch()
  const{login}=bindActionCreators(actioncreators,dispatch)
    return (
        <>
            <div className="dashboard-container" style={{"width":"90%", "marginTop":"1rem", 'marginLeft':'5%'}}>
                <div style={{"display":"flex"}}>

                    <div className="dashboard-img">
                        <img style={{ "height": "80vh", "width": "30vw", "objectFit": "cover" }} src="https://www.pngitem.com/pimgs/m/22-220721_circled-user-male-type-user-colorful-icon-png.png" alt="" />
                    </div>
                    <div className="dashboard-content">
                        <h1 style={{ "fontSize": "60px", "padding": "3%", "marginLeft": "10%" }}>Dashboard</h1>
                        <h3 style={{ "fontSize": "40px", "padding": "3%", "marginLeft": "35%", "color": "GrayText" }}>{users[login_id].username}</h3>
                        <div style={{ "display": "flex", "marginTop": "5rem" }}>
                            <button className="join-btn" type="submit" style={{ "background": "#eedddd", "width": "10rem" }}>Edit Profile</button>
                            <button className="join-btn" type="submit" style={{ "background": "#eedddd", "width": "10rem" }}>Posted Properties</button>
                        </div>
                    </div>
                </div>
                    <div className='dashboard-msg'>
                        {/* <h1 style={{"fontSize":"30px", "textAlign":"center", 'marginTop':'1rem'}}>{users[login_id].message[0].txt_msg}</h1> */}
                    </div>
            </div>
        </>
    )
}

export default DashBoard