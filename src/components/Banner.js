import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle, Justify, Link } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.png";
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(1 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Coop Student", "Automation Engineer", "Software Developer"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText)

        if(isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(300)
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}> 
                        <TrackVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <span className="tagline">Welcome to my Portfolio</span>
                                <h1>{`Hello, I'm Sabeeh a `}<span className="wrap">{text}</span></h1>
                                <p className="justified-text">I am a fourth-year Automation Software Engineering student with a solid foundation in engineering and programming. I bring strong technical expertise and problem-solving skills, supported by extensive experience with various programming languages and industrial technologies, and I am ready to tackle new challenges in the industry. </p>
                                <a href="#connect"><button onClick={() => console.log('connect')}>Let's Connect<ArrowRightCircle size={25}/></button></a>
                            </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}