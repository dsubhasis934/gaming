import React from 'react';
import background from './background-video.mp4';
export default function About() {
    return (
        <>
            <div className="about">
                <video autoPlay muted loop id="myVideo" width="100%" height="100%">
                    <source src={background} type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>
                <div className="container">
                    <h1 className="about-header">About Me</h1>
                    <p className="about-body">My name is Subhasis Das and I'm a professional Gammmer</p>
                </div>

            </div>

        </>
    )
}
