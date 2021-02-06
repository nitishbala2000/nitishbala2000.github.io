import React from 'react';
import { Container, Row, Col, Tab, Nav , ListGroup} from 'react-bootstrap';
import FadeInSection from '../../components/FadeInSection/FadeInSection';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import classes from "./Projects.module.css";

const Projects = () => {
    return (
        <div className="SectionOne" id="projects">
            <Container>
                <SectionTitle title="Projects" />

                <FadeInSection direction="up">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={3}>
                            
                                <ListGroup>
                                    <ListGroup.Item action eventKey="first">
                                        VIIDA
                                    </ListGroup.Item>
                                    <ListGroup.Item action eventKey="second">
                                        CUCL Ticking System
                                    </ListGroup.Item>
                                    <ListGroup.Item action eventKey="third">
                                        Onboard Buddy
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>

                            <Col sm={9} className={classes.ContentCol}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <p>VIIDA stands for <strong>Visual Interface for Integrative Data Analysis</strong>, and was a web application to allow clinical oncologists
                                        to easily perform data analysis and machine learning with no knowledge of programming</p>

                                        <ul>
                                            <li>
                                                Oncologists can upload a dataset for either breast cancer subtyping or survival analysis, and can visualise it and view summary plots in a "dashboard"
                                            </li>
                                            <li>
                                                They can then train machine learning models to perform breast cancer subtyping or survival analysis, using state of the art machine learning algorithms
                                                for the domain as well as tune hyper-parameters
                                            </li>
                                            <li>
                                                They can then view plots visualise and interpret these models using novel visualisation methods, as well as use them for predictions
                                            </li>
                                        </ul>

                                        <p>I managed to work with actual clinical oncologists for both requirements gathering and evaluation. The stack used was <strong>React.js</strong> 
                                        {" "} for the front end including redux and redux-thunk, and <strong>Flask</strong> for the back end
                                        </p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <p>The CUCL Ticking System was a web application written for the Cambridge University Computer Lab to ease the administration of assignments. Working in a group of 6, our application could:</p>
                                        <ul>
                                            <li>
                                                Authenticate users using our universities authentication service, Raven
                                            </li>
                                            <li>
                                                Determine the logged in users role, e.g. student, admin member, professor, teaching assistant, and take them to their required page
                                            </li>
                                            <li>
                                                Allow students to view the results of their assignments and deadlines for current ones, as well as sign up for email notifications for upcoming deadlines
                                            </li>
                                            <li>
                                                Allow various other members of staff to form various other administrative tasks e.g. create assignments, assign deadlie extensions, grade students,
                                                export results as a CSV
                                            </li>
                                        </ul>

                                        <p>The stack used was the <strong>LAMP</strong> stack - Linux, Apache, MySQL and PHP</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <p>
                                            Onboard Buddy is an <strong>Alexa Skill</strong> that acts as a comprehensive smart flashcard tool for incoming Amazon interns
                                            to help them learn about Cloud Computing to give them a solid foundational knowledge before their internship.
                                        </p>
                                        <ul>
                                            <li>
                                                The first time you open the skill, you get an email of the list of all question and answers (using Yagmail)
                                            </li>
                                            <li>
                                                We implemented the <strong>Supermemo algorithm</strong> which automatically schedules flashcards to maximise retention. Besides questions and answers, it supports hints and explanations, and looking up the answers to specific flashcards all by talking to Alexa
                                            </li>
                                            <li>
                                                Lastly, to determine whether your answer is correct, we use <strong>cosine similarity</strong> to measure the similarity between the two answers.
                                            </li>
                                        </ul>

                                        <p>The project was developed in <strong>Python</strong> using the <strong>Alexa Skills Kit</strong></p>
                               
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </FadeInSection>
            </Container>


        </div>
    );
};

export default Projects;