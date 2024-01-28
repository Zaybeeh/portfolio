import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { Document, Page } from 'react-pdf';

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';

import projImg1 from "../assets/img/Chatbot.gif";
import projImg2 from "../assets/img/GGI.gif";
import projImg3 from "../assets/img/CAD.gif";
import projImg4 from "../assets/img/Library.gif";
import resume from "../assets/documents/Sabeeh_Tahir_Resume.pdf"

export const Projects = () => {
    const projects = [
        {
            title: "React Chatbot",
            description: "Develop an automated chatbot to respond to queries.",
            imgUrl: projImg1,
        },
        {
            title: "Website Development",
            description: "Developed a responsive website that provides information and can engage customers to book an appointment.",
            imgUrl: projImg2,
        },
        {
            title: "CAD Assembly",
            description: "Have developed great CAD skills and can create anything from sketches to assembly builds.",
            imgUrl: projImg3,
        },
        {
            title: "C++ Library Management System",
            description: "A C++ programmed system for libraries to sign in, log books in and out, date signed out, etc.",
            imgUrl: projImg4,
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>These are the things I've most recently worked on and things to provide a better understanding on how far I've come so far.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Latest</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Resume</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Inspiration</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                   <ProjectCard
                                                   key={index}
                                                   {...project}
                                                   />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        <div className="res">
                                            <h2 className="heading">Resume</h2>
                                            <center><iframe src={resume} width="900" height="500" seamless></iframe></center>
                                        </div>
                                        <div className="align-items-center text-center">
                                        <a href={resume} download><button className="download-btn"><span>Download</span></button></a>
                                        </div>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                        <div className="align-items-center text-center">
                                        <p>
                                            This was a project I did to explain my inspiration for my chosen field. It does a great job explaining why I am who I am today.
                                        </p>
                                        <iframe
                                            className="project-inspiration"
                                            src="https://www.youtube.com/embed/kqd-1JD2_6Q?si=9cRn7eYj2CrwYPuI"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            title="Embedded youtube"
                                        />
                                        </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} />
        </section>
    )
}