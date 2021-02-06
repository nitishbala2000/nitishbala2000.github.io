import React from 'react';
import { Container } from 'react-bootstrap';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import classes from "./Experience.module.css";
import S3Image from "../../assets/amazon-s3.jpg";
import OntologyImage from "../../assets/ontology.jpg";
import FadeInSection from '../../components/FadeInSection/FadeInSection';

const Experience = () => {
    return (
        <div className="SectionTwo" id="experience">
            <Container>
                <SectionTitle title="Work Experience"/>
                
                <FadeInSection direction="left">

              
                <div className={classes.ProjectDiv}>
                    <img src={S3Image}/>

                    <div>
                        <h2>Amazon Web Services (Intern)</h2>
                        <p className="text-muted">July - Sep 2020</p>

                        <p>
                            Worked on a new feature for Amazon S3 called Banner, which allows users to transparently fetch transformed versions of files stored in S3, 
                            with transformations specified by the user using AWS Lambda
                        </p>

                        <ul>
                            <li>
                                Created a sample Serverless Application demonstrating the use of Banner for file decompression, which is available on the AWS
                                Serverless Repository for all customers to deploy to their accounts in one click
                            </li>
                            <li>
                                Worked with a variety of AWS services including S3, Lambda, CloudFormation, SAM, CodePipelines in order for the application to be
                                deployed and maintained
                            </li>
                            <li>
                                Carried out performance benchmarking of Banner and the application
                            </li>
                            <li>Completed a security review and an open source review to accelerate the release of the application</li>
                        </ul>

                        <p>I received a return offer to work for AWS in summer 2021 after this internship</p>

                    </div>
                </div>
                </FadeInSection>

                <FadeInSection direction="right">

                <div className={classes.ProjectDiv}>
                    <img src={OntologyImage}/>

                    <div>
                        <h2>DSTL (Intern)</h2>
                        <p className="text-muted">July - Sep 2019</p>
                        <p>
                            Researched, implemented and benchmarked various machine learning approaches to node classification for Ontoligies, aka Knowledge Graphs, with an emphasis on scalable, memory-efficient solutions
                        </p>

                        <ul>
                            <li>
                                Researched two machine-learning algorithms - AmpliGraph and Graph Neural Networks, and wrote code using them for classification on
                                a toy given Ontology, achieving 90%+ accuracies
                            </li>
                            <li>
                                Focussed on learning using <strong>subgraphs</strong>, so the entire Ontology does not need to be loaded into memory. This was especially
                                useful for DSTL who work with Ontologies that are several gigabytes in size
                            </li>
                            <li>
                                Wrote a report describing the algorithms as well as comparing the performance of each
                            </li>
                        </ul>
                    </div>
                </div>
                </FadeInSection>
 
            </Container>
        </div>
    );
};

export default Experience;