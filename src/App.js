
import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";


import PostPropertyForm from "./components/Postproperty/PostPropertyForm";
import Admin_home from "./components/Admin_Portal/Admin_home";
import Admin_user from "./components/Admin_Portal/Admin_user";
import Admin_property from "./components/Admin_Portal/Admin_property";
import Admin_ContactUs from "./components/Admin_Portal/Admin_ContactUs";
import Home from "../src/routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component"
import Markonmap from "./components/Postproperty/Postpropform_comp/Markonmap";
import PropState from "./context/property/PropState";
import Search from "./components/Search/Search";
import AboutUs from "./components/aboutus/aboutus";
import Contact from "./components/contact/contact";
import Chat from "./components/chat/Chat";
import ChatInterface from "./components/chat/chat-interface";
import DashBoard from "./components/DashBoard/DashBoard";




function App() {
  return (
    <>
      <PropState>
        <Router>


          <Routes>


            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />

            <Route exact path="/postyourproperty" element={<PostPropertyForm />} />
            <Route exact path="/Admin_home" element={<Admin_home />} />
            <Route exact path="/Admin_user" element={<Admin_user />} />
            <Route exact path="/search" element={<Search />} />
            <Route exact path="/Admin_property" element={<Admin_property />} />
            <Route exact path="/Admin_ContactUs" element={<Admin_ContactUs />} />
            <Route exact path="/Auth" element={<Authentication />} />
            <Route exact path="/aboutus" element={<AboutUs />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/chat" element={<Chat />} />
            <Route exact path="/chat-interface" element={<ChatInterface />} />
            <Route exact path="/dashboard" element={<DashBoard />} />


          </Routes>
        </Router>
      </PropState>
    </>
  );
}

export default App;