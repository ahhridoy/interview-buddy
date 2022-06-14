import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import "./_Pricing.scss";

const Pricing = () => {
  return (
    <main style={{ overflow: "hidden" }}>
      {/* price box */}
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

      {/* scheduling */}
      <section id="scheduling">
        <Container>
          <div className="d-flex">
            <div className="me-5">
              <img src="/assets/scheduling.png" alt="" />
            </div>
            <div>
              <h1 className="text-warning text-start">Priority Scheduling</h1>
              <p className="text-start fs-4 text-light">
                Priority Scheduling gives V.I.P access to every subscribed user
                to book any available interview in the next 4 hours to 48 hours.
              </p>
              <small className="text-light">
                Note: Contact your Support Buddy in case of any queries
              </small>
            </div>
          </div>
        </Container>
      </section>

      {/* faqs */}
      <section id="faqs">
        <Container>
          <h1 className="mb-4">FAQs</h1>
          <Row className="gy-5">
            <Col md={6} xs={12}>
              <div className="faq-text">
                <h3>I’m unable to decide on a plan. Can you help me?</h3>
                <p className="text-start">
                  You should choose a package that best suits your needs. But,
                  if you ask us, we suggest you go with the ‘DUO’ package.
                </p>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div className="faq-text">
                <h3>
                  How to test the interface before attending the actual
                  interview?
                </h3>
                <p className="text-start">
                  Click on 'Test My Setup' in your left navigation panel to test
                  your setup.
                </p>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div className="faq-text">
                <h3>
                  Will I be penalized if I cancel an interview after it has been
                  scheduled?
                </h3>
                <p className="text-start">
                  You can cancel an interview free of cost at any point more
                  than 48 hours before the start of your scheduled interview.
                </p>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div className="faq-text">
                <h3>Will I be interviewed by the same Expert every time?</h3>
                <p className="text-start">
                  Our system is designed to assign you the next expert
                  interviewer available immediately. All our experts are vetted,
                  trained and highly experienced so there’s no variation in the
                  quality of the interview.
                </p>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div className="faq-text">
                <h3>What is the Standard Waiting Period?</h3>
                <p className="text-start">
                  It is 48 hours. This means you have to wait 48 hours from the
                  point at which you book the interview before your mock
                  interviewer will be available. So if you’re scheduling a mock
                  interview at 18:30 hours on a Thursday, the latest you can
                  request it is 18:29 hours on Tuesday.
                </p>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div className="faq-text">
                <h3>
                  Which device should I use to attend my mock interview(s)?
                </h3>
                <p className="text-start">
                  We encourage users to use a desktop or a laptop which allows
                  you to sit properly and concentrate on the interview. For the
                  best experience, use the Chrome browser.
                </p>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div className="faq-text">
                <h3>What are Resources?</h3>
                <p className="text-start">
                  Resources are curated and handpicked articles dealing with
                  strategies, etiquette, body language and all the tiny details
                  to pay attention to when attending an interview.
                </p>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div className="faq-text">
                <h3>How can I skip the waiting period?</h3>
                <p className="text-start">
                  Priority Scheduling gives V.I.P access to every subscribed
                  user to book any interview available in the next 4 hours to 48
                  hours.
                </p>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div className="faq-text">
                <h3>
                  What type all domains are covered under Specialized
                  Interviews?
                </h3>
                <p className="text-start">
                  We cater to almost every domain across the board.
                </p>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div className="faq-text">
                <h3>
                  When can my Specialized Interview be scheduled after I send in
                  my query?
                </h3>
                <p className="text-start">
                  It will take up to 3 weeks to set up your Specialized
                  Interview basing upon your requirement.
                </p>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div className="faq-text">
                <h3>How much does a Specialized Interview cost?</h3>
                <p className="text-start">
                  Since the Specialized Interviews are highly domain-specific
                  and niche based interviews, it would cost anywhere between
                  $29/-to $49/-.
                </p>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div className="faq-text">
                <h3>Who are these Specialized Interviews for?</h3>
                <p className="text-start">
                  The Specialized Interviews are for people who have more than 2
                  years of working experience and are looking to get into higher
                  job roles & industries.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
};

export default Pricing;
