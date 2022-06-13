import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import {
  AiFillLinkedin,
  AiFillGooglePlusCircle,
  AiFillYoutube,
  AiOutlineArrowRight,
  AiFillHeart
} from "react-icons/ai";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <main
      id="footer"
      style={{
        background: "url(/assets/footer-bg.jpg) no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Container>
        <Row>
          <Col md={4} xs={12}>
            <div>
              <img src="/assets/logo.png" alt="" /> <br />
              <small className="text-light text-start">
                Online face-to-face mock interviews with experts help you train
                & prepare for job interviews in a no pressure, stress-free
                environment simulating a real job interview. Stay ahead of the
                competition with expert mentoring & feedback!
              </small>
              <div className="d-flex my-4">
                <div className="d-flex">
                  <FiPhoneCall className="text-warning me-3 fs-4" />
                  <div>
                    <p className="text-light text-start">Call Us</p>
                    <small className="text-secondary text-start">
                      +91 8500 99 0101
                    </small>
                  </div>
                </div>
                <div className="d-flex">
                  <MdEmail className="text-primary me-3 fs-4" />
                  <div>
                    <p className="text-light text-start">Email Us</p>
                    <small className="text-secondary text-start">
                      ask@interviewbuddy.in
                    </small>
                  </div>
                </div>
              </div>
              <div>
                <span className="me-3">
                  <BsFacebook className="text-light fs-1" />
                </span>
                <span className="me-3">
                  <BsInstagram className="text-light fs-1" />
                </span>
                <span className="me-3">
                  <BsTwitter className="text-light fs-1" />
                </span>
                <span className="me-3">
                  <AiFillLinkedin className="text-light fs-1" />
                </span>
                <span className="me-3">
                  <AiFillGooglePlusCircle className="text-light fs-1" />
                </span>
                <span className="me-3">
                  <AiFillYoutube className="text-light fs-1" />
                </span>
              </div>
            </div>
          </Col>
          <Col md={4} xs={12}>
            <div className="quick-links">
              <h2 className="text-light text-start">QUICK LINKS</h2>
              <div className="mb-2">
                <AiOutlineArrowRight className="text-warning" />{" "}
                <span className="text-secondary">Features</span>
              </div>
              <div className="mb-2">
                <AiOutlineArrowRight className="text-warning" />{" "}
                <span className="text-secondary">Pricing</span>
              </div>
              <div className="mb-2">
                <AiOutlineArrowRight className="text-warning" />{" "}
                <span className="text-secondary">Careers</span>
              </div>
              <div className="mb-2">
                <AiOutlineArrowRight className="text-warning" />{" "}
                <span className="text-secondary">Offers</span>
              </div>
              <div className="mb-2">
                <AiOutlineArrowRight className="text-warning" />{" "}
                <span className="text-secondary">Campus Ambassador</span>
              </div>
              <div className="mb-2">
                <AiOutlineArrowRight className="text-warning" />{" "}
                <span className="text-secondary">Campus Ambassador</span>
              </div>
              <div className="mb-2">
                <AiOutlineArrowRight className="text-warning" />{" "}
                <span className="text-secondary">Blog</span>
              </div>
              <div className="mb-2">
                <AiOutlineArrowRight className="text-warning" />{" "}
                <span className="text-secondary">FAQs</span>
              </div>
            </div>
          </Col>
          <Col md={4} xs={12}>
            <div className="quick-links">
              <h2 className="text-light text-start">
                INTERVIEW TIPS IN YOUR INBOX
              </h2>
              <small className="text-light text-start">
                Handcrafted & curated material for every stage of career
                grooming & industry insights, delivered to your inbox once a
                month. No spam. Period.
              </small>
              <h4 className="text-black text-start mt-5">Enter Your Email</h4>
              <hr className="text-light" />
              <Button variant="warning">Subscribe</Button>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="copyright">
        <Container>
          <Row>
            <Col md={6} xs={12}>
              <small className="text-start text-secondary">
                © 2019 InterviewBuddyTM | InterviewBuddy is a trademark of U&U
                Connoisseurs India Private Limited
              </small>
            </Col>
            <Col md={3} xs={12}>
              <small className="text-start text-secondary">
                Privacy Policy T&C
              </small>
            </Col>
            <Col md={3} xs={12}>
              <img src="/assets/badge.png" alt="" />
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <h4 className="text-secondary pt-4 text-center">
          CAREFULLY CRAFTED WITH <AiFillHeart className="text-danger" /> ON THE EAST COAST OF INDIA FOR STUDENTS & JOB
          SEEKERS{" "}
        </h4>
      </Container>
    </main>
  );
};

export default Footer;
