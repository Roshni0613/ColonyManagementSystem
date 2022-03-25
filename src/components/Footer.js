import React from "react";
import { Container, Form, FormGroup } from "react-bootstrap";

function Footer() {
  return (
    <div id="contact">
      <footer className="bg-light pt-3">
        <div className="row">
          <div className="col col-md-6 container-fluid">
            <h5 className="mx-4">Contact us</h5>

            <ul className="lsit-group">
              <li className="list-group-item">
                <i className="bi bi-house-door m-2 text-info"></i>Management
                Office
              </li>
              <li className="list-group-item">
                <i className="bi bi-signpost-2 m-2 text-info"></i>Pune
              </li>
              <li className="list-group-item">
                <i className="bi bi-telephone m-2 text-info"></i> +91123458761
              </li>
              <li className="list-group-item">
                <i className="bi bi-envelope m-2 text-info"></i>{" "}
                gharkulmanagement@gmail.com
              </li>
              <li className="list-group-item">
                <i className="bi bi-globe m-2 text-info"></i> www.gharkul.com
              </li>
            </ul>
          </div>

          {/* <div className="col container-fluid">
            <h5>Submit Your Query</h5>

            <Form>
              <div className="row">
                <label className="col-md-8" for="place">
                  Name
                  <br />
                  <input
                    className="text border border-primary"
                    type="text"
                    required=""
                    placeholder="Enter Name Here"
                  />
                </label>
              </div>
              <div className="row">
                <label className="col-md-8" for="place">
                  Email
                  <br />
                  <input
                    className="text border border-primary"
                    type="text"
                    required=""
                    placeholder="abc@gmail.com"
                  />
                </label>
              </div>

              <div className="row">
                <label className="col-md-8">
                  Query
                  <br />
                  <textarea
                    className="form-control border border-primary"
                    required=""
                    placeholder="Write Your Query"
                    rows="2"
                  ></textarea>
                </label>
              </div>
              <button className="btn btn-primary btn-sm my-1">Submit</button>
            </Form>
          </div> */}
        </div>

       
      </footer>
    </div>
  );
}

export default Footer;
