import classes from './About.module.css';
import React from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import personalPic from "../../assets/personalPic.jpg";

const About = () => {
    return (
        <div className="SectionOne" id="about">
          
            <Container>

            <SectionTitle title="About Me" />
                <Row>
                    <Col lg={6} sm={12}>

                        <p>
                            I'm a <strong>third year undergraduate</strong> studying Computer Science at <strong>Cambridge University</strong>. My interests include full stack web development,
                            deep learning and cloud computing, but I tend to enjoy general programming, having solved hundreds of challenges
                            several coding sites such as <a href="https://projecteuler.net/">ProjectEuler</a>, <a href="https://www.codeabbey.com/">CodeAbbey</a> and
                            <a href="https://www.hackerrank.com/">HackerRank</a>. Outside of Academia, I enjoy playing music, raquet sports and cooking. I am also
                            the webmaster of <a href="https://kalyaniderby.com/">kalyaniderby.com</a>, an Indian clothing online store based in Derby, UK
                        </p>

                        <p>
                            My current skillset includes, but is not limited to:
                            <ul>
                                <li>Python, including back-end development with Flask</li>
                                <li>JavaScript, including front end frameworks and TypeScript</li>
                                <li>Java</li>
                                <li>PHP</li>
                                <li>Visual Basic</li>
                            </ul>

                            However, like any good software engineer, I am pretty much stack agnostic and have a strong  willingness
                            to learn new technologies
                        </p>
                    </Col>

                    <Col lg={6} sm={12} className={classes.ImageWrapper}>
                        <Image src={personalPic} roundedCircle height={200} width={200}/>
                    </Col>

                </Row>
           


            </Container>
        </div>
    );
};

export default About;