import { Col, Row } from "react-bootstrap";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./_BuyCredits.scss";

const BuyCredits = () => {
  return (
    <main>
      <Navbar />
      <div id="buy-credits">
        <Sidebar />
        <div className="buy-credits-container bg-light">
          <h4 className="text-start text-dark ms-3 fs-2 my-4">Buy Credits</h4>
          <div className="update-profile-box rounded mx-3">
            <div className="update-profile mx-4 rounded">
              <p className="text-center pt-2 fs-5">
                <strong>
                  Update your 'Profile' before attending your session for a
                  complete evaluation!
                </strong>
              </p>
            </div>
          </div>
          <div className="mx-4">
            <Row>
              <Col md={6} xs={12}>
                <div className="py-5 px-4 my-3 bg-white rounded border">
                  <input type="radio" name="fav-group" value="uno" />
                  <label className="ms-3 mb-3">
                    UNO: 1299 credits for $18.99 USD
                  </label>{" "}
                  <br />
                  <input type="radio" name="fav-group" value="duo" />
                  <label className="ms-3 mb-3">
                    DUO: 2599 credits for $31.99 USD
                  </label>{" "}
                  <br />
                  <input type="radio" name="fav-group" value="trio" />
                  <label className="ms-3">
                    TRIO: 3899 credits for $40.99 USD
                  </label>
                </div>
              </Col>
              <Col md={6} xs={12}>
                <div className="py-4 px-4 my-3 bg-white rounded border">
                  <ul>
                    <li>Number of Regular Interviews: 3</li>
                    <li>Standard Waiting Period: 48 Hours</li>
                    <li>Duration of Each Interview: 30 minutes</li>
                    <li>Expert’s Feedback: Yes</li>
                    <li>Interview Scorecard: Yes</li>
                    <li>Access to Interview Recording:Yes</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BuyCredits;
