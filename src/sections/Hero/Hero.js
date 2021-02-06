import React, { Component } from 'react';
import classes from "./Hero.module.css";
import {Button} from "react-bootstrap";

class Hero extends Component {
    render() {
        return (
            <div className={classes.Hero}>
                <div className={classes.HeroCircle}>
                    <h1 class="display-4 white-text text-center">Hi, I'm Nitish</h1>
                    <p class="lead white-text text-muted text-center">20 year old developer</p>

                    <p class="lead text-center">
                        <Button variant="info" as="a" href="#about">Learn More</Button>
                    </p>
                </div>
            </div>
        );
    }
}

export default Hero;