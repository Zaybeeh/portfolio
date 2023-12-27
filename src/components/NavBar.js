import { useEffect, useState } from "react";
import {Navbar, Container, Nav} from 'react-bootstrap';
import logo from '../assets/img/logo.png';
import linkedin from '../assets/img/linkedin.png';
import github from '../assets/img/github.svg';
import facebook from '../assets/img/facebook.png';
import twitter from '../assets/img/twitter.png';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onscroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand='lg' className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" className="logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a target="_blank" href="https://www.linkedin.com/in/sabeeh-t-a20588130/"><img src={linkedin} alt="LinkedIn"/></a>
                            <a target="_blank" href="https://github.com/Zaybeeh"><img src={github} alt="GitHub"/></a>
                            <a target="_blank" href="https://www.facebook.com/sabeeh.tahir.5/"><img src={facebook} alt="FaceBook"/></a>
                            <a target="_blank" href="https://twitter.com/sabeeh7555"><img src={twitter} alt="X"/></a>
                        </div>
                        <a href="#connect" ><button className="vvd" href="#connect" onClick={() => console.log('connect')}><span>Let's Connect</span></button></a>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
