import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../styles/pages/_pricing.scss";

const Pricing = () => {
  return (
    <main style={{ overflow: "hidden" }}>
      <section id="price-box">
        <Container>
          <Row>
            <Col md={10} xs={12}>
              <Row>
                <Col md={4} xs={12}>
                  <div className="uno-box">
                    <h1>UNO</h1>
                    <h2 className="prices">
                      <span className="through-text">$22.99/-</span> $18.99/-
                    </h2>
                    <hr />
                    <div>
                      <p className="d-flex justify-content-between">
                        <span>Number of Interviews</span>
                        <span>one</span>
                      </p>
                      <p className="d-flex justify-content-between">
                        <span>Standard Waiting Period</span>
                        <span>48 Hours</span>
                      </p>
                      <p className="d-flex justify-content-between">
                        <span>Duration of Each Interview</span>
                        <span>25 minutes</span>
                      </p>
                      <p className="d-flex justify-content-between">
                        <span>Expert’s Feedback</span>
                        <span>Yes</span>
                      </p>
                      <p className="d-flex justify-content-between">
                        <span>Interview Scorecard Access</span>
                        <span>Yes Yes</span>
                      </p>
                    </div>
                    <div className="text-center">
                      <Button variant="outline-danger">Sign Up</Button>
                    </div>
                  </div>
                </Col>
                <Col md={4} xs={12}>
                  <div className="duo-box">
                    <h2 className="text-light bg-danger w-100 recommended">
                      POPULAR & RECOMMENDED
                    </h2>
                    <div className="duo-price-box">
                      <h1>DUO</h1>
                      <h2 className="prices">
                        <span className="through-text">$36.99/-</span> $31.99/-
                      </h2>
                      <hr />
                      <div>
                        <p className="d-flex justify-content-between">
                          <span>Number of Interviews</span>
                          <span>Two</span>
                        </p>
                        <p className="d-flex justify-content-between">
                          <span>Standard Waiting Period</span>
                          <span>48 Hours</span>
                        </p>
                        <p className="d-flex justify-content-between">
                          <span>Duration of Each Interview</span>
                          <span>25 minutes</span>
                        </p>
                        <p className="d-flex justify-content-between">
                          <span>Expert’s Feedback</span>
                          <span>Yes</span>
                        </p>
                        <p className="d-flex justify-content-between">
                          <span>Interview Scorecard Access</span>
                          <span>Yes Yes</span>
                        </p>
                      </div>
                      <div className="text-center">
                        <Button variant="outline-danger">Sign Up</Button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={4} xs={12}>
                  <div className="uno-box">
                    <h1>Trio</h1>
                    <h2 className="prices">
                      <span className="through-text">$49.99/-</span> $40.99/-
                    </h2>
                    <hr />
                    <div>
                      <p className="d-flex justify-content-between">
                        <span>Number of Interviews</span>
                        <span>Three</span>
                      </p>
                      <p className="d-flex justify-content-between">
                        <span>Standard Waiting Period</span>
                        <span>48 Hours</span>
                      </p>
                      <p className="d-flex justify-content-between">
                        <span>Duration of Each Interview</span>
                        <span>25 minutes</span>
                      </p>
                      <p className="d-flex justify-content-between">
                        <span>Expert’s Feedback</span>
                        <span>Yes</span>
                      </p>
                      <p className="d-flex justify-content-between">
                        <span>Interview Scorecard Access</span>
                        <span>Yes Yes</span>
                      </p>
                    </div>
                    <div className="text-center">
                      <Button variant="outline-danger">Sign Up</Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md={2} xs={12}>
              <div className="uno-box">
                <h1>SPECIALIZED INTERVIEWS</h1>
                <h2 className="prices">VARIES</h2>
                <hr />
                <div>
                  <p className="text-center">
                    For professionals with 2+ years of industry experience.
                  </p>
                  <p className="text-center">
                    Highly customized domain-specific interviews in niche areas.
                  </p>
                </div>
                <div className="text-center">
                  <Button variant="outline-warning">Contact Us</Button>
                </div>
              </div>
            </Col>
          </Row>
          <div className="text-center">
            <p>* A typical interview lasts about 20-30 minutes on average.</p>
            <p>
              Note: Once your interview is booked, we will send you reminders 24
              hours before, 60 minutes before and 15 minutes before the start of
              the interview.
            </p>
            <p>
              Note: The Specialized Interviews tentatively cost anywhere between
              $29/- & $49/-.
            </p>
            <span>Discounted packages for bulk institutional orders </span>
            <Button variant="outline-warning">Request a Callback</Button>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Pricing;
