import { Col, Container, Row } from "react-bootstrap";
import { useState, useRef } from "react";
import contactImg from "../assets/img/contact-img.svg";
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form = useRef();
    const [buttonText, setButtonText] = useState('Send');

    const sendEmail = (e) => {
        e.preventDefault();
        setButtonText('Sending...');
    
        emailjs.sendForm('service_p5gpvvt', 'template_vl2isdl', form.current, 'hPYdWcL2daZToF_yR')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Message Sent Successfully!');
              setButtonText("Send");
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Us"/>
                    </Col>
                    <Col md={6}>
                        <h2>Let's Get in Touch</h2>
                        <form onSubmit={sendEmail} ref={form}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" name="first" placeholder="First Name" />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" name="last" placeholder="Last Name" />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" name="user_email" placeholder="Email Address"  />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" name="user_number" placeholder="Phone No."  />
                                </Col>
                                <Col className="px-1">
                                    <textarea row="6" name="message" placeholder="Message" />
                                </Col>
                                    <button type="submit" value='Send'><span>{buttonText}</span></button>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}