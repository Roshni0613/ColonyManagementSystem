import React from "react";
import notice from "./img/notice.jpg";
import comp from "./img/comp.jpg";
import events from "./img/events.jpg";
import "./Card.css";

function Card() {
 
  return (
    <div className="bodyys">
      <div className="container-fluid p-3">
        <div className="row mx-5 ">
          <div className="col">
            <div className="card1 card border-primary ">
              <img src={notice} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">NOTICE</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
           
            </div>
          </div>
          <div className="col">
            <div className="card2 card border-primary  h-100">
              <img src={comp} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">COMPLAINTS</h5>
                <p className="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
                <a href="/Complaints" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
             
            </div>
          </div>
          <div className="col">
            <div className="card3 card border-primary h-100">
              <img src={events} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">EVENTS</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;