import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { useState } from "react";
import "./DashBoard.css";

import DashboardNavbar from "./DashboardNavbar";
import EditProfile from "./EditProfile";
import EditProperty_modal from "./EditProperty_modal";
import Posted_property_card from './Posted_property_card';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { actioncreators } from '../../state/actioncreators'

import profile from "../../images/profile.png"
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import ChatInterface from '../chat/ChatInterface';

const DashBoard_User = () => {
    const [res, setres] = useState(null)
    const [is, setis] = useState(0)
    const navigate = useNavigate();
    const user = useSelector(state => state.user)
    const [user_new, setuser_new] = useState(user.user)
    console.log(user)
    const { username, email } = user_new
    console.log(username)
    const dispatch = useDispatch()
    const { login,logout } = bindActionCreators(actioncreators, dispatch)
    let { loading, error, data } = useQuery(GET_PROPERTY, {
        skip: is
      })
    
      if (data) {
        data = data.getProperties
        let data_new=data.filter(e=>{return e.owner_email===email})
        setres(data_new)
        setis(1)
        console.log(res)
      }
      const filterop=()=>{
        let data_new=data.filter(e=>{return e.owner_email===email})
        setres(data_new)
      }
      useEffect(() => {
        if(data)
            filterop()
        // eslint-disable-next-line
      }, [ res])


    const [tabIndex, setTabIndex] = useState(1);

    return <div className="Dashboard_container">
        <div className="sidebar_container">
            <div className="user_profile_container">
                <img src={profile} alt="no" className='profile_image' />
                <div className="userdetail_text">
                    <h4>{username}</h4>


                </div>
            </div>
            <div className="dashboard_routes">
                <div className="sidebar_buttons_container">
                    <button className='sidebar_button' onClick={() => setTabIndex(1)}>
                        <span class="material-symbols-outlined sidebar_icon">
                            edit
                        </span>
                        Edit Profile</button>
                    <button className='sidebar_button' onClick={() => setTabIndex(2)}>
                        <span class="material-symbols-outlined sidebar_icon">
                            apartment
                        </span>
                        Posted Property</button>
                    <button className='sidebar_button' onClick={() => setTabIndex(3)}>
                        <span class="material-symbols-outlined sidebar_icon">
                            apartment
                        </span>
                        Chat</button>

                </div>
                <div className="logout_container">
                    <button className='logout_button' onClick={() => { logout(); navigate('/auth') }}>
                        <span className="material-symbols-outlined logout_icon">
                            logout
                        </span>
                        Logout
                    </button>
                    <button className='logout_button'>
                        
                        <li ><i class="fa fa-external-link"></i><Link className='' style={{"color" : "white"}} to="/chat">chat</Link></li>
                        
                        </button>
                </div>
            </div>
        </div>
        <div className="content_container">
            <DashboardNavbar></DashboardNavbar>

            {
                tabIndex === 1 && (
                    <EditProfile setuser_n={setuser_new} />
                )
            }
            {
                tabIndex === 2 && (
                    <div>
                        {res&&res.map((x,key)=>{
                            return(
                                <Posted_property_card key={key} data={x}/>
                            )
                        })}

                    </div>
                )
            }
            {
                tabIndex === 3 && (
                    <div style={{marginTop:"20vh",marginLeft:"12vw"}}>
                    <ChatInterface/>
                    </div>
                )
            }


            <EditProperty_modal></EditProperty_modal>

        </div>
    </div>
}
const GET_PROPERTY = gql`
  query GetProperties {
    getProperties {
      age
      address {
        apartment_society
        locality
        city
        houseno
        floorno
        sublocality
      }
      category
      createdAt
      description
      dimensions {
        area {
          value
          unit
        }
        bedrooms
        bathrooms
        balconies
      }
      id
      imgname
      location {
        longitude
        latitude
      }
      owner_email
      owner_name
      price {
        value
        currency
      }
      purpose
      title
    }
  }

`

export default DashBoard_User;