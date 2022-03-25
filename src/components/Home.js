import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import bnr from "./img/bnr.jpg";
import Footer from "./Footer";
import {Col, Row } from "react-bootstrap";
import HomeCarousel from "./HomeCarousel";
import Foot from "./Foot";



function Home() {
  return (
    <>
    <Navbar />
      {/* <div style={{maxWidth:1400}}>
        <img src={bnr} />
      </div> */}
      <div className="row g-0">
        <div className="col-md-12">
          <img src={bnr} alt="aboutimg" className="card-img-top" />
        </div>
      </div>

      <div>
        <section id="About" className="container-fluid mt-1 pt-2" />
        <div className="row">
          <div className="col-lg-6">
            {/* <h4 className="font-monospace my-5">About Us!</h4> */}
            <h2 className="display-6"></h2>
          </div>
        </div>
      
        <div
          className="card border-0 my-4 text-white bg-#7B96D8 mx-auto" 
          style={{ maxWidth: 1400 }, {backgroundColor: "#7B96D8 "}}
        >
          <div className="row g-0">
            <div className="col-md-6">
              {/* <img
                src="https://goelgangadevelopments.com/residential-real-estate/why-you-should-attend-your-society-meeting-or-casual-gatherings/"
                alt="aboutimg"
                className="card-img-top"
              /> */}
            </div>

          <div id="about">
            <div className="col-md-12">
              <div className="card-body mt-3 p-2 text-center">
                <h2 className="card-title fs-1 font-monospace">About Us</h2>
                <p className="card-text fs-5 mt-2">
                  <h4>Make your residents fall in more love with their colony by gifting them the Gharkul site</h4>
                 <br/>
                   <p>Make the Best of Neighbourhood Facilities</p>
                   <p>Easy Payment of Maintenance Dues</p>
                   <p>Immediate Assurance with Instant Payment Receipts</p>
                   <p>Record Faster Complaint Resolution</p>
                   
                 
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div>
        <Card />
      </div> */}
<HomeCarousel/>


      <Footer />
      <Foot />
    </>
  );
}

export default Home;
