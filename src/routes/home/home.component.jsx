import SearchHeader from "../../components/search-header/search-header.component"
import CardList from "../../components/card-list/card-list.component";
import Directory from "../../components/directory/directory.component";
import HeroCard from "../../components/hero-card/haro-card.component";
import SearchContainer from "../../components/search-container/search-container.component";
import BodyCards from "../../components/body-cards/body-cards.component";
import MailButton from "../../components/mail-button/mail-button.component";
import Testimonials from "../../components/testimonials/testimonials.component";
import Navigation from "../navigation/navigation.component";
import "./home.styles.css";
import "./home_style.scss";
import Footer from "../../components/Footer/footer";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actioncreators } from '../../state/actioncreators'
import { useEffect } from "react";

// import "../navigation/navigation.component";


const Home = () => {

  const dispatch = useDispatch()
  const { register } = bindActionCreators(actioncreators, dispatch)
  const fetchdata = async () => {
    // let resp = await fetch(process.env.REACT_APP_BACKEND_URL+'/fetchall', {
    //     method: 'GET',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   });
    //   let data=await resp.json()
    const url = `${process.env.REACT_APP_BACKEND_URL}/fetchall`;

    let resp = await fetch(url);
    let r = await resp.json()
    register(r[0].c)
    return r[0].c

  }
  useEffect(() => {
    fetchdata()


  }, [])

  const categories = [
    {
      id: 1,
      title: 'Sell/Rent property',
      imageUrl: 'https://source.unsplash.com/360x360/?estate',
    },
    {
      id: 2,
      title: 'Buying a home',
      imageUrl: 'https://source.unsplash.com/360x360/?realestate',
    },
    {
      id: 3,
      title: 'PG and co-living',
      imageUrl: 'https://source.unsplash.com/360x360/?bedroom',
    },
    {
      id: 4,
      title: 'Renting a home',
      imageUrl: 'https://source.unsplash.com/360x360/?diningroom',
    },
  ];

  const properties = [
    {
      id: 1,
      title: 'Delhi',
      imageUrl: 'https://source.unsplash.com/300x300/?delhi',
    },
    {
      id: 2,
      title: 'Mumbai',
      imageUrl: 'https://source.unsplash.com/300x300/?mumbai',
    },
    {
      id: 3,
      title: 'Chennai',
      imageUrl: 'https://source.unsplash.com/300x300/?chennai',
    },
    {
      id: 4,
      title: 'Darjeeling',
      imageUrl: 'https://source.unsplash.com/500x500/?darjeeling',
    },
    {
      id: 5,
      title: 'Kerala',
      imageUrl: 'https://source.unsplash.com/500x500/?kerala',
    },
  ];


  return (
    <>
      <Navigation />
      <div className="anim">
        <svg
          class="ha-logo loading"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 10 10">
          <path
            class="house"
            d="M1.9 8.5V5.3h-1l4-4.3 2.2 
       2.1v-.6h1v1.7l1 1.1H7.9v3.2z"   />
          <path
            class="circut"
            d="M5 8.5V4m0 3.5l1.6-1.6V4.3M5 
       6.3L3.5 4.9v-.6m2.7.7l.4.4L7 
       5M5.9 6.1v.5h.5M4.2 5v.5h-.8m1 
       1.5v.6h-.6m1.2.8L3.6 6.7M5 
       8.4l1-.9h.7M4.6 3.6L5 4l.4-.4" />
          <g>
            <circle cx="5.5" cy="3.4" r="0.21" />
            <circle cx="4.5" cy="3.4" r="0.21" />
            <circle cx="6.6" cy="4.1" r="0.21" />
            <circle cx="3.5" cy="4.1" r="0.21" />
            <circle cx="4.2" cy="4.8" r="0.21" />
            <circle cx="6.1" cy="4.8" r="0.21" />
            <circle cx="7.1" cy="4.8" r="0.21" />
            <circle cx="6.6" cy="6.6" r="0.21" />
            <circle cx="5.9" cy="5.9" r="0.21" />
            <circle cx="3.2" cy="5.5" r="0.21" />
            <circle cx="3.5" cy="6.5" r="0.21" />
            <circle cx="4.4" cy="6.8" r="0.21" />
            <circle cx="3.6" cy="7.6" r="0.21" />
            <circle cx="6.9" cy="7.5" r="0.21" />
          </g>
        </svg>
        <div><p className="NoBrokerText ">N o<span>   </span>B r o k e r</p></div>
      </div>

      {/* <SearchHeader /> */}
      {/* <HeroCard /> */}
      <SearchContainer />
      <div className="home-content">
        <br />
        <br />
        <br />
        <br /><div className="home_h3"><h3>GET STARTED WITH EXPLORING REAL ESTATE OPTIONS</h3></div><br /><br /><br />
        <div className="cardlist-div">
          <br />
          <CardList categories={categories} />
          <br />
        </div>
        <br /><br />
        <h6 className="my-4" style={{ color: "#96968d", fontFamily: "'Poppins', sans-serif", fontWeight: "700", textAlign: "center" }}>FOR ALL YOUR PROPEERTY RELATED NEEDS - We got a portal that has all</h6>

        <BodyCards />

        <p style={{ fontSize: "50px", fontFamily: "'Poppins', sans-serif", fontWeight: "800", color: "#8a946d", textAlign: "center", marginTop: "2vh" }}>Price is what you pay. <br /> Value is what you get...</p><br /><br />
        {/* <MailButton /><br /><br /><br /><br /> */}
        <h1 style={{ "fontFamily": "'Poppins', sans-serif", "fontWeight": "700", "fontSize": "50px", marginBottom: "6vh", textAlign: "center" }}>Explore Real Estate in Popular Indian Cities</h1>
        <div className="directory-div">
          <Directory properties={properties} />
        </div>




        <Testimonials />
        <br /><br /><br /><br />

      </div>
      <Footer />




    </>
  )
}

export default Home