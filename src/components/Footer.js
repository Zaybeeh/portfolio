import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/logo.png"
import linkedin from '../assets/img/linkedin.png';
import github from '../assets/img/github.svg';
import facebook from '../assets/img/facebook.png';
import twitter from '../assets/img/twitter.png';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                        <a href="#home"><img src={logo} alt="logo" className="footer-logo"/></a>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end social-right">
                        <div className="social-icon">
                            <a target="_blank" href="https://www.linkedin.com/in/sabeeh-t-a20588130/"><img src={linkedin} alt="LinkedIn"/></a>
                            <a target="_blank" href="https://github.com/Zaybeeh"><img src={github} alt="GitHub"/></a>
                            <a target="_blank" href="https://www.facebook.com/sabeeh.tahir.5/"><img src={facebook} alt="FaceBook"/></a>
                            <a target="_blank" href="https://twitter.com/sabeeh7555"><img src={twitter} alt="X"/></a>
                        </div>
                        <p>CopyRight 2023. All Rights Reserved by Sabeeh Tahir</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
