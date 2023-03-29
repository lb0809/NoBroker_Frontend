import React from "react";
import './aboutus.css'
import Group_Mem from "./group_mem";
import building_gif from './img/building_gif.gif'
import strategy from './img/strategy.webp';
import building2 from './img/building2.jpg';
import building3 from './img/building3.jpg';
import building4 from './img/building4.jpg';
import building5 from './img/building5.jpg';
import building6 from './img/building6.jpg';
import building7 from './img/building7.jpg';

import sg from './img/sg2.png';
import uv from './img/lb.webp';
import lb from './img/lb2.png';
import skp from './img/skp.png';
import rgz from './img/rgz.png';
import Footer from "../Footer/footer";
import Navigation from "../../routes/navigation/navigation.component";

function AboutUs() {

    return (
        <div>
            <Navigation />

            <div class="header-container">
                <img src={building5} style={{ width: '100%', height: '400px' }} />
                <br />
                <br />
                <br /><br />
                <div class='text'>
                    <div class="au_text">  <p style={{ fontSize: '60px', }}>About Us</p></div>
                </div>
            </div>

            <div class="section-wrapper">
                <div class="team-container">
                    <div class="row align-items-center" style={{ "padding": "80px" }}>
                        <div class="col-lg-6 col-md-12 col-sm-12">
                            <h4>In-House Made</h4>
                            <p class='desc'>From the vibrant ground level plaza to the terraces, private gardens, balconies and lush rooftop work spaces, Maisonco</p>
                            <h4>Our Customers Mean the World</h4>
                            <p class='desc'>From the vibrant ground level plaza to the terraces, private gardens, balconies and lush rooftop work spaces, Costix offers an array of amenities …</p>
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12">
                            <img class="img-fluid" src={building2} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="section-wrapper">
                <div class="team-container">
                    <div class="row align-items-center" style={{ "padding": "80px" }}>
                        <div class="col-lg-6 col-md-12 col-sm-12">
                            <img class="img-fluid" src={strategy} alt="" />
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12 content-right">
                            <div class="heading-title">
                                <h3 class="smv">OUR VALUES</h3>
                            </div>
                            <p class='desc'>We are committed to high standards, ethics and dedication to deliver quality service to our clients! We pride ourselves on our ability to listen to and understand our client’s needs; our in depth knowledge of the area and the high level of personal service we deliver, ensuring our clients are completely satisfied.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section-wrapper">
                <div class="ourteam">
                    <div class="team-container">
                        <div class="heading-title">
                            <h1 class="text-ot">OUR TEAM</h1>
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <div class="row no-gutters">
                            <Group_Mem name="SHOBHIT GUPTA" img={sg} orient={true} />
                            <Group_Mem name="UTKARSH VERMA" img={uv} orient={false} />
                            <Group_Mem name="LAKSHYA BOOB" img={lb} orient={true} />
                            <Group_Mem name="SAKAMURI KODANDA RAMA PHANEENDRA" img={skp} orient={false} />
                            <Group_Mem name="RAM GOPAL ZAMPANI" img={rgz} orient={true} />
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <Footer />

        </div>
    )

}

export default AboutUs