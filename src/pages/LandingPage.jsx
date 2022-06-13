import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
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
                <h1 className="heading">
                  VIRTUAL FACE-TO-FACE MOCK INTERVIEWS WITH INDUSTRY EXPERTS
                </h1>
                <p>Live | On-demand | Anywhere</p>
                <div className="btn-box">
                  <div>
                    <Button variant="outline-danger" className="btn-1">
                      Learn More
                    </Button>{" "}
                  </div>
                  <div className="btn-2">
                    <Button variant="outline-danger">Sign Up</Button>{" "}
                  </div>
                </div>

                <div className="watch-video">
                  <img src="/assets/watch-video.png" alt="logo" />
                </div>
                <div className="branding">
                  <img className="ph" src="/assets/PH.png" alt="logo" />
                  <img className="iia" src="/assets/IIA.png" alt="logo" />
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
        <div className="about-vector">
          <img src="/assets/boy.png" alt="logo" />
        </div>
      </section>

      {/* advantages */}
      <section id="advantages">
        <Container>
          <h1 className="heading">ADANTAGES OF MOCK INTERVIEWS</h1>
          <Row>
            <Col xs={12} md={3}>
              <div className="advantages-box">
                <img src="/assets/reduce-stress.png" alt="logo" />
                <h2>REDUCE STRESS & ANXIETY</h2>
                <p>
                  Doubts about how to answer tricky interview questions may
                  stress you out & create anxiety. Get over your nerves with
                  mock interviews.
                </p>
              </div>
            </Col>
            <Col xs={12} md={3}>
              <div className="advantages-box">
                <img src="/assets/confidence.png" alt="logo" />
                <h2>BOOST CONFIDENCE</h2>
                <p>
                  Test drive your answers with experts to improve your skills &
                  experience and boost confidence.
                </p>
              </div>
            </Col>
            <Col xs={12} md={3}>
              <div className="advantages-box">
                <img src="/assets/expert.png" alt="logo" />
                <h2>CONSTRUCTIVE FEEDBACK</h2>
                <p>
                  Get in-depth analysis of your interview style and tips to help
                  you improve areas where you may have weaknesses.
                </p>
              </div>
            </Col>
            <Col xs={12} md={3}>
              <div className="advantages-box">
                <img src="/assets/score.png" alt="logo" />
                <h2>BEHAVIOURAL INTERVIEW QUESTIONS</h2>
                <p>
                  Mastering questions like -'Tell me about a time you failed'
                  show you have the skills & competencies needed for the job.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* benefits */}
      <section id="benefits">
        <Container>
          <h1 className="heading">
            BENEFITS OF INTERVIEWBUDDY <sup>TM</sup>
          </h1>
          <Row>
            <Col xs={12} md={3}>
              <div className="benefits-box">
                <img src="/assets/nosoftware.png" alt="logo" />
                <h2>NO SOFTWARE DOWNLOADS</h2>
                <p>
                  If you have access to a computer/tablet and an internet
                  connection, you’re ready to use our service. You’ll never need
                  any downloading.
                </p>
              </div>
            </Col>
            <Col xs={12} md={3}>
              <div className="benefits-box">
                <img src="/assets/n1.png" alt="logo" />
                <h2>INTERVIEW SCORECARD</h2>
                <p>
                  Get a detailed interview scorecard with performance-based
                  metrics and comprehensive feedback on your strengths
                  &weaknesses.
                </p>
              </div>
            </Col>
            <Col xs={12} md={3}>
              <div className="benefits-box">
                <img src="/assets/video.png" alt="logo" />
                <h2>PLAYBACK YOUR INTERVIEW</h2>
                <p>
                  Our video interviewing system automatically records your
                  interview so that you can review it anytime. You’ll receive
                  access to the recording of the interview within 2 hours.
                </p>
              </div>
            </Col>
            <Col xs={12} md={3}>
              <div className="benefits-box">
                <img src="/assets/man.png" alt="logo" />
                <h2>CURATED RESOURCES</h2>
                <p>
                  Prime your interview skills & etiquette by accessing the best
                  hand-picked and curated content covering every aspect of the
                  interview cycle with InterviewBuddy!
                </p>
              </div>
            </Col>
          </Row>
          <div className="benefits-button">
            <Button variant="outline-dark">Four More Benefits</Button>
          </div>
        </Container>
      </section>

      {/* how it works */}
      <section id="howitworks">
        <Container>
          <h1 className="heading">HOW DOES IT WORK?</h1>
          <p className="sub-text">
            InterviewBuddy helps students and job seekers crack interviews &
            land their dream jobs!
          </p>
          <div className="works-box">
            <div className="content-left">
              <div className="content1">
                <div className="img-box">
                  <img src="/assets/email.png" alt="logo" />
                </div>
                <div className="text-box">
                  <h1>CREATE AN ACCOUNT</h1>
                  <hr />
                  <p>
                    Sign up with your email; verify it & you’re ready to get
                    started on a life-changing journey. Login to start browsing
                    our FREE hand-picked Resources.
                  </p>
                </div>
              </div>
              <div className="content2">
                <div className="img-box">
                  <img src="/assets/time.png" alt="logo" />
                </div>
                <div className="text-box">
                  <h1>SCHEDULE A ONE-ON-ONE Interview</h1>
                  <hr />
                  <p>
                    Choose an available slot that fits your schedule & get a
                    confirmation via e-mail & SMS. Prime your interview skills
                    with our curated Resources & you are all set to face your
                    mock interview!
                  </p>
                </div>
              </div>
            </div>
            <div className="content-middle">
              <img src="/assets/tree.png" alt="logo" />
            </div>
            <div className="content-right">
              <div className="content1">
                <div className="img-box">
                  <img src="/assets/couple.png" alt="logo" />
                </div>
                <div className="text-box">
                  <h1>COMPLETE PROFILE</h1>
                  <hr />
                  <p>
                    Complete your profile before scheduling an interview so your
                    personal expert(s) can thoroughly analyse your profile
                  </p>
                </div>
              </div>
              <div className="content2">
                <div className="img-box">
                  <img src="/assets/research.png" alt="logo" />
                </div>
                <div className="text-box">
                  <h1>PERFORMANCE FEEDBACK</h1>
                  <hr />
                  <p>
                    Get comprehensive feedback on your performance & an
                    interview scorecard underlining your strengths, personalized
                    tips on improving weaker areas & a link to the recording of
                    your interview.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* learn more */}
      <section id="learnmore">
        <Container className="learnmore-box">
          <div className="text-box">
            <h3 className="heading">Real Mastery Requires Practice!</h3>
            <h3 className="sub-text">Ready to get started?</h3>
          </div>
          <div className="btn-box">
            <Button variant="outline-light">Sign Up</Button>
          </div>
        </Container>
      </section>

      {/* pricing */}
      <section id="pricing">
        <Container>
          <h1 className="text-primary">PRICING</h1>
          <Row className="row">
            <Col md={4} xs={12}>
              <Link to="pricing" className="text-decoration-none">
                <div className="uno">
                  <h1>UNO</h1>
                </div>
              </Link>
            </Col>
            <Col md={4} xs={12}>
              <Link to="pricing" className="text-decoration-none">
                <div className="duo">
                  <h1>DUO</h1>
                </div>
              </Link>
            </Col>
            <Col md={4} xs={12}>
              <Link to="pricing" className="text-decoration-none">
                <div className="trio">
                  <h1>TRIO</h1>
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default LandingPage;
