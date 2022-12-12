import React from 'react';
//import '../App.css';
import './Video.css';
import { Button } from './Button';

function Video() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-1.mp4' autoPlay loop muted />
            <h1>IN LOVE WITH THE FUTURE</h1>
            <p>And you?</p>
            <div className='hero-btn'>
                <Button
                    className='btn'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    <a href="https://www.youtube.com/watch?v=UIKmSQqp8wY&t=19s" >Click for more information</a>
                </Button>
            </div>
        </div>
    );
}

export default Video;