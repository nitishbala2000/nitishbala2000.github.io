import classes from './Footer.module.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


const Footer = () => {

   
    const linkedInIcon = <FontAwesomeIcon icon={faLinkedinIn}/>;
    const githubIcon = <FontAwesomeIcon icon={faGithub}/>;
    const mailIcon = <FontAwesomeIcon icon={faEnvelope}/>;

    return (
        <footer className={classes.Footer}>

            <div className={classes.ButtonDiv}>
                <a href="https://www.linkedin.com/in/nitish-bala-83a3701b4/">{linkedInIcon}</a>
                <a href="https://github.com/nitishbala2000">{githubIcon}</a>
                <a href="mailto:nitishbala2000@gmail.com">{mailIcon}</a>
            </div>

            <p className="text-muted">&copy;Nitish Bala 2015</p>

        </footer>
            
    );
};

export default Footer;