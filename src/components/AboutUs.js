import React from 'react';

const AboutUs = (props) => {
    return (
        <div> 
            <h1>This is About US {props.match.params.ename}</h1>
        </div>
    );
};

export default AboutUs;