import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
// import Header from "../components/Header";
import "../styles/pages/_landing.scss";

const LandingPage = () => {
  return (
    <main style={{ overflow: "hidden" }}>
      {/* navbar */}
      <section id="navbar">{/* <Header /> */}</section>

      {/* hero */}
      <section id="hero">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <div className="hero-img">
                <img src="/assets/hero.png" alt="logo" />
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="hero-content">
                <h1>
                  VIRTUAL FACE-TO-FACE MOCK INTERVIEWS WITH INDUSTRY EXPERTS
                </h1>
                <p>Live | On-demand | Anywhere</p>
                <Button variant="outline-danger">Learn More</Button>
                <Button variant="outline-danger">Sign Up</Button>

                <div className="watch-video">
                  <img src="/assets/watch-video.png" alt="logo" />
                </div>
                <div className="branding">
                  <img src="/assets/PH.png" alt="logo" />
                  <img src="/assets/IIA.png" alt="logo" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* about */}
      <section id="about">
        <Container>
          <h1 className="heading">
            ABOUT INTERVIEWBUDDY <sup>TM</sup>
          </h1>
          <Row>
            <Col xs={12} md={6}>
              <p className="sub-text">
                Interviews are crucial moments in one’s career. Theoretical
                knowledge of interview questions isn't enough when you actually
                face an interview. Too often fear takes over our performance in
                job interviews. <br /> <br />
                InterviewBuddy is built on the premise that practice &
                preparation are crucial to get over your anxieties when
                attending an interview.
              </p>
            </Col>
            <Col xs={12} md={6}>
              <p className="sub-text">
                As the adage goes – practice makes perfect! Mock interviews by
                InterviewBuddy give you the platform to prepare, practice and
                experience firsthand how a real-life job interview feels.
                Familiarizing yourself with the interview environment beforehand
                in a relaxed and stress-free environment gives you an edge over
                your peers. <br /> <br />
                Our mock interviews are conducted by handpicked industry experts
                with an average experience of 9+ years in the interviewing game.
                So you’re sure to improve your chances of getting hired!
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* advantages */}
      <section>
        <Container>
          <h1>ADANTAGES OF MOCK INTERVIEWS</h1>
          <Row>
            <Col xs={6} md={3}>
              <img src="/assets/reduce-stress.png" alt="logo" />
            </Col>
            <Col xs={6} md={3}>
              <img src="/assets/confidence.png" alt="logo" />
            </Col>
            <Col xs={6} md={3}>
              <img src="/assets/expert.png" alt="logo" />
            </Col>
            <Col xs={6} md={3}>
              <img src="/assets/score.png" alt="logo" />
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default LandingPage;
