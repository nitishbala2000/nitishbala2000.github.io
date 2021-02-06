import React from "react";
import classes from "./FadeInSection.module.css";


function FadeInSection(props) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();

    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => (
            entries.forEach(entry => {
                if (!isVisible && entry.isIntersecting) {
                    setVisible(true);
                }
            }
        )));


        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
    }, []);


    let cls;

    switch (props.direction) {
        case "left" : {
            cls = [classes.Left];
            break;
        }
        case "right" : {
            cls = [classes.Right];
            break;
        }
        case "up" : {
            cls = [classes.Up];
            break;
        }
    }
    
    if (isVisible) {
        cls.push(classes.IsVisible);
    }

    return (
        <div className={cls.join(" ")} ref={domRef}>
            {props.children}
        </div>
    );
}

export default FadeInSection;