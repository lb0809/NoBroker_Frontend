 import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Link } from 'react-router-dom';
import "./navigation.styles.css"
const Navigation = (props) => {
    const user=useSelector(state=>state.user.user)
    console.log(user)
    let{bgcolor}=props
    let color='white'
    if(bgcolor===null){
        bgcolor='white'
        color='blue'
    }
    return (
        <Fragment>
            <nav className="Navigationmenu"  >
                <ul className="main-menu" style={{"backgroundColor":`${bgcolor}`}}>
                    {/* <div className='logo-link'>
                            <Link className='navLink'>NoBroker</Link>
                        </div> */}
                    <li style={{"color":color}}><i style={{"color":"white"}} className="fa fa-home"></i><Link className='navLink'  to="/">Home</Link></li>
                    {/* <li class="with-submenu">
                            <i class="fa fa-briefcase"></i>Post Property <i class="fa fa-caret-down"></i>
                            <ul class="submenu">
                                <li>React</li>
                                <li>JavaScript</li>
                                <li>CSS</li>
                                <li>Animation</li>
                            </ul>
                        </li> */}
                    <li style={{"color":`${color}`}}><i class="fa fa-external-link"></i><Link className='navLink' to="/postyourproperty">Post</Link></li>
                    <li style={{"color":`${color}`}}><i class="fa fa-id-card"></i><Link className='navLink' to="/aboutus">About</Link></li>
                    {user?<li style={{"color":`${color}`}}><i class="fa fa-user-circle"></i><Link className='navLink' to="/auth">{user.username}</Link></li>:<li style={{"color":`${color}`}}><i class="fa fa-user-circle"></i><Link className='navLink' to="/auth">Register</Link></li>}
                    <li style={{"color":`${color}`}}><i class="fa fa-search"></i><Link className='navLink' to="/search">Search</Link></li>
                </ul>
            </nav>

            <Outlet />
        </Fragment>
    );
};

export default Navigation;
