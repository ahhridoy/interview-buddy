import React from "react";
import { Col, Row } from "react-bootstrap";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./_BookInterview.scss";

const BookInterview = () => {
  return (
    <main>
      <Navbar />
      <div id="book-interview">
        <Sidebar />
        <div className="book-interview-container bg-light">
          <h4 className="text-start text-dark ms-3 fs-2 my-4">
            Book Interview
          </h4>
          <div className="system">
            <p className="text-start ms-3 system-text">
              <strong>Check Your System Date and Time</strong>
            </p>
            <p className="text-start ms-3">
              Looks like your system date and time is not set correctly. Please
              update your system date and time in order to start the interview
              on Time.
            </p>
          </div>
          <div className="update">
            <p className="text-center">
              <strong>
                Update your 'Profile' before attending your session for a
                complete evaluation!
              </strong>
            </p>
          </div>
          <div className="schedule-an-interview">
            <p className="text-start p-3">
              <strong>Schedule an Interview</strong>
            </p>
            <div className="interview-type">
              <p className="ms-3 me-5">Select Interview Type:</p>
              <div>
                <input type="radio" name="fav-group" value="HR" />
                <label className="me-4">HR</label>
                <input type="radio" name="fav-group" value="technical" />
                <label className="me-4">Technical</label>
                <input type="radio" name="fav-group" value="specialized" />
                <label className="me-4">Specialized</label>
              </div>
            </div>
            <div className="d-flex">
              <p className="ms-3 me-5">Select Date:</p>
            </div>
          </div>
          <div className="available-slots">
            <p className="text-start p-3">
              <strong>Available Slots</strong>
              <small> (All time slots listed are IST)</small>
            </p>
            <div className="d-flex">
              <div>
                <p className="text-start">13 Jun' 2022</p>
              </div>
              <Row>
                <Col md={2} xs={3}></Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BookInterview;
