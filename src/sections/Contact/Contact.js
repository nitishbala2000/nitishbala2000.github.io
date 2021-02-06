import React, { Component } from 'react';
import {Container} from "react-bootstrap";
import SectionTitle from '../../components/SectionTitle/SectionTitle';

class Contact extends Component {
    render() {
        return (
            <div className="SectionTwo" id="contact">
                <Container>
                    <SectionTitle title="Contact Me"/>

                    <p>
                        Feel free to get in touch using my email address <strong>nitishbala2000@gmail.com</strong> or by clicking the "mail" icon
                        in the footer below. I'm always happy to discuss new ideas, opportunities, or simply connect. Whether you have a question or just want to say hi, 
                        feel free to give me a shout!
                    </p>
                </Container>
                
            </div>
        );
    }
}

export default Contact